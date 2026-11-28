import { Modal, Pressable, Text, View } from "react-native";

interface ConfirmModalProps {
  id: string;
  visible: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  confirmColor?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal = ({
  id,
  visible,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmColor = "#D64545",
  onConfirm,
  onCancel,
}: ConfirmModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View
        nativeID={id}
        className="flex-1 justify-center items-center bg-black/40 px-6"
      >
        <View className="w-full max-w-md rounded-[32px] bg-[#FBFCFB] p-6">
          <Pressable
            onPress={onCancel}
            className="self-end h-10 w-10 items-center justify-center rounded-full bg-[#EEF4ED]"
          >
            <Text className="text-[#493F38] text-xl">×</Text>
          </Pressable>

          <Text className="text-[#493F38] text-2xl font-heading text-center mt-2">
            {title}
          </Text>

          <Text className="text-[#493F38] text-base font-body text-center mt-4 leading-6">
            {message}
          </Text>

          <View className="flex-row gap-3 mt-7">
            <Pressable
              onPress={onCancel}
              className="flex-1 rounded-full border-2 border-[#53765B] py-4 items-center"
            >
              <Text className="text-[#53765B] text-base font-body-bold">
                {cancelText}
              </Text>
            </Pressable>

            <Pressable
              onPress={onConfirm}
              style={{ backgroundColor: confirmColor }}
              className="flex-1 rounded-full py-4 items-center"
            >
              <Text className="text-white text-base font-body-bold">
                {confirmText}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;
