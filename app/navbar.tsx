import React from 'react'
import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Icon,
    Button,
    Menu,
    MenuButton,
    Image,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Home', 'Courses', 'About Us'];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: 'white',
            color: '#3e0c38',
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Simple() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box color={'white'} bgGradient='linear(to-r, #140e26, #140f26)' py={4} px={9}>
                <Flex h={100} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack alignItems={'center'}>
                        <Image src="capture-2.png" w={'27px'}></Image>
                        <Box fontWeight={'bold'} fontSize={'21px'}>

                            Panaverse Dao
                        </Box>

                    </HStack>
                    <HStack
                        as={'nav'}
                        fontWeight="bold"
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                        <Button _hover={{ bg: '#240c29', border: '1px solid white', color: '#b41227' }} fontWeight="bold" color={'#3e0c38'}>Contact Us</Button>
                    </HStack>

                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}