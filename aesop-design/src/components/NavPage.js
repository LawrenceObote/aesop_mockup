import React, { Component } from 'react'

export class NavPage extends Component {
    render() {
        return (
            <div className="navPage">
                <div>
                
                    <h3 id="compBar">Complimentary standard shipping on all orders + </h3>
                </div>
                <div id="navList">
                <nav>
                    <ul id="nav">
                        <li>Shop</li>
                        <li>Read</li>
                        <li>Store</li>
                        <li>Search</li>  
                    </ul>
                    <ul>
                        <li id="right">Login</li>
                    </ul>  
                </nav>
                </div>
                <div id="aesop">
                    <h2 className="spacing">Aesop</h2>
                    <h2 className="spacing">Forumulations for skin, hair, home and body</h2>
                </div>
                <div id="sensory">
                    <p className="spacingP">Created with sensory pleasures in mind</p>
                </div>
                

            </div>
        )
    }
}

export default NavPage;
