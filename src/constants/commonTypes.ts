export type Nullable<T> = T | undefined | null;

export interface TaLabels {
  code: string;
  text: string;
}

export interface TProductItem {
  id: number;
  title1: string;
  title2: string;
  picture: string;
  price: number;
  price_old: number;
  aLabels: Array<TaLabels>;
}

export interface TProductsResponse {
  aCatProds: Array<TProductItem>;
}

export interface TaUser {
  address: Nullable<string>;
  city: Nullable<string>;
  email: string;
  firstname: string;
  id: number;
  phone: Nullable<string>;
}

export interface TSignInResponse {
  aUser: TaUser;
  token: string;
  msg: string;
}

export interface TApiResponseData {
  code: number;
  msg: string;
}
