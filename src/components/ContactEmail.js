import React, { Component, Fragment } from 'react'
import * as emailjs from 'emailjs-com'
// import Layout from '../components/layout'
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'samklepdev@gmail.com',
      subject: subject,
      message_html: message,
     }
     emailjs.send(
      'gmail',
      'template_j4CZ8YuM',
       templateParams,
      'user_55YYmU3urijwaiV2s1l3i'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
    
        <Fragment>
             <div className='container'>
          <h1 className="p-heading1">Have Any Questions? Get in Touch!</h1>
          <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='address wow fadeInLeft' data-wow-delay='0.2s'>
              <a href='https://www.google.com/maps/place/Houston,+TX/@29.8159897,-95.9630907,9z/data=!3m1!4b1!4m5!3m4!1s0x8640b8b4488d8501:0xca0d02def365053b!8m2!3d29.7604267!4d-95.3698028?hl=en' target='_blank' rel="noopener noreferrer">
                <i className='fa-fw fa fa-map-marker' />
                <span>Locate Me</span>
                <p>Houston, TX</p>
              </a>
            </div>
          </div>
          <div className='col-lg-4 wow fadeInUp' data-wow-delay='0.2s'>
            <div className='address'>
              <a href='tel:7133769541' target='_blank' rel="noopener noreferrer">
                <i className='fa-fw fa fa-phone' />
                <span>Give me a call</span>
                <p>Phone: (713) 376 - 9541</p>
              </a>
            </div>
          </div>
          <div className='col-lg-4 wow fadeInRight' data-wow-delay='0.2s'>
            <div className='address'>
              <a href='mailto:samklepdev@gmail.com' target='_blank' rel="noopener noreferrer">
                <i className='fa-fw fa fa-envelope-o' />
                <span>Get in online</span>
                <p>samklepdev@gmail.com</p>
              </a>
            </div>
          </div>
          </div>
          <br />
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup>
<FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup>
<FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>
<Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </div>
          </div>
        </Fragment>
    )
  }
}
export default ContactForm