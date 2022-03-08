export default (url: string, self: boolean) => {
  if (self) {
    window.open(url, '_self');
  } else {
    window.open(url);
  }
};
