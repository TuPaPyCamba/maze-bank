import { FaCreditCard, FaRegCreditCard } from "react-icons/fa6";
import { MdAccountBalance } from "react-icons/md";

const OurCards = () => {
    return (
        <div className="py-16 px-6">
            <div className="mx-auto max-w-[1400px]">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4">
                        Our Cards
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose the perfect card for your lifestyle with exclusive benefits and rewards
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Credit Card 1 - Premium */}
                    <div className="group relative">
                        <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-2xl p-6 h-64 relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                            {/* Card Design */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                            {/* Card Content */}
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="text-white">
                                        <h3 className="text-xl font-bold mb-1">MazeBank</h3>
                                        <p className="text-purple-200 text-sm">Premium Credit</p>
                                    </div>
                                    <FaCreditCard className="text-white/80 text-2xl" />
                                </div>

                                <div className="text-white">
                                    <div className="text-2xl font-mono mb-2">**** **** **** 1234</div>
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-purple-200 text-xs">CARD HOLDER</p>
                                            <p className="text-white font-medium">JOHN DOE</p>
                                        </div>
                                        <div>
                                            <p className="text-purple-200 text-xs">EXPIRES</p>
                                            <p className="text-white font-medium">12/28</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card Info */}
                        <div className="mt-6 text-center">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Credit Card</h4>
                            <p className="text-gray-600 mb-4">Unlimited rewards & exclusive benefits</p>
                            <ul className="text-sm text-gray-500 space-y-1">
                                <li>• 3% cashback on all purchases</li>
                                <li>• No annual fee first year</li>
                                <li>• Travel insurance included</li>
                            </ul>
                        </div>
                    </div>

                    {/* Credit Card 2 - Classic */}
                    <div className="group relative">
                        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-6 h-64 relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                            {/* Card Design */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                            {/* Card Content */}
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="text-white">
                                        <h3 className="text-xl font-bold mb-1">MazeBank</h3>
                                        <p className="text-blue-200 text-sm">Classic Credit</p>
                                    </div>
                                    <FaRegCreditCard className="text-white/80 text-2xl" />
                                </div>

                                <div className="text-white">
                                    <div className="text-2xl font-mono mb-2">**** **** **** 5678</div>
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-blue-200 text-xs">CARD HOLDER</p>
                                            <p className="text-white font-medium">JANE SMITH</p>
                                        </div>
                                        <div>
                                            <p className="text-blue-200 text-xs">EXPIRES</p>
                                            <p className="text-white font-medium">09/27</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card Info */}
                        <div className="mt-6 text-center">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Classic Credit Card</h4>
                            <p className="text-gray-600 mb-4">Perfect for everyday spending</p>
                            <ul className="text-sm text-gray-500 space-y-1">
                                <li>• 1.5% cashback on purchases</li>
                                <li>• Low annual fee</li>
                                <li>• Fraud protection</li>
                            </ul>
                        </div>
                    </div>

                    {/* Debit Card 1 - Premium */}
                    <div className="group relative">
                        <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 rounded-2xl p-6 h-64 relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                            {/* Card Design */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                            {/* Card Content */}
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="text-white">
                                        <h3 className="text-xl font-bold mb-1">MazeBank</h3>
                                        <p className="text-emerald-200 text-sm">Premium Debit</p>
                                    </div>
                                    <MdAccountBalance className="text-white/80 text-2xl" />
                                </div>

                                <div className="text-white">
                                    <div className="text-2xl font-mono mb-2">**** **** **** 9012</div>
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-emerald-200 text-xs">CARD HOLDER</p>
                                            <p className="text-white font-medium">MIKE JOHNSON</p>
                                        </div>
                                        <div>
                                            <p className="text-emerald-200 text-xs">EXPIRES</p>
                                            <p className="text-white font-medium">03/29</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card Info */}
                        <div className="mt-6 text-center">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Debit Card</h4>
                            <p className="text-gray-600 mb-4">Access your money with style</p>
                            <ul className="text-sm text-gray-500 space-y-1">
                                <li>• No monthly fees</li>
                                <li>• ATM fee reimbursements</li>
                                <li>• Mobile banking access</li>
                            </ul>
                        </div>
                    </div>

                    {/* Debit Card 2 - Student */}
                    <div className="group relative">
                        <div className="bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 rounded-2xl p-6 h-64 relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                            {/* Card Design */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                            {/* Card Content */}
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="text-white">
                                        <h3 className="text-xl font-bold mb-1">MazeBank</h3>
                                        <p className="text-orange-200 text-sm">Student Debit</p>
                                    </div>
                                    <MdAccountBalance className="text-white/80 text-2xl" />
                                </div>

                                <div className="text-white">
                                    <div className="text-2xl font-mono mb-2">**** **** **** 3456</div>
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-orange-200 text-xs">CARD HOLDER</p>
                                            <p className="text-white font-medium">SARAH WILSON</p>
                                        </div>
                                        <div>
                                            <p className="text-orange-200 text-xs">EXPIRES</p>
                                            <p className="text-white font-medium">06/28</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card Info */}
                        <div className="mt-6 text-center">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Student Debit Card</h4>
                            <p className="text-gray-600 mb-4">Perfect for students</p>
                            <ul className="text-sm text-gray-500 space-y-1">
                                <li>• No monthly maintenance fee</li>
                                <li>• Free ATM withdrawals</li>
                                <li>• Budgeting tools included</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <button className="bg-MazeRedColor text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        Apply for a Card
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OurCards