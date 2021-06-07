import { useEffect, useRef } from "react";

export const usePrevious = (
  value: string | number
): string | number | undefined => {
  const ref = useRef<string | number>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
