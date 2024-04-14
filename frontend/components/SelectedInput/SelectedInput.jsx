import { useState } from "react";
import * as Styled from "./Styled";
import ModalSelector from "../ModalSelector/ModalSelector";
import { WithLocalSvg } from "react-native-svg/css";
import ArrowIcon from "../../assets/vectors/arrow-right.svg";
import Label from "../Label/Label";
import { View } from "react-native";

const SelectedInput = ({
  labelText,
  selectedvalues,
  values,
  onChange,
  title,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <View style={{ gap: 10 }}>
        <Label text={labelText} isBold={true} />
        <Styled.Wrapper onPress={() => setVisible(true)}>
          <Styled.Text>{selectedvalues.join(",")}</Styled.Text>
          <Styled.SvgWrapper>
            <WithLocalSvg asset={ArrowIcon} />
          </Styled.SvgWrapper>
        </Styled.Wrapper>
      </View>
      <ModalSelector
        title={title}
        values={values}
        visible={visible}
        setVisible={setVisible}
        defaultValues={selectedvalues}
        onChange={onChange}
      />
    </>
  );
};

export default SelectedInput;
