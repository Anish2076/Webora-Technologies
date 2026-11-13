document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const settingsToggle = document.getElementById("settings-toggle");
const settingsPanel = document.getElementById("settings-panel");
const themeToggle = document.getElementById("theme-toggle");
const languageToggle = document.getElementById("language-toggle");
const languageLabel = document.getElementById("language-label");
const textToggle = document.getElementById("text-toggle");
const contrastToggle = document.getElementById("contrast-toggle");
const chatToggle = document.getElementById("chat-toggle");
const chatPanel = document.getElementById("chat-panel");
const chatClose = document.getElementById("chat-close");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");
const nameInput = document.querySelector('.contact-form input[name="name"]');
const projectInput = document.querySelector('.contact-form textarea[name="message"]');
const metaDescription = document.querySelector('meta[name="description"]');
const englishTitle = document.title;
const englishDescription = metaDescription.content;

const hindiText = {
  "Services": "सेवाएँ",
  "Our work": "हमारा काम",
  "Process": "प्रक्रिया",
  "About": "परिचय",
  "FAQ": "सामान्य प्रश्न",
  "Let's talk": "बात करें",
  "Settings": "सेटिंग्स",
  "Light theme": "हल्की थीम",
  "Larger text": "बड़ा टेक्स्ट",
  "High contrast": "उच्च कंट्रास्ट",
  "DIGITAL EXPERIENCES, BUILT WITH PURPOSE": "उद्देश्यपूर्ण डिजिटल अनुभव",
  "We turn your": "हम आपके",
  "ideas into": "विचारों को",
  "digital reality.": "डिजिटल रूप देते हैं।",
  "Webora Technologies creates clean, modern and responsive websites that help businesses build trust and grow online.": "Webora Technologies आधुनिक और रिस्पॉन्सिव वेबसाइट बनाता है, जिससे व्यवसाय ऑनलाइन भरोसा और पहचान बना सकें।",
  "Start a project": "प्रोजेक्ट शुरू करें",
  "Explore our work": "हमारा काम देखें",
  "Thoughtful design. Reliable development.": "सोच-समझकर डिज़ाइन। भरोसेमंद डेवलपमेंट।",
  "Made for people and businesses with big ideas.": "बड़े विचारों वाले लोगों और व्यवसायों के लिए।",
  "Design that connects": "जुड़ाव बनाने वाला डिज़ाइन",
  "Responsive by design": "हर स्क्रीन के लिए रिस्पॉन्सिव",
  "DESIGN": "डिज़ाइन",
  "DEVELOPMENT": "डेवलपमेंट",
  "GROWTH": "विकास",
  "SCROLL TO EXPLORE ↓": "आगे देखने के लिए स्क्रॉल करें ↓",
  "01 / ABOUT ME": "01 / मेरे बारे में",
  "I’m Anish Kumar M.": "मैं Anish Kumar M. हूँ।",
  "I’m an aspiring web developer passionate about creating modern, user-friendly and responsive digital experiences.": "मैं एक उभरता हुआ वेब डेवलपर हूँ और आधुनिक, उपयोग में आसान तथा रिस्पॉन्सिव डिजिटल अनुभव बनाने के लिए उत्साहित हूँ।",
  "Through Webora Technologies, I aim to help individuals, startups and businesses establish their online presence with thoughtfully designed websites.": "Webora Technologies के ज़रिए, मेरा लक्ष्य व्यक्तियों, स्टार्टअप और व्यवसायों को सोच-समझकर बनाई गई वेबसाइटों से ऑनलाइन पहचान बनाने में मदद करना है।",
  "My technical interests include HTML, CSS, JavaScript, responsive web design and UI/UX design. I focus on understanding each client’s vision and transforming their ideas into practical digital solutions.": "मेरी तकनीकी रुचियों में HTML, CSS, JavaScript, रिस्पॉन्सिव वेब डिज़ाइन और UI/UX डिज़ाइन शामिल हैं। मैं हर क्लाइंट के विचार को समझकर उसे उपयोगी डिजिटल समाधान में बदलने पर ध्यान देता हूँ।",
  "My goal is simple: Turn your ideas into a professional online experience.": "मेरा लक्ष्य सरल है: आपके विचारों को एक पेशेवर ऑनलाइन अनुभव में बदलना।",
  "02 / WHAT WE DO": "02 / हम क्या करते हैं",
  "Small details.": "छोटी बातें।",
  "Big impact.": "बड़ा असर।",
  "From the first sketch to the final launch, we focus on creating useful digital experiences that make your business easier to discover.": "पहले विचार से लेकर लॉन्च तक, हम ऐसे उपयोगी डिजिटल अनुभव बनाते हैं जो आपके व्यवसाय को ऑनलाइन ढूँढ़ना आसान करें।",
  "Website Development": "वेबसाइट डेवलपमेंट",
  "Professional websites designed to introduce your business, explain your services and help customers reach you.": "आपके व्यवसाय का परिचय देने, सेवाएँ समझाने और ग्राहकों से संपर्क आसान करने वाली पेशेवर वेबसाइटें।",
  "Discuss a website": "वेबसाइट पर बात करें",
  "Responsive Design": "रिस्पॉन्सिव डिज़ाइन",
  "Clean layouts that adapt smoothly across mobile phones, tablets and desktop screens.": "साफ़ लेआउट जो मोबाइल, टैबलेट और कंप्यूटर पर आसानी से ढलते हैं।",
  "Make it responsive": "रिस्पॉन्सिव बनाएँ",
  "UI/UX Design": "UI/UX डिज़ाइन",
  "Simple, thoughtful interfaces and page structures that help visitors find what they need.": "सरल और सोच-समझकर बनाए गए इंटरफ़ेस, जिनसे विज़िटर आसानी से ज़रूरी जानकारी पाएँ।",
  "Improve your experience": "अनुभव बेहतर करें",
  "Website Refresh": "वेबसाइट रिफ्रेश",
  "Give an existing website a clearer structure, refreshed visual style and better mobile experience.": "मौजूदा वेबसाइट को बेहतर संरचना, नया रूप और अच्छा मोबाइल अनुभव दें।",
  "Refresh my website": "मेरी वेबसाइट रिफ्रेश करें",
  "03 / SELECTED CONCEPTS": "03 / चुने हुए कॉन्सेप्ट",
  "Ideas brought": "विचारों को लाएँ",
  "to the screen.": "स्क्रीन पर।",
  "A few sample directions that demonstrate the kind of websites we can create. These are concept projects, not commissioned client work.": "ये कुछ नमूने हैं जो हमारे वेबसाइट डिज़ाइन का अंदाज़ दिखाते हैं। ये कॉन्सेप्ट प्रोजेक्ट हैं, क्लाइंट के लिए किए गए काम नहीं।",
  "CONCEPT 01 · HOSPITALITY": "कॉन्सेप्ट 01 · हॉस्पिटैलिटी",
  "Restaurant website": "रेस्तराँ वेबसाइट",
  "CONCEPT 02 · FITNESS": "कॉन्सेप्ट 02 · फिटनेस",
  "Fitness studio website": "फिटनेस स्टूडियो वेबसाइट",
  "CONCEPT 03 · PERSONAL BRAND": "कॉन्सेप्ट 03 · व्यक्तिगत ब्रांड",
  "Portfolio website": "पोर्टफोलियो वेबसाइट",
  "04 / HOW WE WORK": "04 / हमारी प्रक्रिया",
  "Clear steps.": "स्पष्ट चरण।",
  "No surprises.": "कोई अनचाहा सरप्राइज़ नहीं।",
  "A clear, collaborative workflow keeps the scope, feedback and next steps aligned from kickoff to launch.": "स्पष्ट और सहयोगी प्रक्रिया से काम का दायरा, सुझाव और अगले कदम शुरुआत से लॉन्च तक व्यवस्थित रहते हैं।",
  "Tell us about your idea": "अपने विचार के बारे में बताएँ",
  "Discovery & goals": "ज़रूरतें और लक्ष्य",
  "We discuss your business, audience, goals, required pages and features to define what the website needs to achieve.": "हम आपके व्यवसाय, दर्शकों, लक्ष्यों, ज़रूरी पेज और सुविधाओं पर बात करते हैं, ताकि वेबसाइट का उद्देश्य स्पष्ट हो।",
  "Scope & planning": "दायरा और योजना",
  "We confirm the project scope, timeline and quote, then map out the page structure and milestones before work begins.": "काम शुरू होने से पहले हम प्रोजेक्ट का दायरा, समय-सीमा और अनुमानित कीमत तय करते हैं, फिर पेज और चरणों की योजना बनाते हैं।",
  "Design & development": "डिज़ाइन और डेवलपमेंट",
  "We design and build the agreed pages as a responsive website, sharing progress at checkpoints for your feedback.": "हम तय किए गए पेजों को रिस्पॉन्सिव वेबसाइट के रूप में बनाते हैं और तय चरणों पर आपकी राय लेते हैं।",
  "Review & launch": "समीक्षा और लॉन्च",
  "We test the site across screen sizes, complete agreed refinements and help publish it after your approval and final payment.": "हम वेबसाइट को अलग-अलग स्क्रीन पर जाँचते हैं, तय सुधार करते हैं और आपकी मंज़ूरी व अंतिम भुगतान के बाद इसे प्रकाशित करने में मदद करते हैं।",
  "ANSWERS BEFORE WE BEGIN": "शुरू करने से पहले जवाब",
  "Frequently asked": "अक्सर पूछे जाने वाले",
  "questions.": "सवाल।",
  "Have another question? Send a project enquiry and tell me what you have in mind.": "कोई और सवाल है? प्रोजेक्ट की जानकारी भेजें और बताएँ कि आप क्या बनाना चाहते हैं।",
  "Ask about your project": "अपने प्रोजेक्ट के बारे में पूछें",
  "What services do you offer?": "आप कौन-सी सेवाएँ देते हैं?",
  "Website development, responsive design, UI/UX design and website refreshes for individuals, startups and businesses.": "व्यक्तियों, स्टार्टअप और व्यवसायों के लिए वेबसाइट डेवलपमेंट, रिस्पॉन्सिव डिज़ाइन, UI/UX डिज़ाइन और वेबसाइट रिफ्रेश।",
  "How is project pricing decided?": "प्रोजेक्ट की कीमत कैसे तय होती है?",
  "Every project is different. The quote is based on your goals, pages and required features; the scope and quote are discussed before work begins.": "हर प्रोजेक्ट अलग होता है। कीमत आपके लक्ष्यों, पेजों और सुविधाओं पर निर्भर करती है। काम शुरू होने से पहले दायरे और कीमत पर बात होती है।",
  "How long will my website take?": "मेरी वेबसाइट बनने में कितना समय लगेगा?",
  "Timing depends on the project scope and the feedback process. We agree on a timeline during planning before development begins.": "समय प्रोजेक्ट के दायरे और सुझावों पर निर्भर करता है। डेवलपमेंट शुरू होने से पहले योजना में समय-सीमा तय की जाती है।",
  "Will my website work on mobile?": "क्या मेरी वेबसाइट मोबाइल पर चलेगी?",
  "Yes. Responsive layouts are planned for mobile phones, tablets and desktop screens.": "हाँ। वेबसाइट को मोबाइल, टैबलेट और कंप्यूटर के लिए रिस्पॉन्सिव बनाया जाता है।",
  "Can you refresh an existing website?": "क्या आप मौजूदा वेबसाइट को रिफ्रेश कर सकते हैं?",
  "Yes. Website refreshes can improve a site's structure, visual style and mobile experience.": "हाँ। वेबसाइट रिफ्रेश से उसकी संरचना, रूप और मोबाइल अनुभव बेहतर किए जा सकते हैं।",
  "How do I get started?": "मैं शुरुआत कैसे करूँ?",
  "Send a project enquiry with your goals and requirements. We can then discuss the scope, timeline and next steps.": "अपने लक्ष्य और ज़रूरतों के साथ प्रोजेक्ट की जानकारी भेजें। फिर हम दायरे, समय-सीमा और अगले कदमों पर बात करेंगे।",
  "HAVE A PROJECT IN MIND?": "क्या आपके पास कोई प्रोजेक्ट है?",
  "Let's make something": "आइए कुछ ऐसा बनाएँ",
  "worth visiting.": "जिसे देखना अच्छा लगे।",
  "Start": "शुरू",
  "here": "यहाँ",
  "05 / GET IN TOUCH": "05 / संपर्क करें",
  "Your next idea": "आपका अगला विचार",
  "starts with a": "शुरू होता है एक",
  "hello.": "नमस्ते से।",
  "Tell us a little about your project. We'll get back to you to discuss the next steps.": "अपने प्रोजेक्ट के बारे में बताएँ। अगले कदमों पर बात करने के लिए हम आपसे संपर्क करेंगे।",
  "EMAIL": "ईमेल",
  "BASED IN": "स्थान",
  "India · Working remotely": "भारत · दूरस्थ रूप से काम",
  "Your name": "आपका नाम",
  "Email address": "ईमेल पता",
  "What do you need?": "आपको क्या चाहिए?",
  "Choose a service": "सेवा चुनें",
  "New business website": "नए व्यवसाय की वेबसाइट",
  "Landing page": "लैंडिंग पेज",
  "Website redesign": "वेबसाइट री-डिज़ाइन",
  "UI/UX design": "UI/UX डिज़ाइन",
  "Something else": "कुछ और",
  "Tell us about your project": "अपने प्रोजेक्ट के बारे में बताएँ",
  "Send project enquiry": "प्रोजेक्ट की जानकारी भेजें",
  "FormSubmit delivers enquiries to our email and may retain submissions for up to 30 days. Confirm the activation email from FormSubmit after the first submission. This website does not store enquiries.": "FormSubmit आपकी जानकारी हमारे ईमेल पर भेजता है और इसे 30 दिनों तक रख सकता है। पहली जानकारी भेजने के बाद FormSubmit का सक्रियण ईमेल स्वीकार करें। यह वेबसाइट जानकारी सहेजती नहीं है।",
  "Thoughtful websites for": "सोच-समझकर बनाई गई वेबसाइटें",
  "ambitious ideas.": "बड़े विचारों के लिए।",
  "BACK TO TOP ↑": "ऊपर जाएँ ↑",
  "DESIGNED WITH INTENTION · BUILT FOR THE WEB": "सोच-समझकर डिज़ाइन · वेब के लिए निर्मित",
  "All rights reserved.": "सर्वाधिकार सुरक्षित।",
  "Webora Technologies. All rights reserved.": "Webora Technologies. सर्वाधिकार सुरक्षित।",
  "Webora Assistant": "Webora सहायक",
  "Quick answers about working together": "साथ काम करने के बारे में तुरंत जवाब",
  "Hi! Ask me about services, pricing, project timing or how to get started.": "नमस्ते! सेवाओं, कीमत, समय या शुरुआत के बारे में पूछें।",
  "Services": "सेवाएँ",
  "Pricing": "कीमत",
  "Timeline": "समय-सीमा",
  "Ask a question": "अपना सवाल पूछें",
  "Type your question...": "अपना सवाल लिखें...",
  "Send": "भेजें",
  "Automated FAQ assistant — no live person is on this chat.": "स्वचालित FAQ सहायक — इस चैट पर कोई व्यक्ति लाइव उपलब्ध नहीं है।"
};

