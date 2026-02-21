import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClose = () => {
    onClose();
    // delay reset so the animation finishes before clearing success state
    setTimeout(() => setIsSuccess(false), 300);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg bg-white px-8 py-8 shadow-xl focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <Dialog.Title className="text-2xl tracking-wide">GET IN TOUCH</Dialog.Title>
              <Dialog.Description className="text-sm text-gray-500 mt-1">
                Send a message and I'll get back to you as soon as possible.
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-black transition-colors ml-4 mt-1"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </Dialog.Close>
          </div>

          {isSuccess ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl tracking-wide mb-2">Message Sent</h3>
              <p className="text-gray-500 text-sm mb-6">
                Thank you for reaching out. I'll be in touch soon.
              </p>
              <button
                onClick={handleClose}
                className="px-8 py-3 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-colors"
              >
                CLOSE
              </button>
            </div>
          ) : (
            <ContactForm onSuccess={() => setIsSuccess(true)} />
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
