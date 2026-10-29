import { NavLink } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-primary py-8 text-white">

        <div className="flex items-center justify-between flex-col lg:flex-row  max-w-[90%] lg:max-w-5xl mx-auto">
            <div>Copyright &#169; - MasterIT Store</div>
            <div className="flex items-center gap-4">
                <NavLink to="">Home</NavLink>
                <NavLink to="">Contact Us</NavLink>
                <NavLink to="">About Us</NavLink>
                <NavLink to="">Term and conditional</NavLink>
            </div>
        </div>
    </footer>
  )
}

export default Footer