const translations = { hi: hindiText };
const textNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode;
while ((textNode = textWalker.nextNode())) {
  if (textNode.parentElement && !textNode.parentElement.closest("script, style")) {
    textNodes.push({ node: textNode, original: textNode.textContent });
  }
}

let currentLanguage = "en";
function translatePage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = language === "hi"
    ? "Webora Technologies | व्यवसाय को आगे बढ़ाने वाली वेबसाइटें"
    : englishTitle;
  metaDescription.content = language === "hi"
    ? "Webora Technologies व्यक्तियों, स्टार्टअप और व्यवसायों के लिए आधुनिक, रिस्पॉन्सिव वेबसाइटें बनाता है।"
    : englishDescription;
  textNodes.forEach(({ node, original }) => {
    const key = original.trim();
    const translated = language === "hi" ? translations.hi[key] : key;
    if (translated) {
      const leadingSpace = original.match(/^\s*/)[0];
      const trailingSpace = original.match(/\s*$/)[0];
      node.textContent = `${leadingSpace}${translated}${trailingSpace}`;
    } else {
      node.textContent = original;
    }
  });
  languageToggle.checked = language === "hi";
  languageLabel.textContent = language === "hi" ? "English" : "हिंदी";
  chatInput.placeholder = language === "hi" ? "अपना सवाल लिखें..." : "Type your question...";
  chatInput.setAttribute("aria-label", language === "hi" ? "अपना सवाल पूछें" : "Ask a question");
  nameInput.placeholder = language === "hi" ? "आपको किस नाम से पुकारें?" : "How should we call you?";
  projectInput.placeholder = language === "hi" ? "अपने विचार के बारे में कुछ बताएँ..." : "A few details about your idea...";
  chatToggle.setAttribute("aria-label", language === "hi" ? "Webora सहायक खोलें" : "Open Webora Assistant");
  menuButton.setAttribute("aria-label", navLinks.classList.contains("open")
    ? (language === "hi" ? "नेविगेशन बंद करें" : "Close navigation")
    : (language === "hi" ? "नेविगेशन खोलें" : "Open navigation"));
  settingsToggle.setAttribute("aria-label", language === "hi" ? "सेटिंग्स खोलें" : "Open settings");
  document.querySelector(".nav").setAttribute("aria-label", language === "hi" ? "मुख्य नेविगेशन" : "Main navigation");
  chatClose.setAttribute("aria-label", language === "hi" ? "चैट बंद करें" : "Close chat");
}

