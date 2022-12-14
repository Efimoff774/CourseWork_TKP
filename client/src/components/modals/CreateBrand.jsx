import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form'
import { createBrand } from '../../http/deviceAPI'
const CreateBrand = ({ show, onHide }) => {

    const [value, setValue] = useState('')

    const addBrand = () => {
        try {
            createBrand({ name: value }).then(data => {
                setValue('')
                onHide()
            })
        }

        catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={'Введите название бренда'}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addBrand}>Добавить</Button>

            </Modal.Footer>
        </Modal>
    )
}

export default CreateBrand