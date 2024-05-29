import { Image, Text, View } from "react-native";

import * as Styled from "./Styled";
import Button from "../../../components/Button/Button";
import Label from "../../../components/Label/Label";

const AiSearchResultScreen = () => {
  return (
    <Styled.Wrapper>
      <Styled.ContentWrapper>
        <Styled.CameraWrapper>
          <Image
            style={{
              width: 350,
              height: 200,
            }}
            source={{
              uri: "https://roundtable-test-20240507.s3.ap-northeast-2.amazonaws.com/pill/K038896.jpg",
            }}
          />
        </Styled.CameraWrapper>
        <Styled.InputWrapper>
          <Label isBold={true} text={"알약 이름"} />
          <Text style={{ fontSize: 16, color: "#565A5E" }}>타이레놀</Text>
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Label isBold={true} text={"효능"} />
          <Text style={{ fontSize: 16, color: "#565A5E" }}>
            이 약은 급ㆍ만성 호흡기질환에서의 점액용해 및 거담에 사용합니다.
          </Text>
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Label isBold={true} text={"용법/용량"} />
          <Text style={{ fontSize: 16, color: "#565A5E" }}>
            {
              "성인: 에르도스테인으로서 1회 300 mg을 1일 2~3회 경구투여한다.\n급성 호흡기질환에 투여 시 연속으로 10일 이상 투여하지 않는다."
            }
          </Text>
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Label isBold={true} text={"사용상 주의사항"} />
          <Text style={{ fontSize: 16, color: "#565A5E" }}>
            {
              "1. 다음 환자에는 투여하지 말 것.\n 1) 이 약 또는 이 약의 구성성분에 과민반응이 있는 환자\n 2) 간경변 환자와 시스타티오닌 합성효소(cystathionine-synthase) 결핍환자(이 약의 대사물이 메티오닌 대사를 방해할 수 있다.)\n 3) 소화성궤양 환자\n 4) 중증 신장장애(크레아티닌청소율이<25 mL/min) 환자\n 5) 중증 간장애 환자\n\n2. 다음 환자에는 신중히 투여할 것.\n 1) 경증 및 중등도 간장애 환자(이 약으로 인한 이상반응의 증가는 관찰되지 않았으나 이 약으로서 1일 300 mg을 초과해서는 안 된다.)\n 2) 당뇨병 환자 및 저칼로리식이요법 중인 환자(시럽제에 한함)\n 3) 이 약은 황색5호(선셋옐로우 FCF, Sunset Yellow FCF)를 함유하고 있으므로 이 성분에 과민하거나 알레르기 병력이 있는 환자에는 신중히 투여한다.\n\n3. 이상반응\n 1) 사용량보다 과량투여(1일 1200 mg이상)시 발한, 어지러움, 홍조가 나타났다.\n 2) 신경계 : 두통\n 3) 호흡기계 : 감기, 호흡곤란\n 4) 소화기계 : 미각이상, 구역, 구토, 설사, 상복부통, 복통, 속쓰림\n 5) 피부 : 두드러기, 홍반, 습진\n 6) 국내 시판 후 조사결과(조사증례수 : 캡슐제 3,303명, 시럽제 791명) 보고된 이상반응은 다음과 같으며, 이 약과의 관련 여부는 확실하지 않다. : 피로, 소화불량, 복통, 위장장애, 설사, 구토, 두통, 신물이 올라옴, 결절홍반, 심계항진, 얼굴부종, 전신부종, 가려움, 무력감, 몽롱함, 발진\n\n4. 상호작용\n 거담제는 기침약과 병용투여 시 기침 완화에 의한 기관지 내 가래 배출 곤란으로 기관지감염의 위험을 높일 수 있고 기관지연축을 야기할 수 있으므로 특히 주의한다.\n\n5. 임부 및 수유부에 대한 투여\n 동물실험에서 수태, 태자의 배자발육과 또는 산후 발육에 대해서 어떤 직.간접적 유독성은 발견되지 않았으나 임신 중 또는 수유중의 투여에 대한 안전성이 확립되어 있지 않으므로 임부 또는 임신하고 있을 가능성이 있는 여성, 수유부에는 투여하지 않는 것이 바람직하다.\n\n6. 보관 및 취급상의 주의사항\n 1) 어린이의 손이 닿지 않는 곳에 보관한다.\n 2) 다른 용기에 바꾸어 넣는 것은 사고원인이 되거나 품질 유지 면에서 바람직하지 않으므로 이를 주의한다."
            }
          </Text>
        </Styled.InputWrapper>
      </Styled.ContentWrapper>
      <Styled.ButtonWrapper>
        <Button>취소</Button>
        <Button>등록</Button>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
};

export default AiSearchResultScreen;
