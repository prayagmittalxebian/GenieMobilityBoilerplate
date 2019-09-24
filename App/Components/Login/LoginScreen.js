import React, { PureComponent } from 'react'
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import LoginScreenStyle from 'App/Components/Login/LoginScreenStyle'
import FloatInputTextInput from 'App/Containers/FloatInputTextInput'
import ButtonComponent from 'App/Containers/ButtonComponent'
import { Colors } from 'App/Theme'

class LoginScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      emailValue: '',
      passwordValue: '',
      emailPlaceholder: 'Enter ADID',
      isFocused: '',
    }
  }

  onLoginClicked() {}

  onEmailChanged(text) {
    this.setState({ emailValue: text }, () => {
      console.log('Value', this.state.emailValue)
    })
  }
  onPasswordChanged(text) {
    this.setState({ passwordValue: text }, () => {
      console.log('Value', this.state.passwordValue)
    })
  }
  renderExampleText() {
    if (this.state.emailValue === '') {
      return <Text style={LoginScreenStyle.exampleTextStyle}>{'Example: ABE1234567'}</Text>
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss()
        }}
      >
        <SafeAreaView style={LoginScreenStyle.container}>
          <StatusBar
            barStyle="dark-content"
            hidden={true}
            backgroundColor="#00BCD4"
            translucent={true}
          />

          <View style={LoginScreenStyle.loginContainer}>
            <Text style={LoginScreenStyle.loginText}>Login</Text>

            <View style={LoginScreenStyle.inputViewStyle}>
              <FloatInputTextInput
                label={'User ID'}
                highlightColor={Colors.textWhiteColor}
                highlightColorUnderLine={Colors.buttonColortop}
                labelColor={Colors.textWhiteColor}
                textColor={Colors.textWhiteColor}
                textFocusColor={Colors.textWhiteColor}
                borderColor={Colors.textWhiteColor}
                autoGrow={false}
                dense={false}
                isOpen={false}
                value={this.state.emailValue}
                //   placeholder={this.state.emailPlaceholder}
                secureTextEntry={false}
                //   onFocus={this.onFocus.bind(this)}
                onChangeText={this.onEmailChanged.bind(this)}
              />

              <View>{this.renderExampleText()}</View>

              <FloatInputTextInput
                containerStyles={LoginScreenStyle.spaceInputStyle}
                label={'Password'}
                highlightColor={Colors.textWhiteColor}
                highlightColorUnderLine={Colors.buttonColortop}
                labelColor={Colors.textWhiteColor}
                textColor={Colors.textWhiteColor}
                textFocusColor={Colors.textWhiteColor}
                borderColor={Colors.textWhiteColor}
                autoGrow={false}
                //   placeholder={'Enter Password'}
                dense={false}
                isOpen={false}
                value={this.state.passwordValue}
                secureTextEntry={true}
                onChangeText={this.onPasswordChanged.bind(this)}
              />

              <ButtonComponent
                contentText={'Login'}
                id={'id'}
                disabled={false}
                buttonStyle={LoginScreenStyle.buttonStyle}
                buttonTextStyle={LoginScreenStyle.buttonTextStyle}
                handleClick={this.onLoginClicked.bind(this)}
                borderRadius={5}
                transparent={false}
                isRipple={true}
              />
            </View>
          </View>
          <View style={LoginScreenStyle.logoContainer}>
            <Image
              source={require('App/Assets/Images/YesGenieLogo.png')}
              style={LoginScreenStyle.logoStyle}
              resizeMode="contain"
            />
            <Image
              source={require('App/Assets/Images/GenieBackground.png')}
              style={LoginScreenStyle.genieLogoImageStyle}
              resizeMode="contain"
            />
          </View>
          <View style={LoginScreenStyle.lineStyle}></View>
          <View style={LoginScreenStyle.patentView}>
            <Text style={LoginScreenStyle.patentText}>© All rights are reserved with YES BANK</Text>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    )
  }
}

export default LoginScreen
