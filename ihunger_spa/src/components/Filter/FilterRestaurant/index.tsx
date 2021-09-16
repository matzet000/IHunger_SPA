/* eslint-disable react/no-children-prop */
import { Search2Icon } from '@chakra-ui/icons';
import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Switch,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const FilterRestaurant: React.FC = () => {
  return (
    <VStack
      spacing={4}
      borderColor="gray.300"
      border="1px"
      pt="20px"
      pl="10px"
      pr="10px"
      borderRadius="30px"
      h="130px"
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.300" />}
        />
        <Input type="tel" placeholder="Restaurant name" />
      </InputGroup>
      <HStack spacing={4}>
        <Box w="200px">
          <Select
            placeholder="Restaurant type"
            bg="gray.800"
            focusBorderColor="gray.800"
            colorScheme="green"
            borderColor="gray.300"
          >
            <option value="option1">Asian</option>
            <option value="option2">Arabic</option>
            <option value="option3">Italian</option>
          </Select>
        </Box>
        <Box>
          <HStack>
            <Text>Vegan</Text>
            <Switch size="md" />
          </HStack>
        </Box>
        <Box>
          <HStack>
            <Text>Vegetarian</Text>
            <Switch size="md" />
          </HStack>
        </Box>
        <Box>
          <HStack>
            <Text>Kosher</Text>
            <Switch size="md" />
          </HStack>
        </Box>
      </HStack>
    </VStack>
  );
};

export default FilterRestaurant;
