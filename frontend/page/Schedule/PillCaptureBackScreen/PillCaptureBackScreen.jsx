import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../../../components/Button/Button";
import ImagePickerComponent from "../../../components/ImagePickerComponent/ImagePickerComponent";
import useAiPillSearchStore from "../../../store/aiPillSearchStore";
import { searchPillAi } from "../../../api/pill";

const RETAKE_PHOTO = "재촬영";
const TAKE_PHOTO = "알약 뒷면 사진 찍기";

const PillCaptureBackScreen = () => {
  const { frontBlob, backBlob, setBackBlob } = useAiPillSearchStore();
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [image, setImage] = useState(null);

  if (!permission) {
    return <View />;
  }

  const takePicture = async () => {
    const type = getTakePictureType();

    if (type === RETAKE_PHOTO) {
      setImage(null);
      return;
    }

    if (type === TAKE_PHOTO && cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync({
        base64: true,
      });
      const blob = await fetch(`data:image/jpeg;base64,${data.base64}`).then(
        res => res.blob()
      );
      setBackBlob(blob);
      const url = URL.createObjectURL(blob);
      setImage(url);
    }
  };

  const onChangeImage = blob => {
    setBackBlob(blob);
    const url = URL.createObjectURL(blob);
    setImage(url);
  };

  const getTakePictureType = () => {
    return image === null ? TAKE_PHOTO : RETAKE_PHOTO;
  };

  const onClickAiSearchBtn = async () => {
    const data = await searchPillAi(frontBlob, backBlob);
    console.log(data);
  };

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          카메라 접근을 허용할려면 버튼을 눌러주세요
        </Text>
        <Button onPress={requestPermission} title="카메라 접근 허용" />
      </View>
    );
  }
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#FFF" }}>
      <View style={styles.cameraContainer}>
        {image === null ? (
          <CameraView ref={cameraRef} style={styles.fixedRatio} facing="back" />
        ) : (
          <Image source={{ uri: image }} style={styles.fixedRatio} />
        )}
      </View>
      <ImagePickerComponent text={"알약 뒷면"} onChangeImage={onChangeImage} />
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          {image && (
            <Pressable onPress={onClickAiSearchBtn}>
              <Text style={{ fontSize: 16 }}>AI로 알약 검색 {">"}</Text>
            </Pressable>
          )}
        </TouchableOpacity>
        <Button onPress={() => takePicture()}>{getTakePictureType()}</Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: "row",
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  buttonWrapper: {
    marginTop: 20,
    width: "100%",
    display: "flex",
    gap: 10,
  },
});

export default PillCaptureBackScreen;
