import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

export default function images() {
    return (

        <Box bgGradient='linear(to-r, #140e26, #140f26)' pb={'20px'} pt={'140px'} px="70px" justifyContent="space-between">
            <Flex>
                <Box><Image src='capture-5.png' w={'70%'}></Image></Box>
                <Box><Image src='capture-6.png' w={'70%'}></Image></Box>
                <Box><Image src='capture-7.png' w={'70%'}></Image></Box>
                <Box><Image src='capture-8.png' w={'70%'}></Image></Box>
            </Flex>
        </Box>
    )
}
