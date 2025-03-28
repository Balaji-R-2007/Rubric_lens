import React, { useState } from 'react';
import { Plus, Trash2, FileText, List } from 'lucide-react';
import type { Rubric } from '../types';

interface RubricEditorProps {
  rubric: Rubric[];
  onRubricChange: (rubric: Rubric[]) => void;
}

export function RubricEditor({ rubric, onRubricChange }: RubricEditorProps) {
  const [isTextMode, setIsTextMode] = useState(false);
  const [textAreaContent, setTextAreaContent] = useState('');

  const addCriteria = () => {
    onRubricChange([
      ...rubric,
      { id: crypto.randomUUID(), criteria: '', maxScore: 10 }
    ]);
  };

  const removeCriteria = (id: string) => {
    onRubricChange(rubric.filter(r => r.id !== id));
  };

  const updateCriteria = (id: string, field: keyof Rubric, value: string | number) => {
    onRubricChange(
      rubric.map(r => (r.id === id ? { ...r, [field]: value } : r))
    );
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaContent(e.target.value);
    
    // Parse text area content into rubric items
    const lines = e.target.value.split('\n').filter(line => line.trim());
    const newRubric = lines.map(line => ({
      id: crypto.randomUUID(),
      criteria: line.trim(),
      maxScore: 10
    }));

    onRubricChange(newRubric);
  };

  const toggleMode = () => {
    if (!isTextMode) {
      // When switching to text mode, populate textarea with current rubric
      const text = rubric.map(r => r.criteria).join('\n');
      setTextAreaContent(text);
    }
    setIsTextMode(!isTextMode);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Evaluation Rubric</h2>
        <div className="flex gap-2">
          <button
            onClick={toggleMode}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            {isTextMode ? <List className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            {isTextMode ? 'List Mode' : 'Text Mode'}
          </button>
          {!isTextMode && (
            <button
              onClick={addCriteria}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Criteria
            </button>
          )}
        </div>
      </div>
      
      {isTextMode ? (
        <div className="space-y-2">
          <p className="text-sm text-gray-600">Enter each rubric criteria on a new line:</p>
          <textarea
            value={textAreaContent}
            onChange={handleTextAreaChange}
            className="w-full h-48 p-3 border rounded-lg font-mono text-sm"
            placeholder="Example:
Content organization and structure
Technical accuracy and depth
Visual presentation quality
References and citations"
          />
        </div>
      ) : (
        <div className="space-y-3">
          {rubric.map((criteria) => (
            <div key={criteria.id} className="flex gap-4 items-start">
              <input
                type="text"
                value={criteria.criteria}
                onChange={(e) => updateCriteria(criteria.id, 'criteria', e.target.value)}
                placeholder="Enter criteria description"
                className="flex-1 p-2 border rounded-lg"
              />
              <input
                type="number"
                value={criteria.maxScore}
                onChange={(e) => updateCriteria(criteria.id, 'maxScore', parseInt(e.target.value))}
                min="1"
                max="100"
                className="w-24 p-2 border rounded-lg"
              />
              <button
                onClick={() => removeCriteria(criteria.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}