export interface Tournament {
  id: number;
  name: string;
  season: {
    id: number;
    season: string;
  };
  image_path: string;
}

export interface TournamentParams {
  tournamentId: string;
}