import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        if (dish != null) {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle><b>{dish.name}</b></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                </Card>
            </div>
        );
    }
        else {
            return (
                <div></div>
            );
        }
    }
    renderComments(comments) {
        if (comments == null) {
            return (
                <div></div>
            );
        }
        const comment = comments.map(cmts => {
            return (
                <li key={cmts.id}>
                    <p>{cmts.comment}</p>
                    <p>-- {cmts.author} , {cmts.date}</p>
                </li>
            )
        })
        return (
            <div className="col-12 col-md-5 m-1">
                <h4><b>Comments</b></h4>
                    <ul className="list-unstyled">
                        {comment}
                    </ul>
            </div>
        );
    }

    render() {
        if ( this.props.dish != null ) {
            return (
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </div>
                );
            }
            else {
                return (
                    <div></div>
                )
            }

            // ALTERNATIVE :

        // const dish = this.props.dish;
        // if(dish == null ){
        //     return(
        //         <div></div>
        //     )
        // }
        // const Item = this.renderDish(this.props.dish);
        // const ItemComment = this.renderComments(this.props.dish.comments);
        // return(
        //     <div className="container">
        //         <div classsName="row">
        //                 {Item}
        //                 {ItemComment}
        //         </div>
        //     </div>
        //         );
    }
}
    

export default DishDetail;