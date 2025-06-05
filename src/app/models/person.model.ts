export interface Person {
  id: number;
  name: string;
  profile_path: string | null;
  known_for_department: string;
  popularity: number;
  known_for?: KnownForItem[];
  // Extended details (from detailed API call)
  biography?: string;
  birthday?: string;
  deathday?: string | null;
  place_of_birth?: string | null;
  also_known_as?: string[];
  adult?: boolean;
  gender?: number;
  homepage?: string | null;
  imdb_id?: string;
  external_ids?: ExternalIds;
}

export interface KnownForItem {
  id: number;
  title?: string; // For movies
  name?: string; // For TV shows
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  media_type: 'movie' | 'tv';
  release_date?: string; // For movies
  first_air_date?: string; // For TV shows
  vote_average: number;
  popularity: number;
  genre_ids: number[];
}

export interface ExternalIds {
  imdb_id?: string | null;
  facebook_id?: string | null;
  instagram_id?: string | null;
  twitter_id?: string | null;
  tiktok_id?: string | null;
  youtube_id?: string | null;
  homepage?: string | null;
}

export interface PersonCredits {
  cast: PersonCastCredit[];
  crew: PersonCrewCredit[];
}

export interface PersonCastCredit {
  id: number;
  title?: string; // For movies
  name?: string; // For TV shows
  character: string;
  poster_path: string | null;
  release_date?: string; // For movies
  first_air_date?: string; // For TV shows
  vote_average: number;
  popularity: number;
  media_type?: 'movie' | 'tv';
  genre_ids: number[];
  overview: string;
  backdrop_path: string | null;
  adult?: boolean;
  video?: boolean;
  original_language?: string;
  original_title?: string;
  original_name?: string;
  episode_count?: number; // For TV shows
}

export interface PersonCrewCredit {
  id: number;
  title?: string; // For movies
  name?: string; // For TV shows
  job: string;
  department: string;
  poster_path: string | null;
  release_date?: string; // For movies
  first_air_date?: string; // For TV shows
  vote_average: number;
  popularity: number;
  media_type?: 'movie' | 'tv';
  genre_ids: number[];
  overview: string;
  backdrop_path: string | null;
  adult?: boolean;
  video?: boolean;
  original_language?: string;
  original_title?: string;
  original_name?: string;
  episode_count?: number; // For TV shows
}

export interface PersonImages {
  profiles: PersonImage[];
}

export interface PersonImage {
  file_path: string;
  width: number;
  height: number;
  aspect_ratio: number;
  vote_average: number;
  vote_count: number;
  iso_639_1?: string | null;
}
