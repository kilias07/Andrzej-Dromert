import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    await fetch('api/mail', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  };

  return (
    <motion.div
      className="content-inside heightAdjustScreen mx-auto flex w-5/6 items-center justify-center py-10"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex w-1/2 content-center justify-center lg:px-24">
        <h1 className="text-xl">Skontaktuj się ze mną</h1>
      </div>
      <form className="w-1/2 lg:px-24" onSubmit={handleSubmit(onSubmit)}>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="name"
            >
              Imię
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              type="text"
              id="name"
              {...register('name', { required: true })}
            />
            {errors.name && (
              <p className="text-xs italic text-red-500">
                Proszę wypełnij dane.
              </p>
            )}
          </div>
          <div className="w-full px-3 md:w-1/2">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="subject"
            >
              Temat
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              type="text"
              id="subject"
              {...register('subject', { required: true })}
            />
            {errors.subject && (
              <p className="text-xs italic text-red-500">
                Proszę wypełnij dane.
              </p>
            )}
          </div>
        </div>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="mail"
            >
              E-mail
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="email"
              type="email"
              {...register('mail', { required: true })}
            />
            {errors.mail && (
              <p className="text-xs italic text-red-500">
                Proszę wypełnij dane.
              </p>
            )}
          </div>
        </div>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="message"
            >
              Wiadomość
            </label>
            <textarea
              className="no-resize mb-3 block h-48 w-full resize-none appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="message"
              {...register('message', { required: true })}
            />
            {errors.message && (
              <p className="text-xs italic text-red-500">
                Proszę wypełnij dane.
              </p>
            )}
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="focus:shadow-outline rounded bg-claretDark py-2 px-4 font-semibold text-white shadow hover:bg-gray-600 focus:outline-none"
              type="submit"
            >
              Wyślij
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
