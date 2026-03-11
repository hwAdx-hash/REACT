import './App.css'
import Button from './components/Elements/Button/index';
import Input from './components/Elements/Input/Input';
import Label from './components/Elements/Input/Label';

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

function App() {
  return(
    <div className='flex justify-center bg-black min-h-screen items-center'>
      <div className=" w-full max-w-xs">
        <h1 className=' text-white text-center font-semibold text-xl font-mono mb-3'>Login</h1>
        <form action="">
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder='Masukan email anda' />
          </div>
          <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder='Masukan password anda' />
          </div>
          <Button classname="bg-[#FF4217] hover:bg-[#FF4217]/90 w-full mt-2">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default App
