import customAxios from "./customAxios";

export const checkAuthCode = async authCode => {
  try {
    const res = await customAxios.post(`/members/register/email-auth`, {
      authCode,
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw new ApiError();
  }
};
