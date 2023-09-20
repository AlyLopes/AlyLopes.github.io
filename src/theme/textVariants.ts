import type { TextStyle } from "react-native";

import { APP_FONT_NAMES } from "../constants";

type TextVariants = {
  [key: string]: TextStyle;
};

const textVariants: TextVariants = {
  header: {
    fontFamily: APP_FONT_NAMES.VidaLokaRegular,
    fontWeight: "bold",
    fontSize: 68,
    lineHeight: 68 * 1.5,
    color: "white",
  },
  subHeader: {
    fontFamily: APP_FONT_NAMES.ChakraPetchLight,
    fontWeight: "bold",
    fontSize: 34,
    lineHeight: 34 * 2,
    color: "white",
  },
  defaults: {
    fontFamily: APP_FONT_NAMES.MooliRegular,
    fontSize: 18,
    lineHeight: 16 * 1.25,
    color: "white",
  },
};

export default textVariants;
