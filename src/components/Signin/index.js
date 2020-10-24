import React from 'react'
import {
Container,
FormWrap,
Icon,
FormContent,
Form,
FormH1,
FormLabel,
FormInput,
FormButton,
Text
} from './SigninElements'


const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>Universe</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in to your account.</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email'></FormInput>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password'></FormInput>
                            <FormButton type='submit'>Log In</FormButton>
                            <Text>Forgot your password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>    
            </Container>  
        </>
    )
}

export default SignIn
