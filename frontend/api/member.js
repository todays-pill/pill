import customAxios from "./customAxios";

export const registerMember = async (email, password) => {
  try {
    const res = await customAxios.post(`/members/register/password`, {
      email,
      password,
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw new ApiError();
  }
};

export const getMe = async () => {
  try {
    const res = await customAxios.get(`/members/me`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw new ApiError();
  }
};

export const updateProfile = async (name, gender) => {
  try {
    const res = await customAxios.post(`/members/register/profile`, {
      name,
      gender,
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw new ApiError();
  }
};
