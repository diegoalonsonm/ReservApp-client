import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-nf' style={{height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div className="container d-flex justify-content-center align-items-center">
            <div className='row'>
                <div className="col">
                    <h4>Developed by {' '}
                        <Link href="https://github.com/diegoalonsonm" className='text-black' target='_blank'>Diego Naranjo</Link>
                    </h4>
                    <p className="text-center">No copyright intended</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
