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
                                return <div key={index} onClick={() => setCategory(item)} className={category === item ? "active" : ""}>{item}</div>
                            })}
                        </nav>
                    </CategoryWrapper>
                )
            }}
        </RestaurantConsumer>
    )
}

const CategoryWrapper = styled.nav`
    nav {
        border-top: 2px solid yellow;
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: repeat(auto-fit, minmax(10%, 1fr));
        background: black;
        color: lime;
        overflow: auto;
        z-index: 200;
        top: 115px;
    }
    div {
        text-align: center;
        text-transform: capitalize;
        display: flex;
        font-size: 1rem;
        align-items: center;
        justify-content: center;
        letter-spacing: 3px;
        padding: 5px 8px;
        margin: 0;
        border-bottom: 3px solid transparent;
        cursor: pointer;
    }
    .sticky {
        position: fixed;
        top: 115px;
    }
    div:hover {
        background: lime;
        color: black;
    }
    div.active {
        border-bottom: 3px solid lime;
        font-weight: bold;
    }
`

export default MenuCategories
