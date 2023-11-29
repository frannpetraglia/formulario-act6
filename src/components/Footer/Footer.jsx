import React from "react";
import '../../App.css';
import { Flex, Wrap, IconButton, Box , Spacer} from "@chakra-ui/react";
import {TiSocialInstagram, TiSocialFacebookCircular, TiSocialTwitter} from "react-icons/ti";

function Footer(){

    return(

        <Flex className='Formulario'        
            flexDirection={['column','row']}
            alignItems='center'
            justifyContent='center'
            width='100%'
            p={3}
        >
            <Box as='label' p={['0','5']}                            
                _hover={{
                color: '#676d7a', 
                transition: '300ms'
                }}
            >
                Ejercitación Modo Formulario
            </Box>
            <Spacer />
            <Wrap spacing={4}>
                <IconButton
                    colorScheme='pink'
                    aria-label='Call Segun'
                    size={['xs','lg']}
                    icon={<TiSocialInstagram />}
                        
                />
                <IconButton
                    colorScheme='facebook'
                    aria-label='Call Segun'
                    size={['xs','lg']}
                    icon={<TiSocialFacebookCircular />}
                />
                <IconButton
                    colorScheme='twitter'
                    aria-label='Call Segun'
                    size={['xs','lg']}
                    icon={<TiSocialTwitter />}
                /> 
            </Wrap>
            <Spacer />
            <Box as='label'p={['0','5']}  
                _hover={{
                    color: '#676d7a', 
                    transition: '300ms'
                }}
            >
                © Franco Petraglia
            </Box>
        </Flex>

    )
}

export default Footer