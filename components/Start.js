import React from "react";
import { View, Text, Button } from "react-native";

export default class Start extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello Guys</Text>
        <Button
          title="Go to Chat Screen"
          onPress={() => this.props.navigation.navigate("Chat")}
        />
      </View>
    );
  }
}
