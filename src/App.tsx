import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Sun, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <nav className="bg-white shadow-lg fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <Sun className="h-8 w-8 text-yellow-500" />
                  <span className="text-2xl font-bold text-gray-800">ShreenathSolar</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-700 hover:text-yellow-500 px-3 py-2 font-medium transition-colors">
                  Home
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-yellow-500 px-3 py-2 font-medium transition-colors">
                  About Us
                </Link>
                <Link to="/services" className="text-gray-700 hover:text-yellow-500 px-3 py-2 font-medium transition-colors">
                  Services
                </Link>
                <Link to="/projects" className="text-gray-700 hover:text-yellow-500 px-3 py-2 font-medium transition-colors">
                  Projects
                </Link>
                <Link to="/contact" className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors">
                  Contact Us
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-yellow-500"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
                <Link
                  to="/"
                  className="block px-3 py-2 text-gray-700 hover:text-yellow-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 text-gray-700 hover:text-yellow-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/services"
                  className="block px-3 py-2 text-gray-700 hover:text-yellow-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/projects"
                  className="block px-3 py-2 text-gray-700 hover:text-yellow-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-gray-700 hover:text-yellow-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </nav>

        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2">
                  <Sun className="h-8 w-8 text-yellow-500" />
                  <span className="text-xl font-bold">ShreenathSolar</span>
                </div>
                <p className="mt-4 text-gray-400">
                  Powering a sustainable future with innovative solar solutions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-yellow-500">Home</Link></li>
                  <li><Link to="/about" className="text-gray-400 hover:text-yellow-500">About Us</Link></li>
                  <li><Link to="/services" className="text-gray-400 hover:text-yellow-500">Services</Link></li>
                  <li><Link to="/projects" className="text-gray-400 hover:text-yellow-500">Projects</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400">Residential Solar</li>
                  <li className="text-gray-400">Commercial Solar</li>
                  <li className="text-gray-400">Solar Maintenance</li>
                  <li className="text-gray-400">Energy Consulting</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>shreenathsolar1960@gmail.com</li>
                  <li>+91 70204 15411</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} ShreenathSolar. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;