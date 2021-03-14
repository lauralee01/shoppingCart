import React, { useEffect } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { 
    getData, 
    addToCart 
} from '../../store/actions/index';

import {Bar, Cover} from './Style';

const Catalogue = () => {
  const dispatch = useDispatch()

  const { items, cart } = useSelector(
    (state) => ({
        items: state.items,
        cart: state.cart
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  const addItemsToCart = (item) => {
    if(cart.find(cartItem => cartItem.id === item.id)) {
        alert('Item already exists in cart')
    }
    else {
        dispatch(addToCart(item))
    }
  }

  return (
    <div className="col-md-8 offset-md-2">
        <Bar>
            {items.map((item, i) => (
                <Cover className="card" key={item.id}>
                    <img src={item.img} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p className="price">{item.price}</p>
                    <p>{item.desc}</p>
                    <button onClick={() => addItemsToCart(item)}>
                        Add to Cart
                        </button>
            </Cover>
            ))}
        </Bar>
    </div>
  )
}

Catalogue.propTypes = {
    items: PropTypes.array,
    cart: PropTypes.array,
    loading: PropTypes.bool,
    dispatch: PropTypes.func,
}
  
export default Catalogue
