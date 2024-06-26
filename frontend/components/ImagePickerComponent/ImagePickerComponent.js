import { Button, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ImagePickerComponent = ({ text, onChangeImage, onChangeFile }) => {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // setImage(result.assets[0].uri);
      console.log(result.assets[0]);
      const file = {
        name: result.assets?.[0]?.uri,
        type: result.assets?.[0]?.mimeType,
        uri: result.assets?.[0]?.uri,
      };
      onChangeFile(file);
      const url = await convertFileUriToBlob(result.assets[0].uri);
      onChangeImage(url);
    }
  };

  async function convertFileUriToBlob(fileUri) {
    try {
      // 파일의 내용을 Blob으로 변환합니다.
      const response = await fetch(fileUri);
      const blob = await response.blob();
      return blob;
    } catch (error) {
      console.error("Error converting file URI to blob:", error);
      return null;
    }
  }

  return (
    <View>
      <Button title={`${text} 사진 업로드`} onPress={pickImage} />
      {/* {image && <Image source={{ uri: image }} style={styles.image} />} */}
    </View>
  );
};

export default ImagePickerComponent;
