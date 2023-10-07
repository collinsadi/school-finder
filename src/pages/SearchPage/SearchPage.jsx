// stylesheet
import "./style/SearchPage.css";

// components
import SearchNav from './components/SearchNav'
import SearchBox from "./components/SearchBox";
import SearchDetail from "./components/SearchDetail";
import { useState } from "react";
import { apiUrl } from "../../config";


const SearchPage = () => {
  const [search, setSearch] = useState("")

  const [schools, setSchools] = useState(null)


  const handleSearch = async () => {


    
    const response = await fetch(apiUrl + "/search?where=location&keyword="+search, {
      method: "GET",
      headers:{
        "Content-Type":"application/json"
      }
    })

    const data = await response.json()
    console.log(data)
    setSchools(data.schools)

    // alert(data.message)

  }

  return (
    <main className="search_page">
      <SearchNav/>
      <SearchBox handleSearch={handleSearch} setSearch={setSearch} search={search} />
      <SearchDetail schools={schools} setSchools={setSchools} />
    </main>
  )
}

export default SearchPage