import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hm } from './hm';
import React from 'react';

// class Button extends React.Component {
//   render() {
//     return(
//       <button
//         className=' h-10 px-6 font-semibold rounded-full bg-[#FF4217] text-white hover:bg-[#FF4217]/90'
//         type='submit'
//       >
//         Meuli Ayena
//       </button>
//     );
//   }
// }

// function ButtonSlate() {
//   return(
//     <button
//       className=' h-10 px-6 font-semibold rounded-full bg-slate-500 text-white hover:bg-slate-600/90'
//       type='submit'
//     >
//       Meuli Ayena
//     </button>
//   );
// }  

const Link = ({ href, children }) => {
  return(
    <a href={href} className='text-blue-500 hover:underline'>{children}</a>
  );
}

const Button = ({ children, variant = "bg-[#FF4217]" }) => {
  return(
    <button
      className={`h-10 px -6 font-semibold rounded-full ${variant} text-white`}
      type='submit'
    >
      {children}
    </button>
  );
}

function App() {
  return(
    <div className='flex justify-center bg-black min-h-screen items-center'>
      <div className='flex gap-x-2'>
        <Button variant=" bg-[#FF4217] hover:bg-[#FF4217]/90">View All</Button>
        <Button variant=" bg-red-600 hover:bg-red-600/90"><Link href="https://www.google.com">Google</Link></Button>
      </div>
    </div>
  );
}

export default App
