// jerseyData.ts

export interface NationJersey {
  id: number;
  name: string;
  flagImage: string; // Using flag urls as reliable placeholders
}

export const nationJerseyData: NationJersey[] = [
  {
    id: 1,
    name: "Argentina",
    flagImage: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/global_wc26_wc_store_multifed_football_ss26_launch_wc_store_category_image_5_d_00f6a888e1.jpg"
  },
  {
    id: 4,
    name: "Germany",
    flagImage: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/global_wc26_wc_store_multifed_football_ss26_launch_wc_store_category_image_8_d_24c7e309f6.jpg"
  },
  {
    id: 5,
    name: "Spain",
    flagImage: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/global_wc26_wc_store_multifed_football_ss26_launch_wc_store_category_image_9_d_64b9af1250.jpg"
  },
  {
    id: 6,
    name: "Chile",
    flagImage: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/global_wc26_wc_store_multifed_football_ss26_launch_wc_store_category_image_14_d_8294b9b70a.jpg"
  },
  {
    id: 7,
    name: "Belgium",
    flagImage: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/global_wc26_wc_store_multifed_football_ss26_launch_wc_store_category_image_12_d_d2d42d1a7b.jpg"
  },
  {
    id: 8,
    name: "Sweden",
    flagImage: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/global_wc26_wc_store_multifed_football_ss26_launch_wc_store_category_image_13_d_f26822dd3a.jpg"
  },
  {
    id: 9,
    name: "Italy",
    flagImage: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/global_wc26_wc_store_multifed_football_ss26_launch_wc_store_category_image_10_d_64d3219008.jpg"
  },
  {
    id: 10,
    name: "Mexico",
    flagImage: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/global_wc26_wc_store_multifed_football_ss26_launch_wc_store_category_image_6_d_c2a99fdbae.jpg"
  }
];