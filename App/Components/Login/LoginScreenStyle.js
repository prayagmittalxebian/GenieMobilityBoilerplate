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
