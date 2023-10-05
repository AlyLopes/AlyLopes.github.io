import img from "../../assets/profile.jpg";
import AboutMe from "../components/AboutMe";
import Background from "../components/Background";
import Box from "../components/Box";
import Image from "../components/Image";
import Socials from "../components/Socials";
import Text from "../components/Text";
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
        <Box flex={1} padding="xxl">
          <AboutMe
            title="ALY LOPES"
            subtitle="Code Maker | Tech Lead"
            content={
              <>
                <Text textAlign="justify" marginBottom="s">
                  Senior React Native developer with an Associate degree in
                  Information Technology and having studied Information Systems.
                  Passionate about the impact of mobile technologies, working
                  with a diverse team and developer experience. A relentless
                  optimist who loves to read and write in spare time.
                </Text>
                <Text textAlign="justify">
                  Strong communication skills, high level of commitment with my
                  team and the product I work on and ease on managing and
                  leading a technical team.
                </Text>
              </>
            }
          />
          <Socials title="More about me" />
        </Box>
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
