import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import Menu from './components/MenuComponent';
// import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component{

    // constructor(props) {
    //   super(props);

    //   this.state = {
    //     dishes: DISHES
    //   };
    // }

    render() {
      return (
        // <div className="App">
        <BrowserRouter>
          {/* <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/"> Ristorante Con Fusion </NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes} /> */}
            <div>
              <Main />
            </div>
          </BrowserRouter>
        // </div>
    );
  }
}
export default App;
