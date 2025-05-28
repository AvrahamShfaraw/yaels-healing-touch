
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { Heart, Sparkles, Leaf } from "lucide-react";

const AboutSection = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  const aboutContent = [
    {
      title: "מגע מרפא ומקצועי",
      text: "מטפלת במגע לנשים, מתוך רוך, הקשבה ואהבה. אני מתמחה בטיפולי מגע המותאמים אישית לכל אישה, תוך יצירת מרחב בטוח ומקבל שמאפשר ריפוי אמיתי.",
      highlight: "ניסיון של מעל 8 שנים בטיפולי מגע",
      icon: Heart,
      gradient: "from-emerald-50 to-green-50",
    },
    {
      title: "מסע פנימי של ריפוי",
      text: "העיסוי שאני מעניקה הוא מסע פנימי עמוק – להרפיה, ריפוי וחיבור מחודש לעצמך. כל טיפול הוא חוויה ייחודית המותאמת לצרכים האישיים שלך ולמצב הרגשי והגופני שלך באותו הרגע.",
      highlight: "שילוב של טכניקות מסורתיות ומודרניות",
      icon: Sparkles,
      gradient: "from-green-50 to-emerald-50",
    },
    {
      title: "שחרור כאבים ומתחים",
      text: "הטיפולים שלי מתאימים במיוחד לשחרור כאבים כרוניים, סטרס ומתח נפשי מצטבר, דרך מגע עדין ומרפא שמגיע עמוק לשורש הבעיה. המגע מסייע בהפגת מתחים גופניים ונפשיים כאחד.",
      highlight: "טיפול הוליסטי לגוף ולנפש",
      icon: Leaf,
      gradient: "from-emerald-50 to-stone-50",
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-slide functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      const currentIndex = api.selectedScrollSnap();
      const nextIndex = (currentIndex + 1) % aboutContent.length;
      api.scrollTo(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [api, aboutContent.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-stone-50/30 to-emerald-50/20">
      <div className="container-custom section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-1 bg-emerald-600 rounded-full"></div>
              <Heart className="w-6 h-6 text-emerald-600" />
              <div className="w-8 h-1 bg-emerald-600 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-emerald-800 mb-6">
              נעים להכיר, אני יעל
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              מטפלת מוסמכת במגע מרפא עם תשוקה לריפוי ולהעצמה של נשים
            </p>
          </div>

          {/* Carousel */}
          <Carousel 
            setApi={setApi} 
            className="w-full max-w-4xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {aboutContent.map((slide, index) => {
                const IconComponent = slide.icon;
                return (
                  <CarouselItem key={index} className="basis-full">
                    <div className="p-1">
                      <div className={`bg-gradient-to-br ${slide.gradient} rounded-2xl p-8 shadow-lg border border-emerald-100 min-h-[450px] flex flex-col justify-between`}>
                        {/* Header with Icon and Title */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-emerald-700" />
                          </div>
                          <h3 className="text-2xl font-medium text-emerald-800">
                            {slide.title}
                          </h3>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-6">
                          <p className="text-lg text-stone-700 leading-relaxed">
                            {slide.text}
                          </p>
                          
                          {/* Highlight Box */}
                          <div className="bg-white/80 p-4 rounded-xl border border-emerald-200/50">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                              <p className="text-emerald-800 font-medium">
                                {slide.highlight}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            <CarouselPrevious className="bg-white/90 border-emerald-200 hover:bg-emerald-50 text-emerald-700 shadow-lg" />
            <CarouselNext className="bg-white/90 border-emerald-200 hover:bg-emerald-50 text-emerald-700 shadow-lg" />
          </Carousel>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {aboutContent.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-300 rounded-full ${
                  current === index 
                    ? 'w-8 h-3 bg-emerald-600' 
                    : 'w-3 h-3 bg-stone-300 hover:bg-emerald-300'
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
