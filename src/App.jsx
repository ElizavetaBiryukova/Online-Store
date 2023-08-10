
import './App.css';
import { BestSellers } from './Bestsellers';
import { Header } from './Header';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Product } from './Product';


const router = createBrowserRouter([
  {
    path: "/",
    element: <BestSellers />,
  },
  {
    path: "product",
    element: <Product />,
  },
]);


function App() {
  return (
    <div className='appContainer'>

      <hr className="divider" />
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
