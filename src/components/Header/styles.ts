import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    resizeMode: "contain",
    width: 100,
    height: 50,
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  }, 
  containerIcons: {
    flexDirection: "row",
  },
  icons: {
    resizeMode: "contain",
    marginRight: 10,
    height: 60,
    width: 20,
  },
  unreadText: {
   fontWeight: '600',
   color: 'white',
   fontSize: 12
  },
  unreadContainer: {
   backgroundColor: '#FF007A',
   width: 23,
   height: 16,
   right: 18,
   top: 10,
   borderRadius: 25,
   alignItems: "center",
   justifyContent: "center",
  }
});

export default styles;
