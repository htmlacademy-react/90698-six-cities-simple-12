export type Offer = {
name: string;
  type: string;
  photo: string[];
  price: number;
  premium: boolean;
  bedrooms: number;
  adults: number;
  conveniences: string[];
  host: string;
  hostPro: boolean;
  description: string[];
  id: number;
  lat: number;
  lng: number;
};

export type Offers = Offer[];
