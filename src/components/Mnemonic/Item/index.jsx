import { Flex, Box, Input } from '@chakra-ui/react';

import Text from '../../Shared/Text';

const Item = (props) => {
  const { number } = props;
  return (
    <Flex flex={1} gap='4px' pr='8px'>
      <Box minW='14px'>
        <Text size='sm'>{number}</Text>
      </Box>
      <Input
        border='none'
        borderBottom='1px solid'
        borderRadius={0}
        px='4px'
        py='10px'
        boxShadow='none !important'
        {...props}
      />
    </Flex>
  );
};

export default Item;
