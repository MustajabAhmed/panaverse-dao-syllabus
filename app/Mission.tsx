import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Box,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react';
import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement } from 'react';

interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export default function Mission() {
    return (
        <Container bgGradient='linear(to-r, #140e26, #140f26)' maxW={'100%'} color='white' pb={'150px'}>
            <Box textTransform={'uppercase'}
                color={'#b41227'}
                fontWeight={'extrabold'}
                fontSize={'50px'}
                // bg={useColorModeValue('blue.50', 'blue.900')}
                mb={'80px'}
            >
                <Heading>
                    <center>
                        Our Mission
                    </center>
                </Heading>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>

                <Flex shadow={'dark-lg'}>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'capture-4.png'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
                <Stack spacing={4}>

                    <Heading>Earn While You Learn</Heading>
                    <Text color={'gray.500'} fontSize={'lg'} fontWeight="semibold">
                        Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                        <Feature
                            icon={
                                <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'Business Planning'}
                        />
                        <Feature
                            icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'Financial Planning'}
                        />
                        <Feature
                            icon={
                                <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('purple.100', 'purple.900')}
                            text={'Market Analysis'}
                        />
                    </Stack>
                </Stack>

            </SimpleGrid>
        </Container>
    );
}