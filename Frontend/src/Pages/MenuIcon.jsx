import { NavLink, useNavigate } from "react-router-dom"

function MenuIcon() {
  const navigate = useNavigate()

  return (
    <div className="fixed inset-0 z-50 bg-black/40">
      {/* Sliding Menu */}
      <div className="h-full w-64 bg-white p-6 transition-transform duration-300 ease-in-out">
        
        {/* Close Button */}
        <div
          className="text-3xl font-bold cursor-pointer mb-8"
          onClick={() => navigate(-1)}
        >
          ✕
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col gap-6 text-xl font-semibold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/products">Products</NavLink>
        </ul>
      </div>
    </div>
  )
}

export default MenuIcon
