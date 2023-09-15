import { Image as RNImage, type ImageProps } from "react-native";
import { StyleSheet } from "react-native";

function Image({ style, ...props }: ImageProps) {
  return <RNImage style={[style, styles.image]} {...props} />;
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
});

export default Image;
