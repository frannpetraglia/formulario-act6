import React from 'react';
import './Header.css'
import '../../App.css';
import { Flex, Spacer, Box, Button, Wrap, Stack, Center } from '@chakra-ui/react';

function Header(){



    return(
        /*este es el Header Completo*/
        <Stack
            className='class-header'
            p={[1,5]}
        >
            <Center
                fontWeight='bold'
                fontSize={[30,100]}
            >
                La Tranquera SA
            </Center>

            {/*Este es el Flex Para el Menu*/}
            <Flex
                flexDirection={['column','row']}
                alignItems='center'
                justifyContent='center'
                width='100%'
            >
                <Wrap spacing={4}>
                <Button  color='#0a0606' fontSize={[10,20]}  variant='link'>
                    Home
                </Button>
                <Button  color='#0a0606' fontSize={[10,20]}  variant='link'>
                    Contacts
                </Button>
                <Button  color='#0a0606' fontSize={[10,20]}  variant='link'>
                    About Us
                </Button>
                <Button  color='#0a0606' fontSize={[10,20]}  variant='link'>
                    Sign In
                </Button>
                <Button  color='#0a0606' fontSize={[10,20]}  variant='link'>
                    Sign Up
                </Button>                                
                </Wrap>

            </Flex>
        </Stack>
        
    )
}

export default Header