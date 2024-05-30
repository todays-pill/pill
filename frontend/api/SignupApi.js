import customAxios from "./customAxios";
import { ApiError } from "./ApiError";

export const signupEmail = async email => {
  try {
    const res = await customAxios.post("/members/register/email", {
      email,
    });
    console.log("이메일 전송 성공:", res.data);
    return res.data;
  } catch (error) {
    console.error(error);
    throw new ApiError();
  }
};
