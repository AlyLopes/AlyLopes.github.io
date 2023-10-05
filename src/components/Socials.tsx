import { Linking } from "react-native";

import Box from "./Box";
import IconButton from "./IconButton";
import Text from "./Text";
import { SOCIALS_URLS } from "../constants";
import GithubIcon from "../icons/Github";
import LinkedinIcon from "../icons/Linkedin";

type SocialsProps = {
  title: string;
};

function Socials({ title }: SocialsProps) {
  function openURL(url: string) {
    return function () {
      Linking.openURL(url);
    };
  }

  return (
    <Box paddingVertical="xl">
      <Text variant="subHeader">{title}</Text>
      <Box flexDirection="row">
        <IconButton onPress={openURL(SOCIALS_URLS.LINKEDIN)}>
          <LinkedinIcon size={48} />
        </IconButton>
        <IconButton onPress={openURL(SOCIALS_URLS.GITHUB)}>
          <GithubIcon size={48} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Socials;
