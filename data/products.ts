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
      image: "https://electrogadgets.co.za/cdn/shop/products/3528BLNWP-2.progressive.jpg?v=1612446061",
      price: 99.99,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Classic Watch",
      image: "https://britelighting.co.za/cdn/shop/products/51FSh3ctmOL_500x500.jpg?v=1713608803",
      price: 149.99,
      category: "Accessories"
    },
    {
      id: 3,
      name: "Smartphone",
      image: "https://www.ollny.com/cdn/shop/files/Multicolor1000LED-01_2048x2048.webp?v=1687855528",
      price: 599.99,
      category: "Electronics"
    },
    {
      id: 4,
      name: "Designer Sunglasses",
      image: "https://www.lightmarket.co.za/cdn/shop/files/839be9b3-bddc-4d77-822c-c022ab3a4371.jpg?v=1713251907&width=493",
      price: 199.99,
      category: "Accessories"
    },
    {
      id: 5,
      name: "Gaming Console",
      image: "https://www.anerngroup.com/uploads/image/20210113/14/a60-led-bulb-light-1.jpg",
      price: 399.99,
      category: "Electronics"
    },
    {
      id: 6,
      name: "Leather Bag",
      image: "https://www.anerngroup.com/uploads/image/20210113/14/a60-led-bulb-light-2.jpg",
      price: 249.99,
      category: "Accessories"
    },
    {
      id: 7,
      name: "Wireless Earbuds",
      image: "https://www.anerngroup.com/uploads/image/20210628/15/38.jpg",
      price: 79.99,
      category: "Electronics"
    },
    {
      id: 8,
      name: "Travel Backpack",
      image: "https://www.quicktech.co.za/cdn/shop/files/Untitled-1_fcc67ff7-0c06-4079-9327-b030ed92bfdc.png?v=1707202964",
      price: 129.99,
      category: "Accessories"
    },
    {
      id: 9,
      name: "Fitness Tracker",
      image: "https://media.takealot.com/covers_images/7876c405cbf84634bc1dc7661b91fb0a/s-pdpxl.file",
      price: 149.99,
      category: "Electronics"
    },
    {
      id: 10,
      name: "Leather Wallet",
      image: "https://cdnsolar.ca/cdn/shop/files/0280664f-f20c-4069-b5a2-1e9d4d8bac55_aaec6d20-3d15-4dd1-b381-8a82e9eea7d5_large.png?v=1686081972",
      price: 69.99,
      category: "Accessories"
    }
  ];
  
  export default products;
  