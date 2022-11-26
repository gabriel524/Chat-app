# Chat App

## Description
This is a native mobile app built using React Native that allows users to enter a chat room, then send messages, images, and their location.

## Objective

To build a chat app for mobile devices using React Native. The app will provide users with a chat interface and options to share images and their
location.

## Tech used  
- React Native
- Expo App
- Android Emulator
-  iOS simulators
- React Native Gifted Chat 
- Google Firebase
### User Stories

1. As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my
friends and family.
2. As a user, I want to be able to send messages to my friends and family members to exchange
the latest news.
3. As a user, I want to send images to my friends to show them what I’m currently doing.
4. As a user, I want to share my location with my friends to show them where I am
5. As a user, I want to be able to read my messages offline so I can reread conversations at any
time.
6. As a user with a visual impairment, I want to use a chat app that is compatible with a screen
reader so that I can engage with a chat interface


#### Instruction for seting up Expo as Development Environment locally

1. Install Expo CLI

```
npm insatll expo-cli --location=global
```

2. Create a new expo project

```
expo init [projectname]
```

3. Navigate to the project

```
cd [projectname]
```

4. Start expo project

```
npm start or expo start
```
#### Install React Navigation library to navigate between screens

1. Navigate to project folder and run

```
npm install react-navigation
```

2. Install necessary dependencies

```
npm install @react-navigation/native @react-navigation/stack
expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

### Instruction for running this project

In order to successfully run the app, you will need Node and npm. Meanwhile to install node please visit: https://nodejs.org/en/download/

After the installation, you can then follow these steps below

1. First, run the below command to clone the repository to your computer:

```
$ git clone https://github.com/gabriel524/Chat-app.git
```

2. After cloning the repository, you should then install all dependencies, starting with Expo cli as shown below:

```
$ npm install expo-cli --global
```

3. Then in your root project folder, you can run:

```
$ npm install
```

4. After that, head over to https://expo.dev/ , and sign up. Also make sure to download the Expo App from your relevant app store on your smartphone device such as (iOS or Android).

5. After that go to your system terminal navigate into your project root folder using "cd" and then run

```
$ expo start
```

6. Expo will then create project for you,and provide you with scannable QR code. 

7. Use your phone to scan QR code, and run it with Expo App.


### dependencies:

```
"@expo/react-native-action-sheet": "^4.0.1",
    "@expo/webpack-config": "^0.17.3",
    "@react-native-async-storage/async-storage": "~1.17.3",
    "@react-native-community/masked-view": "^0.1.11",
    "@react-native-community/netinfo": "9.3.5",
    "@react-navigation/native": "^6.0.13",
    "@react-navigation/stack": "^6.3.4",
    "expo": "~47.0.6",
    "expo-image-picker": "^14.0.1",
    "expo-location": "~15.0.1",
    "expo-network": "~5.0.0",
    "expo-permissions": "^14.0.0",
    "expo-status-bar": "~1.4.2",
    "firebase": "^7.9.0",
    "react": "18.1.0",
    "react-dom": "18.1.0",
    "react-native": "0.70.5",
    "react-native-gesture-handler": "~2.8.0",
    "react-native-gifted-chat": "^1.0.4",
    "react-native-maps": "1.3.2",
    "react-native-reanimated": "~2.12.0",
    "react-native-safe-area-context": "4.4.1",
    "react-native-screens": "~3.18.0",
    "react-native-web": "~0.18.9",
    "react-navigation": "^4.4.4"
```
### Create databse

1. Go to [Google Firebase](https://firebase.google.com/) and sing in with your Google account.
2. Next go to the Firebase console and create a new project (**Create Project**).
3. From Google Firebase dashboard of your project, click **Develop** from the menu on the left-hand side. After that select **Cloud Firestore**, then select **Create Database**.
4. Follow the instructions to create a new database.
5. Create a new collection "messages".
6. Under **Project settings**, search for a section called **Your apps**, Click the **Firestore for Web** button (shown as the </> icon). This will open a new screen asking you to register your web application.
7. Choose a name for your chat application, then click **Register** to generate the configuration code. Copy the contents of the `firebaseConfig` object and paste it in the firebase.js file.



---

 ### App Screenshot:

<img src="/images/img1.PNG" height="580" width="260" display="inline-block" margin="0 auto">

---

