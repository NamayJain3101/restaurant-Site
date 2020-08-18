import React, { Component } from 'react'
import {client} from './Contentful'

const RestaurantContext = React.createContext();

class RestaurantProvider extends Component {

    state = {
        navBarOpen: false,
        lightboxOpen: false,
        lightboxIndex: 0,

        storedItems: [],
        filteredItems: [],
        featuredItems: [],
        loading: true,

        category: 'all'
    }

    componentDidMount() {
        client.getEntries({
            content_type: 'pestoRestaurant'
        })
        .then(response => this.getData(response.items))
        .catch(error => console.log(error));
    }

    getData = (foodItems) => {
        let storedItems = foodItems.map(item => {
            const id = item.sys.id;
            const image = item.fields.foodImage.fields.file.url;
            const food = {id, ...item.fields, image};
            return food;
        })
        let featuredItems = storedItems.filter(item => item.featured === true);
        this.setState({  
            storedItems,
            featuredItems,
            filteredItems: storedItems,
            loading: false
        })
    }

    toggleNavBar = () => {
        this.setState({ navBarOpen: !this.state.navBarOpen });
    }

    closeNavbar = () => {
        this.setState({ navBarOpen: false });
    }

    openLightbox = (index) => {
        this.setState({ lightboxOpen: true, lightboxIndex: index });
    }

    closeLightbox = () => {
        this.setState({ lightboxOpen: false });
    }

    changeLightboxIndex = (index) => {
        this.setState({ lightboxIndex: index })
    }

    setCategory = (category) => {
        this.setState({ 
            category: category 
        }, () => this.filterItem())
    }

    filterItem = () => {
        const {storedItems, category} = this.state;
        let tempItems = [...storedItems];
        if(category !== 'all') {
            tempItems = tempItems.filter(item => item.category === category)
        }
        this.setState({ filteredItems: tempItems })
    }

    render() {
        return (
            <RestaurantContext.Provider value={{
                ...this.state,
                toggleNavBar: this.toggleNavBar,
                closeNavbar: this.closeNavbar,
                openLightbox: this.openLightbox,
                closeLightbox: this.closeLightbox,
                changeLightboxIndex: this.changeLightboxIndex,
                setCategory: this.setCategory
            }}>
                {this.props.children}
            </RestaurantContext.Provider>
        )
    }
}

const RestaurantConsumer = RestaurantContext.Consumer;

export { RestaurantProvider, RestaurantConsumer }
