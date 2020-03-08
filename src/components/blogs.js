import React from 'react'
import './blogs.css'
import blog1 from '../images/24.jpg'
import blog2 from '../images/25.jpg'
import blog3 from '../images/26.jpg'

function blogs () {
  return (
    <>
      <section className='blogs'>
        <div className='header'>
          <h1>Our Blogs</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            <br />
            but the majority have suffered alteration in some form
          </p>
        </div>
        <div className='contents-body'>
          <div className='blog'>
            <img src={blog1} alt='' width="250px" height="150px" />
            <h5>Scrambled IT to make a Specimen book</h5>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
          </div>

          <div className='blog'>
            <img src={blog2} alt='' width="250px" height="150px" />
            <h5>Discovered the undoubtable source</h5>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
          </div>

          <div className='blog'>
            <img src={blog3} alt='' width="250px" height="150px" />
            <h5>Lorem Ipsum which looks reasonable</h5>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default blogs
