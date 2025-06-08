import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">संजय कृषी केंद्र</h3>
            <p className="text-primary-200 mb-4">
              आम्ही शेतकऱ्यांच्या सेवेत २५ वर्षांपासून आहोत. दर्जेदार खते, कीटकनाशके आणि बियाणे पुरवण्यात आमची तज्ञता आहे.
            </p>
            <div className="flex space-x-3">
              <Facebook className="h-5 w-5 text-primary-300 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-primary-300 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 text-primary-300 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">त्वरित दुवे</h3>
            <ul className="space-y-2">
              <li><a href="/products" className="text-primary-200 hover:text-white transition-colors">उत्पादने</a></li>
              <li><a href="/about" className="text-primary-200 hover:text-white transition-colors">आमच्याबद्दल</a></li>
              <li><a href="/contact" className="text-primary-200 hover:text-white transition-colors">संपर्क</a></li>
              <li><a href="/order-status" className="text-primary-200 hover:text-white transition-colors">ऑर्डर स्थिती</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">संपर्क माहिती</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-300" />
                <span className="text-primary-200">+91 94234 31450</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-300" />
                <span className="text-primary-200">sanjaykrishi96@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary-300 mt-1" />
                <span className="text-primary-200">स्टेशन रोड, नगर पालिकाच्या बाजूला, संजय कृषी केंद्र, दुकान क्र. ४३</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">कामकाजाचे तास</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary-300" />
                <div>
                  <div className="text-primary-200">सोमवार - शनिवार</div>
                  <div className="text-sm text-primary-300">सकाळी ८:०० - संध्याकाळी ७:००</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary-300" />
                <div>
                  <div className="text-primary-200">रविवार</div>
                  <div className="text-sm text-primary-300">सकाळी ९:०० - दुपारी १:००</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center">
          <p className="text-primary-200">
            © २०२५ संजय कृषी केंद्र. सर्व हक्क राखीव आहेत.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;