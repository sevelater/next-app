"use client";

const Page = () => {
  return (
    <div className="object-bottom">
      <div className="grid lg:justify-evenly h-auto from-slate-500 to-slate-700 bg-gradient-to-bl sm:grid md:flex lg:flex p-3 gap-y-8 lg:gap-x-12 md:gap-x-12 pb-24 lg:pt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123.047502066955!2d18.929247183500305!3d47.50918967836878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741df0050b826a9%3A0x5f2293613cb47231!2sM%C3%A1rkus%20Szalon!5e0!3m2!1shu!2shu!4v1740394854670!5m2!1shu!2shu"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-64 sm:h-72 md:h-screen md:max-h-[200px] lg:max-h-[300px] lg:max-w-[800px] rounded-md sm:w-full md:w-2/3 lg:w-6/12 md:rounded-lg lg:rounded-lg"
        ></iframe>

        <div className="pb-5 px-5 pt-5 h-auto bg-slate-800 rounded-md md:rounded-lg lg:rounded-lg font-sans">
          <h3 className="text-indigo-400">Telefon</h3>
          <a href="tel:+36 70 598 5439">+36 70 598 5439</a>
          <br />
          <h3 className="text-indigo-400">Email</h3>
          <a href="mailto:gabika20040218@gmail.com">gabika20040218@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Page;