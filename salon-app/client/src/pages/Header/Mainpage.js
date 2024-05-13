import React from 'react';
import logo from '../icons/logo.png';
import menu from '../icons/menu.png';
import img1 from '../images/img1.jpg';

export default function Mainpage() {
  return (
    <div className=''>
        <header className='bg-black flex justify-between px-5'>
            <img className=''src={logo}  />
            <img className='w-24 h-20 p-4 ' src={menu}  />
    
        </header>
        <div className='bg-red mt-5'>
            <img className='mt-15 p-6 rounded-xl align-center justify-center items-center ' src={img1} />

            <h1 className='Times New Roman '>SALON INOKA</h1>
            <h2>Where Your Hair Dreams Come True</h2>




        </div>
    </div>
  )
}

