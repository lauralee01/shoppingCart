import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getData, addToCart } from '../../store/actions/index';
import Spinner from '../Spinner';
import {Bar, Cover} from './Style';

class Catalogue extends Component {
    componentDidMount() {
        this.props.getData();
    }

    addItemsToCart = (item) => {
        if(this.props.cart.find(cart => cart.id === item.id)) {
            alert('Item already exists in cart')
        }
        else {
            this.props.addToCart(item)
        }
    }
  
    render() {
        const {items, loading,} = this.props;
        return (
            <div className="col-md-8 offset-md-2">
                <Bar>
                    {items && items.map((item, i) => (
                        <Cover className="card" key={i}>
                            <img src={item.img} alt="Denim Jeans" />
                            <h3>{item.title}</h3>
                            <p className="price">{item.price}</p>
                            <p>{item.desc}</p>
                            <button onClick={() => this.addItemsToCart(item)}>
                                Add to Cart
                                </button>
                    </Cover>
                    ))}
                </Bar>
                
            </div>
           
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.items,
        cart: state.cart,
        loading: state.loading
    }
}


export default connect(
    mapStateToProps, 
    {getData, addToCart}
    )
(Catalogue )
