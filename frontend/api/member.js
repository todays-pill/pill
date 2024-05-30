import axios from "axios";

export const registerMember = async (email, password) => {
  try {
    const res = await axios.post(
      `http://localhost:8080/members/register/password`,
      {
        email,
        password,
      }
    );
    return res.data;
  } catch (error) {
    console.error(error);
    throw new ApiError();
  }
};
