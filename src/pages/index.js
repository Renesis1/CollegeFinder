import Head from "next/head";
import { Box, Button, Heading, useColorMode } from "@chakra-ui/react";
import { Text, Center, Flex } from "@chakra-ui/react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
const IndexPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  function handleClick() {
    router.push("/question_a");
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

        <Center>
          <Flex flexDirection="column">
            <Box maxW="64rem">
              <Heading size="3xl" mb={50}>
                Welcome to College Finder!
              </Heading>
            </Box>
            <Box>
              <Text fontSize="2xl" mb={15}>
                Don't know where to go to college? No worries!
              </Text>
              <Text fontSize="2xl" mb={50}>
                Take our quiz to find out the best college for you!
              </Text>
            </Box>
            <Box>
              <Button
                size="lg"
                colorScheme="green"
                mt="24px"
                onClick={handleClick}
              >
                Get Started Now
              </Button>
            </Box>
          </Flex>
        </Center>

        <div className={styles.imgContainer}>
          <Image
            className={styles.bgImage}
            src="/landing_img.jpg"
            fixed
            // layout="responsive"
            height={250}
            width={400}
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.cgImage}
            src="/campus_img.jpg"
            fixed
            // layout="responsive"
            height={250}
            width={400}
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.dgImage}
            src="/student_img.jpg"
            fixed
            // layout="responsive"
            height={250}
            width={400}
          />
        </div>

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
