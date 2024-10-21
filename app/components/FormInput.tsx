import React from 'react';

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

export default function FormInput({ id, label, type, value, onChange, error, required = false }: FormInputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-lg">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className={`w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
          error ? 'border-red-500' : ''
        }`}
        required={required}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}