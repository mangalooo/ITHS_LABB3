'use client'
import { useState, useEffect } from 'react'

export default function Joke() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then((response) => response.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    const returnJoke = () => {
        const getJoke = data['value']

        return (
            <div className="text-center">
                <br />
                <h1> Joke </h1>
                <br />
                <img
                    src="https://img.freepik.com/free-photo/funny-monkey-with-sunglasses-studio_23-2150844149.jpg?w=1380"
                    alt="placeholder"
                    style={{ height: 400, width: 400 }}
                />
                <br />
                <br />
                <p> {getJoke} </p>
            </div>
        )
    }

    return (
        <>{returnJoke()}</>
    )
}
