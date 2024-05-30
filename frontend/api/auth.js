import customAxios from "./customAxios";

export const login = async (email, password) => {
  try {
    const res = await customAxios.post("/auth/login", {
      email,
      password,
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw new ApiError();
  }
};
