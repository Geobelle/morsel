import { useRef, useState } from "react";
import { Pressable, Text, View } from "react-native";
import CustomCheckbox from "./CustomCheckBox";
import FloatingMenu from "./FloatingMenu";

const ToBuyList = ({ name, quantity, id, unit }: pantryitem) => {
  const [checked, setChecked] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const buttonRef = useRef<View>(null);
  return (
    <View className="flex flex-row items-center justify-between">
      <View className="flex flex-row gap-4 items-center  p-2">
        <CustomCheckbox
          checked={checked}
          onCheck={() => setChecked(!checked)}
        />

        <View key={id} className="flex gap-1 border-b border-sage-light">
          <Text
            className={`text-primary-dark capitalize text-xl font-ingredient  ${checked ? "line-through" : "no-underline"}`}
          >
            {name}
          </Text>
          <View className="flex flex-row gap-1">
            <Text className="text-foreground font-body text-sm">
              {quantity}
            </Text>
            <Text className="text-foreground font-bodytext-sm">{unit}</Text>
          </View>
        </View>
      </View>
      <Pressable
        ref={buttonRef}
        onPress={() => {
          buttonRef.current?.measureInWindow((x, y, width, height) => {
            setPosition({
              x: x + width,
              y: y,
            });
            setMenuVisible(true);
          });
        }}
        className="h-10 w-10 rounded-full items-center justify-center bg-sage-light"
      >
        <Text className="text-primary-dark text-xl leading-5">⋯</Text>
      </Pressable>
      <FloatingMenu
        visible={menuVisible}
        position={position}
        onClose={() => setMenuVisible(false)}
        onEdit={() => console.log("Edit")}
        onDelete={() => console.log("Delete")}
      />
    </View>
  );
};

export default ToBuyList;
