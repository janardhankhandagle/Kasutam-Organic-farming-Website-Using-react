import React from 'react'
import mad from './mad.jpg'
import './Feature.css'


export default function Feature() {
  return (
<> <div className="container  text-center pt-5">
    <h1 className='pt-5 feat ' >Featured on mad4india.com</h1>
    <img className='pt-5 fitt' src={mad} alt="" />
    <br/>
                         <button type="button" class="btn btn btn-success read1 ">read more</button>
</div>

</>
  )
}
