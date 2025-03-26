
export interface Product {
  id: string;
  name: string;
  collection: string;
  price: number;
  material: Material;
  colors: Color[];
  description: string;
  features: string[];
  images: string[];
}

export type Material = 'saffiano' | 'eco-leather' | 'suede' | 'corduroy' | 'quilted';
export type Color = 'black' | 'brown' | 'navy' | 'burgundy' | 'beige' | 'grey';

export const materials = [
  { id: 'saffiano', name: 'Skóra Saffiano', description: 'Elegancka, trwała skóra odporna na zarysowania i wodę.' },
  { id: 'eco-leather', name: 'Eko Skóra', description: 'Ekologiczna alternatywa, łącząca nowoczesny design z troską o środowisko.' },
  { id: 'suede', name: 'Zamsz', description: 'Miękki materiał o luksusowym wyglądzie i charakterystycznej teksturze.' },
  { id: 'corduroy', name: 'Sztruks', description: 'Sztruks o ciepłej fakturze i subtelnym charakterze, modny i stylowy.' },
  { id: 'quilted', name: 'Pikowany Poliester', description: 'Lekki i wytrzymały pikowany materiał o nowoczesnym wyglądzie.' }
];

export const products: Product[] = [
  {
    id: 'saffiora-pro',
    name: 'Saffiora Pro',
    collection: 'Saffiora',
    price: 429,
    material: 'saffiano',
    colors: ['black', 'navy', 'burgundy'],
    description: 'Elegancka torba z kolekcji Saffiora wykonana z najwyższej jakości skóry saffiano. Idealna dla współczesnych bizneswoman, które cenią sobie styl i funkcjonalność. Torba pomieści laptop do 15 cali oraz wszystkie niezbędne akcesoria.',
    features: [
      'Kieszeń na laptop do 15 cali z dodatkową ochroną',
      'Wewnętrzne przegrody na dokumenty',
      'Kieszeń zewnętrzna z zamkiem',
      'Uchwyt i odpinany, regulowany pasek na ramię',
      'Materiał odporny na wodę i zarysowania',
      'Eleganckie metalowe wykończenia'
    ],
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1169&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1575844264771-892081897e60?q=80&w=1170&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1577733966973-d680bffd2e80?q=80&w=1170&auto=format&fit=crop'
    ]
  },
  {
    id: 'vellera-chic',
    name: 'Vellera Chic',
    collection: 'Vellera',
    price: 349,
    material: 'suede',
    colors: ['black', 'beige', 'grey'],
    description: 'Vellera Chic to zamszowa torba, która łączy elegancję z codzienną funkcjonalnością. Subtelna faktura materiału nadaje jej wyjątkowego charakteru, idealnego zarówno na spotkania biznesowe, jak i mniej formalne okazje.',
    features: [
      'Miękka zamszowa konstrukcja',
      'Przegroda na laptop do 14 cali',
      'Dodatkowe kieszenie na akcesoria',
      'Wzmocnione, wygodne uchwyty',
      'Odpinany pasek na ramię',
      'Magnetyczne zapięcie'
    ],
    images: [
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1657&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1357&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1374&auto=format&fit=crop'
    ]
  },
  {
    id: 'cordovi-elite',
    name: 'Cordovi Elite',
    collection: 'Cordovi',
    price: 299,
    material: 'corduroy',
    colors: ['burgundy', 'navy', 'beige'],
    description: 'Cordovi Elite to sztruksowa torba o unikalnym charakterze, która doskonale sprawdzi się zarówno w biurze, jak i podczas podróży. Wykonana z wysokiej jakości sztruksu, który jest zarówno stylowy, jak i praktyczny.',
    features: [
      'Wykonana z premium sztruksu o wyrazistej fakturze',
      'Wygodna przestrzeń na laptop do 13 cali',
      'Wewnętrzne organizery na akcesoria',
      'Zapięcie na suwak',
      'Zewnętrzna kieszeń na szybki dostęp',
      'Wzmocnione dno dla lepszej ochrony'
    ],
    images: [
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1374&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1573297627466-d036a0b8dba4?q=80&w=1374&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1622445275643-78609939198d?q=80&w=1374&auto=format&fit=crop'
    ]
  },
  {
    id: 'lumiera-soft',
    name: 'Lumiera Soft',
    collection: 'Lumiera',
    price: 389,
    material: 'quilted',
    colors: ['black', 'grey', 'navy'],
    description: 'Lumiera Soft to nowoczesna, pikowana torba, która oferuje doskonałą ochronę dla Twojego laptopa, jednocześnie nadając Twojemu wizerunkowi elegancki charakter. Wykonana z pikowanego poliestru, który jest zarówno lekki, jak i wytrzymały.',
    features: [
      'Pikowany poliester o luksusowym wyglądzie',
      'Specjalna przegroda na laptop do 15 cali',
      'Liczne kieszenie wewnętrzne i zewnętrzne',
      'Regulowany, odpinany pasek na ramię',
      'Stylowe metalowe wykończenia',
      'Wodoodporne właściwości'
    ],
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1335&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a45?q=80&w=1374&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?q=80&w=1170&auto=format&fit=crop'
    ]
  },
  {
    id: 'alean-classic',
    name: 'Alean Classic',
    collection: 'Alean',
    price: 319,
    material: 'eco-leather',
    colors: ['black', 'brown', 'burgundy'],
    description: 'Alean Classic to elegancka torba wykonana z ekologicznej skóry, która jest idealnym wyborem dla kobiet ceniących sobie ekologiczne produkty bez kompromisów w kwestii stylu. Łączy w sobie nowoczesny design z dbałością o środowisko.',
    features: [
      'Wykonana z wysokiej jakości ekoskóry',
      'Przestronna komora główna z przegrodą na laptop',
      'Wzmocniona ochrona urządzeń elektronicznych',
      'Kieszenie organizacyjne na akcesoria',
      'Eleganckie logo na przedniej kieszeni',
      'Zapięcie na suwak'
    ],
    images: [
      'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1471&auto=format&fit=crop'
    ]
  },
  {
    id: 'saffiora-mini',
    name: 'Saffiora Mini',
    collection: 'Saffiora',
    price: 319,
    material: 'saffiano',
    colors: ['black', 'burgundy', 'navy'],
    description: 'Saffiora Mini to kompaktowa wersja kultowej torby Saffiora, wykonana z tej samej wysokiej jakości skóry saffiano. Idealna dla kobiet, które cenią sobie elegancję, ale potrzebują mniejszej torby na codzień lub krótsze spotkania.',
    features: [
      'Kompaktowy rozmiar, idealny na laptopy do 13 cali',
      'Wykonana z odpornej na zarysowania skóry saffiano',
      'Eleganckie metalowe wykończenia',
      'Wewnętrzne organizery na akcesoria',
      'Odpinany pasek na ramię',
      'Wygodny uchwyt do noszenia w dłoni'
    ],
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1357&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1374&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1169&auto=format&fit=crop'
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByMaterial = (material: Material): Product[] => {
  return products.filter(product => product.material === material);
};

export const getMaterialLabel = (material: Material): string => {
  const materialObj = materials.find(m => m.id === material);
  return materialObj ? materialObj.name : '';
};

export const getColorLabel = (color: Color): string => {
  const colorMap: Record<Color, string> = {
    'black': 'Czarny',
    'brown': 'Brązowy',
    'navy': 'Granatowy',
    'burgundy': 'Burgundowy',
    'beige': 'Beżowy',
    'grey': 'Szary'
  };
  return colorMap[color] || color;
};
