import { Button, Flex } from "@chakra-ui/react";
import React from "react";

const AuthButtons: React.FC = () => {
  return (
    <Flex align="center">
      <Button
        variant="outline"
        height="28px"
        display={{ base: "none", sm: "flex" }}
      >
        Login
      </Button>
      <Button height="28px">Sign Up</Button>
    </Flex>
  );
};

export default AuthButtons;
