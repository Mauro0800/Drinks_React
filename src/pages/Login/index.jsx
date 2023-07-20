import { ErrorMessage, Field, Formik } from 'formik'
import { Button, Col, Form, Row } from 'react-bootstrap'
import * as Yup from 'yup'

export const Login = () => {

    const initialValues = {
        email: "",
        password: ""
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('El email es obligatoria'),
        password: Yup.string().required('El password es obligatoria'),
    })

    const handleSubmit = (values) => {
        console.log(values);
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
                        <Form onSubmit={formik.handleSubmit}>
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
                                    type="text"
                                    name="password"
                                    as={Form.Control}
                                />
                                <ErrorMessage name='password' component={Form.Text} className="text-danger ms-2" />
                            </Form.Group>

                            <Row className='justify-content-end mt-3'>
                                <Col md={3}>
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
