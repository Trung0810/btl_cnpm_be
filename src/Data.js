const attribute = {
  brand: ["all brand", "dior", "gucci", "adidas", "bitis", "nike", "puma"],
  category: ["all category", "boots", "running", "sport"],
  sort: [
    "no sort",
    "sort by price ascending",
    "sort by price descending",
    "sort by rate ascending",
    "sort by rate descending",
  ],
};

const feature = [
  "Premium Materials - Made from high-quality, breathable, and durable materials.",
  "Breathable Upper - Keeps your feet cool and fresh even during long hours of wear.",
  "Flexible Fit - Adapts naturally to your foot for better movement and comfort.",
  "Shock Absorption - Reduces impact and protects your feet while walking or running.",
  "Modern Design - Stylish and versatile, easy to match with any outfit.",
  "Lightweight Build - Designed to feel almost weightless for effortless steps.",
  "Durable & Non-slip Sole - Strong grip and long-lasting performance.",
  "Stylish Finish - Enhances your look with a sleek and trendy appearance.",
  "Long-lasting Quality - Crafted to maintain performance and shape over time.",
  "All-day Comfort - Lightweight and cushioned for maximum comfort all day long.",
];

const shoesData = [
  {
    name: "Men’s Dior Onyx Boots",
    brand: "dior",
    image: "/Men’s Dior Onyx Boots.png",
    type: "men",
    category: "boots",
    description:
      "Experience luxury with these premium Dior leather boots featuring a sleek onyx finish. Perfect for formal occasions and sophisticated evening wear.",
    price: 500000,
  },
  {
    name: "Men’s Dior Ranger Boots",
    brand: "dior",
    image: "/Men’s Dior Ranger Boots.png",
    type: "men",
    category: "boots",
    description:
      "Rugged yet refined, these ranger boots combine durability with Dior's signature style. Ideal for adventurers who appreciate fine craftsmanship.",
    price: 550000,
  },
  {
    name: "Men’s Dior Shadow Boots",
    brand: "dior",
    image: "/Men’s Dior Shadow Boots.png",
    type: "men",
    category: "boots",
    description:
      "Cast a shadow of elegance in these versatile Dior boots designed for modern gentlemen. Comfortable enough for daily wear yet stylish for any occasion.",
    price: 600000,
  },
  {
    name: "Men’s Dior Storm Boots",
    brand: "dior",
    image: "/Men’s Dior Storm Boots.png",
    type: "men",
    category: "boots",
    description:
      "Weatherproof and striking, storm boots stand up to any climate challenge. These Dior creations feature waterproof materials and reinforced sole construction.",
    price: 650000,
  },
  {
    name: "Men’s Dior Stride Boots",
    brand: "dior",
    image: "/Men’s Dior Stride Boots.png",
    type: "men",
    category: "boots",
    description:
      "Walk with confidence in ergonomically designed stride boots. The padded insole and flexible sole ensure all-day comfort without sacrificing style.",
    price: 700000,
  },
  {
    name: "Men’s Dior Summit Boots",
    brand: "dior",
    image: "/Men’s Dior Summit Boots.png",
    type: "men",
    category: "boots",
    description:
      "Reach new heights in these mountain-ready summit boots with exceptional grip and ankle support. Dior brings alpine performance to urban streets.",
    price: 750000,
  },
  {
    name: "Men’s Dior Titan Boots",
    brand: "dior",
    image: "/Men’s Dior Titan Boots.png",
    type: "men",
    category: "boots",
    description:
      "Powerful and imposing, titan boots showcase bold design elements and reinforced construction. Make a statement with these architectural masterpieces.",
    price: 800000,
  },
  {
    name: "Men’s Dior Urban Boots",
    brand: "dior",
    image: "/Men’s Dior Urban Boots.png",
    type: "men",
    category: "boots",
    description:
      "Navigate city life with style in these sleek urban boots that blend street fashion with luxury. Perfect for the modern commuter who values aesthetics.",
    price: 850000,
  },
  {
    name: "Men’s Gucci Apex Boots",
    brand: "gucci",
    image: "/Men’s Gucci Apex Boots.png",
    type: "men",
    category: "boots",
    description:
      "Reach the apex of fashion with Gucci's iconic GG emblems and intricate leather detailing. These boots are conversation-starting statement pieces.",
    price: 900000,
  },
  {
    name: "Men’s Gucci Classic Boots",
    brand: "gucci",
    image: "/Men’s Gucci Classic Boots.png",
    type: "men",
    category: "boots",
    description:
      "Timeless elegance meets everyday functionality in these classic Gucci boots. The perfect investment piece that works with any wardrobe.",
    price: 950000,
  },
  {
    name: "Men’s Gucci Drift Boots",
    brand: "gucci",
    image: "/Men’s Gucci Drift Boots.png",
    type: "men",
    category: "boots",
    description:
      "Drift through landscapes with superior comfort and traction in these exploratory boots. Designed for travelers who refuse to compromise on luxury.",
    price: 1000000,
  },
  {
    name: "Men’s Gucci Explorer Boots",
    brand: "gucci",
    image: "/Men’s Gucci Explorer Boots.png",
    type: "men",
    category: "boots",
    description:
      "Embark on adventures with these rugged explorer boots featuring exceptional grip technology. Gucci meets outdoor readiness in perfect harmony.",
    price: 400000,
  },
  {
    name: "Men’s Gucci Forge Boots",
    brand: "gucci",
    image: "/Men’s Gucci Forge Boots.png",
    type: "men",
    category: "boots",
    description:
      "Forged through meticulous craftsmanship, these boots represent the pinnacle of Italian shoemaking. Built to withstand decades of wear and still impress.",
    price: 450000,
  },
  {
    name: "Men’s Gucci Hunter Boots",
    brand: "gucci",
    image: "/Men’s Gucci Hunter Boots.png",
    type: "men",
    category: "boots",
    description:
      "Hunt for compliments in these boldly designed hunter boots with premium leather finish. Each pair tells a story of sophistication and heritage.",
    price: 500000,
  },
  {
    name: "Men’s Gucci Nomad Boots",
    brand: "gucci",
    image: "/Men’s Gucci Nomad Boots.png",
    type: "men",
    category: "boots",
    description:
      "Live the nomadic lifestyle without sacrificing luxury in these versatile travel boots. Pack them anywhere knowing they'll enhance any look.",
    price: 550000,
  },
  {
    name: "Men’s Gucci Valor Boots",
    brand: "gucci",
    image: "/Men’s Gucci Valor Boots.png",
    type: "men",
    category: "boots",
    description:
      "Display your valor in boots that command respect and admiration. Gucci's bold design philosophy shines through every stitch and seam.",
    price: 600000,
  },
  {
    name: "Men’s Adidas AeroStride Running Shoes",
    brand: "adidas",
    image: "/Men’s Adidas AeroStride Running Shoes.png",
    type: "men",
    category: "running",
    description:
      "Aerodynamic design meets superior cushioning in these high-performance running shoes. Achieve your personal best with every stride.",
    price: 650000,
  },
  {
    name: "Men’s Adidas BoostMax Running Shoes",
    brand: "adidas",
    image: "/Men’s Adidas BoostMax Running Shoes.png",
    type: "men",
    category: "running",
    description:
      "Maximum energy return technology propels you forward with explosive power. Feel the difference Adidas technology brings to every run.",
    price: 700000,
  },
  {
    name: "Men’s Adidas FlexCore Running Shoes",
    brand: "adidas",
    image: "/Men’s Adidas FlexCore Running Shoes.png",
    type: "men",
    category: "running",
    description:
      "Flexible support adapts to your unique running gait throughout the day. The responsive core technology ensures comfort mile after mile.",
    price: 750000,
  },
  {
    name: "Men’s Adidas LightDash Running Shoes",
    brand: "adidas",
    image: "/Men’s Adidas LightDash Running Shoes.png",
    type: "men",
    category: "running",
    description:
      "Sprint faster with minimal weight holding you back in these featherlight shoes. Lightweight construction doesn't mean sacrificing durability.",
    price: 800000,
  },
  {
    name: "Men’s Adidas PrimeRun Running Shoes",
    brand: "adidas",
    image: "/Men’s Adidas PrimeRun Running Shoes.png",
    type: "men",
    category: "running",
    description:
      "Prime your performance with Adidas's latest technology and premium materials. These shoes deliver the competitive edge you're seeking.",
    price: 850000,
  },
  {
    name: "Men’s Adidas RunFusion Running Shoes",
    brand: "adidas",
    image: "/Men’s Adidas RunFusion Running Shoes.png",
    type: "men",
    category: "running",
    description:
      "Fuse style with athletic performance in these sleek urban running shoes. Transition seamlessly from track to street without changing your feet.",
    price: 900000,
  },
  {
    name: "Men’s Adidas SpeedFlow Running Shoes",
    brand: "adidas",
    image: "/Men’s Adidas SpeedFlow Running Shoes.png",
    type: "men",
    category: "running",
    description:
      "Flow into your speed zone with streamlined design and responsive cushioning. These shoes help you find your rhythm and maintain it.",
    price: 950000,
  },
  {
    name: "Men’s Adidas UltraRun Running Shoes",
    brand: "adidas",
    image: "/Men’s Adidas UltraRun Running Shoes.png",
    type: "men",
    category: "running",
    description:
      "Go the ultra distance with superior support and cushioning built for marathons. Endurance athletes trust these shoes for their longest adventures.",
    price: 1000000,
  },
  {
    name: "Men’s Biti’s ActiveGo Running Shoes",
    brand: "bitis",
    image: "/Men’s Biti’s ActiveGo Running Shoes.png",
    type: "men",
    category: "running",
    description:
      "Stay active with breathable mesh and responsive soles designed for movement. Biti’s commitment to comfort shows in every design detail.",
    price: 400000,
  },
  {
    name: "Men’s Biti’s DynamicRun Running Shoes",
    brand: "bitis",
    image: "/Men’s Biti’s DynamicRun Running Shoes.png",
    type: "men",
    category: "running",
    description:
      "Dynamic stability supports quick direction changes and varied terrains. These versatile shoes adapt to any running situation you encounter.",
    price: 450000,
  },
  {
    name: "Men’s Biti’s EnergyRun Running Shoes",
    brand: "bitis",
    image: "/Men’s Biti’s EnergyRun Running Shoes.png",
    type: "men",
    category: "running",
    description:
      "Energize your workout with spring-like cushioning that returns energy with each step. Feel motivated and powerful throughout your entire run.",
    price: 500000,
  },
  {
    name: "Men’s Biti’s FastTrack Running Shoes",
    brand: "bitis",
    image: "/Men’s Biti’s FastTrack Running Shoes.png",
    type: "men",
    category: "running",
    description:
      "Get on the fast track to your goals with lightweight, aerodynamic design. Competition runners consistently choose Biti’s for speed and agility.",
    price: 550000,
  },
  {
    name: "Men’s Biti’s MotionFit Running Shoes",
    brand: "bitis",
    image: "/Men’s Biti’s MotionFit Running Shoes.png",
    type: "men",
    category: "running",
    description:
      "Personalized fit technology molds to your unique foot shape for maximum comfort. Never experience blisters or hot spots with MotionFit technology.",
    price: 600000,
  },
  {
    name: "Men’s Biti’s PowerRun Running Shoes",
    brand: "bitis",
    image: "/Men’s Biti’s PowerRun Running Shoes.png",
    type: "men",
    category: "running",
    description:
      "Power through intense training sessions with reinforced heel support and stable platform. These shoes handle demanding workouts without complaint.",
    price: 650000,
  },
  {
    name: "Men’s Biti’s SpeedRun Running Shoes",
    brand: "bitis",
    image: "/Men’s Biti’s SpeedRun Running Shoes.png",
    type: "men",
    category: "running",
    description:
      "Achieve new personal records with lightweight construction and aerodynamic design. Biti’s pushes the boundaries of speed innovation.",
    price: 700000,
  },
  {
    name: "Men’s Biti’s TurboStep Running Shoes",
    brand: "bitis",
    image: "/Men’s Biti’s TurboStep Running Shoes.png",
    type: "men",
    category: "running",
    description:
      "Turbo charge your steps with explosive energy-returning technology. Experience propulsive power that keeps you engaged mile after mile.",
    price: 750000,
  },
  {
    name: "Men’s Nike AirStrike Sport Shoes",
    brand: "nike",
    image: "/Men’s Nike AirStrike Sport Shoes.png",
    type: "men",
    category: "sport",
    description:
      "Strike with precision using Nike's legendary Air cushioning technology. Dominate any sport with superior comfort and ankle support.",
    price: 800000,
  },
  {
    name: "Men’s Nike FlyStrike Sport Shoes",
    brand: "nike",
    image: "/Men’s Nike FlyStrike Sport Shoes.png",
    type: "men",
    category: "sport",
    description:
      "Fly across the court with quick-cut technology providing exceptional lateral support. Your opponents won't know what hit them.",
    price: 850000,
  },
  {
    name: "Men’s Nike ForceMax Sport Shoes",
    brand: "nike",
    image: "/Men’s Nike ForceMax Sport Shoes.png",
    type: "men",
    category: "sport",
    description:
      "Maximize your power output on the field with reinforced frame and impact absorption. Nike engineering meets athletic performance perfectly.",
    price: 900000,
  },
  {
    name: "Men’s Nike HyperMove Sport Shoes",
    brand: "nike",
    image: "/Men’s Nike HyperMove Sport Shoes.png",
    type: "men",
    category: "sport",
    description:
      "Pivot and cut with hypersensitive ground reaction in these responsive shoes. Your feet will thank you for the revolutionary comfort technology.",
    price: 950000,
  },
  {
    name: "Men’s Nike PowerFlex Sport Shoes",
    brand: "nike",
    image: "/Men’s Nike PowerFlex Sport Shoes.png",
    type: "men",
    category: "sport",
    description:
      "Flex your power with adaptive material that moves with your natural gait. Natural foot motion means better performance and fewer injuries.",
    price: 1000000,
  },
  {
    name: "Men’s Nike ProMotion Sport Shoes",
    brand: "nike",
    image: "/Men’s Nike ProMotion Sport Shoes.png",
    type: "men",
    category: "sport",
    description:
      "Professional athletes choose these pro-grade shoes for championship moments. Engineered precision meets proven on-court performance.",
    price: 400000,
  },
  {
    name: "Men’s Nike ReactEdge Sport Shoes",
    brand: "nike",
    image: "/Men’s Nike ReactEdge Sport Shoes.png",
    type: "men",
    category: "sport",
    description:
      "React instantly to every challenge with instantly responsive cushioning technology. Edge athletes gain competitive advantage in these specialized shoes.",
    price: 450000,
  },
  {
    name: "Men’s Nike ZoomCore Sport Shoes",
    brand: "nike",
    image: "/Men’s Nike ZoomCore Sport Shoes.png",
    type: "men",
    category: "sport",
    description:
      "Core stability starts from the ground up with Zoom cushioning at center. These shoes keep you balanced when performance matters most.",
    price: 500000,
  },
  {
    name: "Men’s Puma AeroBoost Sport Shoes",
    brand: "puma",
    image: "/Men’s Puma AeroBoost Sport Shoes.png",
    type: "men",
    category: "sport",
    description:
      "Aerodynamic design combined with explosive cushioning boosts your athleticism. Puma brings feline agility to every movement you make.",
    price: 550000,
  },
  {
    name: "Men’s Puma FlexDrive Sport Shoes",
    brand: "puma",
    image: "/Men’s Puma FlexDrive Sport Shoes.png",
    type: "men",
    category: "sport",
    description:
      "Drive your performance with outstanding flexibility and adaptive support. Multi-sport athletes appreciate the versatile comfort these shoes provide.",
    price: 600000,
  },
  {
    name: "Men’s Puma MotionX Sport Shoes",
    brand: "puma",
    image: "/Men’s Puma MotionX Sport Shoes.png",
    type: "men",
    category: "sport",
    description:
      "Experience motion excellence with biomechanically engineered precision. Every curve supports natural athletic movement patterns.",
    price: 650000,
  },
  {
    name: "Men’s Puma NitroEdge Sport Shoes",
    brand: "puma",
    image: "/Men’s Puma NitroEdge Sport Shoes.png",
    type: "men",
    category: "sport",
    description:
      "Edge past the competition with Nitro-infused foam technology. Explosive energy return helps athletes reach peak performance levels.",
    price: 700000,
  },
  {
    name: "Men’s Puma PowerStride Sport Shoes",
    brand: "puma",
    image: "/Men’s Puma PowerStride Sport Shoes.png",
    type: "men",
    category: "sport",
    description:
      "Stride with power and authority in these specifically engineered sport shoes. Puma's commitment to athlete success shows in every detail.",
    price: 750000,
  },
  {
    name: "Men’s Puma SpeedZone Sport Shoes",
    brand: "puma",
    image: "/Men’s Puma SpeedZone Sport Shoes.png",
    type: "men",
    category: "sport",
    description:
      "Enter the speed zone where velocity meets strategy and precision. These shoes develop athletes into competitors worthy of championship podiums.",
    price: 800000,
  },
  {
    name: "Men’s Puma SwiftEdge Sport Shoes",
    brand: "puma",
    image: "/Men’s Puma SwiftEdge Sport Shoes.png",
    type: "men",
    category: "sport",
    description:
      "Swift, edgy, and built for modern athletes who demand cutting-edge technology. Puma combines speed with style in these exceptional shoes.",
    price: 850000,
  },
  {
    name: "Men’s Puma TurboFlex Sport Shoes",
    brand: "puma",
    image: "/Men’s Puma TurboFlex Sport Shoes.png",
    type: "men",
    category: "sport",
    description:
      "Turbo-charge your agility with flex-friendly materials and quick-response cushioning. Perfect for athletes who need extreme mobility.",
    price: 900000,
  },
  {
    name: "Women’s Dior Blossom Boots",
    brand: "dior",
    image: "/Women’s Dior Blossom Boots.png",
    type: "women",
    category: "boots",
    description:
      "Bloom into style with delicate floral patterns adorning these elegant boots. Feminine details combine with comfortable padding for all-day wear.",
    price: 950000,
  },
  {
    name: "Women’s Dior Breeze Boots",
    brand: "dior",
    image: "/Women’s Dior Breeze Boots.png",
    type: "women",
    category: "boots",
    description:
      "Feel the gentle breeze in lightweight, airy boots perfect for transitional seasons. Breathable materials keep your feet comfortable throughout the day.",
    price: 1000000,
  },
  {
    name: "Women’s Dior Chic Boots",
    brand: "dior",
    image: "/Women’s Dior Chic Boots.png",
    type: "women",
    category: "boots",
    description:
      "Exude sophistication with these chicly designed boots featuring premium materials. Perfect for elevating any outfit from casual to formal.",
    price: 400000,
  },
  {
    name: "Women’s Dior Classic Boots",
    brand: "dior",
    image: "/Women’s Dior Classic Boots.png",
    type: "women",
    category: "boots",
    description:
      "Enduring elegance never fades with these timeless classic boots. The perfect investment piece that works across decades of fashion trends.",
    price: 450000,
  },
  {
    name: "Women’s Dior Clover Boots",
    brand: "dior",
    image: "/Women’s Dior Clover Boots.png",
    type: "women",
    category: "boots",
    description:
      "Luck smiles on those wearing these charming clover-adorned boots. Combine good fortune with exceptional comfort in one stylish package.",
    price: 500000,
  },
  {
    name: "Women’s Dior Elegant Boots",
    brand: "dior",
    image: "/Women’s Dior Elegant Boots.png",
    type: "women",
    category: "boots",
    description:
      "Step into grace with elegant boots designed to enhance your natural poise. Refined details and premium construction announce sophistication.",
    price: 550000,
  },
  {
    name: "Women’s Dior Fable Boots",
    brand: "dior",
    image: "/Women’s Dior Fable Boots.png",
    type: "women",
    category: "boots",
    description:
      "Write your own fairy tale wearing these enchanting fable-inspired boots. Magical design elements spark imagination and delight.",
    price: 600000,
  },
  {
    name: "Women’s Dior Grace Boots",
    brand: "dior",
    image: "/Women’s Dior Grace Boots.png",
    type: "women",
    category: "boots",
    description:
      "Move through life with fluid grace in these beautifully crafted boots. Every step emphasizes poise, elegance, and quiet confidence.",
    price: 650000,
  },
  {
    name: "Women’s Gucci Halo Boots",
    brand: "gucci",
    image: "/Women’s Gucci Halo Boots.png",
    type: "women",
    category: "boots",
    description:
      "Radiate celestial beauty with luminous details on these heavenly boots. Comfort and style create an angelic combination.",
    price: 700000,
  },
  {
    name: "Women’s Gucci Luna Boots",
    brand: "gucci",
    image: "/Women’s Gucci Luna Boots.png",
    type: "women",
    category: "boots",
    description:
      "Connect with lunar mystique in these dreamy boots perfect for nighttime adventures. Celestial inspiration meets practical comfort design.",
    price: 750000,
  },
  {
    name: "Women’s Gucci Mirage Boots",
    brand: "gucci",
    image: "/Women’s Gucci Mirage Boots.png",
    type: "women",
    category: "boots",
    description:
      "Chase illusions in boots blending fantasy with practicality beautifully. Optical effects and soft cushioning create visual and physical comfort.",
    price: 800000,
  },
  {
    name: "Women’s Gucci Prism Boots",
    brand: "gucci",
    image: "/Women’s Gucci Prism Boots.png",
    type: "women",
    category: "boots",
    description:
      "Refract style into a spectrum of vibrant colors with prism boots. Bright, bold designs add joy and energy to every step.",
    price: 850000,
  },
  {
    name: "Women’s Gucci Urban Boots",
    brand: "gucci",
    image: "/Women’s Gucci Urban Boots.png",
    type: "women",
    category: "boots",
    description:
      "Conquer the city streets with durable urban boots combining fashion and function. Modern design meets practical construction perfectly.",
    price: 900000,
  },
  {
    name: "Women’s Gucci Velvet Boots",
    brand: "gucci",
    image: "/Women’s Gucci Velvet Boots.png",
    type: "women",
    category: "boots",
    description:
      "Indulge in luxurious softness with plush velvet boots perfect for special occasions. Premium materials deliver tactile comfort and elegance.",
    price: 950000,
  },
  {
    name: "Women’s Gucci Vivid Boots",
    brand: "gucci",
    image: "/Women’s Gucci Vivid Boots.png",
    type: "women",
    category: "boots",
    description:
      "Bring vibrant energy to your wardrobe with bold, striking vivid boots. Brighten your days with colors that capture attention.",
    price: 1000000,
  },
  {
    name: "Women’s Gucci Willow Boots",
    brand: "gucci",
    image: "/Women’s Gucci Willow Boots.png",
    type: "women",
    category: "boots",
    description:
      "Sway gracefully like willow trees in nature-inspired flexible boots. Organic beauty combines with surprising durability and comfort.",
    price: 400000,
  },
  {
    name: "Women’s Adidas AirLite Running Shoes",
    brand: "adidas",
    image: "/Women’s Adidas AirLite Running Shoes.png",
    type: "women",
    category: "running",
    description:
      "Light as air, these Adidas running shoes reduce foot fatigue significantly. Engineered specifically for Women’s body proportions and gait.",
    price: 450000,
  },
  {
    name: "Women’s Adidas CloudStep Running Shoes",
    brand: "adidas",
    image: "/Women’s Adidas CloudStep Running Shoes.png",
    type: "women",
    category: "running",
    description:
      "Step on clouds of cushioning with every stride in these ultra-soft shoes. Runners describe them as walking on pure comfort.",
    price: 500000,
  },
  {
    name: "Women’s Adidas FlexRide Running Shoes",
    brand: "adidas",
    image: "/Women’s Adidas FlexRide Running Shoes.png",
    type: "women",
    category: "running",
    description:
      "Adaptive support flexes with your unique Women’s running gait pattern. Personalized comfort technology adjusts throughout your workout.",
    price: 550000,
  },
  {
    name: "Women’s Adidas GlowRun Running Shoes",
    brand: "adidas",
    image: "/Women’s Adidas GlowRun Running Shoes.png",
    type: "women",
    category: "running",
    description:
      "Glow on twilight running paths with reflective elements keeping you visible. Safety meets style in these thoughtfully designed shoes.",
    price: 600000,
  },
  {
    name: "Women’s Adidas NovaRun Running Shoes",
    brand: "adidas",
    image: "/Women’s Adidas NovaRun Running Shoes.png",
    type: "women",
    category: "running",
    description:
      "Explore new running frontiers with innovative tech designed for women. Adidas combines research with practical performance benefits.",
    price: 650000,
  },
  {
    name: "Women’s Adidas PulseRide Running Shoes",
    brand: "adidas",
    image: "/Women’s Adidas PulseRide Running Shoes.png",
    type: "women",
    category: "running",
    description:
      "Feel your rhythm pulse through responsive cushioning with every step. These shoes sync naturally with your running cadence and style.",
    price: 700000,
  },
  {
    name: "Women’s Adidas PureMove Running Shoes",
    brand: "adidas",
    image: "/Women’s Adidas PureMove Running Shoes.png",
    type: "women",
    category: "running",
    description:
      "Experience pure, natural running motion with minimalist shoe design. Less interference means better proprioception and performance.",
    price: 750000,
  },
  {
    name: "Women’s Adidas SwiftFlow Running Shoes",
    brand: "adidas",
    image: "/Women’s Adidas SwiftFlow Running Shoes.png",
    type: "women",
    category: "running",
    description:
      "Flow swiftly through your training with streamlined design for speed. Fast-paced female athletes consistently choose these shoes.",
    price: 800000,
  },
  {
    name: "Women’s Biti’s EasyRun Running Shoes",
    brand: "bitis",
    image: "/Women’s Biti’s EasyRun Running Shoes.png",
    type: "women",
    category: "running",
    description:
      "Make running effortless with intuitive comfort features throughout the shoe. Biti’s tailors every element specifically for women runners.",
    price: 850000,
  },
  {
    name: "Women’s Biti’s FlowRun Running Shoes",
    brand: "bitis",
    image: "/Women’s Biti’s FlowRun Running Shoes.png",
    type: "women",
    category: "running",
    description:
      "Flow seamlessly through your workout with fluid cushioning technology. Biti’s design philosophy emphasizes smooth, uninterrupted motion.",
    price: 900000,
  },
  {
    name: "Women’s Biti’s FreeRun Running Shoes",
    brand: "bitis",
    image: "/Women’s Biti’s FreeRun Running Shoes.png",
    type: "women",
    category: "running",
    description:
      "Run freely with minimal constraints in these liberation-focused shoes. Natural movement encourages faster, more efficient running patterns.",
    price: 950000,
  },
  {
    name: "Women’s Biti’s FreshStep Running Shoes",
    brand: "bitis",
    image: "/Women’s Biti’s FreshStep Running Shoes.png",
    type: "women",
    category: "running",
    description:
      "Stay fresh throughout long runs with odor-resistant materials throughout. Biti’s technology keeps your feet comfortable and clean.",
    price: 1000000,
  },
  {
    name: "Women’s Biti’s HappyStep Running Shoes",
    brand: "bitis",
    image: "/Women’s Biti’s HappyStep Running Shoes.png",
    type: "women",
    category: "running",
    description:
      "Step happily toward your goals with bright, mood-boosting designs. Joyful cushioning and vibrant colors make running pure pleasure.",
    price: 400000,
  },
  {
    name: "Women’s Biti’s LightRun Running Shoes",
    brand: "bitis",
    image: "/Women’s Biti’s LightRun Running Shoes.png",
    type: "women",
    category: "running",
    description:
      "Reduce fatigue dramatically with ultralight shoe construction for women. Peso reduction means speed improvement in measurable ways.",
    price: 450000,
  },
  {
    name: "Women’s Biti’s ShineStep Running Shoes",
    brand: "bitis",
    image: "/Women’s Biti’s ShineStep Running Shoes.png",
    type: "women",
    category: "running",
    description:
      "Shine brightly with reflective accents and supportive fit for confidence. Run boldly knowing you're protected and highly visible.",
    price: 500000,
  },
  {
    name: "Women’s Biti’s SoftMove Running Shoes",
    brand: "bitis",
    image: "/Women’s Biti’s SoftMove Running Shoes.png",
    type: "women",
    category: "running",
    description:
      "Move gently on your feet with plush cushioning throughout the shoe. Daily jogs become cozy experiences rather than endurance tests.",
    price: 550000,
  },
  {
    name: "Women’s Nike ActiveCharm Sport Shoes",
    brand: "nike",
    image: "/Women’s Nike ActiveCharm Sport Shoes.png",
    type: "women",
    category: "sport",
    description:
      "Charm everyone at the gym with functional style in these active shoes. Nike blends aesthetics with serious athletic capability.",
    price: 600000,
  },
  {
    name: "Women’s Nike AirGlow Sport Shoes",
    brand: "nike",
    image: "/Women’s Nike AirGlow Sport Shoes.png",
    type: "women",
    category: "sport",
    description:
      "Glow with confidence in these illuminating sport shoes featuring Air technology. Be a beacon of athletic excellence on the field.",
    price: 650000,
  },
  {
    name: "Women’s Nike FlexAura Sport Shoes",
    brand: "nike",
    image: "/Women’s Nike FlexAura Sport Shoes.png",
    type: "women",
    category: "sport",
    description:
      "Flex your aura with empowering sport shoes supporting dynamic movement. Nike celebrates the female athlete in every design element.",
    price: 700000,
  },
  {
    name: "Women’s Nike FlyElegance Sport Shoes",
    brand: "nike",
    image: "/Women’s Nike FlyElegance Sport Shoes.png",
    type: "women",
    category: "sport",
    description:
      "Combine grace with athletic prowess in these sophisticatedly designed shoes. Perfect for women who refuse to sacrifice style for performance.",
    price: 750000,
  },
  {
    name: "Women’s Nike LightVibe Sport Shoes",
    brand: "nike",
    image: "/Women’s Nike LightVibe Sport Shoes.png",
    type: "women",
    category: "sport",
    description:
      "Vibrate with positive energy in lightweight sport shoes. Reduced weight translates to enhanced agility and sustained performance.",
    price: 800000,
  },
  {
    name: "Women’s Nike PureMotion Sport Shoes",
    brand: "nike",
    image: "/Women’s Nike PureMotion Sport Shoes.png",
    type: "women",
    category: "sport",
    description:
      "Experience pure, responsive motion in these athletically engineered shoes. Nike's focus on natural movement shows in every squat and sprint.",
    price: 850000,
  },
  {
    name: "Women’s Nike SwiftMuse Sport Shoes",
    brand: "nike",
    image: "/Women’s Nike SwiftMuse Sport Shoes.png",
    type: "women",
    category: "sport",
    description:
      "Let your muse inspire swift athletic achievement in these creative shoes. Design and performance merge beautifully in female sport footwear.",
    price: 900000,
  },
  {
    name: "Women’s Nike ZoomBliss Sport Shoes",
    brand: "nike",
    image: "/Women’s Nike ZoomBliss Sport Shoes.png",
    type: "women",
    category: "sport",
    description:
      "Zoom into blissful athletic experiences with cushioning and Zoom technology. Maximum comfort meets maximum athletic performance.",
    price: 950000,
  },
  {
    name: "Women’s Puma ActiveLuxe Sport Shoes",
    brand: "puma",
    image: "/Women’s Puma ActiveLuxe Sport Shoes.png",
    type: "women",
    category: "sport",
    description:
      "Luxuriate in activity with premium materials meeting athletic functionality perfectly. Discerning female athletes demand this level of excellence.",
    price: 1000000,
  },
  {
    name: "Women’s Puma AeroChic Sport Shoes",
    brand: "puma",
    image: "/Women’s Puma AeroChic Sport Shoes.png",
    type: "women",
    category: "sport",
    description:
      "Blend aerodynamic technology with chic styling in these fashionable shoes. Modern woman athletes appreciate form and function equally.",
    price: 400000,
  },
  {
    name: "Women’s Puma FlexBliss Sport Shoes",
    brand: "puma",
    image: "/Women’s Puma FlexBliss Sport Shoes.png",
    type: "women",
    category: "sport",
    description:
      "Flex into blissful support with responsive materials throughout. Blissful comfort doesn't require sacrificing athletic performance.",
    price: 450000,
  },
  {
    name: "Women’s Puma GlowEdge Sport Shoes",
    brand: "puma",
    image: "/Women’s Puma GlowEdge Sport Shoes.png",
    type: "women",
    category: "sport",
    description:
      "Glow boldly on the edge of athletic excellence with edgy designs. Performance meets personality in these distinctive shoe styles.",
    price: 500000,
  },
  {
    name: "Women’s Puma LightMuse Sport Shoes",
    brand: "puma",
    image: "/Women’s Puma LightMuse Sport Shoes.png",
    type: "women",
    category: "sport",
    description:
      "Light inspiration fuels creative female athletic pursuits in these shoes. Puma encourages artistic expression through sport.",
    price: 550000,
  },
  {
    name: "Women’s Puma NovaFlex Sport Shoes",
    brand: "puma",
    image: "/Women’s Puma NovaFlex Sport Shoes.png",
    type: "women",
    category: "sport",
    description:
      "Flex into the nova with revolutionary flexibility enhancing performance. Puma's innovation continues pushing athletic boundaries.",
    price: 600000,
  },
  {
    name: "Women’s Puma PulseGlow Sport Shoes",
    brand: "puma",
    image: "/Women’s Puma PulseGlow Sport Shoes.png",
    type: "women",
    category: "sport",
    description:
      "Pulse with rhythmic energy supported by Puma's cushioning technology. Rhythmic support matches your natural athletic cadence perfectly.",
    price: 650000,
  },
  {
    name: "Women’s Puma SwiftAura Sport Shoes",
    brand: "puma",
    image: "/Women’s Puma SwiftAura Sport Shoes.png",
    type: "women",
    category: "sport",
    description:
      "Swift athleticism radiates an aura of confidence in these shoes. Female athletes dominate with Puma's cutting-edge technology.",
    price: 700000,
  },
];

