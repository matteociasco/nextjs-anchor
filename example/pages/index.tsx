import { Anchor } from 'nextjs-anchor'
import React from 'react'

export default function Home() {
  return (
    <React.Fragment>
      <h1>Home page</h1>
      <Anchor href='/about' style={{ color: 'red' }}>
        Go to about
      </Anchor>
    </React.Fragment>
  )
}
