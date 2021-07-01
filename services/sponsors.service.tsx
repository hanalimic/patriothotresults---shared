import axios, { AxiosRequestConfig } from 'axios';
import React from 'react';

const BASE_URL = process.env.REACT_APP_BASE_API_URL;

class DivisionService {
  constructor() {}

  async getAllSponsors(params: any) {
    const url = `${BASE_URL}/sponsors`;
    // const headers: AxiosRequestConfig = {
    //   headers: {
    //     Authorization: `Bearer c6ce4fb1be64a4fa976a612d3db0943ccbbef756e0a8ce927e8d591b7ec9db0467c9c305c1a6b5f7`
    //   }
    // }
    return await axios.get(url);
  }
}

export const sponsorsService = new DivisionService;