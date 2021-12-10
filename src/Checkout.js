import "./Checkout.css"
import Subtotal from "./Subtotal";


const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                 className="checkout__ad"
                 src="https://image.freepik.com/vector-gratis/venta-verano-cincuenta-ciento-descuento-banner-descuento-caliente-hojas-tropicales-telefono-inteligente_1262-13286.jpg"
                />

                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {/* BasketItem*/}
                    {/* BasketItem*/}
                    {/* BasketItem*/}
                </div>
            </div>

            <div className="checkout__right">
                <h2>The Subtotal Willl go Here</h2>
            
                    <Subtotal/>
                
            </div>
        </div>
    )
}

export default Checkout;
