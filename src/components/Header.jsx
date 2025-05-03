import { useEffect, useState } from 'react';
import { Menu, Search } from 'lucide-react';
import appLogo from '../assets/logo.png'
import { Link } from 'react-router-dom';

export default function SidebarHeader() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Home')
  
  const handleActiveMenu = (name) => {
    setActiveMenu(name)
    localStorage.setItem('activeMenu', name)
  }

  useEffect(() => {
    let menuName = localStorage.getItem('activeMenu')
    if(menuName){
      setActiveMenu(menuName)
    }
  },[])

  return (
    <header className="flex items-center justify-between px-4 py-2 md:px-8">
      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded bg-orange-100">
          <Menu className="text-orange-700" />
        </button>
      </div>

      {/* Logo */}
      <div className="text-center md:text-left">
        <h1 className="text-green-700 font-bold text-xl leading-none">
          <img alt='camput unlock' src={appLogo}></img>
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-6 ml-10 text-black font-medium">
        <Link onClick={() => handleActiveMenu('Home')} className={`${activeMenu == 'Home' ? 'text-[#F37921]' : ''}`} to="/">Home</Link>
        <div className="relative group">
          <button className="flex items-center gap-1">Programs ▼</button>
        </div>
        <div className="relative group">
          <button className="flex items-center gap-1">Universities ▼</button>
        </div>
        <Link onClick={() => handleActiveMenu('Home')} to="/">About Us</Link>
        <Link onClick={() => handleActiveMenu('Contact')} to="/contect" className={`${activeMenu == 'Contact' ? 'text-[#F37921]' : ''}`}>Contact</Link>
      </nav>

      {/* Search & Account */}
      <div className="flex items-center gap-4">
      <div
          className={`flex items-center border border-orange-300 bg-orange-100 px-3 py-2 rounded-full transition-all duration-300 overflow-hidden ${
            isSearchExpanded ? 'w-64' : 'w-30'
          }`}
          onClick={() => setIsSearchExpanded(true)}
        >
          <Search className="text-orange-700 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className={`bg-transparent outline-none text-black transition-opacity duration-300
              opacity-100 w-full ml-1
            `}
            autoFocus={isSearchExpanded}
            onBlur={() => setIsSearchExpanded(false)}
          />
        </div>

        <button className="bg-[#F37921] hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-xl shadow">
          My Account
        </button>
      </div>
    </header>
  );
}
