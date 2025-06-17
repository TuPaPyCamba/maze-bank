import { FaCreditCard } from "react-icons/fa6";
import { MdAccountBalance } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdCreditScore } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoCashOutline } from "react-icons/io5";

const OurProducts = () => {
    return (
        <div className="bg-gradient-to-br from-MazeRedColor to-red-800 py-16 px-6">
            <div className="mx-auto max-w-[1400px]">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-medium text-white mb-4">
                        Our Products
                    </h2>
                    <p className="text-lg md:text-xl text-red-100 max-w-2xl mx-auto">
                        Discover our comprehensive range of financial solutions designed to meet all your banking needs
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
                    {/* Credit Card */}
                    <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <FaCreditCard className="text-white text-2xl" />
                            </div>
                            <h3 className="font-bold text-white text-lg mb-2 group-hover:text-red-200 transition-colors">
                                Credit Card
                            </h3>
                            <p className="text-red-100 text-sm opacity-80">
                                Premium rewards & benefits
                            </p>
                        </div>
                        {/* Hover effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Accounts */}
                    <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <MdAccountBalance className="text-white text-2xl" />
                            </div>
                            <h3 className="font-bold text-white text-lg mb-2 group-hover:text-blue-200 transition-colors">
                                Accounts
                            </h3>
                            <p className="text-red-100 text-sm opacity-80">
                                Smart banking solutions
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Investments */}
                    <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <FaMoneyBillTrendUp className="text-white text-2xl" />
                            </div>
                            <h3 className="font-bold text-white text-lg mb-2 group-hover:text-green-200 transition-colors">
                                Investments
                            </h3>
                            <p className="text-red-100 text-sm opacity-80">
                                Grow your wealth
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Personal Credit */}
                    <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <MdCreditScore className="text-white text-2xl" />
                            </div>
                            <h3 className="font-bold text-white text-lg mb-2 group-hover:text-purple-200 transition-colors">
                                Personal Credit
                            </h3>
                            <p className="text-red-100 text-sm opacity-80">
                                Flexible financing options
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Transfers */}
                    <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <FaMoneyBillTransfer className="text-white text-2xl" />
                            </div>
                            <h3 className="font-bold text-white text-lg mb-2 group-hover:text-orange-200 transition-colors">
                                Transfers
                            </h3>
                            <p className="text-red-100 text-sm opacity-80">
                                Fast & secure transfers
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Payments */}
                    <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <IoCashOutline className="text-white text-2xl" />
                            </div>
                            <h3 className="font-bold text-white text-lg mb-2 group-hover:text-teal-200 transition-colors">
                                Payments
                            </h3>
                            <p className="text-red-100 text-sm opacity-80">
                                Easy bill payments
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProducts