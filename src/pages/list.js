import Head from "next/head";
import {
  Box,
  Button,
  Heading,
  StackDivider,
  useColorMode,
} from "@chakra-ui/react";
import {
  Text,
  Center,
  Flex,
  Card,
  CardBody,
  Stack,
  CardHeader,
  CardFooter,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { ExternalLinkIcon } from "@chakra-ui/icons";
const IndexPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  function handleClick() {
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex flexDirection={"row"} alignItems={"center"} mx={5} mb={70} mt={5}>
          <Image src="/icon_img.svg" fixed height={50} width={50} />
          <Heading as="h5" size="lg" mx={2}>
            College Finder
          </Heading>
        </Flex>
        <Card mx={100} mb={50}>
          <CardBody>
            <Flex
              direction={"row"}
              justifyContent={"space-between"}
              width={"100%"}
            >
              <Heading> 1. Stevens Institute of Technology</Heading>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.egImage}
                  src="/stevens_img.png"
                  fixed
                  // layout="responsive"
                  height={250}
                  width={400}
                />
              </div>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.fgImage}
                  src="/wholecampus_img.jpg"
                  fixed
                  // layout="responsive"
                  height={250}
                  width={400}
                />
              </div>
            </Flex>
            <Stack divider={<StackDivider />} spacing="4" maxW={"32rem"}>
              <Box></Box>
              <Box>
                <Text margin={5} size="lg" maxW="32rem">
                  Decription: Stevens Institute of Technology is a
                  student-centric research university, with technology at its
                  core. Our three schools and one college uniquely prepare
                  students for bright futures in diverse fields including tech,
                  finance, medicine, energy, engineering — even art and music.
                </Text>
              </Box>
              <Box>
                <Text margin={5} size="lg" maxW="32rem">
                  Location: Hoboken
                </Text>
              </Box>
              <Text margin={5} size="lg" maxW="32rem">
                Average cost after aid: $37,000
              </Text>
              <Text margin={5} size="lg" maxW="32rem">
                Graduation Rate: 87%
              </Text>
              <Text margin={5} size="lg" maxW="32rem">
                Acceptance Rate: 53%
              </Text>
              <Box>
                <Link href="http://localhost:3002/" isExsternal>
                  Click here to view a 3D model of the campus{" "}
                  <ExternalLinkIcon mx="2px" />
                </Link>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Box>
          <Button
            size="lg"
            colorScheme="green"
            mt="24px"
            onClick={handleClick}
            position="fixed"
            right={10}
            bottom={10}
          >
            Return to Home Page
          </Button>
        </Box>
        <Box position={"fixed"} bottom={0} left={0} p={4}>
          <Button maxW="8rem" onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </Box>
      </main>
    </>
  );
};

export default IndexPage;
