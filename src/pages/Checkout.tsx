import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, Plus, Minus, CreditCard, Truck, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, totalAmount, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [orderData, setOrderData] = useState({
    name: '',
    mobile: '',
    village: '',
    taluka: '',
    district: '',
    paymentMethod: 'cod'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = () => {
    // Here you would integrate with a payment gateway or order processing system
    alert('तुमची ऑर्डर यशस्वी झाली! आम्ही तुमच्याशी लवकरच संपर्क साधू.');
    clearCart();
    setStep(3);
  };

  if (cartItems.length === 0 && step !== 3) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <CreditCard className="h-16 w-16 mx-auto" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">तुमची कार्ट रिकामी आहे</h2>
            <p className="text-gray-600 mb-6">उत्पादने जोडून खरेदी सुरू करा.</p>
            <Link
              to="/products"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              खरेदी सुरू करा
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <React.Fragment key={stepNumber}>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  step >= stepNumber 
                    ? 'bg-primary-600 border-primary-600 text-white' 
                    : 'border-gray-300 text-gray-400'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-12 h-0.5 ${
                    step > stepNumber ? 'bg-primary-600' : 'bg-gray-300'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-center space-x-16 mt-4 text-sm">
            <span className={step >= 1 ? 'text-primary-600' : 'text-gray-400'}>कार्ट</span>
            <span className={step >= 2 ? 'text-primary-600' : 'text-gray-400'}>माहिती</span>
            <span className={step >= 3 ? 'text-primary-600' : 'text-gray-400'}>पूर्ण</span>
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">तुमची कार्ट</h1>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center p-6 border-b border-gray-200 last:border-b-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <p className="text-primary-600 font-medium">₹{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-2 border-x border-gray-300">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>एकूण रक्कम:</span>
                <span className="text-primary-600">₹{totalAmount}</span>
              </div>
              <button
                onClick={() => setStep(2)}
                className="w-full mt-4 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                पुढे जा
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">डिलिव्हरी माहिती</h1>
              <button
                onClick={() => setStep(1)}
                className="text-primary-600 hover:text-primary-700 transition-colors flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                परत
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">संपर्क माहिती</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">नाव *</label>
                  <input
                    type="text"
                    name="name"
                    value={orderData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">मोबाईल नंबर *</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={orderData.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">पत्ता</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">गाव *</label>
                  <input
                    type="text"
                    name="village"
                    value={orderData.village}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">तालुका *</label>
                  <input
                    type="text"
                    name="taluka"
                    value={orderData.taluka}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">जिल्हा *</label>
                  <input
                    type="text"
                    name="district"
                    value={orderData.district}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">पेमेंट पद्धत</h2>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={orderData.paymentMethod === 'cod'}
                    onChange={handleInputChange}
                    className="mr-3"
                  />
                  <Truck className="h-5 w-5 mr-2 text-gray-600" />
                  Cash on Delivery (COD)
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={orderData.paymentMethod === 'upi'}
                    onChange={handleInputChange}
                    className="mr-3"
                  />
                  <Phone className="h-5 w-5 mr-2 text-gray-600" />
                  UPI Payment
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={orderData.paymentMethod === 'bank'}
                    onChange={handleInputChange}
                    className="mr-3"
                  />
                  <CreditCard className="h-5 w-5 mr-2 text-gray-600" />
                  Bank Transfer
                </label>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center text-lg font-semibold mb-4">
                <span>एकूण रक्कम:</span>
                <span className="text-primary-600">₹{totalAmount}</span>
              </div>
              <button
                onClick={handlePlaceOrder}
                disabled={!orderData.name || !orderData.mobile || !orderData.village}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 text-white px-6 py-3 rounded-lg transition-colors"
              >
                ऑर्डर पूर्ण करा
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-12">
            <div className="text-green-600 mb-4">
              <CreditCard className="h-16 w-16 mx-auto" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">ऑर्डर यशस्वी!</h2>
            <p className="text-gray-600 mb-6">
              तुमची ऑर्डर मिळाली आहे. आम्ही लवकरच तुमच्याशी संपर्क साधू.
            </p>
            <div className="space-y-3">
              <Link
                to="/products"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors inline-block"
              >
                अधिक खरेदी करा
              </Link>
              <div>
                <Link
                  to="/order-status"
                  className="text-primary-600 hover:text-primary-700 transition-colors"
                >
                  ऑर्डर स्थिती तपासा
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;