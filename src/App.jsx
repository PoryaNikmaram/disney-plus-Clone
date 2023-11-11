import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

import AppLayout from './ui/AppLayout'
import './firebase'
import { Toaster } from 'react-hot-toast'
import MoviePage from './pages/MoviePage'
import ProtectedRoute from './pages/ProtectedRoute'
import SignupPage from './pages/SignupPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/home" element={<HomePage />} />
            <Route path="/movie/:id" element={<MoviePage />} />
          </Route>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
        }}
      />
    </>
  )
}

export default App
