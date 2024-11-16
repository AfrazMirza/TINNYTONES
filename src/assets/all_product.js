import p1_img from "./7.jpg";
import p2_img from "./8.jpg";
import p3_img from "./9.jpg";
import p4_img from "./20.jpg";
import p5_img from "./19.jpg";
import p6_img from "./18.jpg";
import p7_img from "./22.jpg";
import p8_img from "./21.jpg";
import p9_img from "./24.jpg";
import p13_img from "./1.jpg";
import p14_img from "./2.jpg";
import p15_img from "./5.jpg";
import p16_img from "./6.jpg";
import p17_img from "./14.jpg";
import p18_img from "./15.jpg";
import p19_img from "./16.jpg";
import p20_img from "./13.jpg";
import p21_img from "./4.jpg";
import p25_img from "./25.jpg";
import p26_img from "./26.jpg";
import p27_img from "./27.jpg";
import p28_img from "./28.jpg";
import p29_img from "./29.jpg";
import p30_img from "./30.jpg";
import p31_img from "./31.jpg";
import p32_img from "./32.jpg";
import p33_img from "./33.jpg";

let all_products = [
  {
    id: 1,
    name: "Shirinathji",
    category: "miniature",
    color: "Red",
    image: p1_img,
    new_price: 8000,
    old_price: 10000,
    discount: "-20%",
    artist: "Farzana Akhtar",
    rating: 2.5
  },
  {
    id: 2,
    name: "Portrait of King",
    category: "miniature",
    color: "Blue",
    image: p2_img,
    new_price: 5000,
    old_price: 7000,
    discount: "-30%",
    artist: "Farzana Akhtar",
    rating: 3.0
  },
  {
    id: 3,
    name: "Shrinathji",
    category: "miniature",
    color: "White",
    image: p3_img,
    new_price: 15000,
    old_price: 20000,
    discount: "-25%",
    rating: 4.4
  },
  {
    id: 4,
    name: "Kota King",
    category: "miniature",
    color: "Green",
    image: p4_img,
    new_price: 13000,
    old_price: 15000,
    discount: "-15%",
    rating: 5.0
  },
  {
    id: 5,
    name: "Battlefield of Kings",
    category: "miniature",
    color: "Yellow",
    image: p5_img,
    new_price: 50000,
    old_price: 65000,
    discount: "-25%",
    rating: 4.0
  },
  {
    id: 6,
    name: "Kota Queen  ",
    category: "miniature",
    color: "Pink",
    image: p6_img,
    new_price: 6000,
    old_price: 8000,
    discount: "-25%",
    rating: 4
  },
  {
    id: 7,
    name: "Lady Portrait",
    category: "miniature",
    color: "Purple",
    image: p7_img,
    new_price: 8500,
    old_price: 10000,
    discount: "-15%",
    rating: 3.0
  },
  {
    id: 8,
    name: "Hunting of Loins",
    category: "miniature",
    color: "Light Blue",
    image: p8_img,
    new_price: 15000,
    old_price: 17000,
    discount: "-15%",
    rating: 4.0
  },
  {
    id: 9,
    name: "Krishina",
    category: "miniature",
    color: "Leopard",
    image: p9_img,
    new_price: 7000,
    old_price: 12000,
    discount: "-40%",
    rating: 3.5
  },
  {
    id: 13,
    name: "Portrait of Old Men",
    category: "portrait",
    color: "Gray",
    image: p13_img,
    new_price: 5000,
    old_price: 8000,
    discount: "-35%",
    rating: 4
  },
  {
    id: 14,
    name: "Surreal Faces",
    category: "portrait",
    color: "Red",
    image: p14_img,
    new_price: 1500,
    old_price: 2000,
    discount: "-20%",
    rating: 4.0
  },
  {
    id: 15,
    name: "Timeless Faces",
    category: "portrait",
    color: "Blue",
    image: p15_img,
    new_price: 3000,
    old_price: 4000,
    discount: "-22%",
    rating: 2.4
  },
  {
    id: 16,
    name: "Moonlit Grace",
    category: "portrait",
    color: "White",
    image: p16_img,
    new_price: 1200,
    old_price: 1500,
    discount: "-20%",
    rating: 3.0
  },
  {
    id: 17,
    name: "Triangular Flag",
    category: "portrait",
    color: "Green",
    image: p17_img,
    new_price: 5000,
    old_price: 7000,
    discount: "-29%",
    rating: 4.0
  },
  {
    id: 18,
    name: "Portrait",
    category: "portrait",
    color: "Navy",
    image: p18_img,
    new_price: 4000,
    old_price: 5250,
    discount: "-25%",
    rating: 4.5
  },
  {
    id: 19,
    name: "Hatching Portrait",
    category: "portrait",
    color: "Black",
    image: p19_img,
    new_price: 850,
    old_price: 1000,
    discount: "-15%",
    rating: 3.0
  },
  {
    id: 20,
    name: "Girl's Portrait",
    category: "portrait",
    color: "Gray",
    image: p20_img,
    new_price: 1000,
    old_price: 1200,
    discount: "-15%",
    rating: 4.0
  },
  {
    id: 21,
    name: "Tokyo",
    category: "portrait",
    color: "Olive",
    image: p21_img,
    new_price: 850,
    old_price: 1200,
    discount: "-29%",
    rating: 3.4
  },
  {
    id: 25,
    name: "Living Room",
    category: "still",
    color: "Blue",
    image: p25_img,
    new_price: 350,
    old_price: 500,
    discount: "-30%",
    rating: 3.0
  },
  {
    id: 26,
    name: "3D-Still Life",
    category: "still",
    color: "Red",
    image: p26_img,
    new_price: 1000,
    old_price: 1200,
    discount: "-16%",
    rating: 4.0
  },
  {
    id: 27,
    name: "Basic Sketches",
    category: "still",
    color: "Blue",
    image: p27_img,
    new_price: 500,
    old_price: 700,
    discount: "-29%",
    rating: 3.4
  },
  {
    id: 28,
    name: "Human Gesture",
    category: "still",
    color: "Green",
    image: p28_img,
    new_price: 750,
    old_price: 1000,
    discount: "-25%",
    rating: 3.0
  },
  {
    id: 29,
    name: "3-D Composition",
    category: "still",
    color: "White",
    image: p29_img,
    new_price: 500,
    old_price: 600,
    discount: "-17%",
    rating: 4.0
  },
  {
    id: 30,
    name: "Still Life",
    category: "still",
    color: "Gray",
    image: p30_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 3
  },
  {
    id: 31,
    name: "Neuro  Doodle",
    category: "still",
    color: "Navy",
    image: p31_img,
    new_price: 850,
    old_price: 1200,
    discount: "-29%",
    rating: 3.0
  },
  {
    id: 32,
    name: "Water Color Painting",
    category: "still",
    color: "Black",
    image: p32_img,
    new_price: 1250,
    old_price: 1500,
    discount: "-17%",
    rating: 4.0
  },
  {
    id: 33,
    name: "Voronoi Diagram",
    category: "still",
    color: "Olive",
    image: p33_img,
    new_price: 550,
    old_price: 750,
    discount: "-27%",
    rating: 3
  },
];
export default all_products;
