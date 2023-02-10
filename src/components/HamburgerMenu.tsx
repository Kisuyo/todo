import { styled } from "solid-styled-components"
import { JSXElement } from "solid-js"

interface Props {
  children: JSXElement
  active: boolean
  setActive: (active: boolean) => void
}

export default function HamburgerMenu(props: Props) {
  return (
    <HamburgerMenuWrapper
      onClick={() => {
        props.setActive(true)
      }}
    >
      {!props.active && <div>not active</div>}
      {props.active && <div>active</div>}
      {/* <img src="menu.svg" /> */}
    </HamburgerMenuWrapper>
  )
}

const HamburgerMenuWrapper = styled("div")`
  background-color: #c9a5c979;
  width: 20%;
  height: 100vh;
`
