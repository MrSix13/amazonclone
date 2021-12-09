import './Home.css';
import Product from './Product';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://m.media-amazon.com/images/I/71Ob3nbpDVL._SX3000_.jpg"
                
                />
            <div className="home__row">
                <Product
                  id="2323123"
                  price={29.99} 
                  title="The lean startup"
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
                />
                <Product
                  id="2323123"
                  price={59.99} 
                  title="Battlefield 2042"
                  rating={3}
                  image="https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S2_1200x1600-331f59b6877d2bf2194943fcf7a68048_1200x1600-331f59b6877d2bf2194943fcf7a68048"
                
                />
            </div>
            <div className="home__row">
                <Product
                 id="232232123"
                 price={59.99} 
                 title="Call of duty: Vanguard"
                 rating={5}
                 image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAx_NyZK7vUR08s3LwQ1DzRO-TLaK1Jkrhrg&usqp=CAU"
                />
                <Product
                  id="23123"
                  price={29.99} 
                  title="Call of duty: Modern Warfare 3"
                  rating={5}
                  image="https://i.ytimg.com/vi/LnqWasjxQRc/maxresdefault.jpg"
                
                />
                <Product/>
            </div>
            <div className="home__row">
                <Product/>
            </div>
            </div>
        </div>
    )
}

export default Home
