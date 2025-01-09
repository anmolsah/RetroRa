import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import useSound from "use-sound";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [playBeep] = useSound("/sounds/beep.mp3", { volume: 0.3 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      playBeep();

      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        toast.success("Message sent successfully!", {
          style: {
            background: "#2A2A2A",
            color: "#00E5FF",
            border: "1px solid #00E5FF",
          },
        });
        reset();
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        style: {
          background: "#2A2A2A",
          color: "#FF1B8D",
          border: "1px solid #FF1B8D",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-retro-dark">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-press-start text-center mb-12 text-neon-gold"
        >
          CONTACT_TERMINAL
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-6 pixel-corners"
          >
            <h3 className="text-xl font-press-start mb-6 text-neon-cyan">
              SYSTEM_INFO
            </h3>
            <div className="space-y-4 mb-8 font-ibm">
              <div className="flex items-center gap-4">
                <span className="text-neon-pink">EMAIL:</span>
                <span className="text-white">player1@retro.dev</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-neon-pink">LOCATION:</span>
                <span className="text-white">CYBER_CITY_01</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-neon-pink">STATUS:</span>
                <span className="text-neon-cyan">ONLINE</span>
              </div>
            </div>

            <div className="flex gap-4">
              {["GITHUB", "TWITTER", "LINKEDIN"].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gray-800 text-neon-cyan font-press-start text-xs pixel-corners hover:text-neon-pink"
                  onClick={() => playBeep()}
                >
                  {platform}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 bg-gray-900 p-6 pixel-corners"
            >
              <div>
                <label className="block text-sm font-press-start text-neon-pink mb-2">
                  USER_NAME
                </label>
                <input
                  {...register("name", { required: true })}
                  className="w-full px-4 py-2 bg-gray-800 border-2 border-neon-cyan text-white font-ibm pixel-corners focus:border-neon-pink focus:outline-none"
                />
                {errors.name && (
                  <span className="text-neon-pink text-xs font-ibm">
                    REQUIRED_FIELD
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-press-start text-neon-pink mb-2">
                  USER_EMAIL
                </label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="w-full px-4 py-2 bg-gray-800 border-2 border-neon-cyan text-white font-ibm pixel-corners focus:border-neon-pink focus:outline-none"
                />
                {errors.email && (
                  <span className="text-neon-pink text-xs font-ibm">
                    INVALID_EMAIL
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-press-start text-neon-pink mb-2">
                  MESSAGE
                </label>
                <textarea
                  {...register("message", { required: true })}
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border-2 border-neon-cyan text-white font-ibm pixel-corners focus:border-neon-pink focus:outline-none"
                />
                {errors.message && (
                  <span className="text-neon-pink text-xs font-ibm">
                    REQUIRED_FIELD
                  </span>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-neon-pink text-white py-3 font-press-start text-sm pixel-corners neon-glow
                          ${
                            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                          }`}
              >
                {isSubmitting ? "SENDING..." : "SEND_MESSAGE"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
