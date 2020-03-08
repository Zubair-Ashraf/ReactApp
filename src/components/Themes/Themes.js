import React from 'react'
import './Themes.css'
import Theme from './Theme'
import { FaAlignLeft } from 'react-icons/fa'

export default function Themes () {
  return (
    <>
      <section className='section'>
        <div className="Themes">
        <Theme
          icon={FaAlignLeft}
          btnText='Corporate Theme'
          content='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of'
        />

        <Theme
          icon={FaAlignLeft}
          btnText='Corporate Theme'
          content='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of'
        />

        <Theme
          icon={FaAlignLeft}
          btnText='Corporate Theme'
          content='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of'
        />

        <Theme
          icon={FaAlignLeft}
          btnText='Corporate Theme'
          content='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of'
        />

        <Theme
          icon={FaAlignLeft}
          btnText='Corporate Theme'
          content='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of'
        />

        <Theme
          icon={FaAlignLeft}
          btnText='Corporate Theme'
          content='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of'
        />
        </div>
      </section>
    </>
  )
}
