import { Title } from "solid-start"
import { css } from "solid-styled"
// import styled, { css } from "styled-components"
import { createClient } from "@supabase/supabase-js"
import { createEffect, createSignal, onMount } from "solid-js"

const supabase = createClient(
  "https://pitnxbieegmcccziqtpw.supabase.co",
  import.meta.env.VITE_SUPABASE_CLIENT_ID
)

export default function Home() {
  const [todos, setTodos] = createSignal<any[]>([])
  const [input, setInput] = createSignal("")

  // when first loading, go get todos
  onMount(async () => {
    const { data, error } = await supabase.from("todos").select()
    console.log(data)
    if (data !== null) {
      setTodos(data)
    }
  })

  css`
    .NoteWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .Input {
    }
    main {
      background-color: red;
      height: 100vh;
    }
  `

  return (
    <main class="Main">
      <div class="MainWrapper">
        <div class="Wrapper">
          <div class="NoteWrapper">
            <div class="InputWrapper">
              <input
                class="Input"
                id="note"
                type="text"
                onChange={(e) => setInput(e.currentTarget.value)}
              />
              <button
                class="SubmitButton"
                onClick={async () => {
                  const { error } = await supabase
                    .from("todos")
                    .insert({ Note: input() })
                  setTodos([...todos()])
                  if (error) {
                    console.log(error)
                  }
                }}
              >
                Submit
              </button>
            </div>
            <div class="DataWrapper">
              {todos().map((todo) => {
                if (todo.Note !== null) {
                  return (
                    <div class="DataAndButton">
                      <div class="Data">{todo.Note}</div>
                      <button
                        class="DataButton"
                        onClick={async () => {
                          const { error } = await supabase
                            .from("todos")
                            .delete()
                            .eq("id", 1)

                          // setTodos([...todos()])
                          if (error) {
                            console.log(error)
                          }
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
      </div>
    </main>
  )
}
