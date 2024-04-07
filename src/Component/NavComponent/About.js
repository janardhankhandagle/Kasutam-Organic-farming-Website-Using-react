import React from 'react'
import './Track.css'
import mad from '../Homefolder/mad.jpg'

export default function About() {
  return (
    <>
   <div className=" container ml">
   <h6  className='your pt-5 pb-5'><a  className='your' href="/">home → About kasutam</a></h6>
    <div className="col">
      <h1 className='text-center'>Welcome to Kasutam - Purity in Every Drop!</h1>
      <h5 className='pt-4'>The word "Kasutam" means "origin of virtues" or "reconstruction".  The term is used to describe the process of reformulation of thoughts and actions, in which an attempt is made to replace old and impure elements with new and higher <br/><br/>

At Kasutam, we are dedicated to providing you with the finest and most authentic Indian culinary essentials. Our range includes the golden nectar of A2 Desi Cow Ghee, the richness of Buffalo Ghee, the pungent aroma of Mustard Oil, and the tangy delight of Mango Pickle. We take pride in sourcing these products from trusted artisans and farmers who uphold the highest quality standards.</h5>

<h2 className='text-center'>who we are </h2>
<h5 className='pt-4'>Meet our CEO- Mr Bhavesh Kumar, Kasutam began its unending pursuit of purity and love for organic products in the year 2019. It is driven by the vision and the dynamism of its CEO Mr Bhavesh Kumar. He brings with him several years of experience. He envisaged making people understand the power of India’s ancient Vedic culture and how it can be incorporated into our daily eating habits. His fathomless interest in organic products and healthy living inspired him to make pure original products that are more inclined towards quality rather than just profit.</h5>
<img className='coca pt-5' src={mad} alt="" />
    </div>
    
    
    </div> 
    </>
  )
}
