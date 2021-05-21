import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

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
        console.log("Current state is : " + JSON.stringify(values));
        alert("Current state is : " + JSON.stringify(values));
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
        )
    }
}

export default CommentForm;