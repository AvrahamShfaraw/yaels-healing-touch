
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react";

const imagePaths = [
  "/WhatsApp Image 2025-05-23 at 10.38.20_98535d16.jpg",
  "/WhatsApp Image 2025-05-29 at 17.38.02_382643ab.jpg",
  "/WhatsApp Image 2025-05-29 at 17.38.02_b1527260.jpg",
] // Update with your real paths


const HeroSection = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();

    const autoplay = setInterval(() => {
      if (!api) return;

      const next = api.selectedScrollSnap() + 1;
      const count = api.scrollSnapList().length;

      // Wrap manually if loop isn't enabled
      if (next < count) {
        api.scrollTo(next);
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => {
      api.off("select", onSelect);
      clearInterval(autoplay);
    };
  }, [api]);



  return (
    <section className="min-h-screen bg-gradient-to-b from-healing-mint to-white flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}

      <div className="absolute top-20 right-20 w-32 h-32 bg-healing-sage/20 rounded-full blur-3xl animate-gentle-float"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-healing-light-green/30 rounded-full blur-2xl animate-gentle-float" style={{ animationDelay: '2s' }}></div>

      <div className="items-center text-center z-10">
        <div className="max-w-4xl mx-auto animate-fade-in p-4 items-center">


          {/* Headings & Call to Action */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-healing-green mb-6 leading-tight">
            מגע ידיי מרפא
          </h1>
          <div className="w-24 h-1 bg-healing-sage mx-auto mb-8" />
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-light mb-12 leading-relaxed">
            כשמגע הופך לריפוי
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed text-center">
         טיפול הוליסטי המשלב מגע, גוף ונפש — כולל עיסוי וכלים לשחרור מתחים רגשיים,
            כגון דמיון מודרך, תרגולי נשימה ועוד.
          </p>


          {/* Grid View for Large Screens */}
          <div className="hidden lg:grid grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {imagePaths.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`תמונה מספר ${index + 1}`}
                className="w-full h-[300px] object-cover rounded-3xl shadow-xl"
              />
            ))}
          </div>

          {/* Carousel for Small/Medium Screens */}
          <div className="lg:hidden relative max-w-2xl mx-auto">
            <Carousel className="max-w-2xl mx-auto" dir="ltr" setApi={setApi}>
              <CarouselContent>
                {imagePaths.map((src, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={src}
                      alt={`תמונה מספר ${index + 1}`}
                      className="w-full h-[500px] rounded-3xl object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-5 mb-5 space-x-3 space-x-reverse">
              {imagePaths.map((_, index) => (
                <button
                  key={index}
                  className={`relative transition-all duration-500 ${current === index ? 'w-8 h-3' : 'w-3 h-3'
                    }`}
                  onClick={() => api?.scrollTo(index)}
                >
                  <div
                    className={`w-full h-full rounded-full transition-all duration-500 ${current === index
                      ? 'bg-emerald-600 shadow-lg'
                      : 'bg-stone-300 hover:bg-emerald-300'
                      }`}
                  ></div>
                  {current === index && (
                    <div className="absolute inset-0 bg-emerald-400 rounded-full animate-pulse opacity-40"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <Button
            size="lg"
            className="bg-healing-green hover:bg-healing-green/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://wa.me/972542160399', '_blank')}
          >
            <MessageCircle className="ml-2 h-5 w-5" />
            לתיאום טיפול בוואטסאפ
          </Button>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;
