import TopBar from "../components/TopBar"
import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"

function RouteLayout() {
    
  return (
    <div>
        <TopBar/>
        <Header/>
        <main className="min-h-screen">
            <Outlet/>
        </main>
        
        <Footer/>
    </div>
  )
}

export default RouteLayout