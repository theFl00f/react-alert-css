export const splitColors = (string) => {
  return string.split("-").map((color) => `#${color}`);
};

export const joinColors = (array) => {
  return array.map((color) => color.slice(1)).join("-");
};
