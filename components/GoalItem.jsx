import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

const GoalItem = ({ id, onDelete, title, ...props }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onDelete(id)}>
      <View style={styles.listItems}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItems: {
    width: "70%",
    padding: 10,
    backgroundColor: "#6fa832",
    marginVertical: 10,
    borderRadius: 10,
  },
});
export default GoalItem;
