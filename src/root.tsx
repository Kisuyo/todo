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
        background-color: #dbdaf2;
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
      .TodosPage {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
        gap: 100px;
      }
      .TitleContainer {
        margin-right: 300px;
      }
      @media (max-width: 768px) {
        .TitleContainer {
          margin-right: 100px;
        }
      }

      .TodosContainer {
        width: 600px;
        /* margin-bottom: 200px; */
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
      }
      .Input {
        appearance: none;
        width: 400px;
        border: 4px solid rgba(34, 10, 38, 50%);
        padding: 20px;
        border-radius: 40px;
        background-color: #f8e4ff;
        opacity: 65%;
        outline: none;
      }
      .TodoSubmit {
        width: 80px;
        height: 80px;
        border-radius: 100px;
        border: 2px solid rgba(34, 10, 38, 50%);
        /* background-color: #63ff6355; */
        background-color: #f8e4ff;
        opacity: 80%;
      }
      .TodoSubmit:hover {
        opacity: 50%;
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
      .XImage {
        /* display: flex;
        justify-content: center;
        margin: 0; */
      }
      .CheckImage {
        opacity: 60%;
      }
      .Title {
        font-size: clamp(2rem, 10vw, 20rem);
        color: #F5DFFF;
        -webkit-text-stroke: 2px rgba(45, 15, 55, 50%);
        font-family: 'Krub';
        font-weight: bold;
      }
      .HamburgerMenu {
        background-color: #c9a5c979;
        width: 20%;
        height: 100vh;
      }
      .HamburgerIcon {
        padding: 40px;
        border-bottom: 2px solid white;
      }
      .SearchBarContainer {
        margin: 40px;
      }
      .SearchInputContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        border-radius: 5px;
      }
      .SearchInput {
        background-color: white;
     border: 0;
    font-size: 18px;
    padding: 15px;
    border-radius: 5px;
      min-width: 100px;
      }
      .SearchInput:focus {
        outline: none;
      }
      .SearchIcon {
        padding: 15px;
      }
      .SearchResults {
        display: grid;
        background-color: #b5b5b5;
        overflow: hidden;
        margin-top: 20px;

      }
      .SearchResult {
        padding: 20px;
        margin-top: 5px;
        background-color: white;
        border: 1px solid black
      }
      .SearchResult:hover {
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
