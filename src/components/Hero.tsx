import heroImage from "../app/assets/hero.webp"
import Link from "next/link"

export const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container pt-5">
        <h1 className="text-light">
          Welcome to ReservApp
        </h1>
        <h3 className="text-light mt-3">
          The best way to book venues for your events here in Guanacaste
        </h3>
        <p className="text-light h6 mt-4">All type of venues for every type of events. The best locations availables just for you</p>
        
        <Link className="btn btn-primary mt-3" href="/reservations">
          Make a reservation
        </Link>
      </div>
    </section>
  )
}
