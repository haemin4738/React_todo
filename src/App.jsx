import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Sub from './pages/Sub'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />}></Route>
                <Route path="/new" element={<Sub />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
