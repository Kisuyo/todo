import { styled } from "solid-styled-components"
import { JSXElement } from "solid-js"

interface Props {
  children: JSXElement
  active: boolean
  setActive: (active: boolean) => void
}

export default function HamburgerMenu({ children, active, setActive }: Props) {
  return (
    <HamburgerMenuWrapper
      onClick={() => {
        setActive(true)
      }}
    >
      {!active && <div>not active</div>}
      {active && <div>active</div>}
      {/* <img src="menu.svg" /> */}
    </HamburgerMenuWrapper>
  )
}

const HamburgerMenuWrapper = styled("div")`
  background-color: #c9a5c979;
  width: 20%;
  height: 100vh;
`
