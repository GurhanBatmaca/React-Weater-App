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


    // emailjs.sendForm('service_kcsy9ef', 'template_6aeqwrp', form.current, '12qTFmN_bLVcQpje6')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };

  return (
    <div className='contact'>
        <h2 className='text-center'>İletişim Formu</h2>
        <form ref={form} onSubmit={sendEmail} className="container">
        <div className='mb-3'>
          <label className='form-label'>İsim:</label>
          <input ref={nameValue} className='form-control' type="text" name="guest_name" placeholder='İsim'/>
        </div>
        <div className='mb-3'>
          <label className='form-label'>Email:</label>
          <input ref={emailValue} className='form-control' type="email" name="guest_email" placeholder='Email' />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Mesaj:</label>
          <textarea ref={messageValue} className='form-control' name="message" placeholder='Mesaj minimum 10 karakter içermelidir.' />
        </div>

        <input className='form-control btn btn-light mb-3' type="submit" value="Send" />
        {warning && <div className='text-center p-2 bg-danger'>Formu eksiksiz doldurduğunuzdan emin olun.</div>}
        {success && <div className='text-center p-2 bg-success'>Mesaj başarılı bir şekilde gönderildi.</div>}
      </form>
    </div>
  );
};

export default Contact;