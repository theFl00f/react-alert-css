import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import tinycolor from "tinycolor2";
import { useHistory } from "react-router-dom";
import { ColorInput } from "./Form/ColorInput";
import { joinColors, splitColors } from "../../util/colorUtil";
import { Context } from "../../context/Store";
import { usePrevious } from "../../util/usePrevious";
import { Button } from "./Button";

export const TinyColor = () => {
  const history = useHistory();
  const [state, dispatch] = useContext(Context);

  const hasSetColorsRef = useRef(false);
  const prevTheme = usePrevious(state.theme);

  const searchParams = useMemo(
    () => new URLSearchParams(history.location.search),
    [history.location.search]
  );

  const paletteUrl = searchParams.get("colors");

  const setTheme = (theme) => {
    dispatch({ type: "SET_THEME", payload: theme });
  };

  const setPalette = (colors) => {
    dispatch({ type: "SET_PALETTE", payload: colors });

    const colorParams = joinColors(colors);

    const params = new URLSearchParams({
      colors: colorParams,
    });

    const prevParams = searchParams;
    const newUrl = `?${params.toString()}`;

    if (!params.get("colors")) {
      return history.replace(newUrl);
    }

    if (params.get("colors") !== prevParams.get("colors")) {
      return history.push(newUrl);
    }
  };

  const randomColor = () => {
    return tinycolor.random();
  };

  const generatePalette = useCallback((paletteType) => {
    let color;
    switch (paletteType) {
      case "analogous": {
        color = randomColor().analogous();
        setTheme("analogous");
        break;
      }
      case "monochrome": {
        color = randomColor().monochromatic();
        setTheme("monochrome");
        break;
      }
      case "split": {
        color = randomColor().splitcomplement();
        setTheme("split");
        break;
      }
      case "triad": {
        color = randomColor().triad();
        setTheme("triad");
        break;
      }
      default: {
        const tempColors = new Array(6);
        for (let i = 0; i < tempColors.length; i++) {
          tempColors[i] = randomColor();
        }
        color = tempColors;
        setTheme("random");
      }
    }
    return color.map((color) => color.toHexString());
  });

  const handlePaletteChange = (event) => {
    const newValue = event.target.value;
    const prevValue = event.target.attributes.value.value;
    const index = state.palette.indexOf(prevValue);
    const newColors = [...state.palette];
    newColors[index] = newValue;
    return setPalette(newColors);
  };

  const handleClick = (e) => {
    e.preventDefault();
    return setPalette(generatePalette(state.theme));
  };

  useEffect(() => {
    // on paletteUrl change, set colors from url
    hasSetColorsRef.current = false;
    if (paletteUrl) {
      const colors = splitColors(paletteUrl);
      setPalette(colors);
      hasSetColorsRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paletteUrl]);

  useEffect(() => {
    // on theme change, generate and set new palette
    if (!hasSetColorsRef.current || (prevTheme && state.theme !== prevTheme)) {
      setPalette(generatePalette(state.theme));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.theme]);

  return (
    <>
      {state.palette &&
        state.palette.map((color, index) => {
          return (
            <Fragment key={index}>
              <ColorInput
                value={color}
                label={color}
                onChange={handlePaletteChange}
              />
            </Fragment>
          );
        })}
      <div className="col-span-3 md:col-span-6 flex items-center justify-center">
        <Button onClick={handleClick}>Generate</Button>
      </div>
    </>
  );
};
