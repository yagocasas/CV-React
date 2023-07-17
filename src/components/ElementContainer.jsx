import { Flex } from "@chakra-ui/layout";

const ElementContainer = ({ children, ...rest }) => {
    return (
<Flex direction={'column'} maxW={'7xl'} px={2} gap={4} {...rest}>
    {children}
</Flex>
    );
};

export default ElementContainer;
