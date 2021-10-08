import {StyleSheet} from "react-native";
import React from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#154535',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },

  input: {
     marginBottom: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: "#fff",
    color: "#fff",
    alignSelf: "stretch",
    borderStyle: "none"

  },
  header: {
    fontSize: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    color: "#fff",
    paddingBottom: 10,
    marginBottom: 40,
  }
});


export default styles;
