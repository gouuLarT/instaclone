import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  closeModal: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  closeButton: {
    color: 'blue',
    fontSize: 18,
  },
  commentsContainer: {
    padding: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNameModal: {
    color: '#262626',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15.5,
    marginRight: 5,
    marginLeft: 10
  },
  textCommentModal: {
    color: '#262626',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 15.5,
  },
  userPictureModal: {
  }
})

export default styles