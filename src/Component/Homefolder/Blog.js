import React from 'react'
import admin from './admin.jpg'
import whit from './whit.jpg'
import gir from './gir.jpg'
import './Blog.css'

export default function Blog() {
    return (
        <div className="container  ">
            <h1 className='text-center bkt pb-3'>Our Blogs</h1>
            <div className="row ">
                <div className="col-sm-4 col-md-4 col-lg-4">

                    <div class="card" >
                        <img className='adm' src={admin} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">kaustam a2 desi cow vesic belino ghee</h5>
                            <h6 class="card-text">By Admin</h6>
                            <p class="card-text vesic">kaustam a2 desi cow vesic belino ghee making full process ....</p>

                            <h5> <a className='moree' href="#">read more</a></h5>
                            <h5>31-may-2022</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4"> <div class="card" >
                    <img src={gir} class="card-img-top" alt="..." />

                    <div class="card-body">
                        <h5 class="card-title">kaustam a2 desi cow vesic belino ghee</h5>
                        <h6 class="card-text">By Admin</h6>
                        <p class="card-text vesic">kaustam a2 desi cow vesic belino ghee making full process ....</p>

                        <h5> <a className='moree' href="#">read more</a></h5>
                        <h5>31-may-2022</h5>
                    </div>
                </div>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4"> <div class="card" >
                    <img src={whit} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">kaustam a2 desi cow vesic belino ghee</h5>
                        <h6 class="card-text">By Admin</h6>
                        <p class="card-text vesic">kaustam a2 desi cow vesic belino ghee making full process ....</p>

                        <h5> <a className='moree' href="#">read more</a></h5>
                        <h5>31-may-2022</h5>
                    </div>
                </div>
                </div>

            </div>
            <br/>
            <div className='text-center'> <button type="button" class="btn btn-success  newk1 ">View all </button></div>
            
        </div>
        
    )
}
