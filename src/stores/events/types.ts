export interface IEvent {
  name: string;
  contacts: string[];
  datetime: [
    {
      from: string;
      to: string;
    }
  ];
  prices: string[];
  addresses: string[];
  description: string;
  images: string[];
}

export interface IEventCard {
  id: number;
  type: number;
  top: boolean;
  adress: string;
  name: string;
  from: string;
  image: string;
  description: string;
}

export interface IEvents {
  next: string,
  results: IEventCard[]
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
