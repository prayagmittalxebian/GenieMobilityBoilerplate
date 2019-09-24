/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, { PureComponent } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Ripple from 'react-native-material-ripple'
import { Colors } from 'App/Theme'

class ButtonComponent extends PureComponent {
  render() {
    const {
      contentText,
      buttonStyle,
      buttonTextStyle,
      handleClick,
      id,
      disabled,
      borderRadius,
      isTransparent,
      isRipple,
    } = this.props

    if (isRipple) {
      return (
        <Ripple
          rippleFades={isRipple}
          style={[
            styles.buttonContainerStyle,
            buttonStyle,
            {
              borderRadius: borderRadius,
              // eslint-disable-next-line no-undef
              backgroundColor: isTransparent ? transparent : Colors.buttonColorbuttom,
            },
          ]}
          rippleOpacity={isRipple ? 0.3 : 0}
          id={id}
          onPress={handleClick}
          disabled={disabled}
        >
          <Text style={[styles.buttonTextStyle, buttonTextStyle]}>{contentText}</Text>
        </Ripple>
      )
    } else {
      return (
        <TouchableOpacity
          style={[
            styles.buttonContainerStyle,
            buttonStyle,
            {
              borderRadius: borderRadius,
              // eslint-disable-next-line no-undef
              backgroundColor: isTransparent ? transparent : Colors.buttonColorbuttom,
            },
          ]}
          id={id}
          onPress={handleClick}
          disabled={disabled}
        >
          <Text style={[styles.buttonTextStyle, buttonTextStyle]}>{contentText}</Text>
        </TouchableOpacity>
      )
    }
  }
}

const styles = StyleSheet.create({
  buttonContainerStyle: {
    alignItems: 'center',
    backgroundColor: Colors.buttonColortop,
    borderRadius: 5,
    borderWidth: 0,
    elevation: 5,
    justifyContent: 'center',
    shadowColor: Colors.buttonShadowColor,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  buttonTextStyle: {
    fontSize: 18,
  },
})
export default ButtonComponent
