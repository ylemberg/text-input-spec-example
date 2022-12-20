import React from "react";
import { TextInput } from "react-native";

type FirstTextInputWrapperProps = {
  editable: boolean;
  onChangeText: () => void;
  placeholder: string;
  testID: string;
};

export const FirstTextInputWrapper = ({
  editable,
  onChangeText,
  placeholder,
  testID,
}: FirstTextInputWrapperProps) => {
  return (
    <TextInput
      editable={editable}
      onChangeText={onChangeText}
      placeholder={placeholder}
      testID={testID}
    />
  );
};
