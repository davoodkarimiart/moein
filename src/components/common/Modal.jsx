import React from 'react'
import { X } from 'lucide-react'
import Button from './Button'

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children,
  footer = true,
  onConfirm
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50 dark:bg-black/70"
        onClick={onClose}
      />

      <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full mx-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-bold text-dark dark:text-cream">{title}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X size={24} className="text-dark dark:text-cream" />
          </button>
        </div>

        <div className="p-6">
          {children}
        </div>

        {footer && (
          <div className="flex gap-3 p-6 border-t border-gray-200 dark:border-slate-700 justify-end">
            <Button variant="ghost" onClick={onClose}>
              بستن
            </Button>
            {onConfirm && (
              <Button variant="gold" onClick={onConfirm}>
                تأیید
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal
