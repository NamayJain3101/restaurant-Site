import React, { Component } from 'react'
import {client} from './Contentful'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

        category: 'all',

        cart: [],
        cartItems: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
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
            loading: false,

            cart: this.getStorageCart()
        }, () => this.addTotals())
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

    getStorageCart = () => {
        return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] ;
    }

    syncStorage = () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
    };

    getTotals = () => {
        let subTotal = 0;
        let cartItems = 0;
        this.state.cart.forEach(item => {
            subTotal += item.total;
            cartItems += item.count;
        });

        subTotal = parseFloat(subTotal.toFixed(2));
        let tax = subTotal * 0.05;
        tax = parseFloat(tax.toFixed(2));
        let total = subTotal + tax;
        total = parseFloat(total.toFixed(2));
        return {
            cartItems,
            subTotal,
            tax,
            total
        };
    }

    addTotals = () => {
        const totals = this.getTotals();
        this.setState({
            cartItems: totals.cartItems,
            cartSubTotal: totals.subTotal,
            cartTax: totals.tax,
            cartTotal: totals.total
        });
    };

    addToCart = (id) => {
        let tempCart = [...this.state.cart];
        let tempFood = [...this.state.storedItems];
        let tempItem = tempCart.find(item => item.id === id);
        if(!tempItem) {
            tempItem = tempFood.find(item => item.id === id);
            let total = tempItem.price;
            let cartItem = {...tempItem, count: 1, total};
            tempCart = [...tempCart, cartItem];
        }
        else {
            tempItem.count++;
            tempItem.total = tempItem.price * tempItem.count;
            tempItem.total = parseFloat(tempItem.total.toFixed(2));
        }
        this.setState({
            cart: tempCart
        }, () => {
            this.addTotals();
            this.syncStorage();
            toast(tempItem.foodName);
        })
    }

    
    increment = (id) => {
        let tempCart = [...this.state.cart];
        const cartItem = tempCart.find(item => item.id === id);
        cartItem.count++;
        cartItem.total = cartItem.count * cartItem.price;
        cartItem.total = parseFloat(cartItem.total.toFixed(2));
        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        },
        () => {
            this.addTotals();
            this.syncStorage();
        });
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const cartItem = tempCart.find(item => item.id === id);
        cartItem.count--;
        if(cartItem.count === 0) {
            this.removeItem(id);
        }
        else{
            cartItem.total = cartItem.count * cartItem.price;
            cartItem.total = parseFloat(cartItem.total.toFixed(2));
            this.setState(() => {
                return {
                    cart: [...tempCart]
                }
            },
            () => {
                this.addTotals();
                this.syncStorage();
            });
        }
    }

    removeItem = (id) => {
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        this.setState({
            cart: [...tempCart]
        },() => {
            this.addTotals();
            this.syncStorage();
        })
    }

    clearCart = () => {
        this.setState({
            cart: []
        },() => {
            this.addTotals();
            this.syncStorage();
        })
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
                setCategory: this.setCategory,
                addToCart: this.addToCart,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </RestaurantContext.Provider>
        )
    }
}

const RestaurantConsumer = RestaurantContext.Consumer;

export { RestaurantProvider, RestaurantConsumer }
