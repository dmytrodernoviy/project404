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
