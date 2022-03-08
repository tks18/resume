export default () => {
  const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  if (width > 966) {
    console.log(width);
    return false;
  }
  return true;
};
