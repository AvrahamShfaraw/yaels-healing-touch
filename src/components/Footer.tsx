const Footer = () => {
  return (
    <footer className="bg-healing-green py-8">
      <div className="container-custom section-padding">
        <div className="text-center space-y-2">
          <p className="text-white/80">
            © 2024 מגע ידיי מרפא - יעל יוסף
          </p>
          <p className="text-white/60 text-sm">
            כל הזכויות שמורות
          </p>
          <p className="text-white/60 text-sm">
            פיתוח האתר על ידי{" "}
            <a
              href="https://asilwebdev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              Asil Web Dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
