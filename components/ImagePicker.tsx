import { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";

import * as ImagePicker from "expo-image-picker";

type ImagePickerProps = {
  onImageSelected: (uri: string) => void;
};

export default function ImagePickerComponent({
  onImageSelected,
}: ImagePickerProps) {
  const [image, setImage] = useState<string | null>(null);

  // Select image from gallery
  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Permission required", "Please allow access to your photos.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      onImageSelected(result.assets[0].uri);
    }
  };

  // Take a picture with camera
  const takePicture = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Permission required", "Please allow camera access.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      onImageSelected(result.assets[0].uri);
    }
  };

  return (
    <View>
      <View className="gap-4">
        <Text className="font-heading text-2xl text-foreground mb-2">
          Add a recipe photo
        </Text>

        <Pressable
          onPress={pickImage}
          className="bg-sage-light rounded-2xl py-5 px-5 items-center justify-center"
        >
          <Text className="font-button text-base text-primary-dark">
            Upload from gallery
          </Text>
        </Pressable>

        <Pressable
          onPress={takePicture}
          className="bg-cream rounded-2xl py-5 px-5 items-center justify-center"
        >
          <Text className="font-button text-base text-foreground">
            Take a picture
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
