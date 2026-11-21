import { useApi } from "@/lib/api";
import { router, useIsFocused, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomDrawer from "../../../../components/BottomDrawer";
import ImagePickerComponent from "../../../../components/ImagePicker";
import PantryCategoryDropdown from "../../../../components/PantryCategoryDropdown";
import PantryUnitDropDown from "../../../../components/PantryUnitsDropdown";
import { icons } from "../../../../constants/icons";
import image from "../../../../constants/image";
import { uploadImage } from "../../../../utils/uploadImage";

interface PantryItem {
  _id: string;
  name: string;
  image: string;
  category: string;
  quantity: number;
  unit: string;
  createdAt: string;
}

const EditPantryItem = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [text, setText] = useState("");
  const [unit, setUnit] = useState("");
  const [category, setCategory] = useState("");
  const [Quantity, setQuantity] = useState<number | "">("");
  const [PantryItem, setPantryItem] = useState<PantryItem | null>(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const isFocused = useIsFocused();

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev === "" ? "" : Math.max(0, prev - 1)));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => (prev === "" ? 1 : prev + 1));
  };
  const { request } = useApi();

  useEffect(() => {
    const fetchPantryItems = async () => {
      try {
        const data = await request(`/api/pantry/pantryItem/${id}`, {
          method: "GET",
        });

        const item = data.data;

        setPantryItem(item);
        setText(item.name);
        setUnit(item.unit);
        setCategory(item.category);
        setQuantity(item.quantity);
        setSelectedImage(item.image);
      } catch (error) {
        console.error("API error:", error);
      }
    };

    if (id) {
      fetchPantryItems();
    }
  }, [id]);

  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View>
            <View className="flex mb-6 flex-row relative items-center">
              <Pressable
                onPress={() => {
                  router.push({
                    pathname: "/(pantryItems)/pantryDetails/[id]",
                    params: { id: id },
                  });
                }}
                className="bg-sage-light rounded-full p-3 z-50"
              >
                <Image
                  source={icons.arrow}
                  style={{ width: 24, height: 24 }}
                  resizeMode="contain"
                />
              </Pressable>

              <Text className="text-primary-dark font-heading text-3xl absolute left-0 right-0 text-center">
                Edit Pantry Item
              </Text>
            </View>

            <Pressable
              onPress={() => setShowDrawer(true)}
              className="my-6 border border-dashed border-primary w-full h-[220px] rounded-xl flex items-center justify-center"
            >
              {selectedImage ? (
                <Image
                  source={{ uri: selectedImage }}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              ) : (
                <>
                  <Text className="mb-2 text-primary-dark font-button text-xl">
                    Add a photo
                  </Text>

                  <View className="bg-sage-light p-6 rounded-full">
                    <Image
                      source={image.camera}
                      style={{ width: 60, height: 60 }}
                      resizeMode="contain"
                    />
                  </View>
                </>
              )}
            </Pressable>
            {isFocused && showDrawer && (
              <BottomDrawer
                visible={showDrawer}
                onClose={() => setShowDrawer(false)}
              >
                <ImagePickerComponent
                  onImageSelected={(uri) => {
                    setSelectedImage(uri);
                    setShowDrawer(false);
                  }}
                />
              </BottomDrawer>
            )}
            <View>
              <Text className="mb-2 text-primary-dark font-button text-xl">
                Item name *
              </Text>

              <View style={styles.container}>
                <Image
                  source={image.leaf}
                  style={styles.icon}
                  resizeMode="contain"
                />

                <TextInput
                  style={styles.input}
                  onChangeText={setText}
                  value={text}
                  autoCapitalize="words"
                  placeholder="e.g tomatoes"
                  placeholderTextColor="#8FB89A"
                />
              </View>
            </View>

            <View className="mt-6">
              <Text className="mb-2 text-primary-dark font-button text-xl">
                Quantity *
              </Text>

              <View className="flex flex-row items-center justify-around">
                <View className="flex flex-row items-center justify-between border border-primary rounded-xl w-3/5">
                  <Pressable
                    onPress={decreaseQuantity}
                    className="rounded-full bg-sage-light w-10 h-10 flex items-center justify-center"
                  >
                    <Text className="text-4xl font-recipe-title leading-none -mt-0.5 text-primary-dark">
                      -
                    </Text>
                  </Pressable>

                  <TextInput
                    value={Quantity.toString()}
                    onChangeText={(value) =>
                      setQuantity(value === "" ? "" : Number(value))
                    }
                    keyboardType="numeric"
                    className="w-24 h-[48px] border border-primary rounded-xl px-2 text-center text-foreground font-body"
                    placeholder="2"
                    placeholderTextColor="#8FB89A"
                  />

                  <Pressable
                    onPress={increaseQuantity}
                    className="rounded-full bg-sage-light w-10 h-10 flex items-center justify-center"
                  >
                    <Text className="text-4xl font-recipe-title leading-none -mt-0.5 text-primary-dark">
                      +
                    </Text>
                  </Pressable>
                </View>

                <View className="w-1/3">
                  <PantryUnitDropDown value={unit} onChange={setUnit} />
                </View>
              </View>
            </View>

            <View className="mt-6">
              <Text className="mb-2 text-primary-dark font-button text-xl">
                Category *
              </Text>

              <PantryCategoryDropdown value={category} onChange={setCategory} />
            </View>

            <View className="mt-6 bg-sage-light p-3 flex flex-row items-center rounded-lg gap-3">
              <Image
                source={icons.circle}
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />

              <Text className="text-primary-dark font-body">
                In your pantry
              </Text>
            </View>

            <Pressable
              onPress={async () => {
                try {
                  let imgUrl = "";

                  // 1. Upload image to ImageKit if one was selected
                  if (selectedImage) {
                    const auth = await request("/api/pantry/imagekit-auth");

                    imgUrl = await uploadImage(selectedImage, auth);
                  }

                  // 2. Update pantry item
                  await request(`/api/pantry/pantryItem/update/${id}`, {
                    method: "PATCH",
                    body: JSON.stringify({
                      name: text,
                      quantity: Quantity,
                      unit: unit,
                      category: category,
                      imgUrl: imgUrl,
                    }),
                  });

                  // 3. Navigate after successful creation
                  router.push({
                    pathname: "/(pantryItems)/pantryDetails/[id]",
                    params: { id: id },
                  });
                } catch (error) {
                  console.error("Error creating pantry item:", error);
                }
              }}

              className="bg-primary-dark py-4 items-center rounded-full mt-6"
            >
              <Text className="text-xl font-button text-background">
                Save changes
              </Text>
            </Pressable>

            <Pressable
              onPress={async () => {
                try {
                  // 2. Create pantry item
                  await request(`/api/pantry/pantryItem/delete/${id}`, {
                    method: "DELETE",
                  });

                  // 3. Navigate after successful creation
                  router.push("/(tabs)/pantry");
                } catch (error) {
                  console.error("Error deleting pantry item:", error);
                }
              }}

              className="border-2 border-red-500 py-4 items-center rounded-full mt-4"
            >
              <Text className="text-xl font-button text-red-500">
                Delete items
              </Text>
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#8FB89A",
    borderRadius: 10,
    backgroundColor: "#FBFCFB",
    marginTop: 4,
    gap: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    height: "100%",
    paddingVertical: 0,
    fontSize: 14,
    color: "#493F38",
  },
});

export default EditPantryItem;
