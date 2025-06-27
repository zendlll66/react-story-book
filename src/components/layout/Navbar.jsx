import React from 'react'

const menuItems = ['Home', 'About Us', 'Our Team', 'Project', 'Contact Us'];
const Logo = () => {
    return (
        <div className="flex items-center">
            <span className="text-2xl font-bold text-black">FAKE ME</span>
        </div>
    )
}
const Navbar = () => {
    return (
        <nav className="w-full h-14 flex items-center justify-between backdrop-blur-md px-10 fixed top-0 left-0 z-50">
            {/* Logo */}
            <div className="flex items-center">
                <Logo />
            </div>
            {/* Menu */}
            <ul className="flex gap-8 list-none m-0 p-0 ">
                {menuItems.map(item => (
                    <li
                        key={item}
                        className="text-black font-normal text-base cursor-pointer py-1 border-b-2 border-transparent hover:border-black transition-all duration-200"
                    >
                        {item}
                    </li>
                ))}
            </ul>
            {/* Profile Icon */}
            <div className="w-7 h-7 rounded-full border border-white flex items-center justify-center text-white">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
                </svg>
            </div>
        </nav>
    )
}

export default Navbar