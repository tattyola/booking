import Title from "./components/Title";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Catalog from "./components/catalog/Catalog";
import './App.css'
import {useState} from "react";

function App() {
    const appTitle = 'Booking';
    const menu = ['Stays', 'Flights', 'Car Rentals', 'Cruises']
    const footer = ['About', 'Privacy & Terms', 'Careers', 'Questions'];
    const accommodations = [
        {
            id: '0',
            img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/219163322.jpg?k=610d63eaaed024ab44ec916369c724db0fde516570f7a3352af2fae834ea6cf1&o=&hp=1',
            name: 'Hilton',
            description: 'Ocean View',
            price: 450,
            city: 'Miami',
            type: 'Resort',
        },
        {
            id: '1',
            img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/404773977.jpg?k=8298aedeccd1beb48bd6fff3553f0f11b9de575b9623b8e37e38466f7296b695&o=&hp=1',
            name: 'Residence Inn',
            description: 'Waterfront',
            price: 450,
            city: 'Miami',
            type: 'Hotel',
        },
        {
            id: '2',
            img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/448659888.jpg?k=a5107352ae669386cb570fdf479e54b9e0899cee799699c16fe998855f41ee7a&o=&hp=1',
            name: 'Holiday Inn',
            description: 'River walk',
            price: 600,
            city: 'Miami',
            type: 'Resort',
        },
        {
            id: '3',
            img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/444982778.jpg?k=fe9350a5555a86905599a87cb47990410fadbf42691a91fd1aaf9f436191d823&o=&hp=1',
            name: 'Hilton',
            description: 'Downtown',
            price: 500,
            city: 'Miami',
            type: 'Resort',
        },
        {
            id: '4',
            img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/461638067.jpg?k=c559b96e38e0527f06aec25df65e31e31df89ebe65d3d5dc97bd1cad3100d374&o=&hp=1',
            name: 'Hampton Inn',
            description: 'Beachfront',
            price: 450,
            city: 'Miami',
            type: 'Hotel',
        },
        {
            id: '5',
            img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/234687308.jpg?k=875eac140d62ac923685659f48bbe3a00a036b77dfb352f426c4805d6d2ebc1d&o=&hp=1',
            name: 'Hilton',
            description: 'River walk',
            price: 330,
            city: 'Miami',
            type: 'Resort',
        },
        {
            id: '6',
            img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/377660318.jpg?k=c3255cbcce7f6690ea52ce6be2b0e41474c8a04287f34f12c1b8684346e53fd8&o=&hp=1',
            name: 'Four Seasons',
            description: 'Ocean view',
            price: 540,
            city: 'Miami',
            type: 'Resort',
        },
        {
            id: '7',
            img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/379545880.jpg?k=364200642f28e6266a665f6f26491187fcb7d57d6970868368fe630f0f37ddae&o=&hp=1',
            name: 'Hayat',
            description: 'Beachfront',
            price: 630,
            city: 'Miami',
            type: 'Resort',
        },
        {
            id: '8',
            img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/357679602.jpg?k=a340966ba5bd090948552b289d1a0493da404a6e5407be772204b4c17752c3ea&o=&hp=1',
            name: 'Marriott',
            description: 'Waterfront',
            price: 600,
            city: 'Miami',
            type: 'Hotel',
        },
    ];
    const [isAuth, setIsAuth] = useState(false)
    const login = () => setIsAuth(true)
    const logout = () => setIsAuth(false)
    if (!isAuth) {
        return (
            <div className="App">
                <h1>Please log in</h1>
                <button onClick={login}>log in</button>
            </div>
        );
    }
    return (
        <div className="App">
            <button onClick={logout}>log out</button>
            <hr/>
            <Title
                appTitle={appTitle}
            />
            <Menu
                menu={menu}
            />
            <hr/>
            <Catalog
                hotels={accommodations}
            />
            <hr/>

            <Footer
                footer={footer}
            />
        </div>
    );
}

export default App;
