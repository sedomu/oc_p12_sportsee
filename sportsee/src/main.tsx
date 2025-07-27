import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import NotFound from "./NotFound.tsx"
import {BrowserRouter, Route, Routes, useParams} from "react-router"

function AppWithParams() {
    const { userId } = useParams();
    const parsedUserId = Number(userId);

    return <App userId={parsedUserId} />;
}

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <StrictMode>
          <Routes>
              <Route path={"/user/:userId"} element={<AppWithParams/>} />
              <Route path={"/*"} element={<NotFound/>} />
          </Routes>
      </StrictMode>
  </BrowserRouter>
)
