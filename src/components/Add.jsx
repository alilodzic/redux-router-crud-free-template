import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { insertData } from '../store/dataslice';
import Loading from './Loading';



const Add = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loading, error } = useSelector((state) => state.data)

    const handSubmit = (e) => {
        e.preventDefault()
        if (title.length > 0) {
            dispatch(insertData({ title , description }))
                .unwrap()
                .then(() => {
                    navigate('/')
                })
                .catch((error) => {
                    console.log(error)
                })
            setTitle('')
            setDescription('')
        }

    }

    return (
        <Form onSubmit={handSubmit} className='px-5' >
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className='h3' >Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" size="lg" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className='h5' >Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)  } />
            </Form.Group>

            <div className="d-grid gap-2 mt-4" >
                <Loading loading={loading} error={error} >
                    <Button variant="secondary" size="lg" type="submit">
                        Submit
                    </Button>
                </Loading>
            </div>
        </Form>
    )
}

export default Add