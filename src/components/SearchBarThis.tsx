import { createSignal } from "solid-js"
import { Todo } from "~/routes"

interface Props {
  todos: Todo[]
}

export default function SearchBar(props: Props) {
  const [searchedTodos, setSearchedTodos] = createSignal(props.todos)
  const [inFocus, setInFocus] = createSignal(false)

  const handleFilter = (event) => {
    const input = event.target.value
    const searchedTodos = props.todos.filter((todo) => {
      return todo.name.toLowerCase().includes(input.toLowerCase())
    })
    setSearchedTodos(searchedTodos)
  }

  return (
    <>
      <div class="SearchBarContainer">
        <div class="SearchInputContainer">
          <input
            class="SearchInput"
            type="text"
            placeholder={"Search"}
            onInput={handleFilter}
            onFocus={() => {
              setInFocus(true)
            }}
            onFocusOut={() => {
              setInFocus(false)
            }}
          />
          <div class="SearchIcon">
            <img src="search.svg" alt="Search" />
          </div>
        </div>
        {searchedTodos().length != 0 && (
          <div class="SearchResults">
            {searchedTodos().map((value) => {
              //@ts-ignore
              return (
                <div class="SearchResultContainer">
                  <div
                    onClick={() => {
                      // setShowTodoDetails(value.id)
                    }}
                    class="SearchResult"
                  >
                    {value.name}
                  </div>
                  <div class="RemoveTodo">
                    {/* <button
                      class="RemoveTodo"
                      // onClick={async () => {
                      //   const { error } = await database
                      //     .from("todos")
                      //     .delete()
                      //     .match({ Note: value })
                      //   setNote(note().filter((t) => t !== value))
                      //   if (error) {
                      //     console.log(error)
                      //   }
                      // }}
                    >
                      <img src="x.svg" alt="X" class="XImage" />
                    </button> */}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
