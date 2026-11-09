export type Theme = {
  colors: Record<string, string>;
  colorScheme: "light" | "dark";
  radius: string;
  motion: { duration: number; ease: readonly [number, number, number, number] };
};
