"use client"

import { useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import { type FAQItem } from "@/mock/FAQs"

interface FQAProps {
    title?: string;
    description?: string;
    faqItems: FAQItem[];
}

const FQA = ({ title = "Preguntas Frecuentes", description = "Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.", faqItems }: FQAProps) => {
    const [openItemId, setOpenItemId] = useState<number | null>(null)

    const toggleItem = (id: number) => {
        setOpenItemId(openItemId === id ? null : id)
    }

    return (
        <div className="py-16 px-6">
            <div className="mx-auto max-w-[1000px]">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqItems.map((item: FAQItem) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                            <button
                                className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-MazeRedColor transition-colors duration-200"
                                onClick={() => toggleItem(item.id)}
                                aria-expanded={openItemId === item.id}
                                aria-controls={`faq-answer-${item.id}`}
                            >
                                {item.question}
                                <FaChevronDown
                                    className={`w-5 h-5 transition-transform duration-300 ${openItemId === item.id ? "rotate-180" : "rotate-0"
                                        }`}
                                />
                            </button>
                            <div
                                id={`faq-answer-${item.id}`}
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openItemId === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-5 pt-4 text-gray-600 border-t border-gray-100">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FQA