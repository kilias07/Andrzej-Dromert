import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    await fetch("api/mail", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <motion.div
      className="mx-auto flex justify-center items-center w-5/6 content-inside py-10 heightAdjustScreen"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex justify-center content-center w-1/2 lg:px-24">
        <h1 className="text-xl">Skontaktuj się ze mną</h1>
      </div>
      <form className="w-1/2 lg:px-24" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Imię
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">
                Proszę wypełnij dane.
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="subject"
            >
              Temat
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              id="subject"
              {...register("subject", { required: true })}
            />
            {errors.subject && (
              <p className="text-red-500 text-xs italic">
                Proszę wypełnij dane.
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="mail"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              {...register("mail", { required: true })}
            />
            {errors.mail && (
              <p className="text-red-500 text-xs italic">
                Proszę wypełnij dane.
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="message"
            >
              Wiadomość
            </label>
            <textarea
              className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <p className="text-red-500 text-xs italic">
                Proszę wypełnij dane.
              </p>
            )}
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow bg-claretDark hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white font-semibold py-2 px-4 rounded"
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
