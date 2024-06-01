import { ApiError } from "./ApiError";
import customAxios from "./customAxios";

// export const searchPillAi = async (frontBlob, backBlob) => {
//   const formData = new FormData();
//   const frontFile = new File([frontBlob], "filename.jpg", {
//     type: "image/jpeg",
//   });
//   const backFile = new File([backBlob], "filename.jpg", { type: "image/jpeg" });

//   formData.append("front", frontFile, "front.jpg");
//   formData.append("back", backFile, "back.jpg");
//   console.log(formData);
//   try {
//     const res = await customAxios.post("/pill/ai", formData);
//     console.log("ai 검색 성공");
//     return res.data;
//   } catch (error) {
//     console.error(error);
//     throw new ApiError();
//   }
// };

export const searchPillAi = async code => {
  try {
    const res = await customAxios.get(`/pill?code=${code}`);
    console.log("검색 성공");
    return res.data;
  } catch (error) {
    console.error(error);
    throw new ApiError();
  }
};