settingsToggle.addEventListener("click", () => {
  const isOpen = settingsPanel.hidden;
  settingsPanel.hidden = !isOpen;
  settingsToggle.setAttribute("aria-expanded", String(isOpen));
});

themeToggle.addEventListener("change", () => {
  document.body.dataset.theme = themeToggle.checked ? "light" : "dark";
  document.querySelector('meta[name="theme-color"]').content = themeToggle.checked ? "#f4f6fb" : "#0b1020";
});

languageToggle.addEventListener("change", () => {
  translatePage(languageToggle.checked ? "hi" : "en");
});

textToggle.addEventListener("change", () => {
  document.body.classList.toggle("larger-text", textToggle.checked);
});

contrastToggle.addEventListener("change", () => {
  document.body.classList.toggle("high-contrast", contrastToggle.checked);
});

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen
    ? (currentLanguage === "hi" ? "नेविगेशन बंद करें" : "Close navigation")
    : (currentLanguage === "hi" ? "नेविगेशन खोलें" : "Open navigation"));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", currentLanguage === "hi" ? "नेविगेशन खोलें" : "Open navigation");
    settingsPanel.hidden = true;
    settingsToggle.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (event) => {
  if (!settingsPanel.hidden && !event.target.closest(".settings-panel, .settings-toggle")) {
    settingsPanel.hidden = true;
    settingsToggle.setAttribute("aria-expanded", "false");
  }
});

