import React, { Component } from 'react';
// import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
// import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
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
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
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
    function RenderComments({comments, addComment, dishId}) {
        if (comments != null)
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return(
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            );
                        })}
                    </ul>
                    <CommentForm dishId={dishId} addComment={addComment} />
                </div>
            );
        else
            return (
                <div></div>
            );
        // if (comments == null) {
        //     return (
        //         <div></div>
        //     );
        // }
        // const comment = comments.map(cmts => {
        //     return (
        //         <li key={cmts.id}>
        //             <p>{cmts.comment}</p>
        //             <p>-- {cmts.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmts.date)))}</p>
        //         </li>
        //     )
        // })
        // return (
        //     <div className="col-12 col-md-5 m-1">
        //         <h4><b>Comments</b></h4>
        //             <ul className="list-unstyled">
        //                 {comment}
        //                 <CommentForm dishId={dishId} addComment={addComment} />
        //             </ul>
        //     </div>
        // );
    }

    class CommentForm extends Component {

        constructor(props) {
            super(props);
            this.state = {
                isModalOpen: false
            };
            this.toggleModal = this.toggleModal.bind(this);
            this.handleCommentForm = this.handleCommentForm.bind(this);
        }
    
        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }
    
        handleCommentForm(values) {         
            // console.log("Current state is : " + JSON.stringify(values));
            // alert("Current state is : " + JSON.stringify(values));
            this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        }
    
        render(){
            return(
                <div>
                    <div>
                        <Button outline onClick={this.toggleModal}>
                            <span className="fa fa-pencil fa-lg"> &nbsp; </span>Submit Comment
                        </Button>
                    </div>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
    
                                <ModalBody>
                                    <LocalForm className="container" onSubmit={(values) => this.handleCommentForm(values)}>
                                        <Row className="form-group">
                                            <Label htmlFor="username">Rating</Label>
                                                    <Control.select model=".rating"
                                                    name="rating"
                                                    className="form-control"
                                                    >
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Control.select>
                                        </Row>
    
                                        <Row className="form-group">
                                            <Label htmlFor="name"> Your Name </Label>
                                                <Control.text className="form-control" model=".name" 
                                                    id="name" name="name" 
                                                    placeholder="Your Name"
                                                    validators={{
                                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                                    }}
                                                    />         
                                                <Errors 
                                                    className="text-danger"
                                                    model=".name"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required',
                                                        minLength: 'Must be greater than 2 characters',
                                                        maxLength: 'Must be 15 characters or less'
                                                    }}
                                                />
                                        </Row>
    
                                        <Row className="form-group">
                                            <Label htmlFor="message"> Comment </Label>
                                                <Control.textarea model=".message"
                                                    id="message" name="message" 
                                                    rows="6" 
                                                    className="form-control"
                                                >
                                                </Control.textarea>
                                        </Row>
    
                                        <Row className="form-group">
                                            <Button type="submit" color="primary">
                                                Submit
                                            </Button>
                                        </Row>
                                    </LocalForm>
                                </ModalBody>
                        </Modal>
                </div>
            );
        }
    } 

    // render() {
    const DishDetail = (props) => {
        console.log('DishDetail Component render invoked');
        
        // if ( this.props.dish != null ) {
            if (props.isLoading) {
                return(
                    <div className="container">
                        <div className="row">
                            <Loading />
                        </div>
                    </div>
                );
            }
            else if (props.errMess) {
                return(
                    <div className="container">
                        <div className="row">
                            <h4>{props.errMess}</h4>
                        </div>
                    </div>
                );
            }
            // if ( props.dish != null ) {
            else if ( props.dish != null ) {
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
                        <RenderComments comments={props.comments}
                            addComment={props.addComment}
                            dishId={props.dish.id} />
                    </div>
                </div>
                );
            }
            else {
                return (
                    <div></div>
                );
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