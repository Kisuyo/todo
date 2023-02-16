import { createClient } from "@supabase/supabase-js"
import { createEffect, createSignal } from "solid-js"
import SearchBar from "~/components/SearchBar"

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_CLIENT_ID
)

export interface Todo {
  id: number
  name: string
  done: boolean
}

export default function Home() {
  const [todos, setTodos] = createSignal<Todo[]>([])
  const [input, setInput] = createSignal("")
  const [showTitle, setShowTitle] = createSignal(true)

  createEffect(async () => {
    // when first loading the page, get todos
    if (todos !== null) {
      const { data } = await supabase.from("todos").select()
      // @ts-ignore
      setTodos(data)
    }
  })

  return (
    <>
      <div class="PageWrapper">
        {showTitle() && (
          <div class="MainWrapper">
            <div class="Title">TaskPanda</div>
            <div class="TodosContainer">
              <div class="InputContainer">
                <input
                  class="Input"
                  placeholder="Write todo"
                  id="note"
                  type="text"
                  onInput={(e) => setInput(e.currentTarget.value)}
                  onKeyPress={async (e) => {
                    if (e.key === "Enter") {
                      const resp = await supabase
                        .from("todos")
                        .insert({ name: input() })
                        .select()
                      if (resp?.data) {
                        setTodos([...todos(), resp.data[0]])
                        // @ts-ignore
                        e.target.value = ""
                        setInput("")
                      }
                    }
                  }}
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
                  {input().length > 0 && (
                    <img src="check.svg" alt="check mark" class="CheckImage" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
        {todos().length > 0 && (
          <SearchBar todos={todos()} setTodos={setTodos} db={supabase} />
        )}
        {/* <div class="HamburgerIcon">|||</div>
        {todos().length > 0 && (
          <SearchBar
            // setShowTodoDetails={setShowTodoDetails}
            placeholder="Search"
            todos={todos()}
          />
        )} */}
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
        {/* {todos().map((value) => {})} */}
        {/* <div class="Title">Todoist</div> */}
      </div>
    </>
  )
}
