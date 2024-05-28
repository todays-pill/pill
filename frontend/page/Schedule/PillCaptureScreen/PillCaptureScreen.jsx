import * as Styled from "./Styled";
import { Camera } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../../../components/Button/Button";
import ImagePickerComponent from "../../../components/ImagePickerComponent/ImagePickerComponent";

const RETAKE_PHOTO = "재촬영";
const TAKE_PHOTO = "알약 앞면 사진 찍기";

const PillCaptureScreen = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const cameraRef = useRef(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

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
      const url = URL.createObjectURL(blob);
      setImage(url);
    }
  };

  const onChangeImage = blob => {
    const url = URL.createObjectURL(blob);
    setImage(url);
  };

  const getTakePictureType = () => {
    return image === null ? TAKE_PHOTO : RETAKE_PHOTO;
  };

  if (hasCameraPermission === false) {
    return <Text>카메라의 접근 권한이 없습니다.</Text>;
  }

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#FFF" }}>
      <View style={styles.cameraContainer}>
        {image === null ? (
          <Camera
            ref={cameraRef}
            style={styles.fixedRatio}
            type={Camera.Constants.Type.back}
            ratio={"1:1"}
          />
        ) : (
          <Image source={{ uri: image }} style={styles.fixedRatio} />
        )}
      </View>
      <ImagePickerComponent text={"알약 앞면"} onChangeImage={onChangeImage} />
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          {image && (
            <Text style={{ fontSize: 16 }}>뒷면 사진 촬영하기 {">"}</Text>
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

export default PillCaptureScreen;
