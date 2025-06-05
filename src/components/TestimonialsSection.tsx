
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useEffect, useState } from "react";



const TestimonialsSection = () => {

  const [current, setCurrent] = useState(0);

  const reviewImages = [
    "/IMG-20250605-WA0006.jpg",
    "/IMG-20250605-WA0007.jpg",
    "/IMG-20250605-WA0008.jpg",
    "/IMG-20250605-WA0009.jpg",
    "/IMG-20250605-WA0010.jpg",
  ]

  const [api, setApi] = useState<any>();

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
    <section className="bg-green-200 py-20 bg-gradient-to-b from-white via-stone-50/30 green-200">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-healing-green mb-8">
            מה אומרות הלקוחות
          </h2>
          <div className="w-16 h-1 bg-healing-sage mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Carousel
            className="w-80 max-w-2xl mx-auto"
            dir="ltr" setApi={setApi}>

            <CarouselContent>
              {reviewImages.map((src, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full">
                  <div className="p-2">
                    <img
                      src={src}
                      alt={`המלצה ${index + 1}`}
                      className="w-full h-[500px] rounded-3xl"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-center mt-5 mb-5 space-x-3 space-x-reverse">
            {reviewImages.map((_, index) => (
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


      </div>
    </section>
  );
};

export default TestimonialsSection;
