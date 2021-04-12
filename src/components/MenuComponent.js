import React, { Component } from 'react';
// import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // dishes: [               //javascript objects and object name=dishes
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
            // ALTERNATIVE

            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }
    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle> {dish.name} </CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render() {

        // const menu = this.state.dishes.map((dish) => {                 //javascript .map is used to iterate all the items/every dish in the dishes array//
        // ALTERNATIVE using PROPS instead of STATE :
        const menu = this.props.dishes.map((dish) => {
        return (                                                           // the arrow function to define what is going to be returned by the map operator//
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
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle> {dish.name} </CardTitle>
                            </CardImgOverlay>
                    </Card>
                </div>
            )                                    
        });             

        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div classsName="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;