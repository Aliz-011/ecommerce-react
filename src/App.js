import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Favorite from './pages/Favorite';
import Home from './pages/Home';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import ProductDetails from './pages/ProductDetails';
import Store from './pages/Store';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/:slug" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/place-order" element={<PlaceOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
