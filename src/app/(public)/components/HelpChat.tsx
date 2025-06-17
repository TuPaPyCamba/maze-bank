"use client"

import { useState } from "react"
import { FaCommentDots, FaTimes } from "react-icons/fa"

const HelpChat = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleChat = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col overflow-hidden mb-4 border border-gray-200">
                    {/* Chat Header */}
                    <div className="bg-MazeRedColor text-white p-4 flex justify-between items-center">
                        <h3 className="font-bold text-lg">MazeBank Support</h3>
                        <button
                            onClick={toggleChat}
                            className="text-white hover:text-gray-200 focus:outline-none"
                            aria-label="Close chat"
                        >
                            <FaTimes size={20} />
                        </button>
                    </div>

                    {/* Chat Body - Placeholder */}
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50 text-gray-700">
                        <p>Welcome to MazeBank chat support!</p>
                        <p>How can I help you today?</p>
                        {/* Add chat messages here */}
                    </div>

                    {/* Chat Input - Placeholder */}
                    <div className="p-4 border-t border-gray-200 bg-white">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-MazeRedColor"
                        />
                    </div>
                </div>
            )}

            {/* Floating Action Button */}
            <button
                onClick={toggleChat}
                className="bg-MazeRedColor text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-300 transform hover:scale-110"
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
            </button>
        </div>
    )
}

export default HelpChat