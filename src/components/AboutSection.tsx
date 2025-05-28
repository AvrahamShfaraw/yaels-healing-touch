
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const AboutSection = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const aboutTexts = [
    "מטפלת במגע לנשים, מתוך רוך, הקשבה ואהבה.",
    "העיסוי שאני מעניקה הוא מסע פנימי – להרפיה, ריפוי וחיבור לעצמך.",
    "מתאים במיוחד לשחרור כאבים, סטרס ומתח נפשי, דרך מגע עדין ומרפא."
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-stone-50">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-emerald-700 mb-8">
            נעים להכיר, אני יעל
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mb-12"></div>
          
          <div className="bg-stone-100/60 rounded-3xl p-8 md:p-12 shadow-lg border border-stone-200/50">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {aboutTexts.map((text, index) => (
                  <CarouselItem key={index}>
                    <div className="p-6">
                      <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-light">
                        {text}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-white/80 border-emerald-200 hover:bg-emerald-50 text-emerald-700" />
              <CarouselNext className="bg-white/80 border-emerald-200 hover:bg-emerald-50 text-emerald-700" />
            </Carousel>
            
            {/* Carousel indicators */}
            <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
              {aboutTexts.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index 
                      ? 'bg-emerald-600 scale-110' 
                      : 'bg-stone-300 hover:bg-emerald-300'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="flex justify-center mt-12 space-x-4 space-x-reverse">
            <div className="w-3 h-3 bg-emerald-600 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse delay-150"></div>
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
