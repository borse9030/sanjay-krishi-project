import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Volume2 } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'नमस्कार! मी AI शेतकरी सहाय्यक आहे. तुमच्या पिकांच्या समस्यांबद्दल विचारा किंवा योग्य उत्पादने शोधण्यात मदत घ्या.',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getFarmingAdvice = (query: string): string => {
    const lowercaseQuery = query.toLowerCase();
    
    if (lowercaseQuery.includes('बुरशी') || lowercaseQuery.includes('फंगस')) {
      return 'बुरशीजन्य रोगांसाठी तुम्हाला कॉपर सल्फेट किंवा मॅन्कोझेब स्प्रे वापरावा. आमच्याकडे "बायर फंगीसाईड" उपलब्ध आहे. दर आठवड्याला फवारणी करा आणि ओलावा कमी ठेवा.';
    }
    
    if (lowercaseQuery.includes('कीड') || lowercaseQuery.includes('किडे')) {
      return 'कीटकांच्या नियंत्रणासाठी नीम तेल किंवा इमिडाक्लोप्रिड वापरा. आमच्याकडे "निंबोली पाउडर" आणि "कॉन्फिडॉर" उपलब्ध आहेत. संध्याकाळी फवारणी करा.';
    }

    if (lowercaseQuery.includes('टोमॅटो') || lowercaseQuery.includes('टमाटर')) {
      return 'टोमॅटोसाठी NPK 19:19:19 खत वापरा. फुलांच्या वेळी बोरॉन स्प्रे करा. पाण्याचा समतोल राखा आणि मल्चिंग करा.';
    }

    if (lowercaseQuery.includes('कापूस') || lowercaseQuery.includes('cotton')) {
      return 'कापसासाठी डीएपी आणि युरिया खत वापरा. बॉलवर्म साठी BT स्प्रे करा. आमच्याकडे "कापूस विशेष खत मिश्रण" उपलब्ध आहे.';
    }

    if (lowercaseQuery.includes('ज्वारी') || lowercaseQuery.includes('jowar')) {
      return 'ज्वारीसाठी नत्र खत मुख्य आहे. बुआईच्या वेळी DAP आणि 45 दिवसांनी युरिया द्या. स्टेम बोरर साठी कार्बोफ्युरान वापरा.';
    }

    if (lowercaseQuery.includes('भाजीपाला') || lowercaseQuery.includes('vegetables')) {
      return 'भाजीपाल्यांसाठी कंपोस्ट खत आणि NPK 20:20:20 वापरा. नियमित पाणी द्या आणि तण काढा. कीटकांसाठी नीम तेल स्प्रे करा.';
    }

    if (lowercaseQuery.includes('खत') || lowercaseQuery.includes('fertilizer')) {
      return 'मातीची चाचणी करून योग्य खत निवडा. सेंद्रिय खत प्राधान्य द्या. NPK प्रमाण पिकानुसार ठरवा. आमच्याकडे सर्व प्रकारची खते उपलब्ध आहेत.';
    }

    if (lowercaseQuery.includes('बियाणे') || lowercaseQuery.includes('seeds')) {
      return 'दर्जेदार बियाणे निवडा. हंगामानुसार योग्य वाण निवडा. बियाणे प्रक्रिया करून पेरा. आमच्याकडे सर्टिफाईड बियाणे उपलब्ध आहे.';
    }

    if (lowercaseQuery.includes('पाऊस') || lowercaseQuery.includes('rain')) {
      return 'पावसाळ्यात जास्त पाणी साचू नका. ड्रेनेज व्यवस्था चांगली ठेवा. बुरशीजन्य रोगांपासून बचाव करा.';
    }

    return 'तुमच्या प्रश्नासाठी धन्यवाद! कृपया अधिक तपशील द्या किंवा आमच्या तज्ञाशी बोला. फोन: +91 94234 31450';
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getFarmingAdvice(inputText),
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'hi-IN';
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-2xl border z-50">
          {/* Header */}
          <div className="bg-primary-600 text-white p-4 rounded-t-lg">
            <h3 className="font-bold">AI शेतकरी सहाय्यक</h3>
            <p className="text-sm text-primary-100">कृषी तज्ञ सल्लागार</p>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString('mr-IN', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                    {!message.isUser && (
                      <button
                        onClick={() => speakText(message.text)}
                        className="ml-2 p-1 hover:bg-gray-200 rounded"
                      >
                        <Volume2 className="h-3 w-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="तुमचा प्रश्न येथे लिहा..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              उदा: "माझ्या टोमॅटोवर बुरशी आली आहे, काय करावे?"
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;