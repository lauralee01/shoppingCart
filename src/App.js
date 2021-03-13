import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Catalogue from './components/Catalogue/Index'
import Cart from './components/Cart/Index'
import Navbar from './components/Navbar/Index'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Catalogue}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
             </div>
       </BrowserRouter>
     
    )
  }
}

