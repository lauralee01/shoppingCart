import React, { Component }  from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchCartItems} from '../../store/actions/index';
import {Nav} from './Style'

class Navbar extends Component {
    componentDidMount() {
        this.props.fetchCartItems();
    }
    render () {
        return(
            <Nav className="navbar justify-content-between mb-5">
                <Link to="/" className="brand-logo text-white font-weight-bold">Shopping</Link>
                        
                <ul className="list-unstyled d-flex mb-0">
                    <li className="mr-4"><Link to="/" className="text-white font-weight-bold">Shop</Link></li>
                    <li className="mr-4"><Link to="/cart" className="text-white font-weight-bold">My cart</Link></li>
                    <li className="mr-4 position-relative">
                        <Link to="/cart" className="text-white font-weight-bold">
                            <i className="material-icons">shopping_cart</i>
                            {this.props.items && this.props.items.length > 0 ? <span className="counter">{this.props.items.length}</span> : null}
                        </Link></li>
                </ul>
            </Nav>
                
        )
    }
   
}
function mapStateToProps(state) {
    return {
        items: state.cart
    }
}


export default connect(
    mapStateToProps,
    {fetchCartItems}
    )
(Navbar )
