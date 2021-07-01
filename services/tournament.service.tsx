import React from 'react';
import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_API_URL;
class TournamentService {
  constructor() {}

  async getAllTournaments() {
    const url = `${BASE_URL}/tournaments`;
    const headers: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer c6ce4fb1be64a4fa976a612d3db0943ccbbef756e0a8ce927e8d591b7ec9db0467c9c305c1a6b5f7`
      }
    }
    return await axios.get(url, headers);
  }
}

export const tournamentService = new TournamentService;