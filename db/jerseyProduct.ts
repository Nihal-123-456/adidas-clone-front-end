// products.ts

export interface JerseyProduct {
  id?: number;
  nation: string;
  productName: string; // e.g., "Argentina 26/27 Away Jersey"
  type: string;        // e.g., "Performance", "Match", "Replica"
  price: number;
  image: string;
}

export const jerseyProducts: JerseyProduct[] = [
  {
    id: 1,
    nation: "Argentina",
    productName: "Argentina 24/25 Away Jersey",
    type: "Match",
    price: 130,
    // Placeholder: Reliable Flag URL (Replace with actual product image)
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/bd7e8465ca6340f6ba344deea1e15cd1_9366/Argentina_26_Away_Authentic_Jersey_Black_JM5901_HM53.jpg"
  },
  {
    id: 2,
    nation: "Colombia",
    productName: "Colombia 24/25 Home Jersey",
    type: "Performance",
    price: 120,
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/5a8e15cfb4ef447282f48b1997d11e6f_9366/Colombia_26_Away_Authentic_Jersey_Blue_JL6973_HM53.jpg"
  },
  {
    id: 3,
    nation: "Argentina",
    productName: "Argentina 24/25 Home Jersey",
    type: "Authentic",
    price: 140,
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/44ad9429d16a46ffb404df292923d173_9366/Argentina_26_Home_Authentic_Jersey_White_JM5897_HM53.jpg"
  },
  {
    id: 4,
    nation: "Germany",
    productName: "Germany 24/25 Away Jersey",
    type: "Replica",
    price: 90,
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/76da110e669847fa914e3b9aa10b4a2d_9366/Germany_26_Away_Authentic_Jersey_Blue_JN2070_HM53.jpg"
  },
  {
    id: 5,
    nation: "Spain",
    productName: "Spain 24/25 Home Jersey",
    type: "Match",
    price: 130,
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/764f9e7d0914477083cbdb77a45bc36e_9366/Spain_26_Away_Authentic_Jersey_White_JN4392_HM53.jpg"
  },
  {
    id: 7,
    nation: "Mexico",
    productName: "Mexico 24/25 Away Jersey",
    type: "Authentic",
    price: 135,
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/f650e7d3b6c9439bab99dcc61cbe8f59_9366/Mexico_26_Away_Authentic_Jersey_White_JY5539_HM53.jpg"
  },
  {
    id: 8,
    nation: "Spain",
    productName: "Spain 24/25 Home Jersey",
    type: "Replica",
    price: 95,
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/87609d586bfa499f9fe1fe810d969b2f_9366/Spain_26_Home_Authentic_Jersey_Red_JN4366_HM53.jpg"
  },
  {
    id: 9,
    nation: "Italy",
    productName: "Italy 24/25 Home Jersey",
    type: "Match",
    price: 130,
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/4167dcedad004d919177e001a5229195_9366/Italy_26_Away_Authentic_Jersey_Blue_JL6938_HM53.jpg"
  },
  {
    id: 10,
    nation: "Japan",
    productName: "Japan 24/25 Away Jersey",
    type: "Performance",
    price: 110,
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/c0b232995dfb4aaa83f528528b633758_9366/Japan_26_Away_Authentic_Jersey_White_KD3348_HM53.jpg"
  }
];