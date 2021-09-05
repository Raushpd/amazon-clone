import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img className="home_img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="img" />
            <div className="home_row">
                <Product
                    id="1"
                    title="boAt Rockerz 450 Wireless Bluetooth On Ear Headphones with Mic (Luscious Black)"
                    price={1399}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41SVusu4r6L._AC_SY200_.jpg" />

                <Product
                    id="2"
                    title="(CERTIFIED REFURBISHED) JBL GO Portable Wireless Bluetooth Speaker with Mic (Orange)"
                    price={1500}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81PrhcVt5mL._SL1500_.jpg" />
            </div>
            <div className="home_row">
                <Product
                    id="3"
                    title="OFIXO Multi-Purpose Laptop Table/Study Table/Bed Table/Foldable and Portable Wooden/Writing Desk (Wooden)"
                    price={498}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/71msWIzlvwS._SL1500_.jpg" />

                <Product
                    id="4"
                    title="Zebronics Wired Keyboard and Mouse Combo with 104 Keys and a USB Mouse with 1200 DPI - JUDWAA 750"
                    price={355}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/3164hjUSFdL._AC_SY200_.jpg" />

                <Product
                    id="5"
                    title="HP Pavilion Gaming 15.6-inch (39.62 cms) FHD Gaming Laptop (Ryzen 5-4600H/8GB/512GB SSD/Windows 10/144Hz/NVIDIA GTX 1650ti 4GB/Shadow Black), 15-ec1051AX"
                    price={66999}
                    rating={3}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41CED+NsupL._AC_SX184_.jpg" />
            </div>
            <div className="home_row">
                <Product
                    id="6"
                    title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                    price={109999}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg" />
            </div>
        </div>
    )
}

export default Home;
