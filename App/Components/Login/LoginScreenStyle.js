/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  buttonStyle: {
    height: 50,
    marginTop: 45,
  },
  buttonTextStyle: {
    color: Colors.textWhiteColor,
  },
  container: {
    flex: 1,
  },
  errorIcon: { height: 17, marginLeft: 5, width: 17 },
  errorText: {
    color: Colors.errorColor,
    fontSize: 12,
    marginLeft: 5,
    marginRight: 30,
    paddingBottom: 6,
    paddingTop: 6,
  },
  errorView: {
    alignItems: 'center',
    backgroundColor: Colors.textWhiteColor,
    borderRadius: 14,
    flexDirection: 'row',
    height: 28,
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,
    shadowColor: Colors.shadowColor,
    shadowOffset: { width: 0.4, height: 0.4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    width: '100%',
  },
  exampleTextStyle: { color: Colors.exampleTextColor, marginTop: 20 },
  genieLogoImageStyle: {
    end: 0,
    height: '93%',
    position: 'absolute',
    right: -1,
    top: 20,
    width: 115,
  },
  inputViewStyle: {
    flex: 1,
    // marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  lineStyle: {
    borderColor: Colors.lineColor,
    borderTopWidth: 1,
    height: 2,
    width: '100%',
  },
  loginContainer: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
    paddingBottom: 25,
  },
  loginText: {
    color: Colors.textWhiteColor,
    fontSize: 30,
    marginLeft: 30,
    marginTop: 26,
  },
  logoContainer: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundWhiteColor,
    flex: 1,
    justifyContent: 'center',
  },
  logoStyle: { height: 60, width: 130 },
  patentText: {
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
  },
  patentView: {
    alignItems: 'center',
    backgroundColor: Colors.patentColor,
    height: 30,
    justifyContent: 'center',
    opacity: 0.5,
    width: '100%',
  },
  spaceInputStyle: { marginTop: 10 },
})
