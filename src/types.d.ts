export type SelectedPages =
  | "home"
  | "philosophy"
  | "ourclasses"
  | "massages"
  | "contactus";

export type PhilosphyCardType = {
  image: JSX.Element;
  title: string;
  description: string;
  level: string;
};
