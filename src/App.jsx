import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import ErrorPage from './screens/ErrorPage'
import Router from './routes/Router'
import Contact from './screens/Contact'
import Blog from './screens/Blog'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Router />}>
                    <Route index element={<Home />} />
                    <Route path="/nosotros" element={<About />} />
                    <Route path="/contacto" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
