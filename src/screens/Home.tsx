import img from "../../assets/profile.jpg";
import AboutMe from "../components/AboutMe";
import Background from "../components/Background";
import Box from "../components/Box";
import Image from "../components/Image";
import { MAX_ICON_SIZE } from "../constants";
import { createStyleHook } from "../theme";

function Home() {
  const styles = useStyles();

  return (
    <Background>
      <Box flex={1} flexDirection="row" alignItems="center">
        <Box
          width={MAX_ICON_SIZE}
          height={MAX_ICON_SIZE}
          borderRadius="m"
          margin="xxl"
        >
          <Image source={img} style={styles.image} resizeMode="cover" />
        </Box>
        <AboutMe
          title="Aly Lopes"
          subtitle="Code Maker | Team Manager"
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim convallis neque, et tristique odio posuere ullamcorper.\nUt gravida purus ut ex ultricies, a facilisis nunc euismod. Vivamus gravida interdum augue vel fermentum.`}
        />
      </Box>
    </Background>
  );
}

const useStyles = createStyleHook(({ borderRadii, spacing }) => ({
  image: {
    borderRadius: borderRadii.m,
    padding: spacing.m,
  },
}));

export default Home;
