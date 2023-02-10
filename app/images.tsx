import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

export default function images() {
    return (

        <Box bgGradient='linear(to-r, #140e26, #140f26)' mt={'-70px'} pb={'20px'} px="70px" justifyContent="space-between">
            <Flex direction={{ base: "column", md: "column", lg: 'row' }}>
                <Box><Image m={{ base: "35px", md: "20px", lg: "50px" }} w={{ base: "50%", md: "50%", lg: "50%" }} src='capture-5.png' ></Image></Box>
                <Box><Image m={{ base: "35px", md: "20px", lg: "50px" }} w={{ base: "50%", md: "50%", lg: "50%" }} src='capture-6.png' ></Image></Box>
                <Box><Image m={{ base: "35px", md: "20px", lg: "50px" }} w={{ base: "50%", md: "50%", lg: "50%" }} src='capture-7.png' ></Image></Box>
                <Box><Image m={{ base: "35px", md: "20px", lg: "50px" }} w={{ base: "50%", md: "50%", lg: "50%" }} src='capture-8.png' ></Image></Box>
            </Flex>
        </Box>
    )
}
