import React from 'react'
import { useSteps } from 'mdx-deck'

export default ({ num }) => {
  const step = useSteps(num)

  return (
    <>
      <h2>
        The current step is {step + 1}/{num}
      </h2>
      {step + 1 === num ? <small>New slide is next</small> : null}
    </>
  )
}