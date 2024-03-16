import { Navbar } from "../components/Navbar"
import { Hero } from "../components/Hero"
import { Footer } from "../components/Footer"
import { Venues } from "../components/Venues"
import { Reservation } from "../components/Reservation"

const Home = () => {
    return (
        <>
            <Navbar /> 
            <Hero />
            <Venues />
            <Reservation />
            <Footer  />
        </>
    )
}

export default Home