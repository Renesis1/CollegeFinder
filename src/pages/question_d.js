import Head from "next/head";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Center,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  StackDivider,
  Text,
  VStack,
  useColorMode,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { useRouter } from "next/router";

const IndexPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  function handleBackClick() {
    router.back();
  }
  function handleClick() {
    router.push("/placeholder");
  }
  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <VStack divider={<StackDivider />} spacing={4} align="stretch">
          <Card>
            <CardBody>
              <Heading>4. What do you want to major in?</Heading>
              <Stack direction="row" h="150px" p={4}>
                <Divider orientation="vertical" />
                <RadioGroup defaultValue="0">
                  <Stack>
                    <Radio colorScheme="green" value="1">
                      Unchecked
                    </Radio>
                    <Radio colorScheme="green" value="2">
                      Unchecked
                    </Radio>
                    <Radio colorScheme="green" value="3">
                      Unchecked
                    </Radio>
                    <Radio colorScheme="green" value="4">
                      Unchecked
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Stack>
            </CardBody>
          </Card>
          <Center>
            <ButtonGroup variant="outline" spacing="6">
              <Button colorScheme="green" onClick={handleClick}>
                Send
              </Button>
              <Button onClick={handleBackClick}>Previous</Button>
            </ButtonGroup>
          </Center>
        </VStack>
        <Box position={"fixed"} bottom={0} right={0} p={4}>
          <CircularProgress
            value={100}
            size="60px"
            thickness="4px"
            color="green"
          >
            <CircularProgressLabel>100%</CircularProgressLabel>
          </CircularProgress>
        </Box>
        <Box position={"fixed"} bottom={0} left={0} p={4}>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </Box>
      </main>
    </>
  );
};

export default IndexPage;
