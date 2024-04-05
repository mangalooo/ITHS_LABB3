import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Test',
    description: 'Test',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                {/* <HeaderMenu /> */}
                <Navbar />
                {children}
                {/* <Footer /> */}
            </body>
        </html>
    );
}
