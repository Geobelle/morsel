import { useState } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { icons } from "../constants/icons";

const SearchBar = () => {
  const [text, setText] = useState("");

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <Image source={icons.search} style={styles.icon} resizeMode="contain" />

      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Search your recipes..."
        placeholderTextColor="#B7B7B7"
      />
    </View>
    // </TouchableWithoutFeedback>
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
    borderRadius: 20,
    backgroundColor: "#FBFCFB",
    marginTop: 16,
    gap: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    height: "100%",
    paddingVertical: 0,
    fontSize: 14,
    color: "#493F38",
  },
});

export default SearchBar;
