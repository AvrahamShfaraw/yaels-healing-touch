
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "יעל נעימה, רגישה ומדויקת. יצאתי קלה יותר בגוף ובלב",
      author: "לקוחה מרוצה"
    },
    {
      text: "שירות מדהים וחוויה מיוחדת – ממליצה מכל הלב",
      author: "לקוחה מרוצה"
    }
  ];

  return (
    <section className="py-20 bg-[#fafa25] bg-healing-mint/10">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-healing-green mb-8">
            מה אומרות הלקוחות
          </h2>
          <div className="w-16 h-1 bg-healing-sage mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <Quote className="h-8 w-8 text-healing-sage mx-auto mb-6" />
                <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="w-8 h-1 bg-healing-sage mx-auto mb-4"></div>
                <p className="text-healing-green font-medium">
                  {testimonial.author}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