function appendChatMessage(message, type) {
  const bubble = document.createElement("p");
  bubble.className = `chat-message ${type}-message`;
  bubble.textContent = message;
  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

const chatbotAnswers = {
  en: {
    services: "Webora offers website development, responsive design, UI/UX design and website refreshes.",
    pricing: "Pricing depends on the pages, features and scope of your project. Send an enquiry for a tailored quote before work begins.",
    timeline: "The timeline depends on the project scope and feedback. We agree on a schedule during planning.",
    process: "We begin by discussing your goals, confirm scope and timeline, build the agreed website, then review and prepare it for launch.",
    responsive: "Yes. Websites are designed to adapt to mobile phones, tablets and desktop screens.",
    refresh: "Yes. Webora can refresh an existing website's structure, visual style and mobile experience.",
    contact: "Use the project enquiry form on this page or email weboratechnologieswt@gmail.com.",
    fallback: "I can answer questions about services, pricing, timing and the project process. For anything else, please send a project enquiry."
  },
  hi: {
    services: "Webora वेबसाइट डेवलपमेंट, रिस्पॉन्सिव डिज़ाइन, UI/UX डिज़ाइन और वेबसाइट रिफ्रेश सेवाएँ देता है।",
    pricing: "कीमत आपके प्रोजेक्ट के पेज, सुविधाओं और दायरे पर निर्भर करती है। काम शुरू होने से पहले अनुमानित कीमत के लिए जानकारी भेजें।",
    timeline: "समय प्रोजेक्ट के दायरे और सुझावों पर निर्भर करता है। योजना बनाते समय समय-सीमा तय की जाती है।",
    process: "पहले हम आपके लक्ष्य समझते हैं, फिर दायरा और समय तय करते हैं, वेबसाइट बनाते हैं और समीक्षा के बाद लॉन्च की तैयारी करते हैं।",
    responsive: "हाँ। वेबसाइट मोबाइल, टैबलेट और कंप्यूटर स्क्रीन के अनुसार ढलने के लिए बनाई जाती है।",
    refresh: "हाँ। Webora मौजूदा वेबसाइट की संरचना, रूप और मोबाइल अनुभव को बेहतर कर सकता है।",
    contact: "इस पेज पर प्रोजेक्ट जानकारी वाला फ़ॉर्म भरें या weboratechnologieswt@gmail.com पर ईमेल करें।",
    fallback: "मैं सेवाओं, कीमत, समय और काम की प्रक्रिया के बारे में बता सकता हूँ। किसी और सवाल के लिए कृपया प्रोजेक्ट जानकारी वाला फ़ॉर्म भेजें।"
  }
};

function getChatAnswer(question) {
  const text = question.toLowerCase();
  const patterns = [
    [/price|pricing|cost|budget|quote|कीमत|लागत|बजट|शुल्क/, "pricing"],
    [/how long|timeline|how much time|कितना समय|समय-सीमा|समय सीमा|कब तक/, "timeline"],
    [/mobile|responsive|phone|मोबाइल|रिस्पॉन्सिव|फोन/, "responsive"],
    [/refresh|redesign|existing|मौजूदा|रिफ्रेश|री-डिज़ाइन/, "refresh"],
    [/process|start|begin|शुरू|प्रक्रिया|कैसे करें/, "process"],
    [/contact|email|reach|संपर्क|ईमेल/, "contact"],
    [/service|offer|सेवा|क्या करते/, "services"]
  ];
  const match = patterns.find(([pattern]) => pattern.test(text));
  return chatbotAnswers[currentLanguage][match ? match[1] : "fallback"];
}

function submitChatQuestion(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion) return;
  appendChatMessage(cleanQuestion, "user");
  appendChatMessage(getChatAnswer(cleanQuestion), "assistant");
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitChatQuestion(chatInput.value);
  chatInput.value = "";
  chatInput.focus();
});

