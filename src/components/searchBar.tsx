import { createSignal } from "solid-js"
import { createEffect } from "solid-js/types/reactive/signal"
import { Todo } from "~/routes"

// interface Props {
//   placeholder: string
//   todos: Todo[]
//   // setShowTodoDetails: (value: number) => void
// }

export default function SearchBar({ placeholder, todos, database }) {
  const [filteredTodos, setFilteredTodos] = createSignal(todos)
  // console.log(todos, "todos")
  console.log(database)

  const handleFilter = (event) => {
    const input = event.target.value
    const filteredTodos = todos.filter((todo) => {
      return todo.name.toLowerCase().includes(input.toLowerCase())
    })
    console.log(filteredTodos, "filteredTodos")
    setFilteredTodos(filteredTodos)
  }

  return (
    <>
      <div class="SearchBarContainer">
        <div class="SearchInputContainer">
          <input
            class="SearchInput"
            type="text"
            placeholder={placeholder}
            onInput={handleFilter}
          />
          <div class="SearchIcon">
            <img src="search.svg" alt="Search" />
          </div>
        </div>
        {filteredTodos().length != 0 && (
          <div class="SearchResults">
            {filteredTodos().map((value) => {
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
                    <button
                      class="DeleteTodoButton"
                      onClick={async () => {
                        const { error } = await database
                          .from("todos")
                          .delete()
                          .match({ Note: value })
                        setNote(note().filter((t) => t !== value))
                        if (error) {
                          console.log(error)
                        }
                      }}
                    >
                      <img src="x.svg" alt="X" class="XImage" />
                    </button>
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
