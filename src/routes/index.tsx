import { Title } from "solid-start"
// import styled, { css } from "styled-components"
import { createClient } from "@supabase/supabase-js"
import { createEffect, createSignal, onMount } from "solid-js"
import { css } from "solid-styled"

const supabase = createClient(
  "https://pitnxbieegmcccziqtpw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpdG54YmllZWdtY2NjemlxdHB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ2NDk4MjAsImV4cCI6MTk5MDIyNTgyMH0.O-p3_Ghd9szTGnncSuWapQt5nbN3g3soRNUjpvlnRv8"
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
    SubmitButton {
      color: blue;
    }
  `
  return (
    <main>
      <div>
        <div></div>
        <div>
          <input
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

          {todos().map((todo) => {
            if (todo.Note !== null) {
              return <div>{todo.Note}</div>
            }
          })}
        </div>
      </div>
    </main>
  )
}