chatMessages.addEventListener("click", (event) => {
  const suggestion = event.target.closest("[data-topic]");
  if (!suggestion) return;
  const questions = {
    en: {
      services: "What services do you offer?",
      pricing: "How much does a website cost?",
      timeline: "How long will it take?"
    },
    hi: {
      services: "आप कौन-सी सेवाएँ देते हैं?",
      pricing: "वेबसाइट की कीमत कितनी है?",
      timeline: "इसमें कितना समय लगेगा?"
    }
  };
  submitChatQuestion(questions[currentLanguage][suggestion.dataset.topic]);
});

function setChatOpen(isOpen) {
  chatPanel.hidden = !isOpen;
  chatToggle.setAttribute("aria-expanded", String(isOpen));
  chatToggle.setAttribute("aria-label", isOpen
    ? (currentLanguage === "hi" ? "Webora सहायक बंद करें" : "Close Webora Assistant")
    : (currentLanguage === "hi" ? "Webora सहायक खोलें" : "Open Webora Assistant"));
  if (isOpen) chatInput.focus();
}

chatToggle.addEventListener("click", () => {
  setChatOpen(chatPanel.hidden);
});
chatClose.addEventListener("click", () => setChatOpen(false));

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!settingsPanel.hidden) {
    settingsPanel.hidden = true;
    settingsToggle.setAttribute("aria-expanded", "false");
  }
  if (!chatPanel.hidden) setChatOpen(false);
  navLinks.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
});

translatePage("en");

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}
