import { createClient } from "@supabase/supabase-js"
import { createEffect, createSignal } from "solid-js"

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_CLIENT_ID
)

interface Todo {
  id: number
  Note: string
  Confirmation: boolean
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
        <div class="Title">Todoist</div>
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
                  .insert({ Note: input() })
                  .select()
                if (resp?.data) {
                  setTodos([...todos(), resp.data[0]])
                }
              }}
            >
              <img src="check.svg" alt="check mark" class="CheckImage" />
            </button>
          </div>
          <div class="TodosList">
            {todos().map((todo) => {
              if (todo.Note !== "") {
                return (
                  <div class="Todo">
                    <span>{todo.Note}</span>
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
          </div>
        </div>
      </div>
    </>
  )
}
