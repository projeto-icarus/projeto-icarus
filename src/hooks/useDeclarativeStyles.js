import theme from "../styles/theme";

const PIXEL_MULTIPLIER = 8;

const parsePixel = (val) => {
  if (typeof val === "number") {
    return `${val * PIXEL_MULTIPLIER}px`;
  }
  return val;
};

const useDeclarativeStyles = ({
  mt,
  mb,
  ml,
  mr,
  mx,
  my,
  pt,
  pb,
  pl,
  pr,
  px,
  py,
  color,
  background,
  display,
  alignItems,
  justifyContent,
}) => {
  const styles = { display, alignItems, justifyContent };

  if (mt) styles.marginTop = parsePixel(mt);
  if (mb) styles.marginBottom = parsePixel(mb);
  if (ml) styles.marginLeft = parsePixel(ml);
  if (mr) styles.marginRight = parsePixel(mr);
  if (mx) {
    styles.marginLeft = parsePixel(mx);
    styles.marginRight = parsePixel(mx);
  }
  if (my) {
    styles.marginTop = parsePixel(my);
    styles.marginBottom = parsePixel(my);
  }
  if (pt) styles.paddingTop = parsePixel(pt);
  if (pb) styles.paddingBottom = parsePixel(pb);
  if (pl) styles.paddingLeft = parsePixel(pl);
  if (pr) styles.paddingRight = parsePixel(pr);
  if (px) {
    styles.paddingLeft = parsePixel(px);
    styles.paddingRight = parsePixel(px);
  }
  if (py) {
    styles.paddingTop = parsePixel(py);
    styles.paddingBottom = parsePixel(py);
  }

  if (background) styles.background = theme.palette[background] || background;
  if (color) styles.color = theme.palette[color] || color;

  return styles;
};

export default useDeclarativeStyles;
