import React from "react"

const SearchBox = ({ handleChange }) => {
  return (
    <fieldset className="w-48 mx-auto space-y-1 text-gray-800">
      <div className="relative">
        <span className="absolute inset-y-0 flex items-center pl-2">
          <svg viewBox="0 0 1024 1024" className="h-4 w-4">
            <path d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z" />
            <path d="M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z" />
          </svg>
        </span>
        <input
          className="w-64 rounded-md bg-gray-100 py-2 pl-10 text-sm text-gray-800 focus:bg-gray-50 focus:outline-none sm:w-auto"
          type="search"
          name="Search"
          placeholder="Enter city..."
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </fieldset>
  )
}

export default SearchBox
