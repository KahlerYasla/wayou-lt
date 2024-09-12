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
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <TextInput
        style={[styles.input, inputTextStyle]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={styles.placeholder.color}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
        autoCapitalize='none'
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    borderBottomWidth: .5,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#fff',
  },
  input: {
    padding: 10,
    fontSize: 13,
    color: '#fff',
  },
  placeholder: {
    color: "rgba(255, 255, 255, 0.40)",
  },
});

export default CustomFormField;
