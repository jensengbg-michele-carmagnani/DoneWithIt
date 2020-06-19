import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableHighlight,
//   SafeAreaView,
//   Image,
//   Button,
//   Alert,
//   Platform,
//   StatusBar,
//   Dimensions,
// } from "react-native";

// import {
//   useDimensions,
//   useDeviceOrientation,
// } from "@react-native-community/hooks";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
export default function App() {
  //how to get the dimention of the screen.
  // const { landscape } = useDeviceOrientation();
  return <ViewImageScreen/>
}
//     // <SafeAreaView style={styles.container}>
//     //   <View
//     //     style={{
//     //       backgroundColor: "dodgerblue",
//     //       width: 100,
//     //       height: 100,
//     //       // width: "100%",
//     //       // height: landscape ? "100%" : "30%",
//     //       // flex: 1,
//     //     }}
//     //   />
//     //   <View
//     //     style={{
//     //       backgroundColor: "yellow",
//     //       width: 100,
//     //       height: 100,
//     //       position:"absolute",
//     //       top: 70,
//     //       left: 70,
//     //       // width: "100%",
//     //       // height: landscape ? "100%" : "30%",
//     //       // flex: 1,
//     //     }}
//     //   />
//     //   <View
//     //     style={{
//     //       backgroundColor: "tomato",
//     //       width: 100,
//     //       height: 100,
//           // alignSelf:"flex-start",
//           // width: "100%",
//           // height: landscape ? "100%" : "30%",
//           // flex: 1,
//         // }}
//       // />

//       {/* <Text>Hello world!</Text>
//         <TouchableHighlight onPress={() => console.log("Imge tapped")}>
//           <Image
//             source={{ uri: "https://picsum.photos/200" }}
//             style={{ width: 200, height: 300 }}
//             blurRadius={0}
//           />
//         </TouchableHighlight>
//         <Button
//           title="Press me"
//           onPress={() =>
//             Alert.alert("My tiltel", "My messge", [
//               { text: "yes", onPress: () => console.log("Yes") },
//               { text: "no", onPress: () => console.log("no") },
//             ])
//           }
//         />
//         <Button
//           title="Press me"
//           color="#f194ff"
//           onPress={() =>
//             Alert.prompt("My title", "My text", (text) => console.log(text))
//           }
//         /> */}
//     {/* </SafeAreaView> */}
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     flexWrap: "wrap",
// //     alignContent: "center", // it allign the entire content in main axes
// //     alignItems: "center", //it align content only in sencond axes

// //     backgroundColor: "#fff",
// //     flexDirection: "row",
// //     justifyContent: "center",
// //   },
// // });
