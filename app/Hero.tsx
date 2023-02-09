// import { Box, Button, color, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react'
// import React from 'react'

// export default function Hero() {
//     return (
//         <>
//             <Box pt={'40px'} bgGradient='linear(to-r, #140e26, #140f26)' color="white">
//                 <Flex>

//                     <Box w={'50%'} bg={''} p="40px">
//                         <Text color={'#b41227'} fontWeight={'extrabold'} fontSize="30px">
//                             Virtual Reality
//                         </Text>
//                         <HStack>

//                             <Heading fontSize={'50px'} fontWeight="extrabold">
//                                 Development For Business
//                             </Heading>
//                         </HStack>
//                         <Text my={30}>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//                         </Text>
//                         <Button _hover={{ bg: '#240c29', border: '1px solid white', color: '#b41227' }} fontWeight={'extrabold'} color={'#240c29'}>
//                             Get Started Now
//                         </Button>
//                     </Box>
//                     <Box boxShadow='dark-lg' w={'50%'} bg={''}>
//                         <Image src='capture-4.png'>

//                         </Image>
//                     </Box>
//                 </Flex>
//             </Box >
//         </>
//     )
// }
import Head from 'next/head';
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
} from '@chakra-ui/react';

export default function CallToActionWithAnnotation() {
    return (
        <>
            <Box bgGradient='linear(to-r, #140e26, #140f26)' color={'white'}>

                <Head >
                    <link
                        href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
                        rel="stylesheet"
                    />
                </Head >

                <Container maxW={'3xl'}>
                    <Stack
                        as={Box}
                        textAlign={'center'}
                        spacing={{ base: 8, md: 14 }}
                        py={{ base: 20, md: 36 }}>
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                            lineHeight={'110%'}>
                            Make money from <br />
                            <Text as={'span'} color={'#b41227'}>
                                your audience
                            </Text>
                        </Heading>
                        <Text color={'gray.500'}>
                            Monetize your content by charging your most loyal readers and reward
                            them loyalty points. Give back to your loyal readers by granting
                            them access to your pre-releases and sneak-peaks.
                        </Text>
                        <Stack
                            direction={'column'}
                            spacing={3}
                            align={'center'}
                            alignSelf={'center'}
                            position={'relative'}>
                            <Button
                                colorScheme={'green'}
                                bg={'white'}
                                fontWeight={'extrabold'} color={'#240c29'}
                                rounded={'full'}
                                px={6}
                                _hover={{ bg: '#240c29', border: '1px solid white', color: '#b41227' }}
                            >
                                Get Started
                            </Button>
                            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                                Learn more
                            </Button>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
