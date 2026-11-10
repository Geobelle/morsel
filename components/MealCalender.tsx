import { useRef, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

type MealCalendarProps = {
  plannedDates?: string[];
  onDateChange?: (date: Date) => void;
};

const getDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const getDateRange = () => {
  const dates: Date[] = [];
  const today = new Date();

  // Start at midnight to avoid time-related date differences
  today.setHours(0, 0, 0, 0);

  for (let i = -30; i <= 90; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date);
  }

  return dates;
};

const dates = getDateRange();

const ITEM_WIDTH = 58;
const ITEM_GAP = 8;
const ITEM_SIZE = ITEM_WIDTH + ITEM_GAP;

export default function MealCalendar({
  plannedDates = [],
  onDateChange,
}: MealCalendarProps) {
  const scrollRef = useRef<ScrollView>(null);
  const hasInitialScrolled = useRef(false);

  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  });

  const [displayedMonth, setDisplayedMonth] = useState(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  });

  const [calendarWidth, setCalendarWidth] = useState(0);

  const monthYear = displayedMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Position today's date in the center when the calendar opens
  const handleCalendarLayout = (width: number) => {
    setCalendarWidth(width);

    if (!hasInitialScrolled.current) {
      const todayIndex = 30;

      const initialOffset = todayIndex * ITEM_SIZE - (width - ITEM_WIDTH) / 2;

      scrollRef.current?.scrollTo({
        x: Math.max(0, initialOffset),
        animated: false,
      });

      hasInitialScrolled.current = true;
    }
  };

  // Update displayed month based on the center of the visible calendar
  const handleScrollEnd = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;

    const centerIndex = Math.round(
      (offsetX + calendarWidth / 2 - ITEM_WIDTH / 2) / ITEM_SIZE,
    );

    const safeIndex = Math.max(0, Math.min(centerIndex, dates.length - 1));

    setDisplayedMonth(dates[safeIndex]);
  };

  const selectDate = (date: Date) => {
    setSelectedDate(date);
    onDateChange?.(date);

    setDisplayedMonth(date);
  };

  return (
    <View className="gap-4">
      {/* Dynamic month and year */}
      <View className="items-center">
        <Text className="font-heading text-lg text-foreground">
          {monthYear}
        </Text>
      </View>

      {/* Horizontally scrollable calendar */}
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        onLayout={(event) =>
          handleCalendarLayout(event.nativeEvent.layout.width)
        }
        onMomentumScrollEnd={handleScrollEnd}
        onScrollEndDrag={handleScrollEnd}
        contentContainerStyle={{
          gap: ITEM_GAP,
        }}
      >
        {dates.map((date) => {
          const isSelected = getDateKey(date) === getDateKey(selectedDate);

          const hasMeals = plannedDates.includes(getDateKey(date));

          const dayName = date.toLocaleDateString("en-US", {
            weekday: "short",
          });

          return (
            <Pressable
              key={getDateKey(date)}
              onPress={() => selectDate(date)}
              className={`w-[58px] h-[76px] rounded-3xl items-center justify-center ${
                isSelected ? "bg-primary-dark" : "bg-sage-light"
              }`}
            >
              <Text
                className={`font-body text-sm ${
                  isSelected ? "text-white" : "text-foreground"
                }`}
              >
                {dayName}
              </Text>

              <Text
                className={`font-heading text-lg ${
                  isSelected ? "text-white" : "text-foreground"
                }`}
              >
                {date.getDate()}
              </Text>

              {/* Planned meal indicator */}
              <View className="h-2 items-center justify-center">
                {hasMeals && (
                  <View
                    className={`w-1.5 h-1.5 rounded-full ${
                      isSelected ? "bg-white" : "bg-primary-dark"
                    }`}
                  />
                )}
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}
