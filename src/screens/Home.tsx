import Background from "../components/Background";
import Box from "../components/Box";
import Text from "../components/Text";

function Home() {
  return (
    <Background>
      <Box flex={1}>
        <Text>Hello World!</Text>
      </Box>
    </Background>
  );
}

export default Home;
