import Box from "./Box";
import Text from "./Text";

type AboutMeProps = {
  title: string;
  subtitle: string;
  content: string;
};

function AboutMe({ title, subtitle, content }: AboutMeProps) {
  return (
    <Box flex={1} padding="xxl">
      <Box>
        <Text variant="header">{title}</Text>
      </Box>
      <Box>
        <Text variant="subHeader">{subtitle}</Text>
      </Box>
      <Box>
        <Text>{content}</Text>
      </Box>
    </Box>
  );
}

export default AboutMe;
