import React from 'react'
import a2 from '../Homefolder/a2.jpg'
import buffalow from '../Homefolder/buffalow.jpg'
import double from './Images/double.jpg'
import plastic from './Images/plastic.jpg'
import cattle from './Images/cattle.jpg'
 import bottle from './Images/bottle.jpg'
 import './Track.css'



export default function Product() {
  return (
   <>
    <div className="flex-container  bor1 text-center">
    <h6  className='your pt-5 pb-5'><a  className='your' href="/">home → our products</a></h6>
      <h1 className='tect-center'> </h1>
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
              <h5 class="card-title">A2 desi cow bilona ghee 500ml </h5>
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
              <h5 class="card-title">A2 desi cow bilona ghee 500ml </h5>
              <h6 class="card-text">⭐⭐⭐⭐⭐ REVIEWS</h6>
              <h5> <u>2590 </u> 1900 RS </h5>
              <button type="button" class="btn btn btn-success newk">ADD TO CART</button>
            </div>
          </div></div>
      </div>
      <br/>
    
    </div>
    <div className="flex-container  bor1 text-center">
      <h1 className='tect-center'></h1>
      <div className="row ">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div class="card" >
            <img id='aa2' src={cattle} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">A2 desi cow bilona ghee 5 liter steel can </h5>
              <h6 class="card-text">⭐⭐⭐⭐⭐ REVIEWS</h6>
              <h5> <u>2590 </u> 1900 RS </h5>
              <button type="button" class="btn btn btn-success newk">ADD TO CART</button>
            </div>
          </div></div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div class="card" >
            <img src={bottle} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">kachi ghani black musterd oil 1 liter plastc bottle</h5>
              <h6 class="card-text">⭐⭐⭐⭐⭐ REVIEWS</h6>
              <h5> <u>2590 </u> 1900 RS </h5>
              <button type="button" class="btn btn btn-success newk">ADD TO CART</button>
            </div>
          </div></div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div class="card">
            <img src={plastic} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">kachi ghani black musterd oil 1 liter bottle X 5 bottle(5l)</h5>
              <h6 class="card-text">⭐⭐⭐⭐⭐ REVIEWS</h6>
              <h5> <u>2590 </u> 1900 RS </h5>
              <button type="button" class="btn btn btn-success newk">ADD TO CART</button>
            </div>
          </div></div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div class="card" >
            <img src={double} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">A2 desi cow bilona ghee 2liter </h5>
              <h6 class="card-text">⭐⭐⭐⭐⭐ REVIEWS</h6>
              <h5> <u>2590 </u> 1900 RS </h5>
              <button type="button" class="btn btn btn-success newk">ADD TO CART</button>
            </div>
          </div></div>
      </div>
      <br/>
    
    </div>
   
    </>
    )
}
