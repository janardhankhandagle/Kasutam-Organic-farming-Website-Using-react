import './Cards.css'
import a2 from './a2.jpg'
import React from 'react';
import buffalow from './buffalow.jpg'

export default function Cards() {
  return (
<>
     <div className="container pt-5  bor text-center">
      <h1 className='tect-center pb-3'> our products</h1>
      <div className="row ">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div class="card" >
            <img id='aa2' src={a2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">A2 desi cow bilona ghee 1 liter </h5>
              <h6 class="card-text">⭐⭐⭐⭐⭐ REVIEWS</h6>
              <h5> <u>2590 </u> 1900 RS </h5>
              <button type="button" class="btn btn btn-success newk">ADD TO CART</button>
            </div>
          </div></div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div class="card" >
            <img src={a2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">A2 desi cow bilona ghee 1 liter </h5>
              <h6 class="card-text">⭐⭐⭐⭐⭐ REVIEWS</h6>
              <h5> <u>2590 </u> 1900 RS </h5>
              <button type="button" class="btn btn btn-success newk">ADD TO CART</button>
            </div>
          </div></div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div class="card">
            <img src={buffalow} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">A2 desi cow bilona ghee 1 liter </h5>
              <h6 class="card-text">⭐⭐⭐⭐⭐ REVIEWS</h6>
              <h5> <u>2590 </u> 1900 RS </h5>
              <button type="button" class="btn btn btn-success newk">ADD TO CART</button>
            </div>
          </div></div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div class="card" >
            <img src={buffalow} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">A2 desi cow bilona ghee 1 liter </h5>
              <h6 class="card-text">⭐⭐⭐⭐⭐ REVIEWS</h6>
              <h5> <u>2590 </u> 1900 RS </h5>
              <button type="button" class="btn btn btn-success newk">ADD TO CART</button>
            </div>
          </div></div>
      </div>
      <br/>
      <button type="button" class="btn btn-success  newk1 ">View all product</button>
    </div>
    
    </>
  );
}

