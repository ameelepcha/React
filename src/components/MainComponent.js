import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './dishDetail';
// import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Contact from './ContactComponent';
import About from './AboutComponent';
// import { COMMENTS } from '../shared/comments';
// import { LEADERS } from '../shared/leaders';
// import { PROMOTIONS } from '../shared/promotions';
import { connect } from 'react-redux';

const mapStateToProps = state => {          {/*this will map redux store state into props that will be available to my component */}
      return {
        //this dishes will be available from my redux store state as props
        dishes: state.dishes,                
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }  
}

class Main extends Component{

    constructor(props) {
      super(props);

    //   this.state = {
        // dishes: DISHES,
        // comments: COMMENTS,
        // promotions: PROMOTIONS,
        // leaders: LEADERS
        // selectedDish: null
    //   };
    }

    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId });
    // }

    render() {

        // declaring a function component explicitly
        const HomePage= () => {
            return(
                // <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} 
                // promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                // leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                // />
                <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]} 
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({match}) => {
            return (
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10)) [0]}
                comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10)) }
                />
            );
        }

        const AboutUsPage = () => {
            return(
                <About 
                    leaders={this.props.leaders}
                />
            );
        };

        return (
            <div>
                {/* <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/"> Ristorante Con Fusion </NavbarBrand>
                    </div>
                </Navbar> */}
                <Header />
                {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/> */}
                {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />              {/* declaring a function component implicitly/inline */}
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route path="/contactus" component={Contact} />
                    <Route path="/aboutus" component={AboutUsPage} />
                    {/* <Route path="/aboutus" component={() => <About leaders={this.state.leaders} />} /> */}
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps)(Main));
