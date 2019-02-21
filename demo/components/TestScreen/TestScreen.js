import React, { useState } from 'react'
import { useVisible } from 'componentry'

export default function TestScreen() {
  const [active, udpateActive] = useState(false)

  const { active: _active, visible } = useVisible(active)

  return (
    <div>
      <button type="button" onClick={() => udpateActive(!active)}>
        Toggle
      </button>
      <div aria-hidden={!_active} className={`fade${visible ? ' show' : ''}`}>
        CONTENT
      </div>
    </div>
  )
}
