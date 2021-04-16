import { Anchor } from 'nextjs-anchor'
import React from 'react'

export default function Home() {
  return (
    <React.Fragment>
      <h1 className='text-xl'>Home page</h1>
      <Anchor
        href='/about'
        className='text-blue-500 hover:underline hover:text-red-500'
      >
        Go to about
      </Anchor>
    </React.Fragment>
  )
}
