import React from "react";
import '../../App.css';
import { Flex, Stack, AbsoluteCenter, Spacer, FormControl, FormLabel, FormErrorMessage, NumberInput,
     NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper,
     InputGroup, InputRightElement, Button, FormHelperText, Input, Text, InputLeftAddon, Box, Center } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

     
function Formulario(){

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const [show2, setShow2] = React.useState(false)
    const handleClick2 = () => setShow2(!show2)

    return(

        <Formik
            
            initialValues={{
            firstName: '',
            surname: '',
            email: '',
            telefono: '',
            password1: '',
            password2: '',
            }}

            validationSchema={Yup.object({
                firstName: Yup.string()
                  .matches(/^[a-zA-Z]+$/, 'El nombre no debe contener números ni caracteres especiales')
                  .required('El nombre es requerido'),
                surname: Yup.string()
                  .matches(/^[a-zA-Z]+$/, 'El apellido no debe contener números ni caracteres especiales')
                  .required('El apellido es requerido'),
                email: Yup.string().email('Formato de email inválido').required('Email es requerido'),
                telefono: Yup.number()
                  .positive('Debe ser un número positivo')
                  .required('El teléfono es requerido'),
                password1: Yup.string().required('La contraseña es requerida'),
                password2: Yup.string()
                    .oneOf([Yup.ref('password1'), null], 'Las contraseñas deben coincidir')
                    .required('Repita la contraseña')
                    .test('match', 'Las contraseñas deben coincidir', function (value) {
                  return value === this.parent.password1;
                }),
            })}

            onSubmit={(values, { setSubmitting, setFieldError }) => {
            setTimeout(() => {

                const isFormValid = Object.keys(values).every((key) => !values[key]);
    
                if (isFormValid) {
                alert('¡Formulario enviado!');
                } else {
                Object.keys(values).forEach((key) => {
                    if (!values[key]) {
                    setFieldError(key, `El campo ${key} es requerido`);
                    }
                });
                }
                setSubmitting(false);
            }, 400);
            }}
        >
            {({ isSubmitting }) => (
            <Form className='Formulario'>

                <Field name="firstName">
                    {({ field }) => (
                        <FormControl id="first-name" mt={[0, 0]} mb={[0, 1]} p={[0, 2]} isRequired>
                            <FormLabel>Nombre</FormLabel>
                            <Input {...field} placeholder="Ingrese su nombre" variant="filled" />
                            <ErrorMessage name="firstName" component="div" />
                        </FormControl>
                    )}
                </Field>

                <Field name="surname">
                    {({ field }) => (
                        <FormControl id="surname" mt={[0,1]} mb={[0,1]} p={[0,2]} isRequired>
                            <FormLabel>Apellido</FormLabel>
                            <Input {...field} placeholder="Ingrese su apellido" variant="filled"/>
                            <ErrorMessage name="surname" component="div" />
                        </FormControl>
                    )}
                </Field> 

                <Field name="email">
                    {({ field }) => (     
                        <FormControl id="email" mt={[0,1]} mb={[0,1]} p={[0,2]}>
                            <FormLabel>Email</FormLabel>
                            <Input {...field} type="email" placeholder="Ingrese su direccion de email" variant="filled"/>
                            <FormHelperText>Nunca comparta su correo si la página no es segura</FormHelperText>
                            <ErrorMessage name="email" component="div" />
                        </FormControl>                      
                    )}
                </Field> 

                <Field name="telefono">
                    {({ field }) => ( 
                        <FormControl id="telefono" mt={[0,1]} mb={[0,1]} p={[0,2]} isRequired>                
                            <FormLabel>Teléfono</FormLabel>                    
                            <NumberInput placeholder="Ingrese su número telefónico" max={999999999999999} min={0} variant="filled">                    
                                <NumberInputField />
                            </NumberInput>
                            <FormHelperText>Nunca comparta su teléfono si la página no es segura</FormHelperText>   
                                            
                        </FormControl>                
                    )}
                </Field> 

                <Field name="password1">
                    {({ field }) => ( 
                        <FormControl id="password1" mt={[0,1]} mb={[0,1]} p={[0,2]} isRequired>
                            <FormLabel>Contraseña</FormLabel>
                            <Input type={show ? "text" : "password"} placeholder="Ingrese su contraseña" variant="filled"/>
                            <FormHelperText mb={[0,1]}>Nunca ingrese una contraseña si la página no es segura</FormHelperText>
                            <Button size="sm" onClick={handleClick}>
                                {show ? "Ocultar" : "Mostrar"}
                            </Button>
                        </FormControl>                
                    )}
                </Field> 

                <Field name="password2">
                    {({ field }) => ( 
                        <FormControl id="password2" mt={[0,1]} mb={[0,1]} p={[0,2]} isRequired>
                            <FormLabel>Repetir Contraseña</FormLabel>
                                <Input type={show2 ? "text" : "password"} placeholder="Repita su contraseña" variant="filled"/>
                                <FormHelperText mb={[1,1]}>Nunca ingrese una contraseña si la página no es segura</FormHelperText>
                                <Button size="sm" onClick={handleClick2}>
                                    {show2 ? "Ocultar" : "Mostrar"}
                                </Button>           
                        </FormControl>
                
                    )}
                </Field> 


                <Center mt={[1, 1]}>
                    <Button
                        type="submit"
                        as="button"
                        disabled={isSubmitting}
                        _active={{
                        bg: '#dddfe2',
                        transform: 'scale(0.98)',
                        borderColor: '#bec3c9',
                        }}
                        _focus={{
                        boxShadow:
                            '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                        }}
                    >
                        Enviar
                    </Button>
                </Center>
            </Form>
            )}
        </Formik>

    )
}

export default Formulario;
