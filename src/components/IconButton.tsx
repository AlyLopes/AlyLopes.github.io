import { Pressable } from "react-native";

import Box from "./Box";

type IconButtonProps = {
  onPress: () => void;
  children: JSX.Element;
};

function IconButton({ onPress, children }: IconButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Box paddingRight="m">{children}</Box>
    </Pressable>
  );
}

export default IconButton;
