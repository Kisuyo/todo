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
      /* .Main {
        height: 100vh;
      }
      .MainWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
      } */
      .Wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
      }
      .NoteWrapper {
        width: 600px;
        /* margin-bottom: 200px; */
      }
      .DataWrapper {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 30px;
      }
      .InputWrapper {
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
      .SubmitButton {
        width: 80px;
        height: 80px;
        border-radius: 100px;
        border: 2px solid rgba(34, 10, 38, 50%);
        /* background-color: #63ff6355; */
        background-color: #f8e4ff;
        opacity: 80%;
      }
      .SubmitButton:hover {
        opacity: 80%;
      }
      .Data {
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
      .Data {
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
      .DataExtended {
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
      .DataText {
        white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  font-size: 18px;
      }
      .DataTextExtended {
        overflow:hidden;
  text-overflow:ellipsis;
  font-size: 18px;
      }
      .DataAndButton {
        display: flex;
        gap: 30px;
      }
      .DataButton {
        width: 80px;
        height: 80px;
        border-radius: 100px;
        border: 4px solid rgba(8, 21, 39, 50%)
        background-color: #ff464666;
        /* opacity: 90%; */
        background-color: #DEE5FF;
        opacity: 65%
        
      }
      .DataButton:hover {
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
        font-size: 124px;
        color: #F5DFFF;
        -webkit-text-stroke: 2px rgba(45, 15, 55, 50%);
        font-family: 'Krub';
        font-weight: bold;
        width: 600px;
        display: flex;
        justify-content: center;
        margin-right: 100px;
        margin-bottom: 25px;
      }
    }
    /* #70 {
      display: none;
    } */
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
          <Title>SolidStart - Bare</Title>
          <Meta charset="utf-8" />
          <Meta name="viewport" content="width=device-width, initial-scale=1" />
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
