// components/contact/Contacts.jsx

import DogFacts from './DogFacts'
import DogHeading from './DogHeading'
import DogPicture from './DogPicture'

export default function Contacts() {
    return (
        <main className="text-center">
            <br />
            <DogHeading />
                <DogPicture />
                <br />
                <br />
                <DogFacts />
        </main>
    )
}
