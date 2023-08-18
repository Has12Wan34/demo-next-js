import React from 'react'

type Props = {
    params : any
}

export default function DetailPage (props: Props){
  return (
    <div>page {props.params.id}</div>
  )
}