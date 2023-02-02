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
        justify-content: center;
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
        width: 400px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 20px;
        border-radius: 40px;
      }
      .SubmitButton {
        width: 80px;
        height: 80px;
        border-radius: 100px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        background-color: #63ff6355;
      }
      .Data {
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 20px;
        width: 300px;
        border-radius: 40px;
      }
      .DataAndButton {
        display: flex;
        gap: 30px;
      }
      .DataButton {
        width: 80px;
        height: 80px;
        border-radius: 100px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        background-color: #ff464666;
        opacity: 90%;
      }
      .DataButton:hover {
        opacity: 60%;
      }
      .XImage {
        /* display: flex;
        justify-content: center;
        margin: 0; */
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
