import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../Components/Categories";
import HeaderTab from "../Components/HeaderTab";
import RestaurantItems, {
  localRestaurants,
} from "../Components/RestaurantItems";
import SearchBar from "../Components/SearchBar";

export default function Home() {
  const [restaurant, setrestaurant] = useState([localRestaurants]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eee" }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurant} />
      </ScrollView>
    </SafeAreaView>
  );
}
