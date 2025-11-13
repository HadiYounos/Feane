import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Book from './Components/Book/Book';
import Menu from './Components/Menu/Menu';
import Cart from './Components/Cart/Cart';



function App() {
  let router= createBrowserRouter([
    {path:"", element: <Layout />, children:[
      {index:true, element: <Home />},
      {path:"Menu", element: <Menu />},
      {path:"About", element: <About />},
      {path:"Book", element: <Book />},
      {path:"Cart", element: <Cart/>}
    ]}
    
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
