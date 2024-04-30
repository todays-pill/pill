import axios from 'axios';
import { ApiError } from './ApiError';

export const signupEmail = async (email) => {
  try {
    const res = await axios.post(
      'http://localhost:8080/members/register/email',
      {
        email,
      }
    );
    console.log('이메일 전송 성공:', res.data);
    return res.data;
  } catch (error) {
    console.error(error);
    throw new ApiError();
  }
};
