import './Faq.css';
import { useFaq } from '../hooks/faq-hooks';

export function Faq () {
    const { openIndex, toggleFaq } = useFaq();

    const faqItems = [
        {
            question: "What services does Ankor offer?",
            answer: "Ankor provides comprehensive IT outsourcing services including software development, maintenance & support, and QA & testing services."
        },
        {
            question: "Why choose Ankor for IT outsourcing?",
            answer: "We combine deep business analysis with strategic long-term growth focus, ensuring your IT solutions drive real business value."
        },
        {
            question: "What technologies and frameworks do you use?",
            answer: "We work with a wide range of modern technologies and frameworks tailored to your specific project needs and requirements."
        },
        {
            question: "How do you ensure code quality and security?",
            answer: "We follow industry best practices, conduct thorough code reviews, and implement comprehensive security measures throughout the development process."
        },
        {
            question: "What is your development process?",
            answer: "Our development process focuses on understanding your needs first, then delivering strategic solutions that enhance service delivery, efficiency, and innovation."
        },
        {
            question: "Do you provide ongoing maintenance and support?",
            answer: "Yes, we offer comprehensive maintenance and support services to ensure your systems continue to perform optimally after deployment."
        },
        {
            question: "How do you handle project communication and collaboration?",
            answer: "We act as an extension of your team, ensuring seamless collaboration through transparent communication and flexible project management approaches."
        },
        {
            question: "What makes Ankor different from other IT outsourcing companies?",
            answer: "Our approach combines strategic thinking with transparency and flexibility. We focus on long-term growth, provide no hidden costs, and deliver fully customized solutions."
        }
    ];

    return (
        <>
            <section id="faq" className="faq">
                <div className="container">
                    <div className="faq-text">
                        <p className="faq-label">GOT QUESTIONS?</p>
                        <h1 className="faq-title">Frequently Asked Questions</h1>
                    </div>
                    
                    <div className="faq-container">
                        {faqItems.map((item, index) => (
                            <div key={index} className="faq-item">
                                <div 
                                    className="faq-question" 
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h1 className="faq-question-text">{item.question}</h1>
                                    <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                </div>
                                {openIndex === index && (
                                    <div className="faq-answer">
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
