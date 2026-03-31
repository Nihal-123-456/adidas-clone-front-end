// adidasProducts.ts

export interface ProductStatus {
  label: string;
  type: 'success' | 'warning' | 'primary' | 'default'; // For styling purposes
}

export interface AdidasProduct {
  id: number;
  name: string;
  price: number;
  type: string; // e.g., "Men's Performance", "Women's Running", "Unisex Lifestyle"
  colorsAvailable: number;
  status: ProductStatus;
  image: string;
}

export const adidasProducts: AdidasProduct[] = [
  {
    id: 1,
    name: "Argentina 24/25 Away Jersey",
    price: 130,
    type: "Men's Football",
    colorsAvailable: 2,
    status: { label: "Bestseller", type: "warning" },
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/bd7e8465ca6340f6ba344deea1e15cd1_9366/Argentina_26_Away_Authentic_Jersey_Black_JM5901_HM53.jpg"
  },
  {
    id: 2,
    name: "Ultraboost Light",
    price: 190,
    type: "Men's Running",
    colorsAvailable: 12,
    status: { label: "New", type: "primary" },
    image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ec595635a2994adea094a8bf0117ef1a_9366/Samba_OG_Shoes_White_B75806_02_standard_hover.jpg"
  },
  {
    id: 3,
    name: "Colombia 24/25 Home Jersey",
    price: 120,
    type: "Men's Football",
    colorsAvailable: 1,
    status: { label: "Selling Fast", type: "success" },
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/5a8e15cfb4ef447282f48b1997d11e6f_9366/Colombia_26_Away_Authentic_Jersey_Blue_JL6973_HM53.jpg"
  },
  {
    id: 4,
    name: "Samba OG",
    price: 100,
    type: "Unisex Lifestyle",
    colorsAvailable: 8,
    status: { label: "Bestseller", type: "warning" },
    image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/9bbf2dc7daa042298f0e7eec714b5708_9366/ADIZERO_EVO_SL_EXO_Shoes_Black_KI4764_HM3_hover.jpg"
  },
  {
    id: 5,
    name: "Germany 24/25 Home Jersey",
    price: 110,
    type: "Men's Football",
    colorsAvailable: 2,
    status: { label: "New", type: "primary" },
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/76da110e669847fa914e3b9aa10b4a2d_9366/Germany_26_Away_Authentic_Jersey_Blue_JN2070_HM53.jpg"
  },
  {
    id: 6,
    name: "Forum Low",
    price: 110,
    type: "Women's Lifestyle",
    colorsAvailable: 15,
    status: { label: "Trending", type: "default" },
    image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d2752ce688794cd5b1644593c41527fc_9366/Samba_Jane_Shoes_White_JR1402_02_standard_hover.jpg"
  },
  {
    id: 7,
    name: "Predator 24 League FG",
    price: 110,
    type: "Men's Football",
    colorsAvailable: 4,
    status: { label: "Bestseller", type: "warning" },
    image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/309a0c8f53dd45d3a3bea8bf0118aa6b_9366/Samba_OG_Shoes_Black_B75807_02_standard_hover.jpg"
  },
  {
    id: 8,
    name: "Alphaboost V1",
    price: 170,
    type: "Women's Running",
    colorsAvailable: 5,
    status: { label: "Selling Fast", type: "success" },
    image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e4e5659437ab4914a9a900f190717b48_9366/Samba_OG_Shoes_White_ID0478_02_standard_hover.jpg"
  },
  {
    id: 9,
    name: "Mexico 24/25 Home Jersey",
    price: 130,
    type: "Men's Football",
    colorsAvailable: 2,
    status: { label: "Bestseller", type: "warning" },
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/f650e7d3b6c9439bab99dcc61cbe8f59_9366/Mexico_26_Away_Authentic_Jersey_White_JY5539_HM53.jpg"
  },
  {
    id: 10,
    name: "Gazelle Indoor",
    price: 100,
    type: "Unisex Lifestyle",
    colorsAvailable: 20,
    status: { label: "Iconic", type: "default" },
    image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/0476188069284464aac8eb36e4690ae6_9366/Mexico_Handball_Spezial_Shoes_White_HP3674_HM3_hover.jpg"
  },
  {
    id: 11,
    name: "X 24 Crazyfast",
    price: 280,
    type: "Men's Football",
    colorsAvailable: 3,
    status: { label: "New", type: "primary" },
    image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e7163fc84e043dfa594c369f823ad29_9366/ADIZERO_EVO_SL_EXO_Shoes_White_KI4763_HM3_hover.jpg"
  },
  {
    id: 12,
    name: "Adicolor Classics Firebird",
    price: 80,
    type: "Women's Lifestyle",
    colorsAvailable: 6,
    status: { label: "Sale", type: "default" },
    image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/bc1e0a82cc724171b06b712bfb03cb1f_9366/Gazelle_Indoor_Shoes_Red_JI2063_15_hover_standard.jpg"
  },
  {
    id: 13,
    name: "4DFWD 2",
    price: 220,
    type: "Men's Running",
    colorsAvailable: 4,
    status: { label: "Technology", type: "default" },
    image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/87c242ae5aa4464d9e6ef819c7326771_9366/Ultraboost_1.0_Shoes_White_JQ0823_02_standard_hover.jpg"
  },
  {
    id: 14,
    name: "Spain 24/25 Home Jersey",
    price: 120,
    type: "Men's Football",
    colorsAvailable: 1,
    status: { label: "Selling Fast", type: "success" },
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/764f9e7d0914477083cbdb77a45bc36e_9366/Spain_26_Away_Authentic_Jersey_White_JN4392_HM53.jpg"
  },
  {
    id: 15,
    name: "NMD_R1",
    price: 150,
    type: "Unisex Lifestyle",
    colorsAvailable: 10,
    status: { label: "Trending", type: "default" },
    image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/48827d5dad844c7fb212b83e955f2c82_9366/Handball_Spezial_Shoes_Green_IG6192_15_hover_standard.jpg"
  },
  {
    id: 16,
    name: "Tiro 23 League Pant",
    price: 45,
    type: "Unisex Training",
    colorsAvailable: 8,
    status: { label: "Essential", type: "default" },
    image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/883d16e9c3934cc88ba9141417b3e77c_9366/Spain_Handball_Spezial_Shoes_White_HP3672_HM3_hover.jpg"
  }
];