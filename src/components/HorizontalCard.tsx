import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type HorizontalCardProps = {
    imgSrc: string | StaticImageData;
    imgAlt: string;
    cardTitle: string;
    cardBody: string;    
    siteLink: string;
}

export const HorizontalCard = ({ imgSrc, imgAlt, cardTitle, cardBody, siteLink }: HorizontalCardProps) => {
  return (
    <div className="card mb-5 w-75 mx-auto shadow">
        <div className="row g-0">
            <div className="col-md-4">
                <Image src={imgSrc} width={450} className='img-fluid' alt={imgAlt} />
            </div>
            <div className="col-md-8">
                <div className="card-body mt-4">
                    <h5 className="card-title">{cardTitle}</h5>
                    <p className="card-text">{cardBody}</p>
                    <Link className="btn btn-primary my-1" href="/reservations">
                        Reserve Now
                    </Link>
                    <Link className="btn btn-primary my-1 ms-3" href={siteLink} target='_blank'>
                        More Info
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}