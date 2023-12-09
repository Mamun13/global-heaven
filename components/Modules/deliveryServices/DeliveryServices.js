import React from 'react'
import { Container } from 'react-bootstrap'
import { BsTruck,BsArrowRepeat } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { CiBadgeDollar } from 'react-icons/ci';
import { AiOutlineTag } from 'react-icons/ai';

const DeliveryServices = () => {
  return (
    <>
      <section>
        <Container className='px-0'>
          <div className='border px-3 py-3 my-3'>
            <div className='d-flex justify-content-around'>
              <div className='d-flex align-items-center border-end pe-5'>
                <div><BsTruck size={"40px"} className='text_color'/></div>
                <div className='text-center ms-3'>
                  <p className='text-capitalize fw-semibold'>free delivery</p>
                  <span className=' font-12'>from $50</span>
                </div>
              </div>
              <div className='d-flex align-items-center border-end pe-5'>
                <div><FiUsers size={"40px"} className='text_color'/></div>
                <div className='text-center ms-3'>
                  <p className='text-capitalize fw-semibold'>99% customer</p>
                  <span className=' font-12'>Feedback</span>
                </div>
              </div>
              <div className='d-flex align-items-center border-end pe-5'>
                <div><BsArrowRepeat size={"40px"} className='text_color'/></div>
                <div className='text-center ms-3'>
                  <p className='text-capitalize fw-semibold'>365 days</p>
                  <span className=' font-12'>for free return</span>
                </div>
              </div>
              <div className='d-flex align-items-center border-end pe-5'>
                <div><CiBadgeDollar size={"40px"} className='text_color'/></div>
                <div className='text-center ms-3'>
                  <p className='text-capitalize fw-semibold'>payment</p>
                  <span className='text-capitalize font-12'>secure system</span>
                </div>
              </div>
              <div className='d-flex align-items-center'>
                <div><AiOutlineTag size={"40px"} className='text_color'/></div>
                <div className='text-center ms-3'>
                  <p className='text-capitalize fw-semibold'>only best</p>
                  <span className='text-capitalize font-12'>Brands</span>
                </div>
              </div>
              
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default DeliveryServices