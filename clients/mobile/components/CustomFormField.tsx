import React from 'react';
import { View, Text, TextInput, StyleSheet, ViewStyle, TextStyle, TextInputProps } from 'react-native';

interface CustomFormFieldProps extends TextInputProps {
  label: string;
  otherStyles?: ViewStyle;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
  inputTextStyle?: TextStyle;
}

const CustomFormField: React.FC<CustomFormFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  multiline,
  numberOfLines,
  otherStyles,
  labelStyle,
  containerStyle,
  inputTextStyle
}) => {
  return (
    <View style={[styles.container, containerStyle, otherStyles]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <TextInput
        style={[styles.input, inputTextStyle]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={inputTextStyle?.color}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
  },
  input: {
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
  },
});

export default CustomFormField;
