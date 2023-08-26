import React from 'react'

const PublicEvent = ({event}) => {
  return (
    <>
<div>
    <h1>PublicEvent</h1>
    <p>{event.type}</p>
</div>
      
    </>
  )
}

export default PublicEvent