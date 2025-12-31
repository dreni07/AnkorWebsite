import { useCounter } from '../hooks/counter-hooks';
import './Counter.css';

export function Counter () {
    const { count1, count2, count3, sectionRef, texts } = useCounter();

    return (
        <section className="counter" ref={sectionRef}>
            <div className="container">
                <div className="counter-box counter-1">
                    <div className="counter-number">{count1}+</div>
                    <div className="counter-text">{texts.text1}</div>
                </div>
                <div className="counter-box counter-2">
                    <div className="counter-number">{count2}k+</div>
                    <div className="counter-text">{texts.text2}</div>
                </div>
                <div className="counter-box counter-3">
                    <div className="counter-number">{count3}+</div>
                    <div className="counter-text">{texts.text3}</div>
                </div>
            </div>
        </section>
    )
}