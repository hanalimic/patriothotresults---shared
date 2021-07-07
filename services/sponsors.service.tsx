import axios, { AxiosRequestConfig } from 'axios';
import React from 'react';

class DivisionService {
  BASE_URL: string;
  constructor(REACT_APP_BASE_API_URL: string) {
    this.BASE_URL = REACT_APP_BASE_API_URL;
  }

  async getAllSponsors(params: any) {
    const url = `${this.BASE_URL}/sponsors`;
    // const headers: AxiosRequestConfig = {
    //   headers: {
    //     Authorization: `Bearer c6ce4fb1be64a4fa976a612d3db0943ccbbef756e0a8ce927e8d591b7ec9db0467c9c305c1a6b5f7`
    //   }
    // }
    return await axios.get(url);
  }
}

export default DivisionService;