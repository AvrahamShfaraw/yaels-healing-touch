
const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-healing-green mb-8">
            נעים להכיר, אני יעל
          </h2>
          <div className="w-16 h-1 bg-healing-sage mx-auto mb-12"></div>
          
          <div className="bg-healing-mint/30 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>
                מטפלת במגע לנשים, מתוך רוך, הקשבה ואהבה.
              </p>
              <p>
                העיסוי שאני מעניקה הוא מסע פנימי – להרפיה, ריפוי וחיבור לעצמך.
              </p>
              <p>
                מתאים במיוחד לשחרור כאבים, סטרס ומתח נפשי, דרך מגע עדין ומרפא.
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="flex justify-center mt-12 space-x-4 space-x-reverse">
            <div className="w-3 h-3 bg-healing-sage rounded-full"></div>
            <div className="w-3 h-3 bg-healing-light-green rounded-full"></div>
            <div className="w-3 h-3 bg-healing-green rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
