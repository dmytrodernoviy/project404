export type Nullable<T> = T | undefined | null;

export interface TaLabels {
  code: string;
  text: string;
}

export interface TaUser {
  address: Nullable<string>;
  city: Nullable<string>;
  email: string;
  firstname: string;
  id: number;
  phone: Nullable<string>;
}

export interface TaThemes {
  id: number;
  is_nested: number;
  name: string;
  pid: number;
  prods_count: number;
  title: string;
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

export interface TSearchableProductsData {
  aPhrases: Array<string>;
  aThemes: TaThemes;
}

export interface TSignInResponse {
  aUser: TaUser;
  token: string;
  msg: string;
}

export interface TSignUpResponse {
  aUser: TaUser;
  token: string;
}

export interface TApiResponseData {
  code: number;
  msg: string;
}
