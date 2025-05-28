
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Heart, Sparkles, Leaf } from "lucide-react";

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

  const aboutContent = [
    {
      title: "מגע מרפא ומקצועי",
      text: "מטפלת במגע לנשים, מתוך רוך, הקשבה ואהבה. אני מתמחה בטיפולי מגע המותאמים אישית לכל אישה, תוך יצירת מרחב בטוח ומקבל שמאפשר ריפוי אמיתי. הטיפולים שלי משלבים טכניקות מסורתיות עם גישות מודרניות, תוך התאמה מלאה לצרכים הייחודיים של כל מטופלת.",
      highlight: "ניסיון של מעל 8 שנים בטיפולי מגע",
      icon: Heart,
      gradient: "from-emerald-50 to-green-50"
    },
    {
      title: "מסע פנימי של ריפוי",
      text: "העיסוי שאני מעניקה הוא מסע פנימי עמוק – להרפיה, ריפוי וחיבור מחודש לעצמך. כל טיפול הוא חוויה ייחודית המותאמת לצרכים האישיים שלך ולמצב הרגשי והגופני שלך באותו הרגע. המטרה היא לאפשר לך להתחבר מחדש לגופך ולנפשך דרך מגע מרפא ומעצים.",
      highlight: "שילוב של טכניקות מסורתיות ומודרניות",
      icon: Sparkles,
      gradient: "from-green-50 to-emerald-50"
    },
    {
      title: "שחרור כאבים ומתחים",
      text: "הטיפולים שלי מתאימים במיוחד לשחרור כאבים כרוניים, סטרס ומתח נפשי מצטבר, דרך מגע עדין ומרפא שמגיע עמוק לשורש הבעיה. המגע מסייע בהפגת מתחים גופניים ונפשיים כאחד, ומאפשר שחרור עמוק של דפוסים שנתקעו בגוף. זהו תהליך הוליסטי המטפל בכל היבטי האדם.",
      highlight: "טיפול הוליסטי לגוף ולנפש",
      icon: Leaf,
      gradient: "from-emerald-50 to-stone-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-stone-50/30 to-emerald-50/20">
      <div className="container-custom section-padding">
        <div className="max-w-5xl mx-auto">
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
          
          {/* Carousel Container */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white to-cream-50 rounded-3xl p-6 md:p-8 shadow-xl border border-emerald-100/50 backdrop-blur-sm">
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                  skipSnaps: false,
                  dragFree: false,
                }}
                className="w-full max-w-full"
              >
                <CarouselContent>
                  {aboutContent.map((content, index) => {
                    const IconComponent = content.icon;
                    return (
                      <CarouselItem key={index} className="basis-full">
                        <div className="p-1">
                          <div className={`bg-gradient-to-br ${content.gradient} rounded-2xl p-6 md:p-8 lg:p-10 border border-emerald-100/50 shadow-sm transition-all duration-500 hover:shadow-md h-full`}>
                            {/* Icon and Title */}
                            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                                <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-emerald-700" />
                              </div>
                              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-emerald-800 leading-tight">
                                {content.title}
                              </h3>
                            </div>
                            
                            {/* Main Content */}
                            <div className="space-y-4 md:space-y-6">
                              <p className="text-base md:text-lg lg:text-xl text-stone-700 leading-relaxed font-light">
                                {content.text}
                              </p>
                              
                              {/* Highlight Box */}
                              <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/50 to-green-200/50 rounded-xl blur-sm"></div>
                                <div className="relative bg-white/80 backdrop-blur-sm p-4 md:p-5 rounded-xl border border-emerald-200/50">
                                  <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                    <p className="text-emerald-800 font-medium text-sm md:text-base lg:text-lg">
                                      {content.highlight}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                
                {/* Navigation Buttons */}
                <CarouselPrevious className="bg-white/90 border-emerald-200 hover:bg-emerald-50 text-emerald-700 shadow-lg -left-4 md:-left-6 lg:-left-12 w-8 h-8 md:w-10 md:h-10" />
                <CarouselNext className="bg-white/90 border-emerald-200 hover:bg-emerald-50 text-emerald-700 shadow-lg -right-4 md:-right-6 lg:-right-12 w-8 h-8 md:w-10 md:h-10" />
              </Carousel>
            </div>
            
            {/* Progress Indicators */}
            <div className="flex justify-center mt-8 md:mt-10 space-x-2 md:space-x-3 space-x-reverse">
              {aboutContent.map((_, index) => (
                <button
                  key={index}
                  className={`relative transition-all duration-500 ${
                    current === index 
                      ? 'w-6 md:w-8 h-2 md:h-3' 
                      : 'w-2 md:w-3 h-2 md:h-3'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                >
                  <div className={`w-full h-full rounded-full transition-all duration-500 ${
                    current === index 
                      ? 'bg-emerald-600 shadow-lg' 
                      : 'bg-stone-300 hover:bg-emerald-300'
                  }`}></div>
                  {current === index && (
                    <div className="absolute inset-0 bg-emerald-400 rounded-full animate-pulse opacity-40"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Decorative Bottom Elements */}
          <div className="flex justify-center items-center mt-12 md:mt-16 space-x-6 md:space-x-8 space-x-reverse">
            <div className="flex space-x-1 md:space-x-2 space-x-reverse">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-600 rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-500 rounded-full animate-pulse delay-150"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
            </div>
            <div className="text-emerald-700/60 text-xs md:text-sm font-light">
              ◆ ◆ ◆
            </div>
            <div className="flex space-x-1 md:space-x-2 space-x-reverse">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-500 rounded-full animate-pulse delay-150"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-600 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
