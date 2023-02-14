import { createSignal, JSXElement } from "solid-js"
import SearchBar from "~/components/SearchBar"

const [showHamburgerMenu, setShowHamburgerMenu] = createSignal(false)

export default function HamburgerMenu(props) {
  return (
    <div>
      <div
        class="HamburgerIcon"
        onClick={() => {
          if (showHamburgerMenu() === true) {
            setShowHamburgerMenu(false)
            if (window.innerWidth <= 768) {
              props.setShowTitle(true)
            } else if (window.innerWidth > 768) {
              props.setShowTitle(true)
            }
          } else {
            setShowHamburgerMenu(true)
            // props.setShowTitle(false)
            if (window.innerWidth <= 768) {
              props.setShowTitle(false)
            } else if (window.innerWidth > 768) {
              props.setShowTitle(true)
            }
          }
        }}
      >
        <img src="./public/menu.svg" alt="Menu" />
      </div>
      {showHamburgerMenu() && (
        <div
          class={
            showHamburgerMenu()
              ? "HamburgerMenuWrapperActive"
              : "HamburgerMenuWrapper"
          }
        >
          {props.data.length > 0 && (
            <SearchBar
              // setShowTodoDetails={setShowTodoDetails}
              placeholder="Search"
              todos={props.data}
            />
          )}
        </div>
      )}
    </div>
  )
}
