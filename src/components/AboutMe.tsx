import Box from "./Box";
import Text from "./Text";

type AboutMeProps = {
  title: string;
  subtitle: string;
  content: JSX.Element;
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
      <Box>{content}</Box>
    </Box>
  );
}

export default AboutMe;
