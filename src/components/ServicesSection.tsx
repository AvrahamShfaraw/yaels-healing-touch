
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Heart, Sparkles, Gift } from "lucide-react";

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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="text-healing-green group-hover:text-white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326a7.875 7.875 0 0 0-12.182 9.265L.16 15.387l3.873-1.205a7.874 7.874 0 0 0 9.568-11.856zm-5.536 11.48a6.552 6.552 0 0 1-3.361-.919l-.241-.144-2.301.717.748-2.23-.156-.23a6.547 6.547 0 1 1 12.127-3.277 6.48 6.48 0 0 1-.912 3.287 6.603 6.603 0 0 1-5.904 3.796zm3.21-4.807c-.175-.087-1.035-.511-1.196-.57-.161-.058-.28-.087-.398.087-.116.174-.459.569-.563.685-.103.116-.206.131-.381.044-.175-.087-.738-.272-1.406-.867-.52-.462-.87-1.03-.972-1.204-.103-.174-.011-.267.077-.354.079-.079.175-.205.262-.308.088-.103.117-.175.175-.291.058-.116.029-.218-.015-.306-.044-.087-.398-.957-.545-1.309-.143-.343-.29-.296-.398-.296h-.34a.653.653 0 0 0-.472.22c-.161.174-.621.606-.621 1.478 0 .872.636 1.714.725 1.83.088.116 1.245 1.9 3.02 2.66.422.182.751.29 1.007.372.422.134.805.115 1.107.07.338-.05 1.035-.422 1.181-.83.145-.409.145-.759.101-.83-.043-.072-.16-.115-.334-.202z" />
                    </svg>
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
