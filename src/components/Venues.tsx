import { HorizontalCard } from "../components/HorizontalCard"

import fourSeasons from "../app/assets/fourS.webp"
import mangroove from "../app/assets/mangoove.webp"
import pangas from "../app/assets/pangas.webp"
import papagayo from "../app/assets/papagayo.webp"
import pinilla from "../app/assets/pinilla.webp"

export const Venues = () => {
  return (
    <>
        <section className="d-flex justify-content-center my-4">
            <h1>Our Venues</h1>
        </section>
        <HorizontalCard imgAlt="Four Seasons" imgSrc={fourSeasons} cardTitle="The Four Seasons Resort" cardBody="Nestled along the pristine shores of the Papagayo Peninsula, Four Seasons Resort Costa Rica at Peninsula Papagayo offers unparalleled luxury amidst lush tropical surroundings. With world-class amenities, including championship golf courses, rejuvenating spa experiences, and gourmet dining options, guests indulge in the ultimate tropical getaway, surrounded by the natural beauty of Costa Rica's northwest Pacific coast." siteLink="https://www.fourseasons.com/es/costarica/" />
        <HorizontalCard imgAlt="Andaz" imgSrc={papagayo} cardTitle="Andaz Papagayo" cardBody="Situated amidst the stunning landscapes of Papagayo Peninsula, Andaz Costa Rica Resort captivates guests with its contemporary design and authentic local flair. Experience the essence of &ldquo;Pura Vida&rdquo; through personalized service, locally-inspired cuisine, and immersive cultural experiences. With breathtaking ocean views and access to pristine beaches, Andaz Papagayo offers an unforgettable escape in harmony with nature." siteLink="https://www.hyatt.com/andaz/es-ES/liraz-andaz-costa-rica-resort-at-peninsula-papagayo" />
        <HorizontalCard imgAlt="Pangas" imgSrc={pangas} cardTitle="Pangas Beach Clup" cardBody="Located on the golden sands of Playa Tamarindo, Pangas Beach Club invites guests to unwind in a laid-back, beachfront atmosphere. Enjoy fresh seafood specialties, creative cocktails, and panoramic views of the Pacific Ocean. Whether lounging by the infinity pool or exploring the vibrant marine life through snorkeling and diving excursions, Pangas Beach Club embodies the essence of coastal relaxation and adventure." siteLink="https://www.pangasbeachclubcr.com/" />
        <HorizontalCard imgAlt="Pinilla" imgSrc={pinilla} cardTitle="Hacienda Pinilla" cardBody="Spanning over 4,500 acres of lush landscapes and pristine coastline, Hacienda Pinilla offers a luxurious retreat in the heart of Guanacaste. This exclusive residential and resort community features world-class amenities, including a championship golf course, equestrian center, tennis courts, and private beach club. Immerse yourself in the natural beauty of Costa Rica while enjoying unparalleled comfort and recreation at Hacienda Pinilla." siteLink="https://www.haciendapinilla.com/" />
        <HorizontalCard imgAlt="Mangroove" imgSrc={mangroove} cardTitle="El Mangroove" cardBody="Embrace the essence of barefoot luxury at El Mangroove, Autograph Collection, nestled along the tranquil waters of Papagayo Bay. With its chic design, eco-friendly practices, and laid-back ambiance, this boutique hotel offers a unique blend of sophistication and sustainability. Indulge in locally-inspired cuisine, relax by the poolside, or embark on thrilling adventures, surrounded by the pristine beauty of Costa Rica's mangrove forests and Pacific coastline." siteLink="https://elmangroove.net/es/" />
    </>
  )
}
