import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div className='bg-white dark:bg-black p-0 m-0'>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
