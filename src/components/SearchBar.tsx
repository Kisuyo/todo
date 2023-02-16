import { SupabaseClient } from "@supabase/supabase-js"
import { createEffect, createSignal } from "solid-js"
import { Todo } from "~/routes"

interface Props {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
  db: SupabaseClient
}

export default function SearchBar(props: Props) {
  const [searchedTodos, setSearchedTodos] = createSignal(props.todos)
  const [inFocus, setInFocus] = createSignal(false)

  // createEffect(() => {
  //   if (props.todos) {
  //     setSearchedTodos(props.todos)
  //   }
  // })

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
              return (
                <div class="SearchResultContainer">
                  <div class="SearchResult">{value.name}</div>
                  <div class="RemoveTodo">
                    <button
                      class="RemoveTodo"
                      onClick={async () => {
                        const { error } = await props.db
                          .from("todos")
                          .delete()
                          .match({ id: value.id })
                        if (error) {
                          console.log(error, "failed to delete todo")
                          // TODO: show error in toast
                          return
                        }
                        setSearchedTodos(
                          props.todos.filter((t) => t.id !== value.id)
                        )
                        // props.setTodos(
                        //   props.todos.filter((t) => t.id !== value.id)
                        // )
                        // console.log("success!")
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
