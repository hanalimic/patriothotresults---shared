import axios, { AxiosRequestConfig } from 'axios';
import React from 'react';

const BASE_URL = process.env.REACT_APP_BASE_API_URL;

class DivisionService {
  constructor() {}

  async getAllDivisions({ queryKey }: any) {
    const tournamentId = queryKey[1];
    if (tournamentId) {
      const url = `${BASE_URL}/tournaments/${tournamentId}`;
      const headers: AxiosRequestConfig = {
        headers: {
          Authorization: `Bearer c6ce4fb1be64a4fa976a612d3db0943ccbbef756e0a8ce927e8d591b7ec9db0467c9c305c1a6b5f7`
        }
      }
      return await axios.get(url, headers);
    }
  }
}

export const divisionService = new DivisionService;