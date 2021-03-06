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
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActtionCreators';
import { actions } from 'react-redux-form';

{/*this will map redux store state into props that will be available to my component */}
const mapStateToProps = state => {
      return {
        //this dishes will be available from my redux store state as props
        dishes: state.dishes,                
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }  
}

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    fetchComments: () => {dispatch(fetchComments())},
    fetchPromos: () => {dispatch(fetchPromos())}
});

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

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
    }

    render() {

        // declaring a function component explicitly
        const HomePage= () => {
            return(
                // <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} 
                // promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                // leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                // />
                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} 
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMess}
                promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                promosLoading={this.props.promotions.isLoading}
                promosErrMess={this.props.promotions.errMess}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({match}) => {
            return (
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10)) [0]}
                isLoading={this.props.dishes.isLoading}
                errMess={this.props.dishes.errMess}
                comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10)) }
                commentsErrMess={this.props.comments.errMess}
                addComment={this.props.addComment}
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
                    <Route path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} /> } />
                    <Route path="/aboutus" component={AboutUsPage} />
                    {/* <Route path="/aboutus" component={() => <About leaders={this.state.leaders} />} /> */}
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
