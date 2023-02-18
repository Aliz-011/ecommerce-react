export const fetchUser = () => {
  const userInfo =
    localStorage.getItem('user') !== 'undefined'
      ? JSON.parse(localStorage.getItem('user'))
      : null;

  return userInfo ? userInfo : null;
};

export const fetchCart = () => {
  const cartInfo =
    localStorage.getItem('cart') !== 'undefined'
      ? JSON.parse(localStorage.getItem('cart'))
      : [];
  return cartInfo ? cartInfo : [];
};
