import axios from "axios";

export const checkAuthCode = async authCode => {
  try {
    const res = await axios.post(
      `http://localhost:8080/members/register/email-auth`,
      {
        authCode,
      }
    );
    return res.data;
  } catch (error) {
    console.error(error);
    throw new ApiError();
  }
};
