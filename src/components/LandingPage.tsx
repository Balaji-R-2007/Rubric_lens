import React from 'react';
import { motion } from "motion/react";
import { GraduationCap, Upload, CheckSquare, BarChart2, Zap, ArrowRight, Mail, Github, Twitter, Linkedin } from 'lucide-react';

interface LandingPageProps {
    onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="flex justify-center mb-6">
                        <GraduationCap className="w-20 h-20 text-blue-600" />
                    </div>
                    <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                        <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="block">Rubric-Lens</motion.span>
                        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="block text-blue-600">AI-Powered Assignment Evaluation</motion.span>
                    </h1>
                    <motion.p
                        initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.6, duration:0.6}}
                        className="max-w-2xl mx-auto text-xl text-gray-500 mb-10">
                        A smart tool for educators to automatically evaluate student submissions against customizable rubrics using generative AI.
                    </motion.p>
                    <motion.button
                        whileHover={{scale:1.05}} whileTap={{scale:0.95}} initial={{opacity:0}} animate={{opacity:1}} transition={{default:{duration:0.5}, opacity:{delay:0.4, duration:0.8}}}
                        onClick={onGetStarted}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg text-lg shadow-md transition-colors">
                        Get Started
                    </motion.button>
                </div>
            </div>

            {/* Features Section */}
            <motion.div
                initial= {{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
                className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">How Rubric-Lens Works</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Simplify your grading process with AI-powered assessment
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Feature 1 */}
                        <motion.div
                            whileHover={{scale:1.05}} whileTap={{scale:0.95}} initial={{opacity:0}} animate={{opacity:1}} transition={{default:{duration:0.5}, opacity:{delay:0.8, duration:1}}}
                            className=" group bg-blue-50 p-8 rounded-lg shadow-sm">
                            <div className="flex justify-center mb-4">
                                <Upload className="w-12 h-12 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Upload Submissions</h3>
                            <p className="text-gray-600">
                                Upload images or PDF documents containing student work for evaluation.
                            </p>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div
                            whileHover={{scale:1.05}} whileTap={{scale:0.95}} initial={{opacity:0}} animate={{opacity:1}} transition={{default:{duration:0.5}, opacity:{delay:0.8, duration:1}}}
                            className="bg-blue-50 p-8 rounded-lg shadow-sm">
                            <div className="flex justify-center mb-4">
                                <CheckSquare className="w-12 h-12 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Customize Rubrics</h3>
                            <p className="text-gray-600">
                                Create and customize evaluation criteria with flexible scoring scales to match your assessment needs.
                            </p>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div
                            whileHover={{scale:1.05}} whileTap={{scale:0.95}} initial={{opacity:0}} animate={{opacity:1}} transition={{default:{duration:0.5}, opacity:{delay:0.8, duration:1}}} 
                            className="bg-blue-50 p-8 rounded-lg shadow-sm">
                            <div className="flex justify-center mb-4">
                                <Zap className="w-12 h-12 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Evaluation</h3>
                            <p className="text-gray-600">
                                Let our advanced AI analyze submissions against your rubric for consistent and objective assessment.
                            </p>
                        </motion.div>

                        {/* Feature 4 */}
                        <motion.div
                            whileHover={{scale:1.05}} whileTap={{scale:0.95}} initial={{opacity:0}} animate={{opacity:1}} transition={{default:{duration:0.5}, opacity:{delay:0.8, duration:1}}} 
                            className="bg-blue-50 p-8 rounded-lg shadow-sm">
                            <div className="flex justify-center mb-4">
                                <BarChart2 className="w-12 h-12 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Detailed Feedback</h3>
                            <p className="text-gray-600">
                                Receive comprehensive feedback and scores for each rubric criteria to share with students.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Enhanced CTA Section */}
            <motion.div
                initial= {{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once:true}} 
                className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl p-10 md:p-16">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-white mb-6">Ready to transform your grading process?</h2>
                            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                                Join educators who are saving hours each week with AI-powered rubric evaluation.
                                Get started today and focus more on teaching, less on grading.
                            </p>
                            <motion.button
                                whileHover={{scale:1.05}} whileTap={{scale:0.95}} initial={{opacity:0}} animate={{opacity:1}} transition={{default:{duration:0.5}, opacity:{delay:0.8, duration:1}}} 
                                onClick={onGetStarted}
                                className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-4 px-10 rounded-lg text-lg shadow-md transition-colors flex items-center gap-2 mx-auto">
                                Try Rubric-Lens Now
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <GraduationCap className="w-8 h-8 text-blue-400" />
                                <h3 className="text-xl font-bold text-white">Rubric-Lens</h3>
                            </div>
                            <p className="text-gray-400">
                                Simplifying assessment with AI-powered rubric evaluation for educators.
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
                            <div className="flex gap-4 mb-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Twitter className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Mail className="w-6 h-6" />
                                </a>
                            </div>
                            <p className="text-gray-400">
                                <a href="mailto:contact@rubric-lens.com" className="hover:text-white transition-colors">
                                    contact@rubric-lens.com
                                </a>
                            </p>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
                        <p>&copy; {new Date().getFullYear()} Rubric-Lens. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
} 