// import React from 'react';
import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, FormGroup, Label, Input, Col, Row, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';
// import { Control, LocalForm, Errors } from 'react-redux-form';
import { Control, Form, Errors, actions } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
//since we need to store the state of the form in the state of our react component, we need to turn this functional component into a class component, and that's the only way it will be able to support controlled forms.
class Contact extends Component{

    constructor(props){
        super(props);
// defining the state of the form that we are going to reflect in this component. we include all the properties that will be linked to our form
        // this.state = {
        //     firstname: '',
        //     lastname: '',
        //     telnum: '',
        //     email: '',
        //     agree: false,
        //     contactType: 'Tel',
        //     message: '',
        //     touched: {
        //         firstname: false,
        //         lastname: false,
        //         telnum: false,
        //         email: false
        //     }
        // };
        this.hanldleSubmit = this.hanldleSubmit.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);
    }

    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    
    //     this.setState({
    //       [name]: value
    //     });
    // }

    //when we click on the submit button/send feedback button, the handleSubmit should be called
    // hanldleSubmit(event) {             
    //     console.log("Current state is : " + JSON.stringify(this.state));
    //     alert("Current state is : " + JSON.stringify(this.state));
    //     event.preventDefault();
    // }

    hanldleSubmit(values) {             
        console.log("Current state is : " + JSON.stringify(values));
        alert("Current state is : " + JSON.stringify(values));
        this.props.resetFeedbackForm();
    }

    // handleBlur = (field) => (evt) => {
    //     this.setState({
    //         touched: {...this.state.touched, [field]: true}
    //     });
    // }

    // validate(firstname, lastname, telnum, email) {
    //     const errors = {
    //         firstname: '',
    //         lastname: '',
    //         telnum: '',
    //         email: ''
    //     };

    //     if(this.state.touched.firstname && firstname.length<3)
    //         errors.firstname = 'First Name should be >= 3 charecters';
    //     else if(this.state.touched.firstname && firstname.length>10)
    //         errors.firstname = 'First Name should be <= 10 charecters';

    //     if(this.state.touched.lastname && lastname.length<3)
    //         errors.lastname = 'Last Name should be >= 3 charecters';
    //     else if(this.state.touched.lastname && lastname.length>10)
    //         errors.lastname = 'Last Name should be <= 10 charecters';

    //     const reg = /^\d+$/;
    //     if(this.state.touched.telnum && !reg.test(telnum))
    //         errors.telnum = 'Tel. Number should contain only numbers';

    //     if(this.state.touched.email && email.split('').filter(x => x === '@').length!==1)
    //         errors.email = 'Email should contain @';
        
    //     return errors;
    // }

    render() {
        // const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
// function Contact(props) {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        {/* <Form onSubmit={this.hanldleSubmit}> */}
                        {/* <LocalForm onSubmit={(values) => this.hanldleSubmit(values)}> */}
                        <Form model="feedback" onSubmit={(values) => this.hanldleSubmit(values)}>
                            {/*FormGroup row allows us to use bootstrap grid inside the form to layout the various form elements */}
                            {/* <FormGroup row> */}
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}> First Name </Label>          {/* we will use "htmlFor" instead of "for" because this is JSX code and if we use the simple "for" it will be confused with javaScript's "for" */}
                                <Col md={10}>
                                <Control.text className="form-control" model=".firstname" 
                                    id="firstname" name="firstname" 
                                    placeholder="First Name"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                    // value={this.state.firstname}
                                    // valid={errors.firstname === ''}
                                    // invalid={errors.firstname !== ''}
                                    // onBlur={this.handleBlur('firstname')}
                                    // onChange={this.handleInputChange} 
                                    />         {/* Tying this value to the controlled component's state, this form will become a controlled form so that any change to this value will be reflected to the react component's state here */}
                                <Errors 
                                    className="text-danger"
                                    model=".firstname"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                                {/* <FormFeedback> {errors.firstname} </FormFeedback> */}
                                </Col>
                            </Row>
                            {/* </FormGroup> */}

                            {/* <FormGroup row> */}
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}> Last Name </Label>          
                                <Col md={10}>
                                    {/* <Input type="text"  */}
                                    <Control.text className="form-control" model=".lastname"
                                    id="lastname" name="lastname" 
                                    placeholder="Last Name"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }} 
                                    // value={this.state.lastname}
                                    // valid={errors.lastname === ''}
                                    // invalid={errors.lastname !== ''}
                                    // onBlur={this.handleBlur('lastname')}
                                    // onChange={this.handleInputChange}
                                    /> 
                                    <Errors 
                                    className="text-danger"
                                    model=".lastname"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                                    {/* <FormFeedback> {errors.lastname} </FormFeedback>        */}
                                </Col>
                            </Row>
                            {/* </FormGroup> */}

                            {/* <FormGroup row> */}
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}> Contact Tel. </Label>          
                                <Col md={10}>
                                    {/* <Input type="tel"  */}
                                    <Control.text className="form-control" model=".telnum"
                                    id="telnum" name="telnum" 
                                    placeholder="Tel. Number"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                    }} 
                                    // value={this.state.telnum}
                                    // valid={errors.telnum === ''}
                                    // invalid={errors.telnum !== ''}
                                    // onBlur={this.handleBlur('telnum')}
                                    // onChange={this.handleInputChange}
                                    />
                                    <Errors 
                                    className="text-danger"
                                    model=".telnum"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 numbers',
                                        maxLength: 'Must be 15 numbers or less',
                                        isNumber:'Must be a number'
                                    }}
                                /> 
                                    {/* <FormFeedback> {errors.telnum} </FormFeedback>         */}
                                </Col>
                            </Row>
                            {/* </FormGroup> */}

                            {/* <FormGroup row> */}
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}> Email </Label>          
                                <Col md={10}>
                                    {/* <Input type="email"  */}
                                    <Control.text className="form-control" model=".email"
                                    id="email" name="email" 
                                    placeholder="Email" 
                                    validators={{
                                        required, validEmail
                                    }}
                                    // value={this.state.email}
                                    // valid={errors.email === ''}
                                    // invalid={errors.email !== ''}
                                    // onBlur={this.handleBlur('email')}
                                    // onChange={this.handleInputChange}
                                    />
                                    <Errors 
                                    className="text-danger"
                                    model=".email"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                       validEmail: 'Invalid Email Address'
                                    }}
                                />
                                    {/* <FormFeedback> {errors.email} </FormFeedback>         */}
                                </Col>
                            </Row>
                            {/* </FormGroup> */}

                            {/* <FormGroup row> */}
                            <Row className="form-group">
                                <Col md={{size:6, offset:2}}>
                                   {/* for the checkbox */}
                                   {/* <FormGroup check> */}
                                   <div className="form-check">
                                        <Label check>
                                            {/* <Input type="checkbox"  */}
                                            <Control.checkbox model=".agree"
                                            name="agree"
                                            // checked={this.state.agree}
                                            // onChange={this.handleInputChange}
                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                    {/* </FormGroup> */}
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    {/* <Input type="select"  */}
                                    <Control.select model=".contactType"
                                        name="contactType"
                                        className="form-control" 
                                        // value={this.state.contactType}
                                        // onChange={this.handleInputChange}
                                        >
                                            <option>Tel.</option>
                                            <option>Email</option>
                                    </Control.select>
                                    {/* </Input> */}
                                </Col>
                            </Row>
                            {/* </FormGroup> */}

                            {/* <FormGroup row> */}
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}> Your Feedback </Label>          
                                <Col md={10}>
                                    {/* <Input type="textarea"  */}
                                    <Control.textarea model=".message"
                                        id="message" name="message" 
                                        rows="12" 
                                        className="form-control"
                                        // value={this.state.message}
                                        // onChange={this.handleInputChange}
                                    >
                                    </Control.textarea>
                                    {/* </Input>          */}
                                </Col>
                            </Row>
                            {/* </FormGroup> */}

                            {/* <FormGroup row> */}
                            <Row className="form-group">
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                            {/* </FormGroup> */}
                        {/* </LocalForm> */}
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;