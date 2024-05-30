import { useState } from "react";
import * as Styled from "./Styled";
import Label from "../Label/Label";
import Button from "../Button/Button";

const SelectButton = ({ texts, onChange, defulatValue, labelText }) => {
  const [selected, setSelected] = useState(defulatValue);
  const onClickButton = text => {
    if (onChange != null) {
      onChange(text);
    }
    setSelected(text);
  };
  return (
    <Styled.Wrapper>
      {labelText && <Label isBold={true} text={labelText} />}
      <Styled.RowFlex>
        {texts.map((text, idx) => (
          <Styled.ButtonWrapper key={idx}>
            <Button
              onPress={() => onClickButton(text)}
              viewStyle={{
                backgroundColor: text === selected ? "#69b4ff" : "#EFF5FE",
              }}
              textStyled={{
                color: text === selected ? "#fff" : "#3F4245",
              }}
            >
              {text}
            </Button>
          </Styled.ButtonWrapper>
        ))}
      </Styled.RowFlex>
    </Styled.Wrapper>
  );
};

export default SelectButton;
