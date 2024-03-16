'use client'

import {useState} from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Select from "react-select";
import Swal from "sweetalert2";
import { Navbar } from "../../components/Navbar";

const Reservations = () => {
    const options = [
        {value: 'The Four Season Resort, Guanacaste, Costa Rica', label: 'The Four Season Resort, Guanacaste, Costa Rica'},
        {value: 'Andaz Papagayo, Guanacaste, Costa Rica', label: 'Andaz Papagayo, Guanacaste, Costa Rica'},
        {value: 'Pangas Beach Club, Guanacaste, Costa Rica', label: 'Pangas Beach Club, Guanacaste, Costa Rica'},
        {value: 'Hacienda Pinilla, Guanacaste, Costa Rica', label: 'Hacienda Pinilla, Guanacaste, Costa Rica'},
        {value: 'El Mangroove, Guanacaste, Costa Rica', label: 'El Mangroove, Guanacaste, Costa Rica'}
    ]

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [selectedVenue, setVenue] = useState('')
    const [initialDate, setInitialDate] = useState('')
    const [finalDate, setFinalDate] = useState('')
    const [amountPeople, setAmountPeople] = useState(0)

    const router = useRouter()
    const today = new Date().toISOString().split('T')[0]

    const handleDateChange = (e: any) => {
        setInitialDate(e.target.value)
        setFinalDate('')
    }

    const handleSubmit = async (e: any) => {
        if (!name || !email || !selectedVenue || !initialDate || !finalDate || !amountPeople) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Please fill all the fields"
            })
            return
        }

        const data = {name, selectedVenue, initialDate, finalDate, amountPeople, email}

        axios.post('https://reservapp-server.onrender.com/reservations', data).then(() => {
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Reservation made successfully",
                footer: "Be sure to check your inbox or any other folder for the confirmation email."
            })
            setTimeout(() => {
                router.push('/')
            }, 3000)   
        }).catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "There was an error making the reservation"
            })
            console.log(error)
        })
    }

    return (
        <div>
            <Navbar />
            <div className="card w-sm-75 mx-auto mt-4 shadow">
                <div className="h1 mx-auto p-1">
                    Make a Reservation
                </div>
            </div>
            <div className="card w-sm-75 mx-auto mt-3 p-2 shadow">
                Please enter your data down below to make a reservation.
            </div>
            <div className="card w-sm-75 mx-auto my-3">
                <div className="p-2 shadow">
                    <div className="mb-3 p-2">
                        <label htmlFor="nameReservation" className="form-label fw-semibold">Enter you whole name</label>
                        <input type="text" className="form-control" id="nameReservation" placeholder="Ej. John Doe"
                               required={true} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3 p-2">
                        <label htmlFor="emailReservation" className="form-label fw-semibold">Enter your email
                            address</label>
                        <input type="email" className="form-control" id="emailReservation" aria-describedby="emailHelp"
                               placeholder="Ej. example@email.com"
                               required={true} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-2 p-2">
                        <label htmlFor="nameReservation" className="form-label fw-semibold">Select the venue you want to
                            reserve</label>
                        <Select options={options} required={true}
                                onChange={(e) => e == null ? setVenue('') : setVenue(e.value)}/>
                    </div>
                    <div className="mb-3 p-2">
                        <label htmlFor="initialDateReservation" className="form-label fw-semibold">Enter the initial
                            date of your reservation</label>
                        <input type="date" className="form-control" min={today} id="initialDateReservation"
                               value={initialDate}
                               onChange={handleDateChange}/>
                    </div>
                    <div className="mb-3 p-2">
                        <label htmlFor="finalDateReservation" className="form-label fw-semibold">Enter the final date of
                            your reservation</label>
                        <input type="date" className="form-control" min={initialDate || today} id="finalDateReservation"
                               required={true}
                               onChange={(e) => setFinalDate(e.target.value)}/>
                    </div>
                    <div className="mb-3 p-2">
                        <label htmlFor="amountPeopleReservation" className="form-label fw-semibold">Enter you the amount
                            of people that will attend</label>
                        <input type="number" min="2" className="form-control" id="amountPeopleReservation"
                               placeholder="Ej. 10" required={true}
                               onChange={(e) => setAmountPeople(parseInt(e.target.value))}/>
                    </div>
                    <div className="mx-auto">
                        <button onClick={handleSubmit} className="btn btn-primary ms-2 mb-3">Make reservation</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reservations;