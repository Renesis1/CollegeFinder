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
    router.push("/question_c");
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
              <Heading>2. How large is your dream college?</Heading>
              <Stack direction="row" h="150px" p={4}>
                <Divider orientation="vertical" />
                <RadioGroup defaultValue="0">
                  <Stack>
                    <Radio colorScheme="green" value="1">
                      Less than 10,000
                    </Radio>
                    <Radio colorScheme="green" value="2">
                      10,000-30,000
                    </Radio>
                    <Radio colorScheme="green" value="3">
                      30,000-50,000
                    </Radio>
                    <Radio colorScheme="green" value="4">
                      Over 50,000
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Stack>
            </CardBody>
          </Card>
          <Center>
            <ButtonGroup variant="outline" spacing="6">
              <Button colorScheme="green" onClick={handleClick}>
                Next
              </Button>
              <Button onClick={handleBackClick}>Previous</Button>
            </ButtonGroup>
          </Center>
        </VStack>
        <Box position={"fixed"} bottom={0} right={0} p={4}>
          <CircularProgress
            value={50}
            size="60px"
            thickness="4px"
            color="green"
          >
            <CircularProgressLabel>50%</CircularProgressLabel>
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
