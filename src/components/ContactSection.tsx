
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Instagram, Facebook, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-t from-healing-green to-healing-light-green">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
            צור קשר
          </h2>
          <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            מוזמנת לפנות אליי לתיאום טיפול או לכל שאלה
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/95  shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-right">
                  <h3 className="text-2xl font-medium text-healing-green mb-6">
                    בואי נתחבר
                  </h3>

                  {/* WhatsApp */}
                  <div className="mb-8">
                    <Button
                      size="lg"
                      className=" bg-healing-green hover:bg-healing-green/90 text-white w-full md:w-auto px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => window.open('https://wa.me/972542160399', '_blank')}
                    >
                      <MessageCircle className="ml-2 h-5 w-5" />
                      לתיאום טיפול בוואטסאפ
                    </Button>
                  </div>

                  {/* Social Media */}
                  <div className="flex justify-center md:justify-start space-x-4 space-x-reverse mb-8">
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-[#fafa25] border-healing-green text-healing-green hover:bg-healing-green hover:text-white rounded-full"
                      onClick={() => window.open('https://www.instagram.com/yaeldese', '_blank')}
                    >
                      <Instagram className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-[#fafa25] border-healing-green text-healing-green hover:bg-healing-green hover:text-white rounded-full"
                      onClick={() => window.open('https://www.facebook.com/share/1Aa9XuNhdc/', '_blank')}
                    >
                      <Facebook className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Location */}
                  <div className="flex items-center justify-center md:justify-start text-gray-600">
                    <MapPin className="h-5 w-5 ml-2 text-healing-green" />
                    <span>כובשי החרמון, קרית עקרון
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-healing-mint/30 rounded-2xl p-8">
                    <h4 className="text-xl font-medium text-healing-green mb-4">
                      יעל יוסף
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      מטפלת במגע לנשים<br />
                      עיסוי שוודי הוליסטי<br />
                      מרחב של רוגע וריפוי
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
