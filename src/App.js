import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Book from './Components/Book/Book';
import Menu from './Components/Menu/Menu';



function App() {
  let router= createBrowserRouter([
    {path:"", element: <Layout />, children:[
      {index:true, element: <Home />},
      {path:"menu", element: <Menu />},
      {path:"about", element: <About />},
      {path:"book", element: <Book />}
    ]}
    
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
