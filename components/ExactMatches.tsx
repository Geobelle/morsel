import { Image, Text, View } from "react-native";

const ExactMatches = ({ name, time, image }: ReciepeCard) => {
  return (
    <View
      //   style={{ width: }}
      className="bg-white w-full flex flex-row rounded-xl border border-sage-light overflow-hidden mb-4"
    >
      <Image
        source={image}
        style={{ width: "30%", height: 100 }}
        resizeMode="cover"
      />

      {/* Recipe details */}
      <View className="p-2 w-2/3">
        <View className="flex items-end justify-end w-full">
          <Text className="text-2xl ">...</Text>
        </View>

        <Text
          className="font-recipe-title text-primary-dark text-lg "
          numberOfLines={1}
        >
          {name}
        </Text>

        <Text className="text-sm text-foreground font-body">{time}</Text>
        <Text className="text-sm text-foreground font-body">
          Number of ingredients
        </Text>
      </View>
    </View>
  );
};

export default ExactMatches;
