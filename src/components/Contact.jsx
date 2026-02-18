import React from 'react'
import './Contact.css'

import Swal from 'sweetalert2'

function Contact() {
   
   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7a78e663-a473-4c1a-8651-7c470b505ead");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
         Swal.fire({
         title: "I will get in touch!",
         text: "Message sent sucessfully!",
         icon: "success"
});
    }
  };
   
  return (
    <>
    <div className='Contact-page'>
      <h1>Contact Me</h1>
    </div>  
      <h1 className="logo">SR.</h1>
     <section className='contact'>
        <form onSubmit={onSubmit} >         
          <h2>Get in Touch</h2>
          <div className='input-box'>
              <label>Full Name</label>  
              <input type="text" className='field' placeholder='Enter your Name' name='name' required />
          </div>

          <div className='input-box'>
              <label>Email Address</label>  
              <input type="email" className='field' placeholder='Enter your Email' name='email' required />
          </div>

          <div className='input-box'>
              <label>Your Message</label>  
              <textarea name="message"  className='field mess' placeholder='Enter your message' required></textarea>
          </div>
            <button type='submit'>Send Message</button>
        </form>
     </section>

    </>
    
     

  )
}

export default Contact

// web3forms = for form 
// sweetalert = for alert message!