export interface Product {
  id: string;
  name: string;
  category: 'खते' | 'कीटकनाशके' | 'बियाणे';
  price: number;
  image: string;
  description: string;
  features: string[];
  usage: string;
  quantity: string;
  inStock: boolean;
}

export const products: Product[] = [
  // खते (Fertilizers)
  {
    id: 'fert-1',
    name: 'NPK 20:20:20 खत',
    category: 'खते',
    price: 850,
    image: "../models/71pHjzWy80L._AC_UF1000,1000_QL80_.jpg",
    description: 'सर्व पिकांसाठी संतुलित पोषक तत्वांचे मिश्रण',
    features: [
      'नत्र, स्फुरद आणि पालाश समान प्रमाणात',
      'द्रुत परिणाम देणारे',
      'मातीची सुपीकता वाढवते',
      'सर्व हंगामात वापरण्यायोग्य'
    ],
    usage: 'प्रति एकर २५ किलो वापरा. पिकाच्या मुळाशी टाका.',
    quantity: '२५ किलो पिशवी',
    inStock: true
  },
  {
    id: 'fert-2',
    name: 'यूरिया खत',
    category: 'खते',
    price: 280,
    image: "../models/UREA_0.png",
    description: 'नत्राचे प्रमुख स्रोत, पानांची वाढ वाढवते',
    features: [
      '४६% नत्र सामग्री',
      'पानांची हिरवळ वाढवते',
      'वनस्पतीची वाढ प्रोत्साहित करते',
      'जलद विरघळणारे'
    ],
    usage: 'फवारणीसाठी १०० लिटर पाण्यात ५०० ग्रॅम मिसळा.',
    quantity: '४५ किलो पिशवी',
    inStock: true
  },
  {
    id: 'fert-3',
    name: 'DAP खत',
    category: 'खते',
    price: 1350,
    image: "../models/18-46-0-(DAP)_1.png",
    description: 'स्फुरदाचे उत्तम स्रोत, मुळांची वाढ',
    features: [
      '१८% नत्र आणि ४६% स्फुरद',
      'मुळांचा विकास चांगला',
      'फुलांची संख्या वाढवते',
      'बीजांकुरणात मदत'
    ],
    usage: 'बुआईच्या वेळी प्रति एकर ५० किलो वापरा.',
    quantity: '५० किलो पिशवी',
    inStock: true
  },

  // कीटकनाशके (Pesticides)
  {
    id: 'pest-1',
    name: 'कॉन्फिडॉर इन्सेक्टिसाईड',
    category: 'कीटकनाशके',
    price: 320,
    image: "../models/insecticide-21-.avif",
    description: 'चोखणारे आणि चावणारे कीटकांपासून संरक्षण',
    features: [
      'इमिडाक्लोप्रिड सक्रिय घटक',
      '२१ दिवस संरक्षण',
      'व्यापक स्पेक्ट्रम कीटकनाशक',
      'कमी डोस, जास्त परिणाम'
    ],
    usage: '१०० लिटर पाण्यात २० मिली मिसळून फवारा.',
    quantity: '१०० मिली बाटली',
    inStock: true
  },
  {
    id: 'pest-2',
    name: 'कोराजेन एफएमसी',
    category: 'कीटकनाशके',
    price: 180,
    image: "../models/img_617469363_1576305289.jpg",
    description: 'नैसर्गिक कीटकनाशक, पर्यावरणास हानिरहित',
    features: [
      '१००% नैसर्गिक',
      'कीड प्रतिकारक गुणधर्म',
      'मित्र कीटकांना हानी नाही',
      'नियमित वापरास योग्य'
    ],
    usage: '१०० लिटर पाण्यात ५०० मिली मिसळा. आठवड्यातून एकदा फवारा.',
    quantity: '५०० मिली बाटली',
    inStock: true
  },
  {
    id: 'pest-3',
    name: 'टिंटो upl',
    category: 'कीटकनाशके',
    price: 450,
    image: "../models/1-litre-upl-tinto-biostimulant.jpg",
    description: 'बुरशीजन्य रोगांपासून संपूर्ण संरक्षण',
    features: [
      'मॅन्कोझेब सक्रिय घटक',
      'सर्व बुरशी रोग नियंत्रण',
      'पत्त्यावरील डाग काढते',
      'पिकाची गुणवत्ता सुधारते'
    ],
    usage: '१०० लिटर पाण्यात २५० ग्रॅम मिसळून फवारा.',
    quantity: '२५० ग्रॅम पॅकेट',
    inStock: true
  },

  // बियाणे (Seeds)
  {
    id: 'seed-1',
    name: 'राशी आरसीएच ६५९',
    category: 'बियाणे',
    price: 864,
    image: "../models/new-product.jpeg",
    description: 'उच्च उत्पादन देणारे BT कापूस हायब्रिड',
    features: [
      'बॉलवर्म प्रतिरोधी',
      'जास्त उत्पादन',
      'रोग प्रतिकारक',
      'मध्यम सिंचन आवश्यकता'
    ],
    usage: 'प्रति एकर ४५० ग्रॅम बियाणे पुरेसे.',
    quantity: '४५० ग्रॅम पॅकेट',
    inStock: true
  },
  {
    id: 'seed-2',
    name: 'यूएस AGREESEED',
    category: 'बियाणे',
    price: 2800,
    image: "../models/product-jpeg.jpeg",
    description: 'रोग प्रतिरोधी हायब्रिड टोमॅटो वाण',
    features: [
      'जास्त उत्पादन',
      'रोग प्रतिकारक शक्ती',
      'चांगली शेल्फ लाइफ',
      'एकसमान आकार'
    ],
    usage: 'नर्सरीमध्ये पेरा, ३० दिवसांनी रोपे लावा.',
    quantity: '१० ग्रॅम पॅकेट',
    inStock: true
  },
  {
    id: 'seed-3',
    name: 'मोक्ष केसीएच',
    category: 'बियाणे',
    price: 1200,
    image:"../models/5017648671748001749.webp",
    description: 'तिखट हायब्रिड मिरची, बाजारात चांगली मागणी',
    features: [
      'तिखटपणा जास्त',
      'चांगले रंग',
      'जास्त उत्पादन',
      'ट्रान्सपोर्ट योग्य'
    ],
    usage: 'नर्सरीमध्ये बियाणे पेरा. ४५ दिवसांनी रोपे तयार.',
    quantity: '५० ग्रॅम पॅकेट',
    inStock: true
  },
  {
    id: 'seed-4',
    name: 'राशी MAGIC',
    category: 'बियाणे',
    price: 380,
    image:"../models/AGS-S-3013_1.webp",
    description: 'पावसाळी हंगामासाठी उत्तम ज्वारी वाण',
    features: [
      'खरीप हंगामासाठी योग्य',
      'दुष्काळ सहनशील',
      'चांगले उत्पादन',
      'रोग प्रतिकारक'
    ],
    usage: 'प्रति एकर ५ किलो बियाणे वापरा.',
    quantity: '५ किलो पॅकेट',
    inStock: true
  }
];

export const categories = [
  {
    name: 'खते',
    description: 'मातीची सुपीकता वाढवणारी खते',
    icon: '🌱',
    count: products.filter(p => p.category === 'खते').length
  },
  {
    name: 'कीटकनाशके',
    description: 'कीड आणि रोग नियंत्रणासाठी',
    icon: '🛡️',
    count: products.filter(p => p.category === 'कीटकनाशके').length
  },
  {
    name: 'बियाणे',
    description: 'उच्च दर्जाचे प्रमाणित बियाणे',
    icon: '🌾',
    count: products.filter(p => p.category === 'बियाणे').length
  }
];