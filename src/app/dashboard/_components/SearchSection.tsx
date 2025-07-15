import React from 'react'
import { Search } from 'lucide-react'

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className="p-10 
    flex flex-col justify-center items-center text-white" style={{background: "linear-gradient(90deg, #2b0a68, #6328e0)"}}>
  <h2 className="text-3xl font-bold">Browse All Templates</h2>
  <p>What would you like to create today?</p>
  
  <div className="w-full flex justify-center">
    <div className="flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%">
        <Search  className="text-primary" />
        <input
          type="text"
          onChange={(e)=>onSearchInput(e.target.value)}
          placeholder="Search"
          className="bg-transparent w-full outline-none text-black"
        />
    </div>
  </div>
</div>

  )
}

export default SearchSection
