import type { EvaluationResult, Rubric } from '../types';

interface EvaluationResultsProps {
  results: EvaluationResult[];
  rubric: Rubric[];
}

export function EvaluationResults({ results, rubric }: EvaluationResultsProps) {
  const totalScore = results.reduce((sum, result) => sum + result.score, 0);
  const maxPossibleScore = rubric.reduce((sum, criteria) => sum + criteria.maxScore, 0);
  const percentage = Math.round((totalScore / maxPossibleScore) * 100);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Evaluation Results</h2>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="text-gray-600">Total Score</p>
            <p className="text-3xl font-bold text-gray-900">{totalScore}/{maxPossibleScore}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600">Percentage</p>
            <p className="text-3xl font-bold text-blue-600">{percentage}%</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {results.map((result) => {
          const criteriaDetails = rubric.find(r => r.id === result.criteriaId);
          return (
            <div key={result.criteriaId} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-800">
                  {criteriaDetails?.criteria}
                </h3>
                <div className="flex items-center gap-1">
                  <span className="text-xl font-bold text-gray-900">{result.score}</span>
                  <span className="text-gray-500">/ {criteriaDetails?.maxScore}</span>
                </div>
              </div>
              <p className="text-gray-600">{result.feedback}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}