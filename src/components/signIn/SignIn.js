import React from 'react'

import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton } from './SignIn.styles'

const SignIn = () => {

    const FORM_ITEMS = [
        { label: "email", inpType: "email" },
        { label: "password", inpType: "password" },

    ]
    return (
        <Container>
            <FormWrap>
                <Icon to="/">Dolla</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign In to your account</FormH1>
                        {FORM_ITEMS.map((item) => (
                            <>
                                <FormLabel htmlFor='for'>{item.label}</FormLabel>
                                <FormInput type={item.inpType} require />
                            </>
                        ))}
                         <FormButton type="submit">Continue</FormButton>

                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignIn
