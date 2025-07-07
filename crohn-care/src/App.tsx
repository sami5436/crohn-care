import { Routes, Route } from 'react-router-dom'
import { SignIn, SignUp } from '@clerk/clerk-react'
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import OurProduct from './pages/OurProduct'
import Dashboard from './pages/Dashboard'
import Layout from './components/layout/Layout'
import { RequireAuth } from './components/auth/RequireAuth'
import AuthLayout from './components/layout/AuthLayout' // ✅ import new layout

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/product" element={<OurProduct />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Route>

      {/* ✅ Auth routes wrapped with layout */}
      <Route
        path="/sign-in/*"
        element={
          <AuthLayout>
            <SignIn routing="path" path="/sign-in" />
          </AuthLayout>
        }
      />
      <Route
        path="/sign-up/*"
        element={
          <AuthLayout>
            <SignUp routing="path" path="/sign-up" />
          </AuthLayout>
        }
      />
    </Routes>
  )
}

export default App
