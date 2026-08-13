export type Category =
  | "Todos"
  | "Componentes"
  | "Monitores"
  | "Perifericos"
  | "Almacenamiento";

export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: Exclude<Category, "Todos">;
  image: string;
  specs: string[];
}
