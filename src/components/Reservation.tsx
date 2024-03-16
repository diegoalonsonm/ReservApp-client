import Link from 'next/link'
import React from 'react'

export const Reservation = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className='mt-5'>
        <h1>Reserve with us</h1>
      </div>
      <div className='card w-50 my-5 p-5 text-center'>
        <p className='h5 fw-normal'>
          If you liked any of the venues, please go to the next page and reserve your spot
        </p>
        <p className='h5 fw-normal mt-2'>
          You can also check more information about the venue in their respective page
        </p>
        <p className='h6 fw-normal mt-2'>
          Feel free to text us whenever you need help {''}
            <Link href="https://www.linkedin.com/in/diegonaranjo03/" className='text-black'>in the following link</Link>
        </p>
        <div className="d-inline-block">
          <Link href="/reservations" className="btn btn-primary mt-3">
            Reserve Now
          </Link>
        </div>
      </div>
    </div>
  )
}
