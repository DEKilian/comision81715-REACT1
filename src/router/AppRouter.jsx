import { BrowserRouter, Routes, Route } from "react-router";

function AppRouter () {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    </BrowserRouter>
    )
}

export default AppRouter