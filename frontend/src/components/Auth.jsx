import { Grid, GridItem } from '@chakra-ui/react';
import SignUpForm from './SignUpForm ';
import LoginForm from './LoginForm';

const Auth = () => {
    return (
        <Grid templateColumns='repeat(2, 400px)' gap={70} placeContent='center' w='auto' h='100%'>
            <GridItem>
                <SignUpForm />
            </GridItem>

            <GridItem>
                <LoginForm />
            </GridItem>
        </Grid>
    )
}

export default Auth;