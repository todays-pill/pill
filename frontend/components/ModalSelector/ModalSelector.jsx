import { Dimensions, Modal, View } from "react-native";
import * as Styled from "./Styled";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import { useState } from "react";

const ModalSelector = ({
  title,
  values,
  onChange = null,
  visible,
  setVisible,
  defaultValues = [],
}) => {
  const [selectValues, setSelectValues] = useState([...defaultValues]);

  const onPressCheckBox = value => {
    if (selectValues.includes(value)) {
      setSelectValues(state => state.filter(v => v !== value));
    } else {
      setSelectValues(state => [...state, value]);
    }
  };

  const onPressOkButton = () => {
    if (onChange !== null) onChange(selectValues);
    setVisible(false);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <Styled.Overlay />
      <Styled.Wrapper>
        <Styled.Title>{title}</Styled.Title>
        <Styled.CheckboxWrapper>
          {values.map(value => (
            <Checkbox
              key={value}
              value={value}
              isChecked={selectValues.includes(value)}
              onPressCheckBox={() => onPressCheckBox(value)}
            />
          ))}
        </Styled.CheckboxWrapper>
        <Button onPress={onPressOkButton}>선택 완료</Button>
      </Styled.Wrapper>
    </Modal>
  );
};

export default ModalSelector;
