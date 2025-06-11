
import { useState } from "react";
import { Heart, Sparkles, Leaf } from "lucide-react";

const AboutSection = () => {
  const aboutContent = [
    {
      title: "מגע מרפא ומקצועי",
      text: "מטפלת במגע לנשים, מתוך רוך, הקשבה ואהבה. אני מתמחה בטיפולי מגע המותאמים אישית לכל אישה, תוך יצירת מרחב בטוח ומקבל שמאפשר ריפוי אמיתי.",
      highlight: "ניסיון של 8 שנים לכלים של התפתחות אישית וטיפול במגע",
      icon: Heart,
      gradient: "from-emerald-50 to-green-50",
    },
    {
      title: "מסע פנימי של ריפוי",
      text: "העיסוי שאני מעניקה הוא מסע פנימי עמוק – להרפיה, ריפוי וחיבור מחודש לעצמך. כל טיפול הוא חוויה ייחודית המותאמת לצרכים האישיים שלך ולמצב הרגשי והגופני שלך באותו הרגע.",
      highlight: "שילוב טכניקת עיסוי שוודי, נשימות, דמיון מודרך וכלים של התפתחות אישית",
      icon: Sparkles,
      gradient: "from-green-50 to-emerald-50",
    },
    {
      title: "שחרור כאבים ומתחים",
      text: "הטיפולים שלי מתאימים במיוחד לשחרור כאב, לחץ, סטרס ומתח , דרך מגע עדין ומרפא שמגיע עמוק לשורש הבעיה. המגע מסייע בהפגת מתחים גופניים ונפשיים כאחד.",
      highlight: "טיפול הוליסטי לגוף ולנפש",
      icon: Leaf,
      gradient: "from-emerald-50 to-stone-50",
    },
  ];

  return (
    <section className="bg-green-200 py-20 bg-gradient-to-b from-white via-stone-50/30 to-green-200">
      <div className="container mx-auto px-4">
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

<img
  src="/yael-profile.jpg"
  alt="יעל מטפלת במגע"
  className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-lg border-4 border-emerald-200"
/>

<p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed mb-4">
  בת 36, נשואה באהבה גדולה ליצחק.  
  חיה ונושמת למידת הגוף והנפש ב־8 השנים האחרונות.
</p>
<p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
  דרך ההתפתחות האישית שלי,  
  מגע ריפא לי את הנפש ולכן אני כאן.
</p>

          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {aboutContent.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="group">
                  <div className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 shadow-lg border border-emerald-100 h-full transition-transform duration-300 hover:scale-105`}>
                    {/* Header with Icon and Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-emerald-700" />
                      </div>
                      <h3 className="text-2xl font-medium text-emerald-800 leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      <p className="text-lg text-stone-700 leading-relaxed font-light">
                        {item.text}
                      </p>

                      {/* Highlight Box */}
                      <div className="bg-white/80 p-4 rounded-xl border border-emerald-200/50 backdrop-blur-sm">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0 mt-2"></div>
                          <p className="text-emerald-800 font-medium text-base">
                            {item.highlight}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
