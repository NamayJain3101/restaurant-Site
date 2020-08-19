import React from 'react'
import { RestaurantConsumer } from '../../Context/Context'
import styled from 'styled-components';

const MenuCategories = () => {
    return (
        <RestaurantConsumer>
            {value => {
                const {storedItems, setCategory, category} = value;
                let categories = new Set();
                categories.add('all');
                for(let category in storedItems) {
                    categories.add(storedItems[category]['category'])
                }
                categories = [...categories];
                return(
                    <CategoryWrapper>
                        <nav className={""}>
                            {categories.map((item, index) => {
                                return <section key={index} onClick={() => setCategory(item)} className={category === item ? "active" : ""}>{item}</section>
                            })}
                        </nav>
                    </CategoryWrapper>
                )
            }}
        </RestaurantConsumer>
    )
}

const CategoryWrapper = styled.nav`
    position: -webkit-sticky;
    position: sticky;
    top: 100px;
    z-index: 100;
    nav {
        border-top: 2px solid yellow;
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
        background: black;
        color: lime;
        overflow: auto;
        z-index: 200;
    }
    section {
        text-align: center;
        text-transform: uppercase;
        display: flex;
        font-size: 1rem;
        font-weight: bold;
        align-items: center;
        justify-content: center;
        letter-spacing: 3px;
        padding: 10px !important;
        margin: 0;
        border-right: 1px solid yellow;
        border-bottom: 3px solid transparent;
        cursor: pointer;
    }
    .sticky {
        position: fixed;
        top: 115px;
    }
    section:hover {
        background: lime;
        color: black;
    }
    section.active {
        border-bottom: 3px solid lime;
    }
    @media(max-width: 767px) {
        position: -webkit-sticky;
        position: sticky;
        top: 110px;
        z-index: 100;
        nav {
            display: flex;
            flex-flow: row;
            justify-content: center;
        }
        section {
            padding: 10px 5px !important;
            font-weight: normal;
        }
    }
`

export default MenuCategories
