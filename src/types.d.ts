export interface IUser {
  username: string;
  avatar: string;
  is_host: boolean;
  is_complete: boolean;
  id: string;
}
export interface UseUserInterface {
  userLoading: boolean;
  user: {
    avatar?: string;
    id?: string;
    isComplete?: boolean;
    isHost?: boolean;
    username?: string;
  };
  isLoggedIn: boolean;
}
export interface IUsernameLoginVariables {
  username: string;
  password: string;
}
export interface IUsernameLoginSuccess {
  ok: string;
}
export interface IUsernameLoginFailure {
  error: string;
}

export interface IFacility {
  pk: number;
  name: string;
  description: string;
}

export interface ICategory {
  pk: number;
  name: string;
  kind: string;
}

export interface ICafeUploadForm {
  name: string;
  address: string;
  detail_address: string;
  description: string;
  pet_allowed: boolean;
  kind: string;
  facilities: number[];
  category: number;
}

export interface ICafeDetail {
  id: number;
  owner: {
    username: string;
    avatar: string;
  };
  facilities: {
    pk: number;
    name: string;
    description: string;
  };
  [];
  category: {
    pk: number;
    name: string;
    kind: string;
  };
  potato: string;
  is_owner: boolean;
  is_on_wishlist: boolean;
  photo_set: number[];
  created_at: Date;
  updated_at: Date;
  name: string;
  address: string;
  detail_address: string;
  description: string;
  pet_allowed: boolean;
  kind: string;
}
