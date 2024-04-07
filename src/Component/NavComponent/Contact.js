import React from 'react'
import './Track.css'
export default function Contact() {
  return (
    <div>
     <div className="container">
      <div className="row">
     <h6  className='your pt-5'><a  className='your' href="/">home → contact us</a></h6> 
     <div className='col-sm-7 col-md-7 col-lg-7 pt-3'>
      <h4> drop us message</h4>
      <form>
 
  <div class="mb-6">
    <label for="exampleInputPassword1" class="form-label" ><h5>your name</h5></label>
    <input type="name" class="form-control" placeholder='enter your full name' id="exampleInputPassword1"/>
  </div>
  <div class="mb-6">
    <label for="exampleInputEmail1" class="form-label"> <h5>Email address</h5></label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder='email ' aria-describedby="emailHelp"/>
     
  </div>
  <div class="mb-6">
    <label for="exampleInputEmail1" class="form-label"><h5>Phone Number</h5></label>
    <input type="phone" class="form-control" placeholder='contact number' id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-6">
  <label for="exampleFormControlTextarea1"  class="form-label"><h5>Example textarea</h5></label>
  <textarea class="form-control" placeholder='comments' id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<br/>
  <button type="submit" class="btn btn-success sub ">Submit</button>
</form>
     </div>
     <div className='col-sm-5 col-md-5 col-lg-5  pt-5'>
      <h3>Get in Touch with Us !</h3>
      <h5 className='pt-3'>We're here to help! Whether you have a question about our services,want to collaborate,<br/>
         simply want to say hello, we'd love to hearfrom you. Use the form below to send us a message,
         and we'll get backto you as soon as possible.</h5>
         <br/>
         <h6>🏠 address</h6>
         <h5>Kasutam farm, 343, berla road, vill asalwas, surajgarh, distt- Jhunjhunu, Rajasthan, 333033</h5>
         <br/>
         <h6> 📞  phone</h6>
         <h5>+91 7427003708</h5>
         <br/>
         <h6>✉ Email</h6>
         <h5>info@kasutam.com</h5>
     </div>
     </div>
     </div>
    </div>
  )
}
