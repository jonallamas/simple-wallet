import { Flex, Box, Input } from '@chakra-ui/react';

import Text from '../../Shared/Text';

const Item = (props) => {
  const { number } = props;
  return (
    <Flex flex={1} gap='4px' pr='8px'>
      <Box minW='14px'>
        <Text size='sm' opacity={0.35}>
          {number}
        </Text>
      </Box>
      <Input
        border='none'
        borderBottom='1px solid #2B2A2B'
        borderRadius={0}
        px='4px'
        py='10px'
        boxShadow='none !important'
        color='#fff'
        _hover={{
          borderColor: '#B3E0B8',
        }}
        _focus={{
          borderColor: '#6bc273',
        }}
        {...props}
      />
    </Flex>
  );
};

export default Item;
