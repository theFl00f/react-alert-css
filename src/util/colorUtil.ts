export const splitColors = (string: string): string[] => {
  return string.split("-").map((color) => `#${color}`);
};

export const joinColors = (array: string[]): string => {
  return array.map((color) => color.slice(1)).join("-");
};
