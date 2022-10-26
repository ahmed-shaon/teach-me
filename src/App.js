import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return <div className='bg-white dark:bg-base-100'><RouterProvider router ={routes}/>
  <Toaster />
  </div>
}

export default App;
