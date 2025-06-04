export interface SearchItem {
  id: number;
  title?: string; // For movies
  name?: string; // For people
  release_date?: string;
  poster_path?: string;
  profile_path?: string;
  type: 'movie' | 'person';
}
