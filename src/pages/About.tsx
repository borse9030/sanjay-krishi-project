import React from 'react';
import { Users, Award, Truck, Phone, MapPin, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">आमच्याबद्दल</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              २५ वर्षांपासून आम्ही शेतकऱ्यांच्या सेवेत आहोत आणि त्यांच्या शेतीच्या गरजा पूर्ण करण्यासाठी प्रयत्नशील आहोत.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">आमची कहाणी</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  १९९८ साली श्री संजय पाटील यांनी एक छोटे कृषी केंद्र सुरू केले. त्यावेळी फक्त काही मूलभूत खते आणि बियाणे विकले जात होते.
                </p>
                <p>
                  आज आम्ही महाराष्ट्रातील ५०० हून अधिक गावांमध्ये आमची सेवा पोहोचवत आहोत. आमच्याकडे १०,००० हून अधिक समाधानी ग्राहक आहेत.
                </p>
                <p>
                  आम्ही फक्त उत्पादने विकत नाही, तर शेतकऱ्यांना योग्य मार्गदर्शन देऊन त्यांच्या शेतीची उत्पादकता वाढवण्याचा प्रयत्न करतो.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="कृषी केंद्र"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">आमची मूल्ये</h2>
            <p className="text-lg text-gray-600">
              आम्ही काय मानतो आणि कसे काम करतो
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">ग्राहक सेवा</h3>
              <p className="text-gray-600">
                आमचे ग्राहक आमच्यासाठी सर्वात महत्वाचे आहेत. त्यांच्या समाधानासाठी आम्ही नेहमी तयार आहोत.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">गुणवत्ता</h3>
              <p className="text-gray-600">
                आम्ही फक्त उच्च दर्जाची आणि प्रमाणित उत्पादने विकतो. नकली उत्पादनांना कधीच प्रोत्साहन देत नाही.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Truck className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">विश्वसनीयता</h3>
              <p className="text-gray-600">
                वेळेवर डिलिव्हरी आणि योग्य दरामुळे शेतकरी आमच्यावर विश्वास ठेवतात.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-primary-200">वर्षांचा अनुभव</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-primary-200">समाधानी ग्राहक</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-200">गावांमध्ये सेवा</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-primary-200">विविध उत्पादने</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">आमची टीम</h2>
            <p className="text-lg text-gray-600">
              अनुभवी आणि समर्पित व्यक्ती
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="संजय पाटील"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">श्री संजय पाटील</h3>
              <p className="text-gray-600">संस्थापक आणि मालक</p>
              <p className="text-sm text-gray-500 mt-2">२५ वर्षांचा कृषी क्षेत्रातील अनुभव</p>
            </div>
            
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="राहुल शर्मा"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">राहुल शर्मा</h3>
              <p className="text-gray-600">कृषी तज्ञ</p>
              <p className="text-sm text-gray-500 mt-2">B.Sc Agriculture, कृषी सल्लागार</p>
            </div>
            
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="प्रिया जाधव"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">प्रिया जाधव</h3>
              <p className="text-gray-600">ग्राहक सेवा प्रमुख</p>
              <p className="text-sm text-gray-500 mt-2">ग्राहक सेवा आणि तक्रार निवारण</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">आमच्याशी संपर्क साधा</h2>
            <p className="text-lg text-gray-600">
              आम्ही तुमच्या मदतीसाठी नेहमी तयार आहोत
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">फोन</h3>
              <p className="text-gray-600">+91 94234 31450</p>
              <p className="text-gray-600">sanjaykrishi96@gmail.com</p>
            </div>
            
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">पत्ता</h3>
              <p className="text-gray-600">
                स्टेशन रोड, नगर पालिकाच्या बाजूला,<br />
                संजय कृषी केंद्र, दुकान क्र. ४३
              </p>
            </div>
            
            <div className="text-center">
              <Clock className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">वेळ</h3>
              <p className="text-gray-600">सोम - शनि: ८:०० - १९:००</p>
              <p className="text-gray-600">रवि: ९:०० - १३:००</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;