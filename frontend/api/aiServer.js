import axios from "axios";

// export const predictPill = async (frontBlob, backBlob) => {
//   const formData = new FormData();
//   console.log("frontBlob", frontBlob);
//   console.log("backBlob", frontBlob._data.name);
//   const frontFile = new File([frontBlob], frontBlob._data.name);
//   const backFile = new File([backBlob], backBlob._data.name);

//   formData.append("front", frontFile);
//   formData.append("back", backFile);
//   console.log(formData);
//   try {
//     const res = await axios.post(
//       "http://192.168.0.5:8000/myproject/predict/",
//       formData,
//       { headers: { "Content-Type": "multipart/form-data" } }
//     );
//     console.log("ai 검색 성공");
//     return res.data;
//   } catch (error) {
//     console.error(error);
//     throw new ApiError();
//   }
// };

export const predictPill = async (frontFile, backFile) => {
  console.log("frontFile", frontFile);
  console.log("backFile", backFile);
  const formData = new FormData();
  formData.append("front", frontFile);
  formData.append("back", backFile);
  console.log("formData = ", formData);
  try {
    const res = await axios.post(
      "http://192.168.0.5:8000/myproject/predict/",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    console.log("ai 검색 성공");
    return res.data;
  } catch (error) {
    console.error(error);
    throw new ApiError();
  }
};
