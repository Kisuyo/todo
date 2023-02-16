// @refresh reload
import { Suspense } from "solid-js"
import { useAssets } from "solid-js/web"
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start"
import { css, renderSheets, StyleRegistry } from "solid-styled"

function GlobalStyles() {
  css`
    @global {
      body {
        font-family: Gordita, Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
          "Helvetica Neue", sans-serif;
        /* background-color: red; */
        padding: 0px;
        margin: 0;
        background-color: #0d0d0d;
      }

      a {
        margin-right: 1rem;
      }

      main {
        /* text-align: center;
        padding: 1em;
        margin: 0 auto; */
      }

      h1 {
        color: #87baf8;
        text-transform: uppercase;
        font-size: 4rem;
        font-weight: 100;
        line-height: 1.1;
        margin: 4rem auto;
        max-width: 14rem;
      }

      p {
        max-width: 14rem;
        margin: 2rem auto;
        line-height: 1.35;
      }
      [contenteditable] {
  outline: none;
}

      @media (min-width: 480px) {
        h1 {
          max-width: none;
        }

        p {
          max-width: none;
        }
      }
      .PageWrapper {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        /* align-items: center; */
        height: 100vh;
        gap: 100px;
      }
      .MainWrapper {
        display: flex;
        justify-self: center;
        align-self: center;
        flex-direction: column;
      }
      .TitleContainer {
        /* margin-right: 300px; */
      }
      @media (max-width: 768px) {
        .TitleContainer {
          margin-right: 100px;
        }
      }

      .TodosContainer {
        width: 100%;
      }
      .TodosList {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 30px;
      }
      .InputContainer {
        display: flex;
        justify-content: center;
        gap: 30px;
        margin-bottom: 30px;
        background-color: white;
        border-radius: 2px;
      }
      .Input {
        appearance: none;
        width: 100%;
        padding: 20px;
        border-radius: 40px;
        outline: none;
        border: none;
        font-size: 25px;
      }
      .TodoSubmit {
        width: 80px;
        height: 80px;
        border: none;
        background-color: white;
        user-select: none;
      }
      .TodoSubmit:hover {
        opacity: 70%;
      }
      .TodoInput {
        border: 4px solid rgba(0, 0, 0, 50%);
        padding: 20px;
        width: 300px;
        border-radius: 40px;
        display: flex;
        justify-content: start;
        /* padding-left: 25px; */
        align-items: center;
        background-color: #DEE5FF;
        opacity: 65%
        border: 2px solid rgba(8, 21, 39, 50%)
        outline: none;

      }
      .TodoContent {
        border: 4px solid rgba(0, 0, 0, 50%);
        padding: 20px;
        width: 300px;
        border-radius: 40px;
        display: flex;
        justify-content: start;
        /* padding-left: 25px; */
        align-items: center;
        background-color: #DEE5FF;
        opacity: 65%
        border: 2px solid rgba(8, 21, 39, 50%)
        outline: none;

      }
      .TodoInputExpanded {
        border: 4px solid rgba(0, 0, 0, 50%);
        padding: 20px;
        width: 300px;
        border-radius: 40px;
        display: flex;
        justify-content: start;
        /* padding-left: 25px; */
        align-items: center;
        background-color: #DEE5FF;
        opacity: 65%
        border: 2px solid rgba(8, 21, 39, 50%)
        outline: none;
      }
      .TodoInputContent {
        white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  font-size: 18px;
      }
      .TodoInputContentExpanded {
        overflow:hidden;
  text-overflow:ellipsis;
  font-size: 18px;
      }
      .Todo {
        display: flex;
        gap: 30px;
      }
      .DeleteTodoButton {
        width: 80px;
        height: 80px;
        border-radius: 100px;
        border: 4px solid rgba(8, 21, 39, 50%)
        background-color: #ff464666;
        /* opacity: 90%; */
        background-color: #DEE5FF;
        opacity: 65%

      }
      .DeleteTodoButton:hover {
        opacity: 50%;
      }

      .CheckImage {
        opacity: 60%;
      }
      .Title {
        font-size: clamp(4rem, 8vw, 20rem);
        color: #ffffff;
        -webkit-text-stroke: 2px rgba(0, 0, 0, 80%);
        font-family: 'Krub';
        font-weight: bold;
        text-align: center;
        user-select: none;
      }

      .HamburgerMenuWrapperActive {
        background-color: #1616169f;
       height: 100vh;
       width: 400px;
       transition: 1s;
      }

      @media (max-width: 768px) {
        .HamburgerMenuWrapperActive {
          min-width: 100%;
          width: 100vw;
        }
        .Title {
          /* display: none; */
        }
        .PageWrapper {
          justify-content: center;
        }
        .MainWrapper {
          margin: 0;
        }
        .PageWrapper {
          gap: 0;
        }
        .SearchBarContainer {
        }
        .SearchResults {
          width: 100vw;
        }
      }

      .HamburgerMenuWrapper {
        height: 0px;
        width: 0%;
        /* display: none; */
        transition: 1s;
      }

      .HamburgerIcon {
        padding: 25px;
        margin: 15px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #484848;
        border-radius: 15px;
      }
      .SearchBarContainer {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px;
      }
      .SearchInputContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #ffffff;
        border-radius: 2px;
      }
      .SearchInput {
        background: none;
     border: 0;
    font-size: 18px;
    padding: 15px;
    width: 100%;
      }
      .SearchInput:focus {
        outline: none;
      }
      .SearchIcon {
        /* filter: brightness(0) invert(1); */
        padding: 15px;
      }
      .SearchResults {
        margin-top: 5px;
        width: 100%;
        height: 240px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        overflow: hidden;
        overflow-y: auto;
        border-radius: 2px;
      }
      .SearchResults::-webkit-scrollbar {
        display: none;
      }
      .SearchResultContainer {
        display: flex;
      }
      .SearchResult {
        padding-left: 20px;
        padding-right: 20px;
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        color: black;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
      }
      // .SearchResultContainer:hover {
      //   /* opacity: 80%; */
      //   background-color: #d3d3d3;
      // }
      .RemoveTodo {
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding-right: 5px;
        opacity: 80%;
      }
    }

  `
  return null
}

export default function Root() {
  const sheets: any = []
  useAssets(() => renderSheets(sheets))

  return (
    <StyleRegistry styles={sheets}>
      <Html lang="en">
        <Head>
          <Title>Not Todoist</Title>
          <Meta charset="utf-8" />
          <Meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Krub:wght@700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Body>
          <GlobalStyles />
          <Suspense>
            <ErrorBoundary>
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </Suspense>
          <Scripts />
        </Body>
      </Html>
    </StyleRegistry>
  )
}
