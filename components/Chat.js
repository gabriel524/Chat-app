import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

export default class Chat extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
      ],
    });
  } 
  
  render() {
    const backgroundColor = this.props.route.params.color;
    return (
      <View style={[styles.chatContainer, { backgroundColor }]}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Start")}
        >
          <Text style={{ color: "#FFF", fontSize: 24 }}>Back to Start</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chatContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
});
