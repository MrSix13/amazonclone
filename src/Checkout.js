import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";


const Checkout = () => {
    const [{basket}, dispatch] = useStateValue();
    return (
        <>
        <Header/>
        <div className="checkout">
            <div className="checkout__left">
                <img
                 className="checkout__ad"
                 src="https://image.freepik.com/vector-gratis/venta-verano-cincuenta-ciento-descuento-banner-descuento-caliente-hojas-tropicales-telefono-inteligente_1262-13286.jpg"
                />

                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                        {/* CheckoutProduct*/}
                        {/* CheckoutProduct*/}
                    </div>
                
            </div>

            <div className="checkout__right">
                <h2>The Subtotal Willl go Here</h2>
            
                <Subtotal/>
                
            </div>
        </div>
        </>
    )
}

export default Checkout;
