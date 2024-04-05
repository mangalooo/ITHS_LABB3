// components/contact/ContactForm.jsx

'use client'

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { useState, useRef } from 'react'

function ContactForm() {
    const [list, setList] = useState([
        { name: 'Test Testsson', email: 'test@test.nu', mobile: '0000-000000' }
    ])

    const contactCounter = useRef(1)
    const [formFirstname, setFirstname] = useState('')
    const [formLastname, setLastname] = useState('')
    const [formEmail, setEmail] = useState('')
    const [formMobile, setMobile] = useState('')

    const handleFirstname = (event) => {
        setFirstname(event.target.value)
    }

    const handleLastname = (event) => {
        setLastname(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleMobile = (event) => {
        setMobile(event.target.value)
    }

    const AddContactList = (event) => {
        event.preventDefault()
        const newData = [
            ...list,
            {
                name: formFirstname + ' ' + formLastname,
                email: formEmail,
                mobile: formMobile
            }
        ]
        setList(newData)
        contactCounter.current++
        alert('Kontakter i listan: ' + contactCounter.current)
    }

    const removeItem = (index, addList) => {
        const removeData = [...addList]
        removeData.splice(index, 1)
        setList(removeData)
        contactCounter.current--
    }

    return (
        <>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formFirstname">
                        <Form.Label> Förnamn </Form.Label>
                        <Form.Control
                            type="text"
                            value={formFirstname}
                            onChange={handleFirstname}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLastname">
                        <Form.Label> Efternamn </Form.Label>
                        <Form.Control
                            type="text"
                            value={formLastname}
                            onChange={handleLastname}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formMobile">
                        <Form.Label> Mobil </Form.Label>
                        <Form.Control
                            type="text"
                            value={formMobile}
                            onChange={handleMobile}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formEmail">
                        <Form.Label> E-post </Form.Label>
                        <Form.Control
                            type="email"
                            value={formEmail}
                            onChange={handleEmail}
                        />
                    </Form.Group>
                </Row>

                <div className="text-center">
                    <Button
                        variant="outline-success"
                        type="submit"
                        onClick={AddContactList}
                    >
                        Spara
                    </Button>
                </div>
            </Form>

            <br />
            <br />
            <h1 className="text-center"> Kontaktlista </h1>
            <br />
            <ul className="text-center">
                {Array.isArray(list)
                    ? list.map((item, index) => (
                          <il key={index}>
                              <b>
                                  <span className="text-success">
                                      {item.name}
                                  </span>{' '}
                                  &nbsp;&nbsp;
                                  {item.email} &nbsp;&nbsp;
                                  <span className="text-success">
                                      {item.mobile}
                                  </span>
                              </b>
                              &nbsp;&nbsp;
                              <Button
                                  variant="outline-danger"
                                  size="sm"
                                  onClick={() => removeItem(index, list)}
                              >
                                  Ta bort kontakt
                              </Button>
                              {<br />}
                              {<br />}
                          </il>
                      ))
                    : null}
            </ul>
        </>
    )
}

export default ContactForm
