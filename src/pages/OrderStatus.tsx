import React, { useState } from 'react';
import { Search, Package, Truck, CheckCircle, Clock, Phone, MapPin } from 'lucide-react';

const OrderStatus: React.FC = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [mobile, setMobile] = useState('');
  const [orderData, setOrderData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // Mock order data - in real app, this would come from API
  const mockOrders = {
    'SKK2025001': {
      orderNumber: 'SKK2025001',
      date: '२०२५-०१-१५',
      status: 'delivered',
      items: [
        { name: 'NPK 20:20:20 खत', quantity: 2, price: 850 },
        { name: 'यूरिया खत', quantity: 1, price: 280 }
      ],
      total: 1980,
      customer: {
        name: 'रमेश पाटील',
        mobile: '+91 98765 43210',
        address: 'कराड, सातारा'
      },
      timeline: [
        { status: 'ordered', date: '२०२५-०१-१५ १०:३०', completed: true },
        { status: 'confirmed', date: '२०२५-०१-१५ १२:००', completed: true },
        { status: 'shipped', date: '२०२५-०१-१६ ०९:००', completed: true },
        { status: 'delivered', date: '२०२५-०१-१७ १४:३०', completed: true }
      ]
    }
  };

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      const order = mockOrders[orderNumber as keyof typeof mockOrders];
      if (order && order.customer.mobile.includes(mobile.slice(-10))) {
        setOrderData(order);
      } else {
        setOrderData(null);
        alert('ऑर्डर सापडला नाही. कृपया ऑर्डर नंबर आणि मोबाईल नंबर तपासा.');
      }
      setLoading(false);
    }, 1000);
  };

  const getStatusIcon = (status: string, completed: boolean) => {
    if (completed) {
      return <CheckCircle className="h-6 w-6 text-green-500" />;
    }
    
    switch (status) {
      case 'ordered':
        return <Package className="h-6 w-6 text-blue-500" />;
      case 'confirmed':
        return <CheckCircle className="h-6 w-6 text-blue-500" />;
      case 'shipped':
        return <Truck className="h-6 w-6 text-blue-500" />;
      case 'delivered':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      default:
        return <Clock className="h-6 w-6 text-gray-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ordered':
        return 'ऑर्डर प्राप्त';
      case 'confirmed':
        return 'ऑर्डर पुष्टी';
      case 'shipped':
        return 'पाठवले गेले';
      case 'delivered':
        return 'पोहोचले';
      default:
        return status;
    }
  };

  const getOverallStatus = (status: string) => {
    switch (status) {
      case 'ordered':
        return { text: 'ऑर्डर प्राप्त झाली', color: 'text-blue-600 bg-blue-50' };
      case 'confirmed':
        return { text: 'ऑर्डर पुष्टी झाली', color: 'text-blue-600 bg-blue-50' };
      case 'shipped':
        return { text: 'पाठवले गेले', color: 'text-orange-600 bg-orange-50' };
      case 'delivered':
        return { text: 'पोहोचले', color: 'text-green-600 bg-green-50' };
      default:
        return { text: 'अज्ञात', color: 'text-gray-600 bg-gray-50' };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">ऑर्डर स्थिती तपासा</h1>
          <p className="text-lg text-gray-600">
            तुमच्या ऑर्डरची वर्तमान स्थिती जाणून घ्या
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ऑर्डर नंबर
              </label>
              <input
                type="text"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="SKK2025001"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                मोबाईल नंबर
              </label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-end">
              <button
                onClick={handleSearch}
                disabled={!orderNumber || !mobile || loading}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Search className="h-5 w-5 mr-2" />
                    शोधा
                  </>
                )}
              </button>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            <p><strong>उदाहरण:</strong> ऑर्डर नंबर: SKK2025001, मोबाईल: 43210</p>
          </div>
        </div>

        {/* Order Details */}
        {orderData && (
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">ऑर्डर #{orderData.orderNumber}</h2>
                  <p className="text-gray-600">दिनांक: {orderData.date}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${getOverallStatus(orderData.status).color}`}>
                  {getOverallStatus(orderData.status).text}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">ग्राहक माहिती</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>{orderData.customer.name}</p>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-1" />
                      {orderData.customer.mobile}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {orderData.customer.address}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">ऑर्डर सारांश</h3>
                  <div className="space-y-1 text-gray-600">
                    {orderData.items.map((item: any, index: number) => (
                      <div key={index} className="flex justify-between">
                        <span>{item.name} x {item.quantity}</span>
                        <span>₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                    <div className="border-t pt-1 font-semibold text-gray-900">
                      <div className="flex justify-between">
                        <span>एकूण</span>
                        <span>₹{orderData.total}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Timeline */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-6">ऑर्डर ट्रॅकिंग</h3>
              
              <div className="space-y-4">
                {orderData.timeline.map((step: any, index: number) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0">
                      {getStatusIcon(step.status, step.completed)}
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                          {getStatusText(step.status)}
                        </h4>
                        <span className={`text-sm ${step.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                          {step.completed ? step.date : 'प्रतीक्षा'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">मदत हवी आहे?</h3>
              <p className="text-primary-700 mb-4">
                तुमच्या ऑर्डरबद्दल कोणताही प्रश्न असल्यास आमच्याशी संपर्क साधा.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919876543210"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  कॉल करा
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center justify-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderStatus;