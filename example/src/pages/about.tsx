import { Anchor } from 'nextjs-anchor'
import React from 'react'

const AboutPage = () => {
  return (
    <React.Fragment>
      <h1>About page</h1>
      <Anchor href='/' className='underline'>
        Go to home
      </Anchor>
    </React.Fragment>
  )
}

export default AboutPage
