import { createClient } from "@supabase/supabase-js"
import { createEffect, createSignal } from "solid-js"
import { styled } from "solid-styled-components"
import HamburgerMenu from "~/components/HamburgerMenu"
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
  const [showTodoDetails, setShowTodoDetails] = createSignal()
  const [showHamburgerMenu, setShowHamburgerMenu] = createSignal(false)

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
      <PageWrapper>
        <TitleContainer>
          <Title>Not Todoist</Title>
        </TitleContainer>
        <HamburgerMenu>
          <div>testing</div>
          {/* <div class="HamburgerIcon">|||</div>
          {todos().length > 0 && (
            <SearchBar
              setShowTodoDetails={setShowTodoDetails}
              placeholder="Search"
              todos={todos()}
            />
          )} */}
        </HamburgerMenu>
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
      </PageWrapper>
    </>
  )
}

const Title = styled("div")`
  font-size: clamp(2rem, 10vw, 20rem);
  color: #f5dfff;
  -webkit-text-stroke: 2px rgba(45, 15, 55, 50%);
  font-family: "Krub";
  font-weight: bold;
`

const TitleContainer = styled("div")`
  margin-right: 300px;
`

const PageWrapper = styled("div")`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  gap: 100px;
`
