/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react'
import TextField from 'react-native-md-textinput'
import { StyleSheet, View } from 'react-native'

class FloatInputTextInput extends PureComponent {
  render() {
    const {
      label,
      highlightColor,
      labelColor,
      textColor,
      textFocusColor,
      borderColor,
      autoGrow,
      dense,
      value,
      isOpen,
      onChangeText,
      containerStyles,
      secureTextEntry,
      highlightColorUnderLine,
      placeholder,
      onFocus,
    } = this.props
    return (
      <View style={[styles.containerStyle, containerStyles]}>
        <TextField
          label={label}
          highlightColor={highlightColor}
          labelColor={labelColor}
          textColor={textColor}
          textFocusColor={textFocusColor}
          borderColor={borderColor}
          height={35}
          autoGrow={autoGrow}
          dense={dense}
          isOpen={isOpen}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          highlightColorUnderLine={highlightColorUnderLine}
          placeholder={placeholder}
          onFocus={onFocus}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
  },
})

export default FloatInputTextInput
