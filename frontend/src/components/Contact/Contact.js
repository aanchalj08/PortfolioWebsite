import React from "react";
import styles from "./Contact.module.css";
import Footer from "../Footer/Footer";
import { useState } from "react";
import FormSuccess from "./FormSuccess";

function ContactPage() {
  const [name, setName] = useState("");
  const [submitted,setSubmitted]=useState(false);

  const [email, setEmail] = useState("");
  
  const [message, setMessage] = useState("");
  
  
  const clearHandler = (event) => {
    setName("");
    setEmail("");
    setMessage("");
    
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const msgChangeHandler = (event) => {
    setMessage(event.target.value);
  };
  

  async function submitHandler(event){
    event.preventDefault();
    console.log(name);
   
    if(!name && !email && !message){
      alert("Invalid form");
      return;
    }
    if(!name){
      alert("Name must not be empty");
      return;
    }
    if(!email || !email.includes('@')){

      alert("Enter a valid email address");
      return;
    }
    if(!message){
      alert("Please enter a message");
      return;
    }
    try {
      const response = await fetch("http://localhost:8000/submit-form", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: name,
          userEmail: email,
          userMessage: message
        })
      });

      if (!response.ok) {
        throw new Error('Error submitting the form.');
      }

      console.log('Form submitted successfully.');
      

     
      setName("");
      setEmail("");
      setMessage("");
      setSubmitted(true);
    } catch (error) {
  console.error('Error submitting the form:', error);
    }
  };

  return (
    <>
      {!submitted && (<div className={styles.main}>
        <h1>Get In Touch</h1>
        <p>
          I'm actively seeking new opportunities and I welcome any feedback or
          inquiries. Feel free to reach out to me with questions or just to say
          hello, and I'll do my utmost to respond promptly.
        </p>
        <div className={styles.form}>
          <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              id="name"
              value={name}
              onChange={nameChangeHandler}
              
            ></input>
            
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              id="email"
              value={email}
              onChange={emailChangeHandler}
              
            ></input>
            
            <label htmlFor="msg">Message</label>
            <input
              type="text"
              placeholder="Enter Your Message"
              id="msg"
              value={message}
              onChange={msgChangeHandler}
              
            ></input>
            
            <button onClick={clearHandler} type="reset">
              Clear Form
            </button>

            <button  type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>)};
      {!submitted && <Footer></Footer>}
      {submitted && <FormSuccess></FormSuccess>}
    </>
  );
}

export default ContactPage;
