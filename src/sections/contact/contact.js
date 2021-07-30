import React from 'react';
import InputBlock from '../../components/inputBlock/inputblock'
import axios from 'axios'
import './contact.css'

class Contact extends React.Component{

  state = {
    formData: {
      firtsname: "",
      lastname: "",
      email: "",
      message: ""
    },
    submitted: false
  }

  handleForm = e => {

    axios.post(
      "",
      this.state.formData,
      {headers: {"Accept": "application/json"}}
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


    e.preventDefault();
    let formData = { firtsname:'',lastname:'',email:'',message:''}


    this.setState({ formData, submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 3000);
    });
  }


  handleFields = e => {
    const { formData } = this.state
    formData[e.target.name] = e.target.value
    this.setState({ formData })
  };


  render() {
    const { firtsname,lastname,email,message } = this.state.formData
    const { submitted } = this.state
    return (
    <section id="contact">
    <div>
      <div className="container">
        {(submitted) ? <h2 id="msg_sent">Message Sent</h2> : ''}
        <div className="connect">
          <h1>CONTACT</h1>
        </div>
        <div className="form-block">
          <form className="form" action="https://formcarry.com/s/C63ONSh0GdR" method="POST" acceptCharset="UTF-8" encType="multipart/form-data">
            <div className="name-block">
              <InputBlock handleFields={this.handleFields} type="text" value={firtsname} name="firtsname" labelName="firtsname" labelConent="First Name" required />
              <InputBlock handleFields={this.handleFields} type="text" value={lastname} name="lastname" labelName="lastname" labelConent="Last Name" required />
              <InputBlock handleFields={this.handleFields} type="email" value={email} name="email" labelName="email" labelConent="Email" required />
            </div>

            <div className="textarea-block">
              <textarea onChange={this.handleFields} 
                value={message} 
                type="text" 
                name="message" 
                placeholder="Type your message here..." 
                wrap="off" 
                autoComplete="off"
                multilline="true"            
              />
            </div>

            <button id="button" type="submit" name="button" disabled={submitted}>
              {
                   (submitted && 'Message Sent')
                   || (!submitted && 'Send Message')
               }
             </button>

          </form>
        </div>

      </div>
      </div>
    </section>
  )};
}

export default Contact;
