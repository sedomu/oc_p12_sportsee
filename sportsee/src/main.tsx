import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import NotFound from "./NotFound.tsx"
import {BrowserRouter, Route, Routes} from "react-router"

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <StrictMode>
          <Routes>
              <Route path={"/user/:userId"} element={<App/>} />
              <Route path={"/*"} element={<NotFound/>} />
          </Routes>
      </StrictMode>
  </BrowserRouter>
)
