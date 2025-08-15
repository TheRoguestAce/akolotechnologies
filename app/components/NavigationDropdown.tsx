'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function NavigationDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1">
        The Rogue Ace
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
          <Link 
            href="/info" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Info
          </Link>
          <Link 
            href="/privacy-policy" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/contact-info" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Contact Info
          </Link>
        </div>
      )}
    </div>
  )
} 