import React, { Component } from 'react'

const RestaurantContext = React.createContext();

class RestaurantProvider extends Component {

    state = {
        navBarOpen: false,
        lightboxOpen: false,
        lightboxIndex: 0
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

    render() {
        return (
            <RestaurantContext.Provider value={{
                ...this.state,
                toggleNavBar: this.toggleNavBar,
                closeNavbar: this.closeNavbar,
                openLightbox: this.openLightbox,
                closeLightbox: this.closeLightbox,
                changeLightboxIndex: this.changeLightboxIndex
            }}>
                {this.props.children}
            </RestaurantContext.Provider>
        )
    }
}

const RestaurantConsumer = RestaurantContext.Consumer;

export { RestaurantProvider, RestaurantConsumer }
