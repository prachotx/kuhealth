import React from 'react'
import { RiErrorWarningLine } from "react-icons/ri";

function Warn() {
  return (
    <header className='max-w-6xl m-auto mt-5 px-5 text-center md:text-left md:px-10  lg:px-20'>
        <div className='bg-yellow-200 rounded p-2 opacity-80'>
            <h2 className='flex flex-col items-center md:flex-row lg:flex-row'><RiErrorWarningLine className='text-xl mr-2' />เว็บไซต์นี้ทำขึ้นเพื่อแนะนำและให้ข้อมูลสำหรับนักศึกษามหาลัยเกษตรศาสตร์ วิทยาเขตเฉลิมพระเกียรติ สกลนคร</h2>
        </div>
    </header>
  )
}

export default Warn