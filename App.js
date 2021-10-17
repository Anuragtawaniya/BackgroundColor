import React, { useState } from 'react';

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native'

const App = () => {

  const [randomColor, setRandomColor] = useState("rgb(32,0,126)");
  const changeBG = () => {
    let color = "rgb(" +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +

      ")";
    setRandomColor(color);
  }
  const resetBG = () => {
    let color = "black";
    setRandomColor(color);
  }
  return (
    <>
      <View style={[styles.container, { backgroundColor: randomColor }]}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={styles.text}>Tap Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetBG}>
          <Text style={styles.text}>Reset</Text>
        </TouchableOpacity>
      </View>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "white",
  },
  text: {
    fontSize: 30,
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "#ffffff",
    borderRadius: 15,
    textTransform: "uppercase",
    margin: 30,
  }
})

export default App;