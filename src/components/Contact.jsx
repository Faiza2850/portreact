import React from "react";

export const Contact = () => {
  return (
    <div className="contact_container m-5 center gap-8 grid-cols-1 grid ">
      <div className="contact_options flex flex-col gap-5">
      <article className="contact-option bg-transparent hover:border-gray-500 rounded p-5 text-center transition-all">

          <h4>Email</h4>
          <h5>faizafatima213301@gmail.com</h5>
          <a
            href="mailto:faizafatima213301@gmail.com"
            target="blank"
            rel="noreferrer"
          >
            Send A Message
          </a>
        </article>

        <article className="contact-option">
          <h4>WhatsApp</h4>
          <h5>+92-307-9518932</h5>
          <a
            href="http://api.whatsapp.com/send?phone=923079518932"
            target="blank"
            rel="noreferrer"
          >
            Send A Message
          </a>
        </article>

      </div>
      <form>
        
      </form>
    </div>
  );
};
