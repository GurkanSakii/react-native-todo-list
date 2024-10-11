import { StyleSheet, View, Text, Pressable } from "react-native";

function TodoItem({onDeleteItem, id, text}) {
  return (
    <View style={styles.todoItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => onDeleteItem(id)}
        style={({ pressed }) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
