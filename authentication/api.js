import Axios from 'axios';
import * as Keychain from 'react-native-keychain';

const API_BASE = 'http://localhost:8000/api';

const axios = Axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: {'Content-Type': 'application/json'},
});

export async function loginApi(email, password) {
  const response = await axios.post('/auth/login', {
    email,
    password,
  });
  await Keychain.setGenericPassword('token', response.data.token);
  return response.data;
}

export async function signupApi(data) {
  const response = await axios.post('/auth/signup', data);
  return response.data;
}

export async function resetPasswordApi(email) {
  const response = await axios.post('/auth/reset-password', { email });
  return response.data;
}