export interface IBook {
  _id: string;
  Title: string;
  image: string;
  Description: string;
  price: number;
  Author: string;
  Genre: string;
  Publication: string;
  quantity?: number;
  Reviews?: string | string[];
}
