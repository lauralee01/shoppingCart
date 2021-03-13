import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    fetchCartItems,
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity,
 } from '../../store/actions/index';
import Spinner from '../Spinner';
import {Bar, Cover} from './Style';

class Cart extends Component {
    constructor() {
        super() 
        this.state = {
            shipping: 6000,
            addShipping: false
        }
    }
    componentDidMount() {
        this.props.fetchCartItems();
    }

    total = () => {
        return this.props.items.reduce((total, item) => {
            return total + (item.price * item.quantity)
        }, 0)
    }

    handleChecked = (e) => {
        if(e.target.checked){
            this.setState({
                addShipping: true
            })
        }
        else{
            this.setState({
                addShipping: false
            })
        }
    }

    render() {
        const {items} = this.props;
        const shippingFee = this.total() + 6000
        return (
            <div className="col-md-8 offset-md-2">
                <Bar>
                {items && items.map((item, i) => (
                    <Cover className="card" key={i}>
                        <img src={item.img} alt="Denim Jeans" />
                        <h3>{item.title}</h3>
                        <p className="price mb-0 mr-2">{item.price}</p>

                        <div className="d-flex align-items-center justify-content-center">
                            <p className="mb-0 mr-2">Quantity: {item.quantity}</p>
                            <div className="add-remove">
                                <i className="material-icons" onClick={() => this.props.increaseQuantity(item.id)}>arrow_drop_up</i>
                                <i className="material-icons" onClick={() => this.props.decreaseQuantity(item.id)}>arrow_drop_down</i>
                            </div>
                        </div>
                          
                        <p>Total: {item.quantity * item.price}</p>
                        <p>{item.desc}</p>
                        <button onClick={() => this.props.removeFromCart(item.id)}>
                            Remove from Cart
                        </button>
                  </Cover>
                ))}
                </Bar>
                <div className="text-center mt-3">
                    <h5>You have ordered: {items.length} items</h5>
                    <label>
                        <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
                        <span>Shipping(+6000$)</span>
                    </label>
                    <p>Total amount of items bought: <span className="font-weight-bold">
                        {this.state.addShipping ? shippingFee : this.total()}
                        </span></p>
                  
                </div> 
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.cart,
        loading: state.loading
    }
}


export default connect(
    mapStateToProps, 
    {
        fetchCartItems, 
        removeFromCart, 
        increaseQuantity, 
        decreaseQuantity,
    }
    )
(Cart)
