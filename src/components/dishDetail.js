// import React, { Component } from 'react';
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';

// class DishDetail extends Component {

    // componentDidMount() {
    //     console.log('DishDetail Component componentDidMount invoked');
    // }

    // componentDidUpdate() {
    //     console.log('DishDetail Component componentDidUpdate invoked');
    // }

    // renderDish(dish) {
        function RenderDish({dish}) {
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

    // renderComments(comments) {
    function RenderComments({comments}) {
        if (comments == null) {
            return (
                <div></div>
            );
        }
        const comment = comments.map(cmts => {
            return (
                <li key={cmts.id}>
                    <p>{cmts.comment}</p>
                    <p>-- {cmts.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmts.date)))}</p>
                </li>
            )
        })
        return (
            <div className="col-12 col-md-5 m-1">
                <h4><b>Comments</b></h4>
                    <ul className="list-unstyled">
                        {comment}
                        <CommentForm />
                    </ul>
            </div>
        );
    }

    // render() {
    const DishDetail = (props) => {
        console.log('DishDetail Component render invoked');
        
        // if ( this.props.dish != null ) {
            if ( props.dish != null ) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        {/* {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish.comments)} */}
                        <RenderDish dish={props.dish} />
                        {/* <RenderComments comments={props.dish.comments} /> */}
                        <RenderComments comments={props.comments} />
                    </div>
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
// }
    

export default DishDetail;