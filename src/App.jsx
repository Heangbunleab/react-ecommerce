import { BrowserRouter,Route,Routes } from "react-router-dom"
import RouteLayout from "./layouts/RouteLayout"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Contact from "./pages/Contact"
import About from "./pages/About"
import ProductDetail from "./pages/ProductDetail"

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<RouteLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/product/:id" element={<ProductDetail/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App