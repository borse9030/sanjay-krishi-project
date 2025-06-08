import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', mobile: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">आमच्याशी संपर्क साधा</h1>
          <p className="text-lg text-gray-600">
            तुमच्या कोणत्याही प्रश्नासाठी किंवा मदतीसाठी आम्ही येथे आहोत
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-6">संपर्क माहिती</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">फोन</h3>
                    <p className="text-gray-600">+91 94234 31450</p>
                    <p className="text-sm text-gray-500 mt-1">सकाळी ८:०० ते संध्याकाळी ७:००</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">ईमेल</h3>
                    <p className="text-gray-600">sanjaykrishi96@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">पत्ता</h3>
                    <p className="text-gray-600">
                      स्टेशन रोड, नगर पालिकाच्या बाजूला,<br />
                      संजय कृषी केंद्र, दुकान क्र. ४३
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">कामकाजाचे तास</h3>
                    <p className="text-gray-600">सोमवार - शनिवार: ८:०० - १९:००</p>
                    <p className="text-gray-600">रविवार: ९:०० - १३:००</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">त्वरित संपर्क</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+919423431450"
                    className="block w-full bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg transition-colors"
                  >
                    आताच कॉल करा
                  </a>
                  <a
                    href="https://wa.me/919423431450"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded-lg transition-colors"
                  >
                    WhatsApp वर मेसेज करा
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-6">संदेश पाठवा</h2>

              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">धन्यवाद!</h3>
                  <p className="text-gray-600">
                    तुमचा संदेश मिळाला आहे. आम्ही लवकरच तुमच्याशी संपर्क साधू.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        नाव *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="तुमचे नाव"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        मोबाईल नंबर *
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+91 94234 31450"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ईमेल (वैकल्पिक)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      विषय *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">विषय निवडा</option>
                      <option value="product-inquiry">उत्पादन चौकशी</option>
                      <option value="order-support">ऑर्डर सहाय्य</option>
                      <option value="technical-support">तांत्रिक सहाय्य</option>
                      <option value="complaint">तक्रार</option>
                      <option value="suggestion">सूचना</option>
                      <option value="other">इतर</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      संदेश *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="तुमचा संदेश येथे लिहा..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    संदेश पाठवा
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-900 mb-6">वारंवार विचारले जाणारे प्रश्न</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">तुमची डिलिव्हरी किती दिवसात होते?</h3>
                <p className="text-gray-600">
                  आम्ही ४८ तासांच्या आत डिलिव्हरी करण्याचा प्रयत्न करतो. अंतरावर अवलंबून ते १-३ दिवस लागू शकते.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">डिलिव्हरी चार्ज काय आहे?</h3>
                <p className="text-gray-600">
                  ५०० रुपयांच्या वरच्या ऑर्डरवर मोफत डिलिव्हरी. त्याखालील ऑर्डरवर ५० रुपये डिलिव्हरी चार्ज.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">उत्पादनांची गुणवत्ता कशी तपासता?</h3>
                <p className="text-gray-600">
                  आम्ही फक्त प्रमाणित कंपन्यांचे मूळ उत्पादने विकतो. प्रत्येक उत्पादनावर कंपनीचा होलोग्राम आणि बॅच नंबर असतो.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">तुम्ही कृषी सल्ला देता का?</h3>
                <p className="text-gray-600">
                  होय, आमचे तज्ञ मोफत कृषी सल्ला देतात. तुम्ही फोन करून किंवा दुकानात येऊन सल्ला घेऊ शकता.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;