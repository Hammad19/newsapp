import React from 'react'
import loading from './loading.gif'

export default function Spinner(props) {
  return (

    props.loading &&<div className="text-center">
      <img src={loading} alt ="loading"  />
    </div>
  )
}
