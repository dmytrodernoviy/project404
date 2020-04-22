import { TProductItem } from '@src/constants/commonTypes';

export interface Props {
  data: Array<TProductItem>;
  toggleHideHeader: (value: number) => void;
}
