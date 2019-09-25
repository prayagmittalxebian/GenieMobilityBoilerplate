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
import NavigationService from 'App/Services/NavigationService'

class LoginScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      emailValue: '',
      passwordValue: '',
      emailPlaceholder: 'Enter ADID',
      borderColorEmail: Colors.buttonColortop,
      borderColorPassword: Colors.buttonColortop,
      error: false,
    }
  }

  onLoginClicked() {
    console.log('emailValue', this.state.emailValue)
    console.log('password', this.state.passwordValue)

    if (this.state.emailValue !== 'Sameer@gmail.com' && this.state.emailValue !== '') {
      this.setState({ borderColorEmail: Colors.errorColor, error: true })
    }
    if (this.state.passwordValue !== 'sameer' && this.state.passwordValue !== '') {
      this.setState({ borderColorPassword: Colors.errorColor, error: true })
    }
    if (this.state.emailValue === 'Sameer@gmail.com' && this.state.passwordValue === 'sameer') {
      this.setState({
        borderColorEmail: Colors.buttonColortop,
        borderColorPassword: Colors.buttonColortop,
        error: false,
      })
      NavigationService.navigate('searchScreen')
    }
  }

  onEmailChanged(text) {
    this.setState({ emailValue: text, borderColorEmail: Colors.buttonColortop }, () => {
      console.log('Value', this.state.emailValue)
    })
  }
  onPasswordChanged(text) {
    this.setState({ passwordValue: text, borderColorPassword: Colors.buttonColortop }, () => {
      console.log('Value', this.state.passwordValue)
    })
  }
  renderExampleText() {
    if (this.state.emailValue !== '') {
      return <Text style={LoginScreenStyle.exampleTextStyle}>{'Example: ABE1234567'}</Text>
    }
  }

  renderErrorMessage() {
    if (this.state.error) {
      return (
        <View style={LoginScreenStyle.errorView}>
          <Image
            source={require('App/Assets/Images/ActionCopy.png')}
            style={LoginScreenStyle.errorIcon}
            resizeMode={'contain'}
          />
          <Text style={LoginScreenStyle.errorText}>
            Login Failed. Unknown User ID or Bad Password
          </Text>
        </View>
      )
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
                highlightColorUnderLine={this.state.borderColorEmail}
                labelColor={Colors.textWhiteColor}
                textColor={Colors.textWhiteColor}
                textFocusColor={Colors.textWhiteColor}
                borderColor={Colors.textWhiteColor}
                autoGrow={false}
                dense={false}
                isOpen={false}
                value={this.state.emailValue}
                secureTextEntry={false}
                onChangeText={this.onEmailChanged.bind(this)}
              />

              <View>{this.renderExampleText()}</View>

              <FloatInputTextInput
                containerStyles={LoginScreenStyle.spaceInputStyle}
                label={'Password'}
                highlightColor={Colors.textWhiteColor}
                highlightColorUnderLine={this.state.borderColorPassword}
                labelColor={Colors.textWhiteColor}
                textColor={Colors.textWhiteColor}
                textFocusColor={Colors.textWhiteColor}
                borderColor={Colors.textWhiteColor}
                autoGrow={false}
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

              {this.renderErrorMessage()}
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
