import { useState } from 'react';
import { useForm } from '@tanstack/react-form';
import { contactSchema, subjectOptions, type ContactFormValues } from './schema';

interface ContactFormProps {
  onSuccess: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '' as ContactFormValues['subject'],
      message: '',
    },
    onSubmit: async ({ value }) => {
      const result = contactSchema.safeParse(value);
      if (!result.success) return;

      setIsSubmitting(true);
      // TODO: replace with real email service (Resend, EmailJS, etc.)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', result.data);
      setIsSubmitting(false);
      onSuccess();
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="space-y-5"
    >
      {/* Name */}
      <form.Field
        name="name"
        validators={{
          onChange: ({ value }) => {
            const result = contactSchema.shape.name.safeParse(value);
            return result.success ? undefined : result.error.issues[0].message;
          },
        }}
      >
        {(field) => (
          <div>
            <label htmlFor="name" className="block text-sm tracking-wide mb-1">
              NAME <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              placeholder="Your full name"
              className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-black transition-colors"
            />
            {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
              <p className="text-red-500 text-xs mt-1">{field.state.meta.errors[0]}</p>
            )}
          </div>
        )}
      </form.Field>

      {/* Email */}
      <form.Field
        name="email"
        validators={{
          onChange: ({ value }) => {
            const result = contactSchema.shape.email.safeParse(value);
            return result.success ? undefined : result.error.issues[0].message;
          },
        }}
      >
        {(field) => (
          <div>
            <label htmlFor="email" className="block text-sm tracking-wide mb-1">
              EMAIL <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              placeholder="your@email.com"
              className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-black transition-colors"
            />
            {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
              <p className="text-red-500 text-xs mt-1">{field.state.meta.errors[0]}</p>
            )}
          </div>
        )}
      </form.Field>

      {/* Subject */}
      <form.Field
        name="subject"
        validators={{
          onChange: ({ value }) => {
            const result = contactSchema.shape.subject.safeParse(value);
            return result.success ? undefined : result.error.issues[0].message;
          },
        }}
      >
        {(field) => (
          <div>
            <label htmlFor="subject" className="block text-sm tracking-wide mb-1">
              SUBJECT <span className="text-red-500">*</span>
            </label>
            <select
              id="subject"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value as ContactFormValues['subject'])}
              onBlur={field.handleBlur}
              className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-black transition-colors bg-white"
            >
              <option value="" disabled>Select a subject</option>
              {subjectOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
              <p className="text-red-500 text-xs mt-1">{field.state.meta.errors[0]}</p>
            )}
          </div>
        )}
      </form.Field>

      {/* Message */}
      <form.Field
        name="message"
        validators={{
          onChange: ({ value }) => {
            const result = contactSchema.shape.message.safeParse(value);
            return result.success ? undefined : result.error.issues[0].message;
          },
        }}
      >
        {(field) => (
          <div>
            <label htmlFor="message" className="block text-sm tracking-wide mb-1">
              MESSAGE <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              placeholder="Tell me more..."
              className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-black transition-colors resize-none"
            />
            {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
              <p className="text-red-500 text-xs mt-1">{field.state.meta.errors[0]}</p>
            )}
          </div>
        )}
      </form.Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white py-3 text-sm tracking-wide hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
      </button>
    </form>
  );
}
