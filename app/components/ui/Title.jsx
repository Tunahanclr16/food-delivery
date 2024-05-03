import React from 'react'

export default function Title({title,addClass}) {
  return (
    <div className={`${addClass}`}>
      {title}
    </div>
  )
}

