// import React, { Component } from 'react';
import React from 'react';
// import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import DishDetail from './dishDetail';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderMenuItem({ dish, onClick }){
    return(
        // <Card onClick={() => onClick(dish.id)}>
        <Card>
            <Link to={`/menu/${dish.id}`} >
            <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle> {dish.name} </CardTitle>
            </CardImgOverlay>
            </Link>
        </Card>
    );
}
// class Menu extends Component {
    // constructor(props) {
        // super(props);
        // this.state = {
            // dishes: [               //javascript objects where object name=dishes
            //     {
            //         id: 0,
            //         name:'Uthappizza',
            //         image: 'assets/images/uthappizza.png',
            //         category: 'mains',
            //         label:'Hot',
            //         price:'4.99',
            //         description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
            //     },
            //     {
            //         id: 1,
            //         name:'Zucchipakoda',
            //         image: 'assets/images/zucchipakoda.png',
            //         category: 'appetizer',
            //         label:'',
            //         price:'1.99',
            //         description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
            //     },
            //     {
            //         id: 2,
            //         name:'Vadonut',
            //         image: 'assets/images/vadonut.png',
            //         category: 'appetizer',
            //         label:'New',
            //         price:'1.99',
            //         description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        
            //     },
            //     {
            //         id: 3,
            //         name:'ElaiCheese Cake',
            //         image: 'assets/images/elaicheesecake.png',
            //         category: 'dessert',
            //         label:'',
            //         price:'2.99',
            //         description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        
            //     }
            // ]

            // ALTERNATIVE :

            // selectedDish: null
        // };
    // }

    // onDishSelect(dish) {
    //     this.setState({ selectedDish: dish });
    // }

    // renderDish(dish) {
    //     if (dish != null) {
    //         return(
    //             <div className="row">
    //                 <div className="col-12 col-md-5 m-1">
    //                     <Card>
    //                         <CardImg width="100%" src={dish.image} alt={dish.name} />
    //                         <CardBody>
    //                             <CardTitle className="font-weight-bold"> {dish.name} </CardTitle>
    //                             <CardText> {dish.description} </CardText>
    //                         </CardBody>
    //                     </Card>
    //                 </div>
    //                 <div className="col-12 col-md-5">
    //                                 <div>
    //                                     <h5 className="font-weight-bold">Comments</h5>
    //                                     {dish.comments.map((sub) =>
    //                                         <div>
    //                                             <div>{sub.comment}</div>
    //                                             <br/>
    //                                             <div>--{sub.author} , <span>{sub.date}</span></div>
    //                                             <br/>
    //                                         </div>
    //                                     )}
    //                                 </div>
    //                 </div>
    //             </div>
                
    //         );
    //     }
    //     else {
    //         return(
    //             <div></div>
    //         );
    //     }
    // }

    // componentDidMount() {
    //     console.log('Menu Component componentDidMount invoked');
    // }

    // render() {

        // const menu = this.state.dishes.map((dish) => {                   //javascript .map is used to iterate all the items/every dish in the dishes array//
                            
        // ALTERNATIVE using PROPS instead of STATE :

        const Menu = (props) => {

        // const menu = this.props.dishes.map((dish) => {                      // the arrow function is used to define what is going to be returned by the map operator//
        const menu = props.dishes.dishes.map((dish) => {
        return (  
                                                                     
// whenever we declare list of items in our component for rendering, every list item is defined with a key property which helps react to recognize each of these items uniquely and render them for any changes in the website:

                // <div key={dish.id} className="col-12 mt-5">                    
                //     <Media tag="li">
                //         <Media left middle>
                //             <Media object src={dish.image} alt={dish.name} />
                //         </Media>
                //         <Media body className="ml-5">
                //             <Media heading> {dish.name} </Media>
                //             <p> {dish.description} </p>
                //         </Media>
                //     </Media>

                //   ALTERNATIVE METHOD USING CARD INSTEAD OF MEDIA:
                
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {/* <RenderMenuItem dish={dish} onClick={props.onClick} /> */}
                    <RenderMenuItem dish={dish} />
                    {/* <Card onClick={() => this.onDishSelect(dish)}> */}
                    {/* <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle> {dish.name} </CardTitle>
                            </CardImgOverlay>
                    </Card> */}
                </div>
        );                                  
        });             

        // console.log('Menu component render is invoked');

        if (props.dishes.isLoading) {
             return(
                    <div className="container">
                        <div className="row">
                            <Loading />
                        </div>
                    </div>
                );
            }
            else if (props.dishes.errMess) {
                return(
                    <div className="container">
                        <div className="row">
                            <h4>{props.dishes.errMess}</h4>
                        </div>
                    </div>
                );
            }
        else
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                            {menu}
                    </div>
                    {/* <div classsName="row"> */}
                        {/* {this.renderDish(this.state.selectedDish)} */}
                        {/* <DishDetail dish={this.state.selectedDish} /> */}
                    {/* </div> */}
                </div>
            );
        }
//     }
// }

export default Menu;