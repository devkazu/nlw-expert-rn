import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";
import { FlatList, View } from "react-native";
import { CATEGORIES } from "@/utils/data/products";
import { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState<string>(CATEGORIES[0]);

  function handleCategoruSelect(selectedCategory: string) {
    setCategory(selectedCategory);
  }
  return (
    <View className=" flex-1 pt-8">
      <Header title="Faça seu pedido" />
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategoruSelect(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
