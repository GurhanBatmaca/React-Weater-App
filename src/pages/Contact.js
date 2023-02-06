import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom"
import emailjs from 'emailjs-com';

const Contact = () => {
  const navigate = useNavigate();
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
      emailjs.sendForm('service_key', 'template_key', form.current, 'api_key')  // must be your keys **
      .then((result) => {
        // console.log(result.text);
      }, (error) => {
        // console.log(error.text);
      });
      setWarning(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);       
      },2000); 
      setTimeout(() => {
        navigate("/");
      },4000)
      nameValue.current.value = "";
      emailValue.current.value = "";
      messageValue.current.value = "";
    }

  };

  return (
    <div className='contact'>
        <h2 className='text-center'>İletişim Formu</h2>
        <form ref={form} onSubmit={sendEmail} className="container">
        <div className='mb-3'>
          <label className='form-label'>İsim:</label>
          <input ref={nameValue} className='form-control' type="text" name="guest_name" placeholder='İsminiz'/>
        </div>
        <div className='mb-3'>
          <label className='form-label'>Email:</label>
          <input ref={emailValue} className='form-control' type="email" name="guest_email" placeholder='ornek@gmail.com' />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Mesaj:</label>
          <textarea ref={messageValue} className='form-control' name="message" placeholder='Mesaj minimum 10 karakter içermelidir.' />
        </div>

        <button className='form-control btn btn-light mb-3' type="submit" value="Send" >Gönder</button>
        {warning && <div className='text-center p-2 bg-danger rounded'>Formu eksiksiz doldurduğunuzdan emin olun.</div>}
        {success && <div className='text-center p-2 bg-success rounded'>Mesaj başarılı bir şekilde gönderildi.</div>}
      </form>
    </div>
  );
};

export default Contact;
