'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowBigLeft, ArrowBigRight, ArrowRight } from 'lucide-react'

function IntroPage() {
  return (
    <section className='intro flex flex-col justify-center items-center gap-10 p-5'>
      <motion.div
        initial={{ opacity: 0, y: -1000 }}  // Initial state
        animate={{ opacity: 1, y: 0 }}      // Enter animation
        exit={{ opacity: 0, y: 1000 }}      // Exit animation
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="introChild1 flex items-center justify-center">
        <Image
          src={'/Intro.svg'}
          alt='cloud'
          height={800}
          width={800}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 800 }}  // Initial state
        animate={{ opacity: 1, y: 0 }}      // Enter animation
        exit={{ opacity: 0, y: 1000 }}      // Exit animation
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="introChild2 flex flex-col items-center justify-center">
        <p className='p1 sm:P1mobile'>WEATHER</p>
        <p className='p2'>FORECAST</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 1000 }}  // Initial state
        animate={{ opacity: 1, y: 0 }}      // Enter animation
        exit={{ opacity: 0, y: 1000 }}      // Exit animation
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="introChild3 flex justify-center items-center">
        <Button
          variant={'outline'}
          className='btnStyle_Intro group'
        >
          <Link href="/home" className='flex gap-3 justify-center items-center group'>
            <div> Get Started</div>
            <div><ArrowRight size={50} className='group-hover:translate-x-2 transition-all group-hover:rotate-[-45deg] transition-2s duration-500'/></div>
          </Link>
        </Button>


      </motion.div>
    </section>
  )
}

export default IntroPage