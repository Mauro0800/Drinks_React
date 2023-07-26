import { ErrorMessage, Field, Formik } from 'formik'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
import * as Yup from 'yup'
import UseAuth from '../../hooks/UseAuth'

export const Login = () => {

    const {login,alert} = UseAuth()

    const initialValues = {
        email: "",
        password: ""
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('El email es obligatoria'),
        password: Yup.string().required('La contraseña es obligatoria'),
    })

    const handleSubmit = (values) => {
        // console.log(values);
        login(values)
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {
                    (formik) => (
                        <Form onSubmit={formik.handleSubmit} className='col-6 mx-auto'>
                            {alert && <Alert variant='danger'>{alert}</Alert>}
                            <Form.Group>
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Field
                                    id="email"
                                    type="text"
                                    placeholder="user@gmail.com"
                                    name="email"
                                    as={Form.Control}
                                />
                                <ErrorMessage name='email' component={Form.Text} className="text-danger ms-2" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor="password">Contraseña</Form.Label>
                                <Field
                                    id="password"
                                    type="password"
                                    name="password"
                                    as={Form.Control}
                                />
                                <ErrorMessage name='password' component={Form.Text} className="text-danger ms-2" />
                            </Form.Group>

                            <Row className='justify-content-end mt-3'>
                                <Col md={4}>
                                    <Button variant="dark" disabled={false} className="w-100" type='submit'>
                                        Ingresa
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    )
                }
            </Formik>
        </>
    )
}
