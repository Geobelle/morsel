import { Modal, Pressable, Text, View } from "react-native";

type PlanMealFloatingMenuProps = {
  visible: boolean;
  position: { x: number; y: number };
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onViewNote: () => void;
};

const PlanMealsFloatingMenu = ({
  visible,
  position,
  onClose,
  onEdit,
  onDelete,
  onViewNote,
}: PlanMealFloatingMenuProps) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable className="flex-1" onPress={onClose}>
        <View
          className="absolute w-36 rounded-xl bg-white p-2 shadow-lg"
          style={{
            top: position.y,
            left: position.x - 145,
          }}
        >
          <Pressable
            onPress={() => {
              onClose();
              onEdit();
            }}
            className="p-3"
          >
            <Text className="text-foreground font-body">Edit Meal</Text>
          </Pressable>

          <View className="h-px bg-sage-light" />

          <Pressable
            onPress={() => {
              onClose();
              onViewNote;
            }}
            className="p-3"
          >
            <Text className="text-foreground font-body">View Note</Text>
          </Pressable>

          <View className="h-px bg-sage-light" />

          <Pressable
            onPress={() => {
              onClose();
              onDelete();
            }}
            className="p-3"
          >
            <Text className="text-red-500 font-body">Delete</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

export default PlanMealsFloatingMenu;
