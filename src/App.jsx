import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main.jsx'
import Main from './pages/Sub.jsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />}></Route>
                <Route path="/sub" element={<Sub />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
