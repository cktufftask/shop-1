
import React from "react";
import { Navbar } from "react-bootstrap";
import Search from '../components/Search/Search';
import { Link, BrowserRouter, Redirect, useHistory } from "react-router-dom";
import { withRouter } from 'react-router';

const Header = (props) => {

    const clickHandler = () => {
        let history = useHistory();
        history.push('/cart');
        //return <Redirect to="/cart"/>
    }
    return (
        <Navbar className="navbar navbar-dark bg-primary justify-content-between">
            <div className="col-6">{"SHOPPING CART"}</div>
            <div className="col-6 text-right">

                {/* <i class="mycart fa-cart-plus pl-5" aria-hidden="true" onClick={()=>clickHandler()}></i> */}

                <span>
                    <BrowserRouter>
                        <Link to={'/cart'}>
                            <i class="mycart fa-cart-plus pl-5" aria-hidden="true" ></i>
                        </Link>
                    </BrowserRouter>
                </span>
                <Search />



            </div>

        </Navbar >
    );
};


export default Header;
