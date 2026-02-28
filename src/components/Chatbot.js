import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: "Hi! I'm here to help. Ask me about Abhishek's skills, projects, contact info, certificates, or anything else about this portfolio!",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (userMessage) => {
    const msg = userMessage.toLowerCase().trim();

    // Greetings
    if (/^(hi|hello|hey|good morning|good afternoon|good evening|howdy)[\s!.]*$/i.test(msg)) {
      return "Hello! 👋 How can I help you today? Feel free to ask about Abhishek's skills, projects, contact info, or certificates.";
    }
    if (/how are you|what'?s up|how do you do/i.test(msg)) {
      return "I'm doing great, thanks for asking! Ready to answer any questions about this portfolio.";
    }

    // Name / Who
    if (/^(who|name|abhishek|introduce|tell me about)/i.test(msg) || /what is (your|his|this) name/i.test(msg)) {
      return "This portfolio belongs to Abhishek — a passionate full-stack developer who creates innovative digital experiences. He specializes in both frontend and backend development.";
    }

    // Skills
    if (/skill|tech|technology|framework|programming|language|expertise|proficient|know/i.test(msg)) {
      return `Abhishek's skills include:\n\n**Frontend:** React.js, JavaScript, HTML & CSS\n**Backend:** Node.js, Python, Java\n**Database:** MongoDB, MySQL\n**Cloud & DevOps:** AWS, Git & GitHub\n**Design & Tools:** Figma, VS Code\n\nHe also has expertise in Agile, system design, API design, testing, and project management.`;
    }

    // Projects
    if (/project|work|built|portfolio|ivf|ticket|brain tumor|resnet|hackathon/i.test(msg)) {
      return `Here are Abhishek's notable projects:\n\n**1. IVF Companion** - Supportive website for IVF patients with cycle tracking, medication reminders, and mental wellness resources. Tech: HTML, CSS, JS, SQL, Python, Alchemy. [GitHub](https://github.com/AbhishekNS2004/IVF)\n\n**2. Ticket Tracker** - Real-time show ticket booking app with React and PHP/XAMPP backend. Tech: ReactJS, PHP, MySQL, HTML, CSS.\n\n**3. Brain Tumor Detection** - MRI image processing using ResNet50 for tumor detection. Tech: Python, ResNet50, HTML. [GitHub](https://github.com/AbhishekNS2004/Brain-tumor-detection-using-ResNet50)\n\nCheck the Projects section for more details!`;
    }

    // Contact
    if (/contact|email|phone|reach|hire|collaborate|location|address|where|chikkamagaluru/i.test(msg)) {
      return `You can reach Abhishek at:\n\n📧 **Email:** abhishekns142@gmail.com\n📱 **Phone:** +91 7411255177\n📍 **Location:** Chikkamagaluru, India\n\nFeel free to scroll to the Contact section to send a message or use the contact form!`;
    }

    // Certificates
    if (/certificate|certification|certified|hackathon|nptel|udemy|course|achievement/i.test(msg)) {
      return `Abhishek has earned several certificates:\n\n• **ADVAYA** - 24-hour National Level Hackathon at BGSCET Bangalore (April 2025)\n• **Smart India Hackathon 2025** - Health theme, AIT Chikkamagaluru (Sept 2025)\n• **NPTEL** - Programming in Java, IIT Kharagpur (Jul–Oct 2025)\n• **Udemy** - CSS, JavaScript, PHP & Python Programming (May 2025)\n\nVisit the Certificates section to view them!`;
    }

    // Resume
    if (/resume|cv|download|pdf/i.test(msg)) {
      return "You can download Abhishek's resume from the About section — look for the 'Download Full Resume' button. You can also use the 'Download Resume' button on the Hero section.";
    }

    // Social / Links
    if (/github|linkedin|social|profile|link/i.test(msg)) {
      return `Connect with Abhishek:\n\n• **GitHub:** github.com/AbhishekNS2004\n• **LinkedIn:** linkedin.com/in/abhishek-ns-4a119a267/\n\nCheck the Hero section for quick links.`;
    }

    // About
    if (/about|journey|experience|developer|who is|background/i.test(msg)) {
      return "Abhishek is a passionate full-stack developer from Chikkamagaluru. He builds user-centric applications, specializes in modern web technologies, and has led teams, reduced load times by 40%, and achieved high uptime. Scroll to the About section for more!";
    }

    // Help
    if (/help|menu|option|what can you|support/i.test(msg)) {
      return "I can answer questions about:\n\n• **Skills** - Technologies and expertise\n• **Projects** - IVF Companion, Ticket Tracker, Brain Tumor Detection\n• **Contact** - Email, phone, location\n• **Certificates** - Hackathons and courses\n• **Resume** - Where to download\n• **Social** - GitHub, LinkedIn\n\nJust type your question!";
    }

    // Thanks
    if (/thank|thanks|appreciate|great|awesome/i.test(msg)) {
      return "You're welcome! Feel free to ask anything else about the portfolio. 😊";
    }

    // Goodbye
    if (/bye|goodbye|see you|later/i.test(msg)) {
      return "Goodbye! Feel free to come back if you have more questions. Have a great day! 👋";
    }

    // Fallback
    return "I'm not sure about that. Try asking about skills, projects, contact info, certificates, or resume. Type 'help' to see what I can answer!";
  };

  const handleSend = (e) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: userMessage, timestamp: new Date() }
    ]);
    setInputValue('');

    // Simulate slight delay for bot response
    setTimeout(() => {
      const botReply = getResponse(userMessage);
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: botReply, timestamp: new Date() }
      ]);
    }, 400);
  };

  const formatMessage = (text) => {
    return text.split('\n').map((line, i) => {
      const parts = [];
      let remaining = line;
      let key = 0;
      const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
      let match;
      let lastIndex = 0;
      while ((match = regex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(<span key={key++}>{line.slice(lastIndex, match.index)}</span>);
        }
        if (match[2]) {
          parts.push(
            <a key={key++} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 underline">
              {match[1]}
            </a>
          );
        } else {
          parts.push(<strong key={key++} className="text-primary-400">{match[3]}</strong>);
        }
        lastIndex = regex.lastIndex;
      }
      if (lastIndex < line.length) parts.push(<span key={key++}>{line.slice(lastIndex)}</span>);
      return <p key={i} className="mb-1">{parts.length ? parts : line}</p>;
    });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary-600 hover:bg-primary-500 text-white shadow-lg flex items-center justify-center transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-full max-w-md h-[450px] bg-dark-800 rounded-xl shadow-2xl border border-dark-700 flex flex-col overflow-hidden"
          >
            <div className="px-4 py-3 bg-dark-900 border-b border-dark-700">
              <h3 className="font-bold text-white">Portfolio Assistant</h3>
              <p className="text-xs text-gray-400">Ask about skills, projects, contact & more</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-4 py-2 ${
                      m.role === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-dark-700 text-gray-200 text-sm'
                    }`}
                  >
                    {m.role === 'bot' ? (
                      <div className="whitespace-pre-wrap">{formatMessage(m.text)}</div>
                    ) : (
                      m.text
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="p-4 border-t border-dark-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 text-sm"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-primary-600 hover:bg-primary-500 rounded-lg text-white"
                >
                  <Send size={20} />
                </motion.button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Try: &quot;What skills do you have?&quot; or &quot;How can I contact?&quot;</p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
