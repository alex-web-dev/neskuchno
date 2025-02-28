export type TImage = {
  id: string;
  src: string;
};

export interface IEvent {
  id: string;
  date: string;
  time: string;
  address: string;
  title: string;
  description: string;
  priceFrom: number;
  priceTo: number;
  mainImage: TImage;
  allImages: TImage[];
  inFavorites: boolean;
  isTop: boolean;
}

export interface IEventFilter {
  id: number;
  title: string;
  list: string[];
}

export interface IPlace {
  id: number;
  value: string;
  label: string;
  priority?: boolean;
}