import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
    Button,
} from '@chakra-ui/react';

const IMAGE =
    'capture-3.jpg';

export default function Card(): JSX.Element {

    return (
        <>

            <Box bgGradient='linear(to-r, #140e26, #140f26)' py={12} px="30px">

                <Box textTransform={'uppercase'}
                    color={'#b41227'}
                    fontWeight={'extrabold'}
                    fontSize={'50px'}
                    // bg={useColorModeValue('blue.50', 'blue.900')}
                    mb={'90px'}
                    mt="-90px"
                >
                    <Heading>
                        <center>
                            Our Courses
                        </center>
                    </Heading>
                </Box>
                <Flex justifyContent={'space-around'} direction={{ base: "column", md: "row", lg: 'row' }}>

                    <Box
                        my={{ base: "50px", md: "20px", lg: "0px" }}
                        // mx={{ md: "25px" }}
                        // w={{ md: "3000px" }}

                        role={'group'}
                        p={6}

                        _hover={{ bgGradient: 'linear(to-r, #140e26, #140f26)', border: '1px solid white', color: '#b41227' }}
                        boxShadow={'dark-lg'}
                        maxW={'330px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.800')}
                        // boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1}>
                        <Box
                            rounded={'lg'}
                            mt={-12}
                            pos={'relative'}
                            height={'230px'}
                            _after={{
                                transition: 'all .3s ease',
                                content: '""',
                                w: 'full',
                                h: 'full',
                                pos: 'absolute',
                                top: 5,
                                left: 0,
                                backgroundImage: `url(${IMAGE})`,
                                filter: 'blur(15px)',
                                zIndex: -1,
                            }}
                            _groupHover={{
                                _after: {
                                    filter: 'blur(20px)',
                                },
                            }}>
                            <Image
                                rounded={'lg'}
                                height={230}
                                width={282}
                                objectFit={'cover'}
                                src={'capture-14.png'}
                            />
                        </Box>
                        <Stack pt={10} align={'center'}>
                            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                Quater 01
                            </Text>
                            <Heading >
                                Typescript
                            </Heading>
                            <Stack direction={'row'} align={'center'}>
                                <Button _hover={{}} bg={'#b41227'} color="white">
                                    Enroll Today
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box
                        my={{ base: "50px", md: "20px", lg: "0px" }}
                        // mx={{ md: "25px" }}
                        role={'group'}
                        p={6}

                        _hover={{ bgGradient: 'linear(to-r, #140e26, #140f26)', border: '1px solid white', color: '#b41227' }}
                        boxShadow={'dark-lg'}
                        maxW={'330px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.800')}
                        // boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1}>
                        <Box
                            rounded={'lg'}
                            mt={-12}
                            pos={'relative'}
                            height={'230px'}
                            _after={{
                                transition: 'all .3s ease',
                                content: '""',
                                w: 'full',
                                h: 'full',
                                pos: 'absolute',
                                top: 5,
                                left: 0,
                                backgroundImage: `url(${IMAGE})`,
                                filter: 'blur(15px)',
                                zIndex: -1,
                            }}
                            _groupHover={{
                                _after: {
                                    filter: 'blur(20px)',
                                },
                            }}>
                            <Image
                                rounded={'lg'}
                                height={230}
                                width={282}
                                objectFit={'cover'}
                                src={'capture-11.png'}
                            />
                        </Box>
                        <Stack pt={10} align={'center'}>
                            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                Quater 02
                            </Text>
                            <Heading >
                                NEXT.js 13
                            </Heading>
                            <Stack direction={'row'} align={'center'}>
                                <Button _hover={{}} bg={'#b41227'} color="white">
                                    Enroll Today
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box
                        my={{ base: "50px", md: "20px", lg: "0px" }}
                        // mx={{ md: "25px" }}
                        role={'group'}
                        p={6}

                        _hover={{ bgGradient: 'linear(to-r, #140e26, #140f26)', border: '1px solid white', color: '#b41227' }}
                        boxShadow={'dark-lg'}
                        maxW={'330px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.800')}
                        // boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1}>
                        <Box
                            rounded={'lg'}
                            mt={-12}
                            pos={'relative'}
                            height={'230px'}
                            _after={{
                                transition: 'all .3s ease',
                                content: '""',
                                w: 'full',
                                h: 'full',
                                pos: 'absolute',
                                top: 5,
                                left: 0,
                                backgroundImage: `url(${IMAGE})`,
                                filter: 'blur(15px)',
                                zIndex: -1,
                            }}
                            _groupHover={{
                                _after: {
                                    filter: 'blur(20px)',
                                },
                            }}>
                            <Image
                                rounded={'lg'}
                                height={230}
                                width={282}
                                objectFit={'cover'}
                                src={'capture-15.jpg'}
                            />
                        </Box>
                        <Stack pt={10} align={'center'}>
                            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                Quater 03
                            </Text>
                            <Heading >
                                Metaverse
                            </Heading>
                            <Stack direction={'row'} align={'center'}>
                                <Button _hover={{}} bg={'#b41227'} color="white">
                                    Enroll Today
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>

                </Flex>

            </Box>
            <Box bgGradient='linear(to-r, #140e26, #140f26)' py={12} px="30px">
                <Flex justifyContent={'space-evenly'} direction={{ base: "column", md: "row", lg: 'row' }}>

                    <Box
                        my={{ base: "-40px", md: "20px", lg: "0px" }}
                        // mx={{ md: "25px" }}
                        // w={{ md: "3000px" }}

                        role={'group'}
                        p={6}

                        _hover={{ bgGradient: 'linear(to-r, #140e26, #140f26)', border: '1px solid white', color: '#b41227' }}
                        boxShadow={'dark-lg'}
                        maxW={'330px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.800')}
                        // boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1}>
                        <Box
                            rounded={'lg'}
                            mt={-12}
                            pos={'relative'}
                            height={'230px'}
                            _after={{
                                transition: 'all .3s ease',
                                content: '""',
                                w: 'full',
                                h: 'full',
                                pos: 'absolute',
                                top: 5,
                                left: 0,
                                backgroundImage: `url(${IMAGE})`,
                                filter: 'blur(15px)',
                                zIndex: -1,
                            }}
                            _groupHover={{
                                _after: {
                                    filter: 'blur(20px)',
                                },
                            }}>
                            <Image
                                rounded={'lg'}
                                height={230}
                                width={282}
                                objectFit={'cover'}
                                src={'capture-14.png'}
                            />
                        </Box>
                        <Stack pt={10} align={'center'}>
                            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                Quater 01
                            </Text>
                            <Heading >
                                Typescript
                            </Heading>
                            <Stack direction={'row'} align={'center'}>
                                <Button _hover={{}} bg={'#b41227'} color="white">
                                    Enroll Today
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box
                        my={{ base: "140px", md: "20px", lg: "0px" }}
                        // mx={{ md: "25px" }}
                        role={'group'}
                        p={6}

                        _hover={{ bgGradient: 'linear(to-r, #140e26, #140f26)', border: '1px solid white', color: '#b41227' }}
                        boxShadow={'dark-lg'}
                        maxW={'330px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.800')}
                        // boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1}>
                        <Box
                            rounded={'lg'}
                            mt={-12}
                            pos={'relative'}
                            height={'230px'}
                            _after={{
                                transition: 'all .3s ease',
                                content: '""',
                                w: 'full',
                                h: 'full',
                                pos: 'absolute',
                                top: 5,
                                left: 0,
                                backgroundImage: `url(${IMAGE})`,
                                filter: 'blur(15px)',
                                zIndex: -1,
                            }}
                            _groupHover={{
                                _after: {
                                    filter: 'blur(20px)',
                                },
                            }}>
                            <Image
                                rounded={'lg'}
                                height={230}
                                width={282}
                                objectFit={'cover'}
                                src={'capture-15.jpg'}
                            />
                        </Box>
                        <Stack pt={10} align={'center'}>
                            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                Quater 03
                            </Text>
                            <Heading >
                                Metaverse
                            </Heading>
                            <Stack direction={'row'} align={'center'}>
                                <Button _hover={{}} bg={'#b41227'} color="white">
                                    Enroll Today
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>

                </Flex>

            </Box>
        </>

    );
}