
import React from "react";
import { StyleSheet, View, Text, KeyboardAvoidingView } from "react-native";
import "react-native-gesture-handler";
import { GiftedChat, Bubble} from "react-native-gifted-chat";


const firebase = require("firebase");
require("firebase/firestore");

export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      uid: 0,
      user: {
        _id: "",
        avatar: "",
        name: "",
      },
      loggedInText: "Please wait, you are getting logged in",
      image: null,
      location: null,
    };

    //Set up Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyDq6vxUYQVBx5g8kH_lyCNPOatMkYdkxIA",
      authDomain: "chap-app-2fb11.firebaseapp.com",
      projectId: "chap-app-2fb11",
      storageBucket: "chap-app-2fb11.appspot.com",
      messagingSenderId: "262879552333",
      appId: "1:262879552333:web:521d311295afa3b614cd04",
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    this.referenceChatMessages = firebase.firestore().collection("messages");
  }

  componentDidMount() {
    const name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });

    this.authUnsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
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
          {
            _id: 2,
            text: "You've entered the chat",
            createdAt: new Date(),
            system: true,
          },
        ],
      });

      this.unsubscribe = this.referenceChatMessages
        .orderBy("createdAt", "desc")
        .onSnapshot(this.onCollectionUpdate);
    });
  }

  //Retrieve collection data & store in messages
  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    // Go through each document
    querySnapshot.forEach((doc) => {
      // Get QueryDocumentSnapshot's data
      let data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text || "",
        createdAt: data.createdAt.newDate(),
        user: {
          _id: data.user._id,
          name: data.user.name,
          avatar: data.user.avatar || "",
        },
        image: data.image || null,
        location: data.location || null,
      });
    });
    this.setState({
      messages,
    });
  };

  //Appends new message to previous
  onSend(messages = []) {
    this.setState(
      (previousState) => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }),
      () => {
        this.addMessages(this.state.messages[0]);
      }
    );
  }

  addMessage = () => {
    const message = this.state.messages[0];
    this.referenceChatMessages.add({
      uid: this.state.uid,
      _id: message._id,
      text: message.text || "",
      createdAt: message.createdAt,
      user: message.user,
      image: message.image || null,
      location: message.location || null,
    });
  };

  //Allows bubble customization
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: "#fff",
          },
          chatTitle: {
            color: "#FFFFFF",
          },
          right: {
            backgroundColor: "purple",
          },
        }}
      />
    );
  }

  render() {
   let { color } = this.props.route.params;

    return (
      <View style={[{ backgroundColor: color }, styles.container]}>
        <Text>{this.state.loggedInText}</Text>
        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{
            _id: this.state.uid,
            avatar: "https://placeimg.com/140/140/any",
          }}
        />
        {/*Prevent hidden input field on Android*/}
        {Platform.OS === "android" ? (
          <KeyboardAvoidingView behavior="height" />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
