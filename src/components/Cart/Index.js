import React, { useState, useEffect } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import {
    fetchCartItems,
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity,
 } from '../../store/actions/index';

import {Bar, Cover} from './Style';

const Cart = () => {
  const dispatch = useDispatch()

  const { items} = useSelector(
    (state) => ({
      items: state.cart
    }),
    shallowEqual
  )

  const [shippingFee] = useState(6000)
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    dispatch(fetchCartItems())
  }, [dispatch])

  const total = () => {
    return items.reduce((total, item) => {
      return total + (item.price * item.quantity)
    }, 0)
  }

  const toggleChecked = () => setChecked(value => !value);

  const totalPlusShipping = total() + shippingFee

  return (
    <div className="col-md-8 offset-md-2">
      <Bar>
        {items.map((item, i) => (
            <Cover className="card" key={item.id}>
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
                <p className="price mb-0 mr-2">{item.price}</p>

                <div className="d-flex align-items-center justify-content-center">
                    <p className="mb-0 mr-2">Quantity: {item.quantity}</p>
                    <div className="add-remove">
                        <i 
                            className="material-icons"
                            onClick={() => dispatch(increaseQuantity(item.id))}>arrow_drop_up
                        </i>
                        {item.quantity > 1 && <i className="material-icons" onClick={() => dispatch(decreaseQuantity(item.id))}>arrow_drop_down</i>}
                    </div>
                </div>
                    
                <p>Total: {item.quantity * item.price}</p>
                <p>{item.desc}</p>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove from Cart
                </button>
            </Cover>
        ))}
      </Bar>
      <div className="text-center mt-3">
        <h5>You have ordered: {items.length} items</h5>
        <label>
            <input type="checkbox" checked={checked} onChange={toggleChecked} />
            <span>Shipping (+{shippingFee})</span>
        </label>
        <p>Total amount of items bought: <span className="font-weight-bold">
            {checked ? totalPlusShipping : total()}
            </span>
        </p>
        
      </div> 
    </div>
  )
}

Cart.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
  dispatch: PropTypes.func,
}

export default Cart
