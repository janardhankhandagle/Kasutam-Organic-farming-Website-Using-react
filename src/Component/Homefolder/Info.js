import React from 'react'
import cow from './cow.jpg'
import './Info.css'

export default function Info() {
  return (
    <>
    <div className="container in text-center pt-5">
        <div className="row ">
            <div className="col-sm-4 col-md-4 col-lg-4"> 
             < img className='cow pt-5' src={cow} alt="" /></div> 
                <div className="col-sm-8 col-md-8 col-lg-8">
                    <h1 className='pt-3'>welcome to kaustam</h1>
                    <h4 className='pt-3'>It’s all about the organic and freshness here.it's all about good <br/>
                         food and good times. No one can defeat the taste of Desi Cow Ghee,<br/>
                          Buffalo Ghee Organic Mustard Oil, handmade Green chilli pickle,Kair<br/>
                        Pickle and many more home made items which comes directly.from the farm.</h4>
                         <br/>
                         <button type="button" class="btn btn btn-success newk1">Shop Now</button>
                </div>
                
          
        </div>
    </div>
    </>
  )
}
