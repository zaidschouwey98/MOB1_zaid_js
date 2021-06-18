import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  component: {
    marginTop: 50,
  },
  input: {
    margin: 10,
    padding: 5,
    borderWidth: 1,
  },
  numberInput: {
    justifyContent: "center",
    margin: 5,
    width: 30,
    height: 20,
    borderWidth: 1,
    flex: 1,
  },
  button: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "Arial",
  },
  smallButton: {
    flex: 1,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  smallButtonText: {
    color: "white",
    fontSize: 10,
    fontFamily: "Arial",
  },
  view: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    margin: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
});
export default styles;
