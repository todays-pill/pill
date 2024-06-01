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

const RETAKE_PHOTO = "재촬영";
const TAKE_PHOTO = "알약 앞면 사진 찍기";

const PillCaptureScreen = ({ navigation }) => {
  const { setFrontBlob, setFrontFile } = useAiPillSearchStore();
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
      const file = {
        name: data.uri,
        type: data.type || "image/jpeg",
        uri: data.uri,
      };
      const blob = await fetch(`data:image/jpeg;base64,${data.base64}`).then(
        res => res.blob()
      );
      setFrontFile(file);
      const url = URL.createObjectURL(blob);
      setImage(url);
    }
  };

  const onChangeImage = blob => {
    setFrontBlob(blob);
    const url = URL.createObjectURL(blob);
    setImage(url);
  };

  const getTakePictureType = () => {
    return image === null ? TAKE_PHOTO : RETAKE_PHOTO;
  };

  const onChangeFile = file => {
    setFrontFile(file);
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
      <ImagePickerComponent
        text={"알약 앞면"}
        onChangeImage={onChangeImage}
        onChangeFile={onChangeFile}
      />
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          {image && (
            <Pressable
              onPress={() => navigation.navigate("PillCaptureBackScreen")}
            >
              <Text style={{ fontSize: 16 }}>뒷면 사진 촬영하기 {">"}</Text>
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

export default PillCaptureScreen;
