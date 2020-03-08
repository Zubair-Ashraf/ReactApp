import React from 'react'
import Package from './pakage'
import './packages.css'

function packages () {
  const packagesList = [
    '129 GB Storage',
    '1000 Domain Name',
    '200 Members',
    '247 Support',
    'Pay Back Gurantee'
  ]
  return (
    <>
      <section className='packages'>
        <div className='header'>
          <h1>Best Packages</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            <br />
            but the majority have suffered alteration in some form
          </p>
        </div>
        <div className='content-body'>
          <Package
            title='Standard'
            price='$7.95'
            period='/month'
            list={packagesList}
          />

          <Package
            title='Professional'
            price='$27.99'
            period='/month'
            list={packagesList}
          />

          <Package
            title='Unlimited'
            price='$99.99'
            period='/month'
            list={packagesList}
          />

          <Package
            title='Offers'
            price='$49.99'
            period='/month'
            list={packagesList}
          />
        </div>
      </section>
    </>
  )
}

export default packages
