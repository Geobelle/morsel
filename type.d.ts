import type { ImageSourcePropType } from "react-native";

declare global {
  interface TabIconProps {
    focused: boolean;
    icon: ImageSourcePropType;
  }
  interface Ingredients {
    id: string;
    name: string;
    quantity: string;
  }
  interface Preparation {
    id: string;
    name: string;
  }

  interface ReciepeDetails {
    id: string;
    image: ImageSourcePropType;
    name: string;
    time: string;
    category: string;
    ingredients: Ingredients[];
    Preparation: Preparation[];
  }
  interface ReciepeCard {
    image: ImageSourcePropType;
    name: string;
    time: string;
    id: string;
    category: string;
  }

  interface pantryitem {
    name: string;
    id: string;
    image: ImageSourcePropType;
    quantity: number;
    category: string;
    unit: string;
  }
}

export {};
