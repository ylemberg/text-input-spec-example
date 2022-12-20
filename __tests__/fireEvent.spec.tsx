import React from "react";
import { TextInput } from "react-native";
import { render, fireEvent } from "@testing-library/react-native";
import { FirstTextInputWrapper } from "src/first-text-input-wrapper";
import { SecondTextInputWrapper } from "src/second-text-input-wrapper";

test("should not fire on non-editable host TextInput", () => {
  const testID = "my-text-input";
  const onChangeTextMock = jest.fn();
  const NEW_TEXT = "New text";

  const { getByTestId } = render(
    <TextInput
      editable={false}
      testID={testID}
      onChangeText={onChangeTextMock}
      placeholder="placeholder"
    />
  );

  fireEvent.changeText(getByTestId(testID), NEW_TEXT);
  expect(onChangeTextMock).not.toHaveBeenCalled();
});

test("should not fire on non-editable TextInputWrapper", () => {
  const testID = "my-text-input";
  const onChangeTextMock = jest.fn();
  const NEW_TEXT = "New text";

  const { getByTestId } = render(
    <FirstTextInputWrapper
      editable={false}
      testID={testID}
      onChangeText={onChangeTextMock}
      placeholder="placeholder"
    />
  );

  fireEvent.changeText(getByTestId(testID), NEW_TEXT);
  expect(onChangeTextMock).not.toHaveBeenCalled();
});

test("should not fire on non-editable SecondTextInputWrapper", () => {
  const testID = "my-text-input";
  const onChangeTextMock = jest.fn();
  const NEW_TEXT = "New text";

  const { getByTestId } = render(
    <SecondTextInputWrapper
      editable={false}
      testID={testID}
      onChangeText={onChangeTextMock}
      placeholder="placeholder"
    />
  );

  fireEvent.changeText(getByTestId(testID), NEW_TEXT);
  expect(onChangeTextMock).not.toHaveBeenCalled();
});
