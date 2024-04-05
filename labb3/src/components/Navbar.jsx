// components/NavBar.jsx

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className="text-center">
            <br />
            <br />

            <ButtonGroup size="lg" className="mb-2">
                <Link href="/">
                    <Button variant="secondary">Start</Button>
                </Link>
                <Link href="/joke">
                    <Button variant="success">Jokes</Button>
                </Link>
                <Link href="/dog">
                    <Button variant="secondary">Dogs</Button>
                </Link>
                <Link href="/contact">
                    <Button variant="success">Contacts</Button>
                </Link>
            </ButtonGroup>
        </nav>
    )
}
