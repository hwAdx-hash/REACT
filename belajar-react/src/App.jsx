import './App.css'
import LoginPages from './Pages/login';
import RegisterPages from './Pages/register';

function App() {
  return(
    <div className='flex justify-center bg-black min-h-screen items-center'>
      {/* <LoginPages></LoginPages> */}
      <RegisterPages />
    </div>
  );
}

export default App;