const newCollection = [
  {
    name: "Men’s Nike AirFlux Running Shoes",
    image:
      "https://images.unsplash.com/photo-1608667508764-33cf0726b13a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNob2VzfGVufDB8fDB8fHww",
    feature: ["Youngful", "Fashionable", "Modern"],
  },
  {
    name: "Women’s Dior Oblique Boots",
    image:
      "https://images.unsplash.com/photo-1605732440685-d0654d81aa30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJvb3RzfGVufDB8fDB8fHww",
    feature: ["Stylish", "Comfortable", "Versatile"],
  },
  {
    name: "Men’s Adidas GlowMotion Running Shoes",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D",
    feature: ["Trendy", "Breathable", "Modern"],
  },
  {
    name: "Men’s Gucci Nero Boots",
    image:
      "https://images.unsplash.com/photo-1550998358-08b4f83dc345?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feature: ["Youngful", "Durable", "Trendy"],
  },
  {
    name: "Women’s Puma NovaEdge Sport Shoes",
    image:
      "https://images.unsplash.com/photo-1680204101400-aeac783c9d87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHB1bWF8ZW58MHx8MHx8fDA%3D",
    feature: ["Youngful", "Lightweight", "Sporty"],
  },
  {
    name: "Women’s Biti’s BloomRun Running Shoes",
    image:
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1431&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feature: ["Premiu", "Fashionable", "Modern"],
  },
];

module.exports = { attribute, feature, shoesData, newCollection };
