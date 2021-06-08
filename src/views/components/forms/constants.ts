interface ThemeOption {
  label: string;
  value: string;
  id: string;
  name: string;
}

export const colorOptions: ThemeOption[] = [
  {
    label: "Analogous",
    value: "analogous",
    id: "analogous",
    name: "colorSelection",
  },
  {
    label: "Monochrome",
    value: "monochrome",
    id: "monochrome",
    name: "colorSelection",
  },
  {
    label: "Split",
    value: "split",
    id: "split",
    name: "colorSelection",
  },
  {
    label: "Triad",
    value: "triad",
    id: "triad",
    name: "colorSelection",
  },
  {
    label: "Random",
    value: "random",
    id: "random",
    name: "colorSelection",
  },
];
