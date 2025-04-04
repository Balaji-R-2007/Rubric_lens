import React from 'react';
import { GraduationCap, Upload, CheckSquare, BarChart2, Zap } from 'lucide-react';

interface LandingPageProps {
    onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="flex justify-center mb-6">
                        <GraduationCap className="w-20 h-20 text-blue-600" />
                    </div>
                    <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                        <span className="block">Rubric-Lens</span>
                        <span className="block text-blue-600">AI-Powered Assignment Evaluation</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-10">
                        A smart tool for educators to automatically evaluate student submissions against customizable rubrics using generative AI.
                    </p>
                    <button
                        onClick={onGetStarted}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg text-lg shadow-md transition-colors"
                    >
                        Get Started
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">How Rubric-Lens Works</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Simplify your grading process with AI-powered assessment
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Feature 1 */}
                        <div className="bg-blue-50 p-8 rounded-lg shadow-sm">
                            <div className="flex justify-center mb-4">
                                <Upload className="w-12 h-12 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Upload Submissions</h3>
                            <p className="text-gray-600">
                                Upload images or PDF documents containing student work for evaluation.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-blue-50 p-8 rounded-lg shadow-sm">
                            <div className="flex justify-center mb-4">
                                <CheckSquare className="w-12 h-12 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Customize Rubrics</h3>
                            <p className="text-gray-600">
                                Create and customize evaluation criteria with flexible scoring scales to match your assessment needs.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-blue-50 p-8 rounded-lg shadow-sm">
                            <div className="flex justify-center mb-4">
                                <Zap className="w-12 h-12 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Evaluation</h3>
                            <p className="text-gray-600">
                                Let our advanced AI analyze submissions against your rubric for consistent and objective assessment.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-blue-50 p-8 rounded-lg shadow-sm">
                            <div className="flex justify-center mb-4">
                                <BarChart2 className="w-12 h-12 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Detailed Feedback</h3>
                            <p className="text-gray-600">
                                Receive comprehensive feedback and scores for each rubric criteria to share with students.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your grading process?</h2>
                    <button
                        onClick={onGetStarted}
                        className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-8 rounded-lg text-lg shadow-md transition-colors"
                    >
                        Try Rubric-Lens Now
                    </button>
                </div>
            </div>
        </div>
    );
} 