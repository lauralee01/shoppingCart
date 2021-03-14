import React from 'react'

import {
  BrowserRouter, 
  Route, 
  Switch
} from 'react-router-dom'

import Catalogue from './components/Catalogue/Index'
import Cart from './components/Cart/Index'
import Navbar from './components/Navbar/Index'

const App = () => {
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

export default App;
