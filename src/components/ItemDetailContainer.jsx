import { useState, useEffect } from "react"
import { useParams } from "react-router";
import { getDetail } from "../firebase/db";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

function ItemDetailContainer () {
    const [item, setItem] = useState ()
    const { id } = useParams()

    useEffect(() => {
    getDetail(id)
        .then(detail => setItem(detail))
    }, [id])

    return (
        <>
        {!item ? <Loader/> : <ItemDetail item={item} />}
        </>
    )
}

export default ItemDetailContainer