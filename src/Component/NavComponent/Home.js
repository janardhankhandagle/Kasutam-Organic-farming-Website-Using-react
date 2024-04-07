import React from 'react'
import Cards from '../Homefolder/Cards'
import Info from '../Homefolder/Info'
import Ox from '../Homefolder/Ox'
import Feature from '../Homefolder/Feature'
import Caurosal from '../Caurosal'
import Blog from '../Homefolder/Blog'
import Certi from '../Homefolder/Certi'



export default function Home() {
  return (
    <div>
      <Caurosal/>
      <Cards  text='our products'/>
      <Info/>
      <Blog/>
      <Ox/>
      <Feature/>
      <Certi/>
      

    </div>
  )
}
