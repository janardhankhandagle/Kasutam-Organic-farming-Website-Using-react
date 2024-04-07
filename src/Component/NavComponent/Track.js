import React from 'react'
import './Track.css'
export default function Track() {
  return (
   <>
   
   <div className="container text-center ">
   <h6  className='your pt-5'><a  className='your' href="/">home → Track your order</a></h6> 
    <h1 className='tra'>Track your order</h1>
    <h6 className='headi'>
Please enter your order id</h6>

<input className='ord text-center' type="search" placeholder='your order id ' />
<br/>
<div>
<br/>
<br/>
<button  type="button" className="btn btn-success  ord1  text-center ">Track</button>
   </div>
</div>
   
   </>
  )
}
 