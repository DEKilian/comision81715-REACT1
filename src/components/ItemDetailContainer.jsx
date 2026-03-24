import { useState, useEffect } from "react"
import { useParams } from "react-router";
import { getDetail } from "../firebase/db";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer () {
    const [item, setItem] = useState ()
    const { id } = useParams()

    useEffect(() => {
    getDetail(id)
        .then(detail => setItem(detail))
    }, [id])

    if (!item) {
        return(
            <div>cargando....</div>
        )
    }

    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer