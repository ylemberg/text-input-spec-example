import { FirstTextInputWrapper } from "./first-text-input-wrapper";

type SecondTextInputWrapperProps = {
  editable: boolean;
  onChangeText: () => void;
  placeholder: string;
  testID: string;
};

export const SecondTextInputWrapper = ({
  editable,
  testID,
  placeholder,
  onChangeText,
}: SecondTextInputWrapperProps) => {
  return (
    <FirstTextInputWrapper
      editable={editable}
      testID={testID}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};
