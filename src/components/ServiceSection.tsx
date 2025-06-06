import React, { useEffect, useState } from 'react'
import { ShimmerButton } from './magicui/shimmer-button'
import { useTheme } from './contexts/ThemeContext'
import { Check, Clock, List, X } from 'lucide-react'
import { InteractiveHoverButton } from './magicui/interactive-hover-button'

function ServiceSection() {

    const { theme } = useTheme()
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        setIsDark(theme === 'dark')
    }, [theme])
    return (
        <div className='flex items-center flex-col justify-center text-center'>
            <ShimmerButton className="shadow-2xl lg:mb-[25px] mb-[15px]">
                <span className={`whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight ${isDark ? "text-white from-white to-slate-900/10" : "text-white"} lg:text-lg`}>
                    Our Services
                </span>
            </ShimmerButton>

            <div className='flex flex-col items-center justify-center gap-4 max-w-[900px] w-full mx-auto'>
                <h2 className={`${isDark ? "text-white" : "text-black"} md:text-[40px] text-[25px] font-bold`}>AI Solutions That Take Your Business to the Next Level</h2>
            </div>
            <div className="bg-black text-white flex items-center justify-center p-6">
                <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl items-center">

                    {/* Left Section - Task Box */}
                    <div className="bg-[#0e0e0e] rounded-xl p-6 w-full max-w-md shadow-lg">
                        {/* Tabs */}
                        <div className="flex space-x-3 mb-6">
                            <button className="bg-white text-black px-3 py-1 text-sm rounded">All Tasks</button>
                            <button className="bg-[#1a1a1a] px-3 py-1 text-sm rounded">Waiting for approval</button>
                        </div>

                        {/* Task Items */}
                        <div className="space-y-4">
                            {/* Task 1 */}
                            <div className="flex justify-between items-center bg-[#1a1a1a] p-3 rounded-md">
                                <div>
                                    <p className="font-semibold text-sm">Payroll management</p>
                                    <p className="text-xs text-gray-400">Due on 2nd July</p>
                                </div>
                                <Clock size={18} />
                            </div>

                            {/* Task 2 */}
                            <div className="flex justify-between items-center bg-[#1a1a1a] p-3 rounded-md">
                                <div>
                                    <p className="font-semibold text-sm">Employee Tracking</p>
                                    <p className="text-xs text-gray-400">2 days ago</p>
                                </div>
                                <Check size={18} />
                            </div>

                            {/* Task 3 */}
                            <div className="flex justify-between items-center bg-[#1a1a1a] p-3 rounded-md">
                                <div>
                                    <p className="font-semibold text-sm">Social media post</p>
                                    <p className="text-xs text-gray-400">Cancelled by user</p>
                                </div>
                                <X size={18} />
                            </div>

                            {/* Task 4 */}
                            <div className="flex justify-between items-center bg-[#1a1a1a] p-3 rounded-md">
                                <div>
                                    <p className="font-semibold text-sm">Lead list</p>
                                    <p className="text-xs text-gray-400">70% prepared</p>
                                </div>
                                <List size={18} />
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Content */}
                    <div className="text-left space-y-5">
                        {/* <button className="bg-[#1a1a1a] px-4 py-2 rounded-full text-sm">Workflow Automation</button> */}
                        <ShimmerButton className="shadow-2xl lg:mb-[25px] mb-[15px]">
                            <span className={`whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight ${isDark ? "text-white from-white to-slate-900/10" : "text-white"} lg:text-lg`}>
                                Workflow Automation
                            </span>
                        </ShimmerButton>

                        <h1 className="text-3xl font-bold leading-snug">
                            Automate repetitive tasks
                        </h1>

                        <p className="text-gray-400 text-sm">
                            We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains saving time and cutting down errors.
                        </p>

                        <div className="flex gap-[20px] lg:mt-[25px] mt-[15px]">
                            {/* <button className="bg-white text-black px-4 py-2 rounded-full text-sm">Internal Task Bots</button> */}
                            <InteractiveHoverButton className={` bg-[#814AC8] ${isDark ? "text-white" : "text-white"}`}>
                                Internal Task Bots
                            </InteractiveHoverButton>
                            {/* <button className="bg-[#1a1a1a] px-4 py-2 rounded-full text-sm border border-gray-700">100+ Automations</button> */}
                            <ShimmerButton className="shadow-2xl">
                            <span className={`whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight ${isDark ? "text-white from-white to-slate-900/10" : "text-white"}`}>
                                100+ Automations
                            </span>
                        </ShimmerButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection