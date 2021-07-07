export interface IMatch {
  id: number,
  date: string,
  time: string,
  location: string,
  comments: string,
  live_stream_url: string,
  home_team: {
    id: number,
    name: string
  },
  guest_team: {
    id: number,
    name: string
  },
  home_score: number,
  guest_score: number,
  scoresheet_path: string
}