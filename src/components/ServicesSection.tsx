
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Heart, Sparkles, Gift, MessageCircleMore, MessageCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "עיסוי שוודי חלקי",
      duration: "60 דקות",
      price: "250 ₪",
      description: "מגע ממוקד לאזורים כואבים או תפוסים",
      icon: Clock,
      highlight: false
    },
    {
      title: "עיסוי שוודי מלא",
      duration: "90 דקות",
      price: "300 ₪",
      description: "טיפול גוף מלא להרפיה עמוקה וחיבור פנימי",
      icon: Heart,
      highlight: false
    },
    {
      title: "סדרת 3 טיפולים + הרביעי בחצי מחיר",
      duration: "מחיר מיוחד",
      price: "1,050 ₪",
      description: "לתהליך מתמשך ומשחרר",
      icon: Gift,
      highlight: false
    },
    {
      title: "סדרה + כלים להתפתחות אישית",
      duration: "תהליך מלא",
      price: "1,200 ₪",
      description: "שילוב של עיסוי עם תהליך אישי, רגשי ונפשי",
      icon: Sparkles,
      highlight: true
    }
  ];

  return (
    <section className="bg-green-200 py-20 bg-gradient-to-b from-green-200 via-stone-50/30 to-white">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-healing-green mb-8">
            טיפולים
          </h2>
          <div className="w-16 h-1 bg-healing-sage mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            כל טיפול מותאם אישית לצרכים שלך, במרחב בטוח ומרגיע
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className={`bg-gradient-to-br from-emerald-50 to-stone-50 rounded-2xl p-8 shadow-lg border border-emerald-100 h-full transition-transform duration-300 hover:scale-105`}>

                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-healing-sage/20 rounded-full w-fit">
                    <IconComponent className="h-6 w-6 text-healing-green" />
                  </div>
                  <CardTitle className="text-xl font-medium text-healing-green flex items-center justify-center gap-2">
                    {service.title}
                  </CardTitle><p className="text-healing-sage font-medium flex items-center justify-center gap-3 mt-2">
                    {service.duration}
                    {service.highlight && (
                      <span className="bg-healing-sage text-white text-[0.7rem] px-2 py-1 rounded-full shadow-sm tracking-tight">
                        מומלץ
                      </span>
                    )}
                  </p>

                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <span className="text-healing-sage text-lg font-medium">
                      מחיר אישי מותאם לכל לקוח
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      className="flex flex-row items-center justify-center gap-2 border-healing-green text-healing-green hover:bg-healing-green hover:text-white transition-colors duration-300"
                      onClick={() => {
                        const message = `שלום, אני מתעניין/ת בטיפול: ${service.title}. אשמח לקבל פרטים נוספים.`;
                        const url = `https://wa.me/972542160399?text=${encodeURIComponent(message)}`;
                        window.open(url, '_blank');
                      }}
                    >
                      <MessageCircle className="w-5 h-5 text-healing-green group-hover:text-white" />
                      לפרטים נוספים
                    </Button>
                  </div>

                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
