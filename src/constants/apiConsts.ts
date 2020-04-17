export const baseAPIURL = 'https://www.fatline.com.ua/app/v2/ru';

const apiURLs = {
  signIn: `${baseAPIURL}/login`,
  signUp: `${baseAPIURL}/register`,
  getProducts: `${baseAPIURL}/listing`,
  searchProducts: `${baseAPIURL}/search`,
};

export default apiURLs;
