import axios from 'axios';
import { ApiError } from './ApiError';

export const registerMemberEmail = async (email) => {
  try {
    const res = await axios.post(
      'http://localhost:8080/members/register/email',
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
