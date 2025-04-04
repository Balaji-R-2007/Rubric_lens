import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, FileText } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

export function FileUpload({ onFileSelect }: FileUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setSelectedFile(file);
      onFileSelect(file);
      
      // Create preview for image files
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        // For non-image files like PDFs, clear image preview
        setPreview(null);
      }
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg'],
      'application/pdf': ['.pdf']
    },
    maxFiles: 1
  });

  const clearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreview(null);
    setSelectedFile(null);
    onFileSelect(null as any);
  };

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`p-8 border-2 border-dashed rounded-lg cursor-pointer transition-colors relative
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
      >
        <input {...getInputProps()} />
        {preview ? (
          <div className="relative">
            <button
              onClick={clearSelection}
              className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 z-10"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={preview}
              alt="Preview"
              className="max-h-64 mx-auto rounded-lg shadow-md"
            />
          </div>
        ) : selectedFile && selectedFile.type === 'application/pdf' ? (
          <div className="relative">
            <button
              onClick={clearSelection}
              className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 z-10"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg">
              <FileText className="w-16 h-16 text-blue-600 mb-3" />
              <p className="font-medium text-gray-800">{selectedFile.name}</p>
              <p className="text-sm text-gray-500 mt-1">{(selectedFile.size / 1024).toFixed(1)} KB</p>
              <p className="mt-3 text-sm font-medium text-blue-600">PDF document selected</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center text-gray-600">
            <Upload className="w-12 h-12 mb-4" />
            {isDragActive ? (
              <p>Drop the file here...</p>
            ) : (
              <>
                <p className="font-medium">Drag & drop a file here, or click to select</p>
                <p className="text-sm mt-2">Supports images and PDF documents</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}