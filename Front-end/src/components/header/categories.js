import { useState } from 'react'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'
import Link from 'next/link'

const categories = [
  {
    name: 'Electronics',
    subcategories: ['Smartphones', 'Laptops', 'Tablets', 'Accessories']
  },
  {
    name: 'Clothing',
    subcategories: ['Men\'s', 'Women\'s', 'Kids', 'Shoes']
  },
  {
    name: 'Home & Garden',
    subcategories: ['Furniture', 'Decor', 'Kitchen', 'Outdoor']
  },
  {
    name: 'Books',
    subcategories: ['Fiction', 'Non-fiction', 'Educational', 'Children\'s']
  }
]

export default function Categories() {
  // State to handle dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="relative">
      {/* Categories Button */}
      {/* On click, toggle the dropdown menu */}
      <button
        onClick={toggleDropdown}
        className="md:flex items-center space-x-1 hover:text-blue-600"
      >
        Categories <FiChevronDown className="ml-1 h-4 w-4" />
      </button>

      {/* Categories Dropdown */}
      {/* This dropdown will be displayed based on state (isDropdownOpen) */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 bg-white border rounded-md shadow-md w-56">
          {categories.map((category) => (
            <div key={category.name} className="relative group">
              {/* Category Item */}
              <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <span>{category.name}</span>
                <FiChevronRight className="h-4 w-4" />
              </div>

              {/* Subcategories Dropdown */}
              <div className="absolute top-0 left-full bg-white border rounded-md shadow-md w-48 hidden group-hover:block">
                {category.subcategories.map((subcat) => (
                  <Link
                    key={subcat}
                    href={`/category/${category.name.toLowerCase()}/${subcat.toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {subcat}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
