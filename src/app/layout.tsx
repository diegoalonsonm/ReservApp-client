import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

export const metadata ={
    title: "ReservApp",
    description: "This is the home page"
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <body>
                <div>
                    <main>
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}

export default RootLayout