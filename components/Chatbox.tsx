"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface UserInfo {
  name: string;
  age: string;
  phone: string;
}

interface Message {
  sender: "user" | "bot";
  text: string;
}

const initialQuestions = [
  { key: "name", question: "What is your name?" },
  { key: "age", question: "What is your age?" },
  { key: "phone", question: "What is your phone number?" },
];

export default function Chatbox() {
  const [open, setOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: "", age: "", phone: "" });
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [chatStarted, setChatStarted] = useState(false);

  // Bot reply samples for demo
  const contactNumber = "(623) 846-7597";
  const botReplies = [
    `Hi! How can I assist you today?\nContact: ${contactNumber}`,
    `Can you please provide more details?\nContact: ${contactNumber}`,
    `Your request has been noted.\nContact: ${contactNumber}`,
    `Is there anything else I can help you with?\nContact: ${contactNumber}`
  ];
  let botReplyIndex = 0;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (!chatStarted) {
      const currentKey = initialQuestions[step].key as keyof UserInfo;
      setUserInfo({ ...userInfo, [currentKey]: input });
      setMessages([
        ...messages,
        { sender: "user", text: input },
        { sender: "bot", text: step < 2 ? initialQuestions[step + 1].question : "Thank you! Let's start chatting." },
      ]);
      setInput("");
      if (step < 2) {
        setStep(step + 1);
      } else {
        setChatStarted(true);
        // Start chat with bot's greeting
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { sender: "bot" as const, text: botReplies[0] }
          ]);
        }, 800);
      }
    } else {
      // User sends a message
      setMessages((prev) => [
        ...prev,
        { sender: "user" as const, text: input }
      ]);
      setInput("");
      // Bot replies after short delay
      setTimeout(() => {
        botReplyIndex = (messages.filter(m => m.sender === "bot").length + 1) % botReplies.length;
        setMessages((prev) => [
          ...prev,
          { sender: "bot" as const, text: botReplies[botReplyIndex] }
        ]);
      }, 900);
    }
  };

  const handleCall = () => {
    alert("Call OK");
  };

  React.useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ sender: "bot", text: initialQuestions[0].question }]);
    }
  }, []);

  return (
    <>
      {/* Floating Chat Icon Button */}
      {!open && (
        <button
          className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none"
          aria-label="Open Chat"
          onClick={() => setOpen(true)}
        >
          <img src="/chat-icon.svg" alt="Chat Icon" className="w-8 h-8" />
        </button>
      )}
      {/* Chatbox UI */}
      {open && (
        <div className="fixed bottom-4 right-4 w-full max-w-sm z-50 rounded-lg shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex flex-col h-[70vh] sm:h-[60vh] animate-fade-in">
          <div className="flex items-center justify-between p-3 border-b border-gray-100 dark:border-gray-800 bg-blue-600 rounded-t-lg">
            <span className="text-white font-semibold">Chat with Us</span>
            <button
              className="text-white hover:text-gray-200 text-xl font-bold focus:outline-none"
              aria-label="Close Chat"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-4 py-2 rounded-xl max-w-[80%] text-sm ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex gap-2 items-center bg-white dark:bg-gray-900">
            <input
              type={step === 1 ? "number" : step === 2 ? "tel" : "text"}
              value={input}
              onChange={handleInput}
              placeholder={
                !chatStarted ? initialQuestions[step].question : "Type your message..."
              }
              className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              disabled={step > 2 && !chatStarted}
            />
            <Button onClick={handleSend} disabled={!input.trim()} className="text-gray-900 dark:text-white">
              {chatStarted ? "Send" : "Next"}
            </Button>

          </div>
        </div>
      )}
    </>
  );
}
