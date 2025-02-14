import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-8 bg-purple-600 text-white text-center'>
        <div>© 2024 BitLinks URL Shortener. All rights reserved.</div>
        <div><Link href={"/privacy"}>Privacy Policy </Link>|<Link href={"/terms"}> Terms of Service</Link></div>
    </footer>
  )
}

export default Footer