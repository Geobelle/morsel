import { useApi } from "@/lib/api";
import { useRef, useState } from "react";
import { Pressable, Text, View } from "react-native";
import CustomCheckbox from "./CustomCheckBox";
import FloatingMenu from "./FloatingMenu";

interface List {
  _id: string;
  name: string;
  category: string;
  quantity: string;
}

const ToBuyList = ({ name, quantity, _id }: List) => {
  const [checked, setChecked] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const { request } = useApi();
  const buttonRef = useRef<React.ComponentRef<typeof Pressable>>(null);
  return (
    <View className="flex flex-row items-center justify-between">
      <View className="flex flex-row gap-4 items-center  p-2">
        <CustomCheckbox
          checked={checked}
          onCheck={() => setChecked(!checked)}
        />

        <View key={_id} className="flex gap-1 border-b border-sage-light">
          <Text
            className={`text-primary-dark capitalize text-xl font-ingredient  ${checked ? "line-through" : "no-underline"}`}
          >
            {name}
          </Text>
          <View className="flex flex-row gap-1">
            <Text className="text-foreground font-body text-sm">
              {quantity}
            </Text>
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
        onDelete={async () => {
          try {
            // 2. Create pantry item
            await request(`/api/shoppingList/delete/${_id}`, {
              method: "DELETE",
            });

            // 3. Navigate after successful creation
          } catch (error) {
            console.error("Error deleting recipe:", error);
          }
        }}
      />
    </View>
  );
};

export default ToBuyList;
