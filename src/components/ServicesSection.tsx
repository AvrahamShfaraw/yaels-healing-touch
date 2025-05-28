
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Heart, Sparkles, Gift } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "עיסוי שוודי חלקי",
      duration: "60 דקות",
      price: "230 ₪",
      description: "מגע ממוקד לאזורים כואבים או תפוסים",
      icon: Clock,
      highlight: true
    },
    {
      title: "עיסוי שוודי מלא",
      duration: "90 דקות", 
      price: "300 ₪",
      description: "טיפול גוף מלא להרפיה עמוקה וחיבור פנימי",
      icon: Heart,
      highlight: true
    },
    {
      title: "סדרת 3 טיפולים + הרביעי בחצי מחיר",
      duration: "מחיר מיוחד",
      price: "1,050 ₪",
      description: "לתהליך מתמשך ומשחרר",
      icon: Gift,
      highlight: true
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
    <section className="py-20 bg-gradient-to-b from-healing-mint/20 to-white">
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
                className={`transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  service.highlight 
                    ? 'ring-2 ring-healing-green bg-gradient-to-br from-healing-mint/50 to-white' 
                    : 'hover:shadow-lg'
                }`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-healing-sage/20 rounded-full w-fit">
                    <IconComponent className="h-6 w-6 text-healing-green" />
                  </div>
                  <CardTitle className="text-xl font-medium text-healing-green">
                    {service.title}
                  </CardTitle>
                  <p className="text-healing-sage font-medium">{service.duration}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <span className="text-3xl font-light text-healing-green">{service.price}</span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-healing-green text-healing-green hover:bg-healing-green hover:text-white transition-colors duration-300"
                    onClick={() => window.open('https://wa.me/972542160399', '_blank')}
                  >
                    לפרטים נוספים
                  </Button>
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
