import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
    height: 55
  },
  imgMenu: {
    tintColor: '#0D0D0D',
    height: 24,
    width: 24,
    marginRight: 10
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 4
  },
  userNameHeader: {
    fontSize: 24,
    fontWeight: '500'
  },
  containerModal: {
    flex: 1,
    justifyContent: "flex-end"
  },
  outerView: {
    backgroundColor: '#FFFFFF',
    height: 580
  },
  modalClose: {
    alignSelf: 'center'
  },
  modalInsideText: {
    fontSize: 18, 
    paddingVertical: 15
  },
  userPhoto: {
    width: 96,
    height: 96,
  },
  containerProfileHeader: {
    paddingLeft: 20,
  },
  userNameProfile: {
    color: '#262626',
    fontWeight: '600',
    fontSize: 12,
    paddingLeft: 5,
    paddingTop: 15,
  },
  userBioProfile: {
    width: 343,
    height: 34,
    paddingLeft: 5,
    fontSize: 12
  },
  editProfileButtonText: {
    color: '#262626',
    textAlign: 'center',
    paddingLeft: 25,
    paddingTop: 4
  },
  editProfileButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: 343,
    height: 29,
    paddingRight: 25,
    marginLeft: 30,
  }
});

export default styles;
