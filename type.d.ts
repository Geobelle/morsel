import type { ImageSourcePropType } from "react-native";

declare global {
  interface TabIconProps {
    focused: boolean;
    icon: ImageSourcePropType;
  }
  interface ReciepeDetails {
    id: string;
    image: ImageSourcePropType;
    name: string;
    time: string;
    category?: string;
    ingredients: string;
    Preparation: string;
  }
  interface ReciepeCard {
    image: ImageSourcePropType;
    name: string;
    time: string;
  }
}

export {};
