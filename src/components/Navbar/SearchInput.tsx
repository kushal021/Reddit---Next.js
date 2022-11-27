import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import React from "react";

type SearchInputProps = {};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <>
      <Flex align="center" flexGrow={1} mr={1}>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.400" mb={1} />}
            />
            <Input
              fontSize="10pt"
              placeholder="Search Reddit"
              _placeholder={{ color: "gray.500" }}
              _hover={{
                bg: "white",
                border: "1px solid",
                borderColor: "blue.500",
              }}
              _focus={{
                outline: "none",
                border: "1px solid",
                borderColor: "blue.500",
              }}
              bg="gray.50"
              height="34px"
            />
          </InputGroup>
        </Stack>
      </Flex>
    </>
  );
};

export default SearchInput;
