import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import Menu from './components/MenuComponent';
// import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// this provider allows us to configure my react application so that my redux store is available to all the other components in my app
import { Provider } from 'react-redux'; 
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

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
        <Provider store={store}>
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
          </Provider>
        // </div>
    );
  }
}
export default App;
