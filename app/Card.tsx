import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
} from '@chakra-ui/react';

const IMAGE =
    'capture-3.jpg';

export default function Card() {
    return (
        <Box bgGradient='linear(to-r, #140e26, #140f26)' py={12} px="30px">
            <Flex justifyContent={'space-around'} >

                <Box

                    role={'group'}
                    p={6}
                    _hover={{ bg: '#240c29', border: '1px solid white', color: '#b41227' }}
                    boxShadow={'dark-lg'}
                    maxW={'330px'}
                    w={'full'}
                    // bg={useColorModeValue('white', 'gray.800')}
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
                            src={'capture-9.png'}
                        />
                    </Box>
                    <Stack pt={10} align={'center'}>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            Quater 01
                        </Text>
                        <Heading color={'white'}>
                            Typescript
                        </Heading>
                        <Stack direction={'row'} align={'center'}>
                            <Text fontWeight={800} fontSize={'xl'}>
                                $57
                            </Text>
                            <Text textDecoration={'line-through'} color={'gray.600'}>
                                $199
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
                <Box
                    role={'group'}
                    p={6}
                    _hover={{ bg: '#240c29', border: '1px solid white', color: '#b41227' }}
                    boxShadow={'dark-lg'}
                    maxW={'330px'}
                    w={'full'}
                    // bg={useColorModeValue('white', 'gray.800')}
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
                            src={'capture-10.png'}
                        />
                    </Box>
                    <Stack pt={10} align={'center'}>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            Brand
                        </Text>
                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                            Nice Chair, pink
                        </Heading>
                        <Stack direction={'row'} align={'center'}>
                            <Text fontWeight={800} fontSize={'xl'}>
                                $57
                            </Text>
                            <Text textDecoration={'line-through'} color={'gray.600'}>
                                $199
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
                <Box
                    // border="2px solid white"
                    _hover={{ bg: '#240c29', border: '1px solid white', color: '#b41227' }}
                    boxShadow={'dark-lg'}
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    // bg={useColorModeValue('white', 'gray.800')}
                    bgGradient='linear(to-r, #140e26, #140f26)'
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
                            Brand
                        </Text>
                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                            Nice Chair, pink
                        </Heading>
                        <Stack direction={'row'} align={'center'}>
                            <Text fontWeight={800} fontSize={'xl'}>
                                $57
                            </Text>
                            <Text textDecoration={'line-through'} color={'gray.600'}>
                                $199
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    );
}