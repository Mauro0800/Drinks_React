import { ErrorMessage, Field, Formik } from 'formik'
import { Button, Col, Form, Row} from 'react-bootstrap'
import * as Yup from 'yup'
import UseCategories from '../../hooks/UseCategories'
import useDrinks from '../../hooks/useDrinks'

export const SearchForm = () => {

  const {categories} = UseCategories()
  const {getDrinks, loading} = useDrinks()

  // console.log(categories);

  const initialValues = {
    ingredient : "",
    category : ""
  }

  const validationSchema = Yup.object({
    category: Yup.string().required('La categoria es obligatoria')
  })

  const handleSubmit = (values) => {
    // console.log(values);
    getDrinks(values)
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
              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label htmlFor="ingredient">Ingrediente de la bebida</Form.Label>
                    <Field 
                      id = "ingredient"
                      type = "text"
                      placeholder = "Ej, Tequila, Vodka, Etc"
                      name = "ingredient"
                      as={Form.Control}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group>
                    <Form.Label htmlFor="category">Categoria de la bebida</Form.Label>
                    <Field 
                      id = "category"
                      name="category"
                      as={Form.Select}
                    >
                      <option value="" defaultValue="" hidden> - Seleccione Categoria - </option>
                      {
                        categories.map(categorie => (
                          <option
                          value = {categorie.strCategory}
                          key={categorie.strCategory}
                          >
                            {categorie.strCategory}
                          </option>
                        ))
                      }
                    </Field>
                    <ErrorMessage name='category' component={Form.Text} className="text-danger ms-2" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className='justify-content-end mt-3'>
                <Col md={3}>
                  <Button variant="warning" disabled={loading} className="w-100" type='submit'>
                    {loading ? 'Buscando' : 'Buscar Bebida'}
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
