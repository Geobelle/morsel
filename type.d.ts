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
    image: string;
    name: string;
    prepTime: string;
    category: string;
    ingredients: Ingredients[];
    Preparation: Preparation[];
  }
  interface ReciepeCard {
    image: string;
    name: string;
    prepTime: string;
    id: string;
    category: string;
  }

  interface pantryitem {
    _id: string;
    name: string;
    image: string;
    category: string;
    quantity: number;
    unit: string;
  }
}

export {};
