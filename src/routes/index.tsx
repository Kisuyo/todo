import { createClient } from "@supabase/supabase-js"
import { createEffect, createSignal } from "solid-js"
import SearchBar from "~/components/searchBar"

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_CLIENT_ID
)

interface Todo {
  id: number
  name: string
  done: boolean
}

export default function Home() {
  const [todos, setTodos] = createSignal<Todo[]>([])
  const [input, setInput] = createSignal("")

  // const [expandedTodoInput, setExpandedTodoInput] = createSignal<number>(0)
  // const [note, setNote] = createSignal<string[]>([])

  // when first loading the page, get todos
  createEffect(async () => {
    if (todos !== null) {
      const { data } = await supabase.from("todos").select()
      // @ts-ignore
      setTodos(data)
    }
  })

  return (
    <>
      <div class="TodosPage">
        <div class="TitleContainer">
          <div class="Title">Todoist</div>
        </div>
        <div class="HamburgerMenu">
          <div class="HamburgerIcon">|||</div>
          <SearchBar placeholder="Search" data={todos()} />
          {/* <div class="TodosList">
            {todos().map((todo) => {
              if (todo.name !== "") {
                return (
                  <div class="Todo">
                    <span class="TodoContent">{todo.name}</span>
                    <button
                      class="DeleteTodoButton"
                      onClick={async () => {
                        // const { error } = await supabase
                        //   .from("todos")
                        //   .delete()
                        //   .match({ Note: todo })
                        // setNote(note().filter((t) => t !== todo))
                        // if (error) {
                        //   console.log(error)
                        // }
                      }}
                    >
                      <img src="x.svg" alt="X" class="XImage" />
                    </button>
                  </div>
                )
              }
            })}
          </div> */}
        </div>
        {/* <div class="Title">Todoist</div>

        <div class="TodosContainer">
          <div class="InputContainer">
            <input
              class="Input"
              id="note"
              type="text"
              onChange={(e) => setInput(e.currentTarget.value)}
            />
            <button
              class="TodoSubmit"
              onClick={async () => {
                const resp = await supabase
                  .from("todos")
                  .insert({ name: input() })
                  .select()
                if (resp?.data) {
                  setTodos([...todos(), resp.data[0]])
                }
              }}
            >
              <img src="check.svg" alt="check mark" class="CheckImage" />
            </button>
          </div>
        </div> */}
      </div>
    </>
  )
}
