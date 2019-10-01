/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.seacrhBackgroundColor,
    flex: 1,
  },
  crossButton: { marginTop: 15 },
  crossImage: { height: 20, width: 20 },
  dividerLine: { backgroundColor: Colors.searchLineColor, flex: 1, height: 2 },
  dividerText: {
    color: 'black',
    fontSize: 10,
    paddingLeft: -20,
    paddingRight: -20,
    textAlign: 'center',
  },
  dividerTextView: { flex: 1 },
  infoIcon: { height: 17, width: 17 },
  infoView: { height: 17, marginTop: 5, width: 17 },
  optionCategoryView: { flexDirection: 'row', marginTop: 10 },
  optionIcon: {
    borderRadius: 11,
    marginRight: 5,
    marginTop: 5,
    paddingBottom: 3,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 3,
  },
  optionText: {
    fontSize: 14,
  },
  optionView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  searchInput: {
    borderColor: '#005FA9',
    borderRadius: 4,
    borderWidth: 1,
    color: Colors.searchText,
    fontSize: 20,
    height: 50,
    padding: 15,
    width: null,
  },
  searchInputView: {
    height: 50,
    marginTop: 15,
    width: null,
  },
  searchdividerView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 18,
  },
  viewContainer: {
    backgroundColor: Colors.seacrhBackgroundColor,
    marginLeft: 20,
    marginRight: 20,
  },
})
