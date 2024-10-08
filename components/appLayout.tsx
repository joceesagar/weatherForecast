'use client'
import React, { useState } from 'react'
import IntroPage from './introPage'

function AppLayout() {
    const[intro, setIntro] = useState<boolean>(true)
  return (
    <section>
        {intro && <IntroPage/>}
    </section>
  )
}

export default AppLayout