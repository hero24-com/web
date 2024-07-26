// ----------------------------------------------------------------------

export type ISmartHomeProps = {
  license: string;
  price: string;
  caption?: string;
  icon: string;
  buy: string;
  options: {
    title: string;
    disabled: boolean;
    tootip: string;
  }[];
};
