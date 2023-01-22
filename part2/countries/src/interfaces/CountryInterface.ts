export interface CountryInterface {
  cca2: string;
  cca3: string;
  name: {
    common: string;
    official: string;
  };
  capital: string;
  area: number;
  languages: object;
  flags: {
    png: string;
  };
  capitalInfo: {
    latlng?: [number, number];
  };
}
