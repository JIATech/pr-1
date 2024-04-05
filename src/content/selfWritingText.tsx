import React, { useState, useEffect } from "react";
import "./selfWritingText.css";

interface SelfWritingTextProps {
    phrases: string[];
    erase: boolean;
    cursor: boolean;
}

const SelfWritingText: React.FC<SelfWritingTextProps> = ({ phrases, erase, cursor }) => {
    const [text, setText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isWriting, setIsWriting] = useState(true);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (isWriting) {
            if (text.length < phrases[phraseIndex].length) {
                timeoutId = setTimeout(() => {
                    setText(phrases[phraseIndex].slice(0, text.length + 1));
                }, 100);
            } else {
                timeoutId = setTimeout(() => {
                    setIsWriting(false);
                }, 500);
            }
        } else if (erase) {
            if (text.length > 0) {
                timeoutId = setTimeout(() => {
                    setText(text.slice(0, -1));
                }, 50);
            } else {
                setIsWriting(true);
                setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            }
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [text, phrases, erase, cursor, phraseIndex, isWriting]);

    if (cursor) {
        return (
            <div className="self-writing-text">
                {text}
                <span className="cursor" />
            </div>
        );
    } else {
        return <div className="self-writing-text">{text}</div>;
    }
};

export default SelfWritingText;
