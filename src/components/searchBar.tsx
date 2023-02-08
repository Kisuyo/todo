import { createClient } from "@supabase/supabase-js"
import { createEffect, createSignal } from "solid-js"

export default function SearchBar({ placeholder, data }) {
  const [filteredTodos, setFilteredTodos] = createSignal([])
  //   console.log(data)
  const handleFilter = (event) => {
    const searchedWord = event.target.value
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchedWord.toLowerCase())
    })
    setFilteredTodos(newFilter)
  }
  return (
    <>
      <div class="SearchBarContainer">
        <div class="SearchInputContainer">
          <input
            class="SearchInput"
            type="text"
            placeholder={placeholder}
            onChange={handleFilter}
          />
          <div class="SearchIcon">Icon</div>
        </div>
        {filteredTodos().length != 0 && (
          <div class="SearchResults">
            {filteredTodos().map((value) => {
              //@ts-ignore
              return <div class="SearchResult">{value.name}</div>
            })}
          </div>
        )}
      </div>
    </>
  )
}
