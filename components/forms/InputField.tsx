'use client';

import { FieldError } from 'react-hook-form';
import { cn } from '@/lib/utils';

interface InputFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;

  // Optional RHF support
  register?: any;
  validation?: Record<string, any>;
  error?: FieldError;

  // Controlled fallback
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  // NEW: allow styling overrides
  inputClassName?: string;
}

export default function InputField({
  name,
  label,
  type = 'text',
  placeholder,
  disabled,
  register,
  validation,
  error,
  value,
  onChange,
  inputClassName,
}: InputFieldProps) {
  const registerProps =
    typeof register === 'function'
      ? register(name, validation)
      : {
          value,
          onChange,
        };

  return (
    <div className="space-y-1">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-500"
      >
        {label}
      </label>

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          // 🔑 base input shape
          'h-12 w-full rounded-lg px-4 text-base transition',

          // 🔑 LIGHT AUTH INPUT FIX
          'bg-white text-slate-900 placeholder:text-slate-400',
          'border border-slate-200',
          'focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20',

          // states
          disabled && 'opacity-50 cursor-not-allowed',
          error && 'border-red-500 focus:ring-red-500/20',

          // optional overrides
          inputClassName
        )}
        {...registerProps}
      />

      {error?.message && (
        <p className="text-sm text-red-500">{error.message}</p>
      )}
    </div>
  );
}
