import { Box, Button, color, Flex, Heading, Image, SlideFade, Text } from '@chakra-ui/react'
import React from 'react'

export default function Mission() {
    return (
        <>

            <Box py={'50px'} bgGradient='linear(to-r, #140e26, #140f26)' color="white" >
                <Flex>


                    <Box w={'50%'} bg={''}>
                        <Image src='capture-4.png'>

                        </Image>
                    </Box>
                    <Box w={'50%'} bg={''} p="40px">
                        <Text transitionDuration={'100s'} transitionDelay={'100s'} color={'#b41227'} fontWeight={'extrabold'} fontSize="30px">
                            Our Mission
                        </Text>
                        <Heading fontSize={'50px'} fontWeight="extrabold">
                            Immersive solutions for your business.
                        </Heading>
                        <Text my={30}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </Text>
                        <Button _hover={{ bg: '#240c29', border: '1px solid white', color: '#b41227' }} fontWeight={'extrabold'} color={'#240c29'}>
                            Get Started Now
                        </Button>
                    </Box>
                </Flex>
            </Box >
        </>
    )
}
