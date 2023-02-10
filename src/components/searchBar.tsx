import { createSignal } from "solid-js"
import { Todo } from "~/routes"

interface Props {
  placeholder: string
  todos: Todo[]
  setShowTodoDetails: (value: number) => void
}

export default function SearchBar({
  placeholder,
  todos,
  setShowTodoDetails,
}: Props) {
  const [filteredTodos, setFilteredTodos] = createSignal(todos)
  console.log(todos, "todos")

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
          <div class="SearchIcon">Icon</div>
        </div>
        {filteredTodos().length != 0 && (
          <div class="SearchResults">
            {filteredTodos().map((value) => {
              //@ts-ignore
              return (
                <div
                  onClick={() => {
                    setShowTodoDetails(value.id)
                  }}
                  class="SearchResult"
                >
                  {value.name}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
