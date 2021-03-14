import React, {useEffect } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { fetchCartItems } from '../../store/actions/index';
import { Nav } from './Style'

const Navbar = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCartItems())
    }, [dispatch])

    const { items } = useSelector(
        (state) => ({
            items: state.cart,
        }),
        shallowEqual
      )

    
    return(
        <Nav className="navbar justify-content-between mb-5">
            <Link to="/" className="brand-logo text-white font-weight-bold">Shopping</Link>
                    
            <ul className="list-unstyled d-flex mb-0">
                <li className="mr-4"><Link to="/" className="text-white font-weight-bold">Shop</Link></li>
                <li className="mr-4"><Link to="/cart" className="text-white font-weight-bold">My cart</Link></li>
                <li className="mr-4 position-relative">
                    <Link to="/cart" className="text-white font-weight-bold">
                        <i className="material-icons">shopping_cart</i>
                        {items && items.length > 0 ? <span className="counter">{items.length}</span> : null}
                    </Link></li>
            </ul>
        </Nav>
            
    )
  
   
}

Navbar.propTypes = {
    items: PropTypes.array,
}
  
export default Navbar
