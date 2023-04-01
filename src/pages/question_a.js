import Head from "next/head";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Center,
  Heading,
  Stack,
  StackDivider,
  VStack,
  useColorMode,
  CircularProgress,
  CircularProgressLabel,
  Input,
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
    router.push("/question_b");
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
              <Heading>1. What's the location of your dream college?</Heading>
              <Stack direction="row" h="150px" p={4}>
                <Divider orientation="vertical" />
                <Input variant="outline" placeholder="Enter location here" />
              </Stack>
            </CardBody>
          </Card>
          <Center>
            <ButtonGroup variant="outline" spacing="6">
              <Button colorScheme="green" onClick={handleClick}>
                Next
              </Button>
              <Button onClick={handleBackClick}>Cancel</Button>
            </ButtonGroup>
          </Center>
        </VStack>
        <Box position={"fixed"} bottom={0} right={0} p={4}>
          <CircularProgress
            value={25}
            size="60px"
            thickness="4px"
            color="green"
          >
            <CircularProgressLabel>25%</CircularProgressLabel>
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
