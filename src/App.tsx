import React, { useState } from 'react';
import { FileUpload } from './components/FileUpload';
import { RubricEditor } from './components/RubricEditor';
import { EvaluationResults } from './components/EvaluationResults';
import { Loader2, GraduationCap } from 'lucide-react';
import { evaluateSubmission } from './lib/gemini';
import type { Rubric, EvaluationResult } from './types';
import toast from 'react-hot-toast';

function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [rubric, setRubric] = useState<Rubric[]>([
    { id: '1', criteria: 'Visual clarity and organization', maxScore: 10 },
    { id: '2', criteria: 'Technical accuracy', maxScore: 10 },
    { id: '3', criteria: 'Completeness', maxScore: 10 }
  ]);
  const [results, setResults] = useState<EvaluationResult[] | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setResults(null);
  };

  const handleEvaluate = async () => {
    if (!selectedFile) {
      toast.error('Please select a file to evaluate');
      return;
    }

    if (rubric.length === 0) {
      toast.error('Please add at least one rubric criteria');
      return;
    }

    setIsEvaluating(true);
    try {
      let fileContent: string;
      
      // Handle different file types appropriately
      if (selectedFile.type.startsWith('image/') && !selectedFile.type.includes('svg')) {
        // For binary image formats (JPEG, PNG), read as base64 data URL
        fileContent = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(selectedFile);
        });
      } else {
        // For SVG and other text-based formats, use text()
        fileContent = await selectedFile.text();
      }
      
      const evaluationResults = await evaluateSubmission(fileContent, rubric);
      setResults(evaluationResults);
      toast.success('Evaluation completed successfully');
    } catch (error) {
      console.error('Evaluation error:', error);
      toast.error('Failed to evaluate submission. Please try again.');
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Rubric-Lens</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Upload Submission</h2>
              <FileUpload onFileSelect={handleFileSelect} />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Evaluation Criteria</h2>
                <button
                  onClick={handleEvaluate}
                  disabled={isEvaluating || !selectedFile}
                  className={`px-6 py-2 rounded-lg font-medium text-white
                    ${isEvaluating || !selectedFile
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 hover:bg-blue-600'
                    } transition-colors flex items-center gap-2`}
                >
                  {isEvaluating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Evaluating...
                    </>
                  ) : (
                    'Evaluate Submission'
                  )}
                </button>
              </div>
              <RubricEditor rubric={rubric} onRubricChange={setRubric} />
            </div>
          </div>

          <div className="space-y-8">
            {results && <EvaluationResults results={results} rubric={rubric} />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;