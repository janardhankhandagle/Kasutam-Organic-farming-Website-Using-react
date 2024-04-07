import React from 'react'
import './User.css'

export default function User() {
  return (
   <>
    <h6  className='your pt-5 pb-5 text-center matt'><a  className='your' href="/">home → Login in your account</a></h6>
 <div className="container pt-5  pink">
 
  <div className="row">

    <div className="col-sm-6 col-md-6 col-lg-6">
<h1 className='text-center pt-5'>Login page</h1>
<h5 className='text-center pt-2'>Please login below account detail</h5>
<div class="mb-6 pt-5">
    <label for="exampleInputEmail1" class="form-label"> <h5>Email address</h5></label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder='eg:jkpatil@gmail.com ' aria-describedby="emailHelp"/>

     
  </div>
  <div class="mb-6 pt-3">
    <label for="exampleInputEmail1" class="form-label"><h5>Password</h5></label>
    <input type="Password" class="form-control" placeholder='JX********' id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <br/>
  <button type="submit" class="btn btn-success sub1  ">Sign in</button>
  <br/>
   <h5 className='text-center forge'><a href="">Forget your password</a></h5>

    </div>
    <div className="col-sm-6 col-md-6 col-lg-6 have "> 
    <h3 className='text-center'>Dont have an account</h3>
   <a className='text-center' href=""> <button type="submit" class="btn btn-light sub2  ">Sign up</button></a>
   <a className='pt-5 pok' href=""><h6>terms&conditions</h6></a>
   <h6>Your privacy and security are important to us. For more information on how we use your data read our</h6>

   <a  className='pt-2 pok' href=""><h6>privacy &policy</h6></a>
    </div>
  </div>
 </div>


   </>
  )
}
