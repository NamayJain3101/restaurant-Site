import React, { Component } from 'react'

const RestaurantContext = React.createContext();

class RestaurantProvider extends Component {

    state = {
        navBarOpen: false
    }

    toggleNavBar = () => {
        this.setState({ navBarOpen: !this.state.navBarOpen });
    }

    render() {
        return (
            <RestaurantContext.Provider value={{
                ...this.state,
                toggleNavBar: this.toggleNavBar
            }}>
                {this.props.children}
            </RestaurantContext.Provider>
        )
    }
}

const RestaurantConsumer = RestaurantContext.Consumer;

export { RestaurantProvider, RestaurantConsumer }
