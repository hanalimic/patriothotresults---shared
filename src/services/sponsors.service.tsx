import axios, { AxiosRequestConfig } from 'axios';
import React from 'react';

export class SponsorsService {
  BASE_URL: string |¬†undefined;
  constructor(REACT_APP_BASE_API_URL: string |¬†undefined) {
    console.log('SponsorsService REACT_APP_BASE_API_URL: ', REACT_APP_BASE_API_URL);
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
