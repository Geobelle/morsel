import { useState } from "react";
import { Pressable, Text, View } from "react-native";

const foodOptions = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Salads",
  "Snacks",
  "Drinks",
];

interface CategoryDropDown {
  value: string;
  onChange: (value: string) => void;
}

export default function CategoryDropDown({
  value,
  onChange,
}: CategoryDropDown) {
  const [open, setOpen] = useState(false);

  return (
    <View className="relative">
      <Pressable
        onPress={() => setOpen(!open)}
        className="h-14 w-full flex-row items-center justify-between rounded-xl border border-primary bg-background px-4"
      >
        <Text className="text-sm text-primary">{value}</Text>
        <Text className="text-xs text-primary">{open ? "▲" : "▼"}</Text>
      </Pressable>

      {open && (
        <View className="absolute left-0 top-12 z-50 w-full overflow-hidden rounded-lg border border-primary bg-background shadow-md">
          {foodOptions.map((option) => (
            <Pressable
              key={option}
              onPress={() => {
                onChange(option);
                setOpen(false);
              }}
              className="px-4 py-3"
            >
              <Text
                className={`text-sm ${
                  value === option
                    ? "font-semibold text-primary"
                    : "text-foreground"
                }`}
              >
                {option}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}
