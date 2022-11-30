import bcrypt from "bcryptjs";

export const products = [
  {
    category: "laptops",
    brand: "Apple",
    name: "MacBook Pro MK193 2021",
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "Apple's Macbook series of laptops have been able to provide very good and acceptable performance by taking advantage of powerful technical specifications, without any additional definition. One of the powerful laptops of this series is the MacBook MK193 2021 model. This laptop is equipped with a 16.2-inch screen with a resolution of 2234 x 3456 pixels of the Liquid Retina XDR type, which has the ability to display 254 pixels per inch. We must say that according to the considered specifications, it has a powerful and very high-quality screen...",
    attributes: [
      { Processor: "M1" },
      { "RAM memory capacity": "16GB" },
      { "Type of RAM": "Unified" },
      { "GPU manufacturer": "Apple" },
      { "Screen size": "inches 16.2" },
      { "Screen resolution": "3456x2234" },
      {
        Storage: "1TB",
      },
    ],
    colors: [{ White: "#ffffff" }, { Gray: "#9ca3af" }, { Night: "#111827" }],
    price: 2600,
    discount: 4,
    rate: 4.8,
    image: "/images/laptop tiny/1.png",
  },
  {
    category: "laptops",
    brand: "ASUS",
    name: "ROG ZEPHYRUS M16",
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    colors: [{ Night: "#171717" }],

    introduction:
      "In recent years, Asus has been very active and prolific in the field of producing electronics, especially laptops. The ROG Zephyrus M16 GU603ZM-B laptop is one of the Asus laptops that has a simple and beautiful design. This laptop is light in weight and easy to carry. This laptop weighs about 2.0 kg. This 16-inch laptop will offer you a screen with a resolution of 2560x1600. The manufacturer of the processor of this device is Intel, i9 series and its model will be 12900H. This laptop has 24 MB of cache memory. It has 16 GB of DDR5 RAM memory. The internal memory intended for this laptop will be one terabyte of SSD type. The manufacturer of the graphics processor of this laptop is Nvidia, and its model is GeForce RTX3060, and six GB of dedicated graphics memory is intended for it.",
    attributes: [
      { Processor: "Core i9" },
      { "RAM memory capacity": "16GB" },
      { "Type of RAM": "DDR5" },
      { "GPU manufacturer": "NVIDIA" },
      { "Screen size": "inches 16" },
      { "Screen resolution": "QHD | 2560x1600" },
      {
        Storage: "2TB",
      },
    ],
    price: 5300,
    discount: 25,

    rate: 4.9,
    image: "/images/laptop tiny/2.png",
  },
  {
    category: "laptops",
    brand: "Apple",
    name: "MacBook Air MGN63 2020",
    colors: [{ Gray: "#f6f6e1" }, { Midnight: "#171717" }],
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "Apple's Macbook series of laptops have been able to provide very good and acceptable performance by taking advantage of powerful technical specifications, without any additional definition. One of the powerful laptops of this series is the MacBook MK193 2021 model. This laptop is equipped with a 16.2-inch screen with a resolution of 2234 x 3456 pixels of the Liquid Retina XDR type, which has the ability to display 254 pixels per inch. We must say that according to the considered specifications, it has a powerful and very high-quality screen...",
    attributes: [
      { Processor: "M1" },
      { "RAM memory capacity": "16GB" },
      { "Type of RAM": "Unified" },
      { "GPU manufacturer": "Apple" },
      { "Screen size": "inches 13.3" },
      { "Screen resolution": "2560x1600" },
      {
        Storage: "512GB",
      },
    ],
    price: 1700,
    discount: 6,

    rate: 4.2,
    image: "/images/laptop tiny/3.png",
  },
  {
    category: "laptops",
    brand: "ASUS",
    name: "TUF Dash F15 FX516PM-HN181",
    colors: [{ black: "#171717" }, { Gray: "#6b7280" }],

    introduction:
      "In recent years, Asus has been very active and prolific in the field of producing electronics, especially laptops. The ROG Zephyrus M16 GU603ZM-B laptop is one of the Asus laptops that has a simple and beautiful design. This laptop is light in weight and easy to carry. This laptop weighs about 2.0 kg. This 16-inch laptop will offer you a screen with a resolution of 2560x1600. The manufacturer of the processor of this device is Intel, i9 series and its model will be 12900H. This laptop has 24 MB of cache memory. It has 16 GB of DDR5 RAM memory. The internal memory intended for this laptop will be one terabyte of SSD type. The manufacturer of the graphics processor of this laptop is Nvidia, and its model is GeForce RTX3060, and six GB of dedicated graphics memory is intended for it.",
    attributes: [
      { Processor: "Core i7" },
      { "RAM memory capacity": "16GB" },
      { "Type of RAM": "DDR5" },
      { "GPU manufacturer": "NVIDIA" },
      { "Screen size": "inches 15.6" },
      { "Screen resolution": "1920x1080" },
      {
        Storage: "1TB HDD | 512SSD",
      },
    ],
    price: 1850,
    discount: 7,
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    rate: 4.2,
    image: "/images/laptop tiny/4.png",
  },
  {
    category: "laptops",
    brand: "ASUS",
    name: "TUF Gaming F17 FX706HE-AA",
    colors: [{ Night: "#171717" }],
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "In recent years, Asus has been very active and prolific in the field of producing electronics, especially laptops. The ROG Zephyrus M16 GU603ZM-B laptop is one of the Asus laptops that has a simple and beautiful design. This laptop is light in weight and easy to carry. This laptop weighs about 2.0 kg. This 16-inch laptop will offer you a screen with a resolution of 2560x1600. The manufacturer of the processor of this device is Intel, i9 series and its model will be 12900H. This laptop has 24 MB of cache memory. It has 16 GB of DDR5 RAM memory. The internal memory intended for this laptop will be one terabyte of SSD type. The manufacturer of the graphics processor of this laptop is Nvidia, and its model is GeForce RTX3060, and six GB of dedicated graphics memory is intended for it.",

    attributes: [
      { Processor: "M1" },
      { "RAM memory capacity": "16GB" },
      { "Type of RAM": "Unified" },
      { "GPU manufacturer": "Apple" },
      { "Screen size": "inches 16.2" },
      { "Screen resolution": "3456x2234" },
      {
        Storage: "128GB",
      },
    ],
    price: 1350,
    discount: 15,
    offPrice: "84,880,000",
    rate: 3.8,
    image: "/images/laptop tiny/5.png",
  },
  {
    category: "laptops",
    brand: "Apple",
    name: "MacBook MKGP3 M1 Pro 2021",
    colors: [{ Gray: "#f4f4f5" }, { Black: "#171717" }],
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "Apple's Macbook series of laptops have been able to provide very good and acceptable performance by taking advantage of powerful technical specifications, without any additional definition. One of the powerful laptops of this series is the MacBook MK193 2021 model. This laptop is equipped with a 16.2-inch screen with a resolution of 2234 x 3456 pixels of the Liquid Retina XDR type, which has the ability to display 254 pixels per inch. We must say that according to the considered specifications, it has a powerful and very high-quality screen...",
    attributes: [
      { Processor: "M1" },
      { "RAM memory capacity": "16GB" },
      { "Type of RAM": "Unified" },
      { "GPU manufacturer": "Apple" },
      { "Screen size": "inches 14.2" },
      { "Screen resolution": "3024x1964" },
      {
        Storage: "128GB",
      },
    ],
    price: 1830,
    discount: 10,

    rate: 4.1,
    image: "/images/laptop tiny/6.png",
  },
  {
    category: "laptops",
    brand: "Acer",
    name: "Aspire5 a514-54",
    colors: [{ Gray: "#f4f4f5" }, { Black: "#171717" }],
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "Acer mid-range laptops have many fans in the world. One of the mid-range products of this brand is Aspire5 a514-54. Aspire5 a514-54 with a 14-inch IPS display provides users with desirable features as a laptop at an affordable price. Acer has used an 11th generation Intel i5-1135G7 processor for this model, which provides relatively good processing power. The presence of an 8 GB DDR4 RAM memory will increase the speed of running programs. Also, 1 TB of hard disk memory along with 256 GB of SSD PCI Express (Solid State Drive) memory will provide optimal storage space. The ideal dimensions and weight of this model make it easy to move and transport it.",
    attributes: [
      { Processor: "Core i5" },
      { "RAM memory capacity": "8GB" },
      { "Type of RAM": "DDR4" },
      { "GPU manufacturer": "NVIDIA" },
      { "Screen size": "inches 14" },
      { "Screen resolution": "1920x1080" },
      {
        Storage: "1TB HDD",
      },
    ],
    price: 1200,
    discount: 18,

    rate: 3.5,
    image: "/images/laptop tiny/7.png",
  },

  {
    category: "mobiles",
    brand: "Apple",
    name: "iPhone 14 Pro Max",
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "This phone is activated. The iPhone 14 mobile phone is the new flagship of the Apple company, which has been launched with several new features and a dual camera. Apple has used the same formula for the features and overall design of this phone for the last few years. The iPhone 13 display is equipped with a Super Retina panel to provide very good images to the user. This display has a very high resolution; So that in its size of 6.1 inches, it has about 460 pixels per inch. It is possible to charge the battery wirelessly in this phone. The ceramic coating of the screen of this phone can create a revolution in protection. This phone is waterproof and dustproof. The beautiful body of iPhone 13 is very resistant to scratches; So rest assured that water and dust will not easily affect the iPhone 13. In addition, stains and grease do not have much effect on this high-quality screen. Face recognition using the front camera is another feature used in the new Apple iPhone. The ability to connect to 4G and 5G networks, Bluetooth version 5, version 15 of iOS are other features of this phone. In terms of hardware, this phone uses the new A15 chip, which has 15 billion transistors, which has good heat control, so that it can support the new virtual reality capabilities that Apple is focusing on these days, in addition to the usual tasks. According to Apple itself, this phone is 50 times faster than its 12th version. The processor has a new modular which has reduced the battery consumption much lower and you have a higher battery life. The quality of your display on iPhone 13 has 120 Hz and you will see high brightness. In this series of iPhones, Apple has placed a graphics processor that is 30% faster than the 12 series of its phones. Some of the iPhones entered in the Iranian market are of the active type, and this model is also of the active type. Due to the embargo conditions and to prevent the phone from being deactivated, this model has been imported from East Asian countries such as Hong Kong and Singapore. In this way, the phone is turned on for a few moments and sealed again so that there is no problem for import and use in Iran.",
    attributes: [
      { Camera: "12 MP" },
      { RAM: "16GB" },
      { "Operating System": "iOS 16" },
      { "GPU manufacturer": "Apple" },
      { "Screen size": "inches 6.2" },
      { "Screen resolution": "1170x2532" },
      {
        Storage: "512GB",
      },
    ],
    colors: [
      { "Deep Purple": "#500585" },
      { "Space Black": "#06020d" },
      { Gold: "#f5f1a6" },
      { Silver: "#d1d1cf" },
    ],
    price: 4000,
    discount: 22,

    rate: 4.9,
    image: "/images/mobile tiny/14.png",
  },
  {
    category: "mobiles",
    brand: "Samsung",
    name: "Galaxy S20 FE 5G",
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "In our modern world, smart phones have become one of the members of our families and many of the things we do in our daily lives require their presence. With the advancement of technology, these phones have changes and improvements daily. Samsung is one of the big and well-known companies in the world, which produces phones with high popularity and support, and annually accounts for most of the sales in the market due to its quality. The Samsung Galaxy S20 FE SM-G780F/DS dual SIM mobile phone with a capacity of 128 GB is one of the high-quality phones of this brand that can meet all our needs such as web browsing, offline and online games, watching movies and clips, social networks, and working with applications. (software) and many more. It should be said that this phone is a flagship phone with all its features. One of the features of this phone is its battery. For the Galaxy S20 FE, a lithium-polymer battery with a capacity of 4500 mAh has been considered, so that you can work with the phone with ease. If you have this phone with 100% battery, you can use its full battery capacity in 1 or 3 days, and this depends on your usage. You can use this phone in a variety of high-quality ways in photography. The central processor (CPU) and graphics processor (GPU) of this phone have enough power that you can run daily online and offline games with a large graphic map and computational and operational programs. This phone has 128 GB of internal memory and 8 GB of RAM. The Samsung Galaxy S20 FE phone has a triple camera on the back of the phone, which has 12, 8 and 12 megapixel qualities, each of which has a different performance and use in your types of photography.",
    attributes: [
      { Camera: "48 MP" },
      { "RAM memory capacity": "16GB" },
      { "Operating System": "Android 10" },

      { "GPU manufacturer": "Adreno 650" },
      { "Screen size": "6.5 inches" },
      { "Screen resolution": "2400x1080" },
      {
        Storage: "256GB",
      },
    ],
    colors: [
      { "Blue Navy": "#0b1459" },
      { Mint: "#57ffa2" },
      { "Light Pink": "#f794c1" },
    ],
    price: 1200,
    discount: 4,

    rate: 4.5,
    image: "/images/mobile tiny/9.png",
  },
  {
    category: "mobiles",
    brand: "Apple",
    name: "iPhone11 Pro Max",
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "There is no doubt that the iPhone 11 Pro and 11 Pro Max are the popular and famous products of this year, and they have attracted almost all the attention of users and enthusiasts in the world of information technology. But the fact that iPhone 11 is worth buying cannot be ignored. You might imagine that with the lower price of the iPhone 11 compared to its other brothers, many features have been neglected, but in practice, this is not the case at all; Not all Apple fans need a high-quality screen, a slightly stronger battery and the possibility of optical zoom. So if you also want to have Apple's  iPhone and don't want to spend a lot of money, follow this brief review of Apple iPhone 11",
    attributes: [
      { Camera: "12 MP" },
      { RAM: "16GB" },
      { "Operating System": "iOS 14" },
      { "GPU manufacturer": "Apple" },
      { "Screen size": "inches 6.2" },
      { "Screen resolution": "1170x2532" },
      {
        Storage: "256GB",
      },
    ],
    colors: [
      { Lime: "#e4f794" },
      { "Space Black": "#06020d" },
      { Gold: "#ebd22f" },
      { Silver: "#d1d1cf" },
    ],

    price: 1100,
    discount: 3,

    rate: 4.2,
    image: "/images/mobile tiny/2.png",
  },
  {
    category: "mobiles",
    brand: "Samsung",
    name: "Galaxy A23 128GB",
    colors: [
      { Sky: "#59d8f7" },
      { Black: "#000203" },
      { Green: "#38ff3f" },
      { Silver: "#d1d1cf" },
    ],
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "One of the mid-range and powerful Samsung A series smartphones is the Samsung Galaxy A23, which is equipped with suitable and acceptable technical specifications for a mid-range smartphone. This phone uses a 6.6-inch PLS screen with a resolution of 1080 x 2408 pixels. A screen capable of displaying 400 pixels per inch and a refresh rate of 90 Hz. For the selfie camera, a sensor with a resolution of 8 megapixels is considered. A powerful main drone sensor with a resolution of 50 megapixels of the wide type, next to an ultrawide 5 megapixel sensor and two sensors with a resolution of 2 megapixels of the macro type and depth measurement, make up the quadruple drone sensors of this mid-range phone. The presence of an octa-core processor with the ability to provide a maximum working frequency of 1.9 GHz has made the Samsung Galaxy A23 capable of providing suitable and acceptable performance in running games and popular applications.",
    attributes: [
      { Camera: "24 MP" },
      { "RAM memory capacity": "8GB" },
      { "Operating System": "Android 9" },

      { "GPU manufacturer": "Adreno 450" },
      { "Screen size": "6.5 inches" },
      { "Screen resolution": "2400x1080" },
      {
        Storage: "128GB",
      },
    ],

    price: 960,
    discount: 9,

    rate: 4.1,
    image: "/images/mobile tiny/3.png",
  },
  {
    category: "mobiles",
    brand: "Huawei",

    name: "Huawei NOVA 9 NAM-LX9 128GB",
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "The nova series of Huawei smartphones have been able to show a very acceptable performance by using the appropriate technical specifications. One of the very high-quality smartphones of this series is the nova 9, which without any additional definition is equipped with powerful technical specifications. The very beautiful design intended for this smartphone tells you at the first glance that you are dealing with a powerful smartphone. In the front view, this phone is equipped with a 6.57-inch screen with a resolution of 1080 x 2340 pixels of the old type, which is also capable of providing a 120 Hz refresh rate. On the back of this phone, we see four camera sensors, a main camera sensor with a resolution of 50 megapixels and a wide-angle lens with an aperture of f/1. 9 along with an 8 megapixel ultrawide sensor and two 2 megapixel depth and macro sensors make up the nova 9's quad camera sensors. For the selfie camera, a powerful sensor with a resolution of 32 megapixels is considered. In terms of hardware specifications, Huawei did not leave anything short for this smartphone and the powerful Snapdragon 778G 4G processor with 6nm architecture is considered. Using such a processor means that you will have no problem playing heavy and up-to-date games. A 4300 mAh battery along with a powerful 66 W charger is one of the other features considered for this smartphone. It should be noted that the powerful 66 W charger intended for Huawei Nova 9 has the ability to charge the battery from 0 to 100 percent in a short period of 38 minutes.",
    attributes: [
      { Camera: "36 MP" },
      { "RAM memory capacity": "8GB" },
      { "Operating System": "Android 9" },

      { "GPU manufacturer": "Adreno 642L" },
      { "Screen size": "6.5 inches" },
      { "Screen resolution": "2400x1080" },
      {
        Storage: "128GB",
      },
    ],
    colors: [{ Sky: "#59d8f7" }, { Black: "#000203" }],

    price: 1100,
    discount: 12,

    rate: 3.8,
    image: "/images/mobile tiny/4.png",
  },
  {
    category: "mobiles",
    brand: "Apple",
    name: "iPhone11 Pro Max 256GB",
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "There is no doubt that the iPhone 11 Pro and 11 Pro Max are the popular and famous products of this year, and they have attracted almost all the attention of users and enthusiasts in the world of information technology. But the fact that iPhone 11 is worth buying cannot be ignored. You might imagine that with the lower price of the iPhone 11 compared to its other brothers, many features have been neglected, but in practice, this is not the case at all; Not all Apple fans need a high-quality screen, a slightly stronger battery and the possibility of optical zoom. So if you also want to have Apple's  iPhone and don't want to spend a lot of money, follow this brief review of Apple iPhone 11",
    attributes: [
      { Camera: "12 MP" },
      { RAM: "8GB" },
      { "Operating System": "iOS 14" },
      { "GPU manufacturer": "Apple" },
      { "Screen size": "inches 6.2" },
      { "Screen resolution": "1170x2532" },
      {
        Storage: "256GB",
      },
    ],
    colors: [{ black: "#171717" }, { Gray: "#6b7280" }],
    price: 1070,
    discount: 12,

    rate: 4.1,
    image: "/images/mobile tiny/5.png",
  },
  {
    category: "mobiles",
    brand: "Apple",
    name: "iPhone13 Pro Max 256GB",

    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "There is no doubt that the iPhone 13 Pro and 13 Pro Max are the popular and famous products of this year, and they have attracted almost all the attention of users and enthusiasts in the world of information technology. But the fact that iPhone 13 is worth buying cannot be ignored. You might imagine that with the lower price of the iPhone 13 compared to its other brothers, many features have been neglected, but in practice, this is not the case at all; Not all Apple fans need a high-quality screen, a slightly stronger battery and the possibility of optical zoom. So if you also want to have Apple's  iPhone and don't want to spend a lot of money, follow this brief review of Apple iPhone 13",
    attributes: [
      { Camera: "12 MP" },
      { RAM: "16GB" },
      { "Operating System": "iOS 15" },
      { "GPU manufacturer": "Apple" },
      { "Screen size": "inches 6.2" },
      { "Screen resolution": "1170x2532" },
      {
        Storage: "256GB",
      },
    ],
    colors: [{ black: "#171717" }, { Gold: "#fcf186" }, { Gray: "#6b7280" }],
    price: 1150,
    discount: 0,

    rate: 4.6,
    image: "/images/mobile tiny/6.png",
  },
  {
    category: "mobiles",
    brand: "Huawei",

    name: "Huawei P40 PRO LMR-LX9 256GB",
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "The nova series of Huawei smartphones have been able to show a very acceptable performance by using the appropriate technical specifications. One of the very high-quality smartphones of this series is the nova 9, which without any additional definition is equipped with powerful technical specifications. The very beautiful design intended for this smartphone tells you at the first glance that you are dealing with a powerful smartphone. In the front view, this phone is equipped with a 6.57-inch screen with a resolution of 1080 x 2340 pixels of the old type, which is also capable of providing a 120 Hz refresh rate. On the back of this phone, we see four camera sensors, a main camera sensor with a resolution of 50 megapixels and a wide-angle lens with an aperture of f/1. 9 along with an 8 megapixel ultrawide sensor and two 2 megapixel depth and macro sensors make up the nova 9's quad camera sensors. For the selfie camera, a powerful sensor with a resolution of 32 megapixels is considered. In terms of hardware specifications, Huawei did not leave anything short for this smartphone and the powerful Snapdragon 778G 4G processor with 6nm architecture is considered. Using such a processor means that you will have no problem playing heavy and up-to-date games. A 4300 mAh battery along with a powerful 66 W charger is one of the other features considered for this smartphone. It should be noted that the powerful 66 W charger intended for Huawei Nova 9 has the ability to charge the battery from 0 to 100 percent in a short period of 38 minutes.",
    attributes: [
      { Camera: "62 MP" },
      { "RAM memory capacity": "12GB" },
      { "Operating System": "Android 10" },

      { "GPU manufacturer": "Adreno 850L" },
      { "Screen size": "6.5 inches" },
      { "Screen resolution": "2400x1080" },
      {
        Storage: "256GB",
      },
    ],
    colors: [{ Gold: "#fcf186" }, { Black: "#000203" }, { Gray: "#6b7280" }],

    price: 1250,
    discount: 13,

    rate: 4.5,
    image: "/images/mobile tiny/7.png",
  },
  {
    category: "mobiles",
    brand: "Apple",
    name: "iPhone13 Pro Max 512GB",

    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "There is no doubt that the iPhone 13 Pro and 13 Pro Max are the popular and famous products of this year, and they have attracted almost all the attention of users and enthusiasts in the world of information technology. But the fact that iPhone 13 is worth buying cannot be ignored. You might imagine that with the lower price of the iPhone 13 compared to its other brothers, many features have been neglected, but in practice, this is not the case at all; Not all Apple fans need a high-quality screen, a slightly stronger battery and the possibility of optical zoom. So if you also want to have Apple's  iPhone and don't want to spend a lot of money, follow this brief review of Apple iPhone 13",
    attributes: [
      { Camera: "12 MP" },
      { RAM: "16GB" },
      { "Operating System": "iOS 15" },
      { "GPU manufacturer": "Apple" },
      { "Screen size": "inches 6.2" },
      { "Screen resolution": "1170x2532" },
      {
        Storage: "512GB",
      },
    ],
    colors: [{ black: "#171717" }, { Green: "#235902" }, { Gray: "#6b7280" }],
    price: 1400,
    discount: 0,

    rate: 4.1,
    image: "/images/mobile tiny/8.png",
  },

  {
    category: "mobiles",
    brand: "Samsung",
    name: "Galaxy S22 5G 256GB ",
    colors: [
      { Orange: "#f7cfb7" },
      { Black: "#000203" },
      { White: "#ffffff" },
      { Silver: "#d1d1cf" },
    ],
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "One of the mid-range and powerful Samsung A series smartphones is the Samsung Galaxy A23, which is equipped with suitable and acceptable technical specifications for a mid-range smartphone. This phone uses a 6.6-inch PLS screen with a resolution of 1080 x 2408 pixels. A screen capable of displaying 400 pixels per inch and a refresh rate of 90 Hz. For the selfie camera, a sensor with a resolution of 8 megapixels is considered. A powerful main drone sensor with a resolution of 50 megapixels of the wide type, next to an ultrawide 5 megapixel sensor and two sensors with a resolution of 2 megapixels of the macro type and depth measurement, make up the quadruple drone sensors of this mid-range phone. The presence of an octa-core processor with the ability to provide a maximum working frequency of 1.9 GHz has made the Samsung Galaxy A23 capable of providing suitable and acceptable performance in running games and popular applications.",
    attributes: [
      { Camera: "24 MP" },
      { "RAM memory capacity": "8GB" },
      { "Operating System": "Android 10" },

      { "GPU manufacturer": "Adreno 600" },
      { "Screen size": "6.5 inches" },
      { "Screen resolution": "2400x1080" },
      {
        Storage: "256GB",
      },
    ],

    price: 1500,
    discount: 0,

    rate: 4.7,
    image: "/images/mobile tiny/1.png",
  },
  {
    category: "mobiles",
    brand: "Samsung",
    name: "Galaxy Note 20 5G 256GB ",
    colors: [
      { Tomato: "#c2020f" },
      { Black: "#000203" },
      { White: "#ffffff" },
      { Silver: "#d1d1cf" },
    ],
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "One of the mid-range and powerful Samsung A series smartphones is the Samsung Galaxy Note, which is equipped with suitable and acceptable technical specifications for a mid-range smartphone. This phone uses a 6.6-inch PLS screen with a resolution of 1080 x 2408 pixels. A screen capable of displaying 400 pixels per inch and a refresh rate of 90 Hz. For the selfie camera, a sensor with a resolution of 8 megapixels is considered. A powerful main drone sensor with a resolution of 50 megapixels of the wide type, next to an ultrawide 5 megapixel sensor and two sensors with a resolution of 2 megapixels of the macro type and depth measurement, make up the quadruple drone sensors of this mid-range phone. The presence of an octa-core processor with the ability to provide a maximum working frequency of 1.9 GHz has made the Samsung Galaxy A23 capable of providing suitable and acceptable performance in running games and popular applications.",
    attributes: [
      { Camera: "62 MP" },
      { "RAM memory capacity": "16GB" },
      { "Operating System": "Android 10" },

      { "GPU manufacturer": "Adreno 600" },
      { "Screen size": "8 inches" },
      { "Screen resolution": "2400x1080" },
      {
        Storage: "256GB",
      },
    ],

    price: 1600,
    discount: 0,

    rate: 4.5,
    image: "/images/mobile tiny/10.png",
  },
  {
    category: "mobiles",
    brand: "Huawei",

    name: "Huawei P50 5G 256GB",
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "The nova series of Huawei smartphones have been able to show a very acceptable performance by using the appropriate technical specifications. One of the very high-quality smartphones of this series is the nova 9, which without any additional definition is equipped with powerful technical specifications. The very beautiful design intended for this smartphone tells you at the first glance that you are dealing with a powerful smartphone. In the front view, this phone is equipped with a 6.57-inch screen with a resolution of 1080 x 2340 pixels of the old type, which is also capable of providing a 120 Hz refresh rate. On the back of this phone, we see four camera sensors, a main camera sensor with a resolution of 50 megapixels and a wide-angle lens with an aperture of f/1. 9 along with an 8 megapixel ultrawide sensor and two 2 megapixel depth and macro sensors make up the nova 9's quad camera sensors. For the selfie camera, a powerful sensor with a resolution of 32 megapixels is considered. In terms of hardware specifications, Huawei did not leave anything short for this smartphone and the powerful Snapdragon 778G 4G processor with 6nm architecture is considered. Using such a processor means that you will have no problem playing heavy and up-to-date games. A 4300 mAh battery along with a powerful 66 W charger is one of the other features considered for this smartphone. It should be noted that the powerful 66 W charger intended for Huawei Nova 9 has the ability to charge the battery from 0 to 100 percent in a short period of 38 minutes.",
    attributes: [
      { Camera: "62 MP" },
      { "RAM memory capacity": "16GB" },
      { "Operating System": "Android 10" },

      { "GPU manufacturer": "Adreno 850L" },
      { "Screen size": "6.5 inches" },
      { "Screen resolution": "2400x1080" },
      {
        Storage: "256GB",
      },
    ],
    colors: [{ Gold: "#fcf186" }, { Black: "#000203" }, { Gray: "#6b7280" }],

    price: 1250,
    discount: 13,

    rate:4.6,
    image: "/images/mobile tiny/11.png",
  },
  {
    category: "mobiles",
    brand: "Apple",
    name: "iPhone13  256GB",

    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "There is no doubt that the iPhone 13 Pro and 13 Pro Max are the popular and famous products of this year, and they have attracted almost all the attention of users and enthusiasts in the world of information technology. But the fact that iPhone 13 is worth buying cannot be ignored. You might imagine that with the lower price of the iPhone 13 compared to its other brothers, many features have been neglected, but in practice, this is not the case at all; Not all Apple fans need a high-quality screen, a slightly stronger battery and the possibility of optical zoom. So if you also want to have Apple's  iPhone and don't want to spend a lot of money, follow this brief review of Apple iPhone 13",
    attributes: [
      { Camera: "12 MP" },
      { RAM: "16GB" },
      { "Operating System": "iOS 15" },
      { "GPU manufacturer": "Apple" },
      { "Screen size": "inches 6.2" },
      { "Screen resolution": "1170x2532" },
      {
        Storage: "256GB",
      },
    ],
    colors: [
      { black: "#171717" },
      { "Blue Navy": "#130080" },
      { Gray: "#6b7280" },
    ],
    price: 1150,
    discount: 0,

    rate: 3,
    image: "/images/mobile tiny/12.png",
  },
  {
    category: "cases",
    brand: "MSI",
    name: "Msi Gamaing 4490",
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "The MAG Infinite 11TG desktop computer is designed by the famous MSI company for general, professional and even gaming work. The MAG Infinite 11TG case has dimensions of 210x450x488 mm and will not occupy much space. MSI has considered Intel H510 motherboard for this case. The internal processor of the case is selected from the Core i7-11700F model, whose base frequency is 2.5 GHz. Having 32 GB of RAM memory and NVIDIA GeForceRTX 3060 TI 2X graphics card, they announce a high-end system that runs games with good quality. For this case, MSI has considered a 1 TB hard drive of SSD type to provide you with a good execution speed. Also, the presence of high-speed and diverse ports will open your hands to transfer information",
    attributes: [
      { CPU: "INTEL Core i9-12650F" },
      { "RAM memory capacity": "32GB" },
      { "Type of RAM": "DDR5" },
      { "GPU manufacturer": "NVIDIA" },
      { "GPU Model": "GeForce RTX TI Ventus 2X 8GB" },
      { Weight: "10KG" },
      {
        Storage: "2TB SSD",
      },
    ],
    colors: [{ Silver: "#4b5563" }, { White: "#f4f4f5" }, { Black: "#171717" }],
    price: 4500,
    discount: 5,

    rate: 4.9,
    image: "/images/cases tiny/1.png",
  },
  {
    category: "cases",
    brand: "MSI",
    name: "Msi Gamaing 3389XS",
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "The MAG Infinite 11TG desktop computer is designed by the famous MSI company for general, professional and even gaming work. The MAG Infinite 11TG case has dimensions of 210x450x488 mm and will not occupy much space. MSI has considered Intel H510 motherboard for this case. The internal processor of the case is selected from the Core i7-11700F model, whose base frequency is 2.5 GHz. Having 32 GB of RAM memory and NVIDIA GeForceRTX 3060 TI 2X graphics card, they announce a high-end system that runs games with good quality. For this case, MSI has considered a 1 TB hard drive of SSD type to provide you with a good execution speed. Also, the presence of high-speed and diverse ports will open your hands to transfer information",
    attributes: [
      { CPU: "INTEL Core i7-12650F" },
      { "RAM memory capacity": "24GB" },
      { "Type of RAM": "DDR5" },
      { "GPU manufacturer": "NVIDIA" },
      { "GPU Model": "GeForce RTX TI Ventus 2X 8GB" },
      { Weight: "12KG" },
      {
        Storage: "1TB SSD",
      },
    ],
    colors: [{ Silver: "#4b5563" }, { White: "#f4f4f5" }, { Black: "#171717" }],
    price: 3800,
    discount: 0,
    rate: 4.8,
    image: "/images/cases tiny/2.png",
  },
  {
    category: "cases",
    brand: "ASUS",
    name: "ASUS X Series 15",
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "Asus ready or assembled case with suitable features for all daily and professional office work. It can also be said that this case is upgradeable. In fact, by upgrading your case and adding a graphics card, you can do your own heavy graphic projects. D500MA-710700049R case has Windows 10 Pro original, this case is assembled by Asus company and sold in Iran. This assembled case has a 1TB HDD and 128GB internal SSD memory. This case measures 16.20 x 29.13 x 35.50 cm and weighs 6 kg. The amount of RAM intended for this device is eight gigabytes of DDR4 type.  ",
    attributes: [
      { CPU: "INTEL Core i7-11450x" },
      { "RAM memory capacity": "24GB" },
      { "Type of RAM": "DDR4" },
      { "GPU manufacturer": "NVIDIA" },
      { "GPU Model": "GeForce RTX 1080 TI  6GB" },
      { Weight: "10KG" },
      {
        Storage: "2TB SSD",
      },
    ],
    colors: [{ Silver: "#4b5563" }, { White: "#f4f4f5" }, { Black: "#171717" }],
    price: 3750,
    discount: 0,

    rate: 4.5,
    image: "/images/cases tiny/3.png",
  },
  {
    category: "cases",
    brand: "MSI",
    name: "Msi Gamaing 2020",
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "The MAG Infinite 11TG desktop computer is designed by the famous MSI company for general, professional and even gaming work. The MAG Infinite 11TG case has dimensions of 210x450x488 mm and will not occupy much space. MSI has considered Intel H510 motherboard for this case. The internal processor of the case is selected from the Core i7-11700F model, whose base frequency is 2.5 GHz. Having 32 GB of RAM memory and NVIDIA GeForceRTX 3060 TI 2X graphics card, they announce a high-end system that runs games with good quality. For this case, MSI has considered a 1 TB hard drive of SSD type to provide you with a good execution speed. Also, the presence of high-speed and diverse ports will open your hands to transfer information",
    attributes: [
      { CPU: "INTEL Core i5-10650F" },
      { "RAM memory capacity": "24GB" },
      { "Type of RAM": "DDR4" },
      { "GPU manufacturer": "NVIDIA" },
      { "GPU Model": "GeForce RTX TI 1660Ti 6GB" },
      { Weight: "12KG" },
      {
        Storage: "1TB SSD",
      },
    ],
    colors: [{ Silver: "#4b5563" }, { White: "#f4f4f5" }, { Black: "#171717" }],
    price: 3200,
    discount: 14,

    rate: 4.8,
    image: "/images/cases tiny/4.png",
  },
  {
    category: "cases",
    brand: "ASUS",
    name: "ASUS Z Series",
    supports: ["One Year Warranty", "Free Delivery", "Originality"],
    introduction:
      "Asus ready or assembled case with suitable features for all daily and professional office work. It can also be said that this case is upgradeable. In fact, by upgrading your case and adding a graphics card, you can do your own heavy graphic projects. D500MA-710700049R case has Windows 10 Pro original, this case is assembled by Asus company and sold in Iran. This assembled case has a 1TB HDD and 128GB internal SSD memory. This case measures 16.20 x 29.13 x 35.50 cm and weighs 6 kg. The amount of RAM intended for this device is eight gigabytes of DDR4 type.  ",
    attributes: [
      { CPU: "INTEL Core i7-11450x" },
      { "RAM memory capacity": "24GB" },
      { "Type of RAM": "DDR4" },
      { "GPU manufacturer": "NVIDIA" },
      { "GPU Model": "GeForce RTX 1080 TI  6GB" },
      { Weight: "10KG" },
      {
        Storage: "2TB SSD",
      },
    ],
    colors: [{ Silver: "#4b5563" }, { White: "#f4f4f5" }, { Black: "#171717" }],
    price: 4000,
    discount: 5,

    rate: 3.9,
    image: "/images/cases tiny/5.png",
  },
];

export const users = [
  {
    name: "Ali Zargar",
    email: "mrzargar1995@gmail.com",
    password: bcrypt.hashSync("12345", 8),
    phoneNumber: "09353643914",
    isAdmin: true,
  },
  {
    name: "Test",
    email: "test@info.com",
    password: bcrypt.hashSync("12345678", 8),
    isAdmin: false,
    phoneNumber: "09193000000",
  },
];
