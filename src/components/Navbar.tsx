import Image from "next/image"
import Link from "next/link"
import logo from "../app/assets/logo.jpg"

export const Navbar = () => {
  return (
    <nav className="navbar bg-nf">
        <div className="container-fluid">
            <div className="d-flex mx-auto p-2">
                <Link href="/">
                    <Image className="d-inline-block align-text-top" alt="logo" src={logo} width={55} />
                </Link>
                <p className="h3 mt-2 ms-1">ReservApp</p>
            </div>
        </div>
    </nav>
  )
}
