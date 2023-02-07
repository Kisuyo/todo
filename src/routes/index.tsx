import { Title } from "solid-start"
import { css } from "solid-styled"
// import styled, { css } from "styled-components"
import { createClient } from "@supabase/supabase-js"
import { createEffect, createSignal, on, onMount } from "solid-js"

const supabase = createClient(
  "https://pitnxbieegmcccziqtpw.supabase.co",
  import.meta.env.VITE_SUPABASE_CLIENT_ID
)

interface Todo {
  id: number
  Note: string
  confirmation: boolean
}

export default function Home() {
  const [todos, setTodos]: any = createSignal([])
  const [input, setInput] = createSignal("")
  const [extension, setExtension] = createSignal(false)
  const [note, setNote] = createSignal<string[]>([])

  // when first loading, go get todos
  createEffect(async () => {
    const { data, error } = await supabase.from("todos").select()
    if (todos !== null) {
      let note: string[] = []
      let id: number[] = []
      data?.map((todo: Todo) => {
        note.push(todo.Note)
        // id.push(todo.id)
      })
      setTodos(data)
      setNote(note)
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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Krub:wght@700&display=swap"
        rel="stylesheet"
      />
      <div class="MainWrapper">
        <div class="Wrapper">
          <div class="Title">Todos!</div>
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

                  setNote([...note(), input()])
                  if (error) {
                    console.log(error)
                  }
                }}
              >
                <img src="check.svg" alt="check mark" class="CheckImage" />
              </button>
            </div>
            <div class="DataWrapper">
              {note().map((todo) => {
                let idForCss

                todos().map((id) => {
                  if (id.Note === todo) {
                    idForCss = id.id
                    // console.log(idForCss, "Css ID")
                  }
                })
                // console.log(idForCss, "Outside the map")
                if (todo !== "") {
                  return (
                    <div class="DataAndButton">
                      <div
                        class={extension() ? "DataExtended" : "Data"}
                        onClick={(e) => {
                          if (extension() === true) {
                            setExtension(false)
                          } else {
                            setExtension(true)
                          }
                          console.log(e.target.id)
                        }}
                      >
                        <div
                          class={extension() ? "DataTextExtended" : "DataText"}
                          id={idForCss}
                        >
                          {todo}
                        </div>
                      </div>
                      <button
                        class="DataButton"
                        onClick={async () => {
                          const { error } = await supabase
                            .from("todos")
                            .delete()
                            .match({ Note: todo })

                          setNote(note().filter((t) => t !== todo))
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
