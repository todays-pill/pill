import axios from 'axios';
import { ApiError } from './ApiError';

export const sendEmail = async (email) => {
  try {
    const res = await axios.post(
      'http://localhost:8080/members/register/email-auth',
      {
        email,
      }
    );
    return res.data;
  } catch (error) {
    console.error(error);
    throw new ApiError();
  }
};

export const checkEmailAuthCode = async (authCode) => {
  const res = await axios.get(
    `http://localhost:8080/members/register/email-auth`,
    {
      authCode,
    }
  );
  return res.data;
};

export default { sendEmail, checkEmailAuthCode };
