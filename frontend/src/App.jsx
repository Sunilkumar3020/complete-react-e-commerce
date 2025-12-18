import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import Products from "./pages/Products/Products"
import ProtectRouted from "./components/ProtectedRoute"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={
            <ProtectRouted>
              <Products />
            </ProtectRouted>}
          />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
