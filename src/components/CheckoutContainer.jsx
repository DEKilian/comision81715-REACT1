import { useCart } from "../custom-hooks/useCart"
import { serverTimestamp } from "firebase/firestore"
import { createOrder } from "../firebase/db"

function CheckoutContainer () {
    const { cart, getCartTotal } = useCart()

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const address = form.address.value
        const phone = form.phone.value

        createOrder ({ 
            user: {email, name, address, phone},
            items: cart,
            total: getCartTotal(),
            time: serverTimestamp()
        })

    }

    return (
        <div className="flex justify-center mt-10"> 
            <form onSubmit={handleSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Finaliza tu Compra</legend>

            <label className="label">Email:</label>
            <input id="email" type="email" className="input" placeholder=" Email" required/>

            <label className="label">Nombre Completo:</label>
            <input id="name" type="text" className="input" placeholder=" Nombre Aqui" required />

            <label className="label">Direccion de Envio:</label>
            <input id="address" type="text" className="input" placeholder=" Calle Falsa 123" required />

            <label className="label">Telefono de Contacto:</label>
            <input id="phone" type="text" className="input" placeholder=" +54 9 1122334455" required />

        <button className="btn btn-neutral mt-4 btn-success">Finalizar Compra</button>
    </form> 
    </div>
    )
}

export default CheckoutContainer