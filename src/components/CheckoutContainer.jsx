function CheckoutContainer () {
    return (
        <div className="flex justify-center mt-10"> 
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Finaliza tu Compra</legend>

            <label className="label">Email:</label>
            <input type="email" className="input" placeholder=" Email" />

            <label className="label">Nombre Completo:</label>
            <input type="text" className="input" placeholder=" Nombre Aqui" />

            <label className="label">Direccion de Envio:</label>
            <input type="text" className="input" placeholder=" Calle Falsa 123" />

            <label className="label">Telefono de Contacto:</label>
            <input type="text" className="input" placeholder=" +54 9 1122334455" />

        <button className="btn btn-neutral mt-4 btn-success">Finalizar Compra</button>
    </fieldset> 
    </div>
    )
}

export default CheckoutContainer