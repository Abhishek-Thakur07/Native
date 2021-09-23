import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HeaderTab() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 50 }}>
      <HeaderTabButton
        text="Delivery"
        btnColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderTabButton
        text="Pickup"
        btnColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderTabButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => props.setActiveTab(props.text)}
    >
      <Text
        style={{
          color: props.activeTab === props.text ? "white" : "black",
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
