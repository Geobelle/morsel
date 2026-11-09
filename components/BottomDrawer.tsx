import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { ReactNode, useEffect, useMemo, useRef } from "react";

type BottomDrawerProps = {
  children: ReactNode;
  visible: boolean;
  onClose: () => void;
};

const BottomDrawer = ({ children, visible, onClose }: BottomDrawerProps) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["42%"], []);

  useEffect(() => {
    if (visible) {
      bottomSheetRef.current?.present();
      requestAnimationFrame(() => {
        bottomSheetRef.current?.snapToIndex(0);
      });
    }
  }, [visible]);

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose
      enableDynamicSizing={false}
      index={0}
      onDismiss={() => {
        onClose();
      }}
      keyboardBehavior="interactive"
      keyboardBlurBehavior="restore"
      android_keyboardInputMode="adjustResize"

      backgroundStyle={{
        backgroundColor: "#FBFCFB",
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 10,
      }}
      handleIndicatorStyle={{
        backgroundColor: "#D5D5D5",
      }}
    >
      <BottomSheetView style={{ flex: 1, padding: 30 }}>
        {children}
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default BottomDrawer;
