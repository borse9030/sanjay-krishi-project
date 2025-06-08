import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Phone, Star } from 'lucide-react';
import { categories, products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                संजय कृषी केंद्र
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-primary-100">
                शेतकऱ्यांचा विश्वासू मित्र
              </p>
              <p className="text-lg mb-8 text-primary-200">
                ५ वर्षांपासून आम्ही शेतकऱ्यांना दर्जेदार खते, कीटकनाशके आणि बियाणे पुरवत आहोत. 
                तुमच्या शेतीची उत्पादकता वाढवण्यासाठी आमच्यासोबत जुडा.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-colors"
                >
                  उत्पादने पहा
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+919423431450"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  आताच कॉल करा
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="शेतकरी काम करताना"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              आमची वैशिष्ट्ये
            </h2>
            <p className="text-lg text-gray-600">
              आम्ही का शेतकऱ्यांची पहिली पसंती आहोत?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <Truck className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">मोफत होम डिलिव्हरी</h3>
              <p className="text-gray-600">
                तुमच्या गावापर्यंत मोफत पोहोच. ५०० रुपयांच्या वरच्या ऑर्डरवर.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">मूळ उत्पादनांची हमी</h3>
              <p className="text-gray-600">
                सर्व उत्पादने प्रमाणित आणि मूळ. खोटे उत्पादनांची अदलाबदल.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <Phone className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">२४/७ ग्राहक सेवा</h3>
              <p className="text-gray-600">
                कधीही कॉल करा. आमचे तज्ञ तुमच्या मदतीसाठी तयार आहेत.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              उत्पादन श्रेणी
            </h2>
            <p className="text-lg text-gray-600">
              तुमच्या शेतीसाठी आवश्यक असलेले सर्व उत्पादने
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/products/${category.name}`}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <span className="text-primary-600 font-medium">
                    {category.count} उत्पादने उपलब्ध
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              लोकप्रिय उत्पादने
            </h2>
            <p className="text-lg text-gray-600">
              शेतकऱ्यांची पहिली पसंती
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center transition-colors"
            >
              सर्व उत्पादने पहा
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              शेतकऱ्यांचे अनुभव
            </h2>
            <p className="text-lg text-gray-600">
              आमच्या ग्राहकांचे खरे अनुभव
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "संजय भाऊंकडून खत घेतल्यानंतर माझ्या टोमॅटोचे उत्पादन दुप्पट झाले. खूप चांगली सेवा!"
              </p>
              <div className="font-medium text-gray-900">- रमेश पाटील, सातारा</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "BT कापसाचे बियाणे अप्रतिम! बॉलवर्मचा त्रास न होता चांगले उत्पादन मिळाले."
              </p>
              <div className="font-medium text-gray-900">- सुनील जाधव, कोल्हापूर</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "घरपोच डिलिव्हरी आणि योग्य दर. खरोखरच शेतकऱ्यांचे मित्र आहेत!"
              </p>
              <div className="font-medium text-gray-900">- अशोक कुलकर्णी, पुणे</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            आजच आमच्याशी जुडा!
          </h2>
          <p className="text-lg mb-8 text-primary-100">
            तुमच्या शेतीच्या गरजेनुसार योग्य उत्पादने निवडण्यासाठी आमच्या तज्ञांशी संपर्क साधा.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919423431450"
              className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              +91 94234 31450
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-colors"
            >
              संपर्क फॉर्म भरा
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;