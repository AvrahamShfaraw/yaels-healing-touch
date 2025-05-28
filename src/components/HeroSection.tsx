
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-healing-mint to-white flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}

      <div className="absolute top-20 right-20 w-32 h-32 bg-healing-sage/20 rounded-full blur-3xl animate-gentle-float"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-healing-light-green/30 rounded-full blur-2xl animate-gentle-float" style={{ animationDelay: '2s' }}></div>

      <div className="container-custom section-padding flex flex-col items-center text-center z-10">
        <div className="max-w-4xl w-full animate-fade-in p-4">
          {/* Image Container */}
          <div className="flex justify-center mb-10">
            <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white">
              <img
                src="/WhatsApp Image 2025-05-23 at 10.38.20_98535d16.jpg"
                alt="יעל יוסף בזמן טיפול עיסוי"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Headings */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-healing-green mb-6 leading-tight">
            מגע ידיי מרפא
          </h1>
          <div className="w-24 h-1 bg-healing-sage mx-auto mb-8"></div>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-light mb-12 leading-relaxed">
            כשמגע הופך לריפוי
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            עיסוי שוודי הוליסטי לנשים בלבד – מרחב של רוגע, חיבור וריפוי עדין
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-healing-green hover:bg-healing-green/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://wa.me/972542160399', '_blank')}
            aria-label="תיאום טיפול דרך וואטסאפ"
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
