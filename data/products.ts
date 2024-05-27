export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    category?: string;
  }
  
  const products: Product[] = [
    {
      id: 1,
      name: "Premium Headphones",
      image: "./assets/images/ups1.jpg",
      price: 99.99,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Classic Watch",
      image: "./assets/images/ups2.jpg",
      price: 149.99,
      category: "Accessories"
    },
    {
      id: 3,
      name: "Smartphone",
      image: "./assets/images/ups3.jpg",
      price: 599.99,
      category: "Electronics"
    },
    {
      id: 4,
      name: "Designer Sunglasses",
      image: "./assets/images/ups4.jpg",
      price: 199.99,
      category: "Accessories"
    },
    {
      id: 5,
      name: "Gaming Console",
      image: "./assets/images/ups5.jpg",
      price: 399.99,
      category: "Electronics"
    },
    {
      id: 6,
      name: "Leather Bag",
      image: "./assets/images/ups6.jpg",
      price: 249.99,
      category: "Accessories"
    },
    {
      id: 7,
      name: "Wireless Earbuds",
      image: "./assets/images/ups7.jpg",
      price: 79.99,
      category: "Electronics"
    },
    {
      id: 8,
      name: "Travel Backpack",
      image: "./assets/images/ups8.jpg",
      price: 129.99,
      category: "Accessories"
    },
    {
      id: 9,
      name: "Fitness Tracker",
      image: "./assets/images/ups9.jpg",
      price: 149.99,
      category: "Electronics"
    },
    {
      id: 10,
      name: "Leather Wallet",
      image: "./assets/images/ups10.jpg",
      price: 69.99,
      category: "Accessories"
    }
  ];
  
  export default products;
  