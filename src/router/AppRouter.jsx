import { BrowserRouter, Routes, Route } from "react-router";
import ItemListContainer from "../components/ItemListContainer"
import NavBarContainer from "../components/NavBarContainer"
import CartContainer from "../components/CartContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import NotFound from "../components/NotFound";
import CheckoutContainer from "../components/CheckoutContainer";
import { Toaster } from "react-hot-toast"

function AppRouter () {
    return (
    <BrowserRouter>
     <NavBarContainer />
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/category/:categoryName" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
        <Toaster />
    </BrowserRouter>
    )
}

export default AppRouter