import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", 
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ccczipg",
        "template_ugn4qob",
        {
          email: formData.email,
          name: formData.name,
          message: formData.message,
        },
        "I9cOv9kVr4eM7-RJt"
      )
      .then((result) => {
        console.log("EmailJS response:", result);
        setSnackbar({
          open: true,
          message: "Message sent successfully!",
          severity: "success",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setSnackbar({
          open: true,
          message: "Oops! Something went wrong. Please try again.",
          severity: "error",
        });
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#F2B6B6] to-[#AF5059] bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-[#0c0c0c] border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#580109] focus:bg-[#070303]"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-[#0c0c0c] border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#580109] focus:bg-[#070303]"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-[#0c0c0c] border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#580109] focus:bg-[#070303]"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full text-[#580109] bg-[#e9939a] border-2 border-[#580109] cursor-pointer py-3 px-6 rounded font-bold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px] hover:bg-[#e9939ad6]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>

      
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </section>
  );
};
