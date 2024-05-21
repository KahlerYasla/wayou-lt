import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, TextStyle, ViewStyle } from 'react-native';

import CustomText from './CustomText';

import icons from "../../constants/icons";

type icons = keyof typeof icons;

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: icons;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, style, textStyle, icon }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {/* {icon && <Image style={{ width: 20, height: 20, marginRight: 10 }} source={icons[icon]} />} */}
      <CustomText style={[styles.text, textStyle]} boldness="bold">
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default CustomButton;
