import { BrowserRouter, Routes, Route } from "react-router";
import ItemListContainer from "../components/ItemListContainer"
import NavBarContainer from "../components/NavBarContainer"
import CartContainer from "../components/CartContainer";

function AppRouter () {
    return (
    <BrowserRouter>
     <NavBarContainer />
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartContainer />} />
        </Routes>
    </BrowserRouter>
    )
}

export default AppRouter