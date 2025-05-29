'use client'

import React, { useEffect, useState } from 'react';
import { Moon, Sun, Sparkles, Code, Wand2 } from 'lucide-react';
import GenerateButton from '@/components/GenerateButton';
import { useTheme } from '@/components/contexts/ThemeContext';

export default function Page() {
    //   const [isDark, setIsDark] = useState(true);
    const { theme } = useTheme()
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        setIsDark(theme === 'dark')
    }, [theme])
    const [prompt, setPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = async () => {
        if (!prompt.trim()) return;

        setIsGenerating(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsGenerating(false);

        // Here you would typically call your code generation API
        console.log('Generating code for:', prompt);
    };

    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
            handleGenerate();
        }
    };

    return (
        <div className={`min-h-screen transition-all duration-500 ${isDark
                ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900'
                : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'
            }`}>
            {/* Grid Background */}
            <div className={`absolute inset-0 opacity-20 pointer-events-none ${isDark ? 'bg-slate-800' : 'bg-slate-100'
                }`}
                style={{
                    backgroundImage: `radial-gradient(circle, ${isDark ? '#475569' : '#94a3b8'} 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }} />


            <div className="relative z-10 min-h-screen flex flex-col">
                {/* Theme Toggle */}
                {/* <div className="absolute top-6 right-6 z-20">
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${isDark
                                ? 'bg-slate-800/50 hover:bg-slate-700/50 text-yellow-400'
                                : 'bg-white/50 hover:bg-white/70 text-orange-500'
                            } backdrop-blur-sm border ${isDark ? 'border-slate-700' : 'border-slate-200'
                            }`}
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div> */}

                {/* Main Content */}
                <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
                    <div className="w-full max-w-4xl mx-auto text-center space-y-12">

                        {/* Title Section */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-center space-x-4 mb-8">
                                <div className={`p-3 rounded-xl ${isDark ? 'bg-blue-500/20' : 'bg-blue-500/10'
                                    } backdrop-blur-sm`}>
                                    <Code className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'
                                        }`} />
                                </div>
                            </div>

                            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'
                                }`}>
                                Prompt.{' '}
                                <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'
                                    } relative`}>
                                    Generate.
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg opacity-75" />
                                </span>{' '}
                                Deliver.
                            </h1>

                            <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'
                                }`}>
                                Build responsive Tailwind sites with AI-powered prompts.{' '}
                                <span className={`${isDark ? 'text-slate-400' : 'text-slate-500'
                                    } text-base`}>
                                    {/* (formerly Tailwind AI) */}
                                </span>
                            </p>
                        </div>

                        {/* Generator Section */}
                        <div className="space-y-8">
                            <div className={`${isDark ? 'bg-slate-800/30' : 'bg-white/60'
                                } backdrop-blur-xl rounded-2xl border ${isDark ? 'border-slate-700/50' : 'border-slate-200/50'
                                } p-6 md:p-8 shadow-2xl`}>

                                <div className="space-y-6">
                                    {/* Prompt Input */}
                                    <div className="relative">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <Sparkles className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'
                                                }`} />
                                            <span className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'
                                                }`}>
                                                Generate from scratch
                                            </span>
                                        </div>

                                        <textarea
                                            value={prompt}
                                            onChange={(e) => setPrompt(e.target.value)}
                                            onKeyDown={handleKeyPress}
                                            placeholder="Start generating a beautiful Tailwind component..."
                                            className={`w-full h-32 md:h-24 px-4 py-3 rounded-xl resize-none transition-all duration-300 ${isDark
                                                    ? 'bg-slate-900/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:bg-slate-900/70'
                                                    : 'bg-white/80 border-slate-300 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:bg-white'
                                                } border-2 focus:outline-none focus:ring-4 ${isDark ? 'focus:ring-blue-500/20' : 'focus:ring-blue-500/10'
                                                } backdrop-blur-sm`}
                                        />

                                        <div className={`absolute bottom-3 right-3 text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'
                                            }`}>
                                            {prompt.length}/1500
                                        </div>
                                    </div>

                                    {/* Options Bar */}
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isDark
                                                    ? 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                                }`}>
                                                Public
                                            </button>
                                            <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isDark
                                                    ? 'text-slate-400 hover:bg-slate-700/30 hover:text-slate-300'
                                                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-700'
                                                }`}>
                                                Private
                                            </button>
                                            {/* <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                        isDark 
                          ? 'text-slate-400 hover:bg-slate-700/30 hover:text-slate-300' 
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-700'
                      }`}>
                        <span>📷</span>
                        <span>Image</span>
                                                </button>
                                                <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                                                    isDark 
                                                    ? 'text-slate-400 hover:bg-slate-700/30 hover:text-slate-300' 
                                                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-700'
                                                }`}>
                                                    <span>⚛️</span>
                                                    <span>React</span>
                                                </button> */}
                                        </div>

                                        {/* Generate Button */}
                                        {/* <button
                      onClick={handleGenerate}
                      disabled={!prompt.trim() || isGenerating}
                      className={`px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:opacity-50 flex items-center space-x-2 ${
                        isGenerating
                          ? 'bg-slate-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl cursor-pointer'
                      }`}
                    >
                      {isGenerating ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Generating...</span>
                        </>
                      ) : (
                        <>
                          <Wand2 size={16} />
                          <span>Generate</span>
                        </>
                      )}
                                            </button> */}
                                        <GenerateButton isGenerating={isGenerating} onClick={handleGenerate} />
                                    </div>
                                </div>
                            </div>

                            {/* Helper Text */}
                            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'
                                } max-w-2xl mx-auto`}>
                                Press <kbd className={`px-2 py-1 rounded text-xs ${isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-600'
                                    }`}>
                                    {navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'} + Enter
                                </kbd> to generate quickly
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}