import {CartItem} from './CartItem';

export interface CartEvent {
  actionType: string;
  item: CartItem;
}
