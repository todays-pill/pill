export const checkAuthCode = async (authCode) => {
  try {
    const res = await axios.get(
      `http://localhost:8080/members/register/email-auth?code=${authCode}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
    throw new ApiError();
  }
};
