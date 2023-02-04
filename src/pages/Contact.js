import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [warning, setWarning] = useState(false);
  const [success, setSuccess] = useState(false);
  const form = useRef();
  const nameValue = useRef();
  const emailValue = useRef();
  const messageValue = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
   
    if(nameValue.current.value === "" || emailValue.current.value === "" || messageValue.current.value === "" || messageValue.current.value.length < 10) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      },2000)      
    } else {
      setWarning(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      },2000)  
      nameValue.current.value = "";
      emailValue.current.value = "";
      messageValue.current.value = "";
    }


    // emailjs.sendForm('service_kcsy9ef', 'template_6aeqwrp', form.current, '12qTFmN_bLVcQpje6')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="container">
      <div className='my-3'>
        <label className='form-label'>Name</label>
        <input ref={nameValue} className='form-control' type="text" name="guest_name" placeholder='Name'/>
      </div>
      <div className='mb-3'>
        <label className='form-label'>Email</label>
        <input ref={emailValue} className='form-control' type="email" name="guest_email" placeholder='Email' />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Message</label>
        <textarea ref={messageValue} className='form-control' name="message" placeholder='The message must contain at least 10 characters.' />
      </div>

      <input className='form-control btn btn-light mb-3' type="submit" value="Send" />
      {warning && <div>Formu eksiksiz doldurduğunuzdan emin olun.</div>}
      {success && <div>Mesaj başarılı bir şekilde gönderildi.</div>}
    </form>
  );
};

export default Contact;