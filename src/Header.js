import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider'
import { auth } from './firebase';



function Header() {



    const [{ basket, user }] = useStateValue();
    var name = user?.email.substring(0, user?.email.lastIndexOf("@"));
    var finalName = name?.charAt(0).toUpperCase() + name?.slice(1);


    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            <Link to="/">
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav" >
                <Link to={!user && "/login"} className="header_link">
                    <div onClick={login} className="header_option">
                        <span className="header_lineOne">Hello, {user?.email ? finalName : ''}</span>
                        <span className="header_lineTwo">{user ? 'Sign Out' : `Sign In`}</span>
                    </div>
                </Link>

                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_lineOne">Return</span>
                        <span className="header_lineTwo">Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_lineOne">Your</span>
                        <span className="header_lineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_lineTwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </nav>
    )
}

export default Header
