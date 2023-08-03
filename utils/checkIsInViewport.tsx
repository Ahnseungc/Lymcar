export const checkIsInViewport = (elem: any) => {
  if (!elem || !window) {
    return false;
  }

  const { top: elementTop, bottom: elementBottom } =
    elem.getBoundingClientRect();

  return elementBottom > 0 && elementTop <= window.innerHeight;
};
