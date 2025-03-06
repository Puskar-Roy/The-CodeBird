import { useEffect, useState } from "react";
import {Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialSlider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative z-2">
    <div className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">What Our Members Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our community members about their experiences at Our CodeBird.
          </p>
        </div>

        <div className="relative px-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        <div className="swiper-pagination mt-8 flex justify-center gap-2"></div>
      </div>
    </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="backdrop-blur-10 bg-slate-5 border-blue-300 rounded-xl shadow-md p-6 h-full flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Quote className="h-8 w-8 text-blue-500 mb-4 opacity-70" />
      <p className="text-base flex-grow mb-6">{testimonial.quote}</p>
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-blue-100">
          <img
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="ml-4">
          <p className="font-medium">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "Sourav Biswas",
    role: "MTech. @NITR ",
    quote:
      "As someone who was self-taught, I was looking for a community to grow with. The mentorship program at Coding Club connected me with industry professionals who helped me land my first developer job.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQG0UhAAhWsV7g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723126923749?e=2147483647&v=beta&t=cISUvV4rXBfKknnpnWCy4sSe5YKba-97mtktJ0-bdwA",
  },
  {
    name: "Amrit Dhandharia",
    role: "SWE @Aviac Technologies",
    quote:
      "From a beginner to a professional, providing guidance at every step. Its hands-on approach, through real-world projects and mentorship, made all the difference in accelerating my learning and building confidence.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQH4biOhAkCQvw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1691479785522?e=1746057600&v=beta&t=3ikJMx8d_24ua9W9-TGUTyM920M7CwraOLXR_YOd3L0",
  },
  {
    name: "Gaurav Singh",
    role: "Associate Technical Consultant @Streebo",
    quote:
      "I had zero coding experience when I joined. The beginner-friendly workshops and patient mentors helped me to increase encouragement in coding. Now I'm helping others get started!",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHRWBL0Crqc4w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1691772354385?e=1746057600&v=beta&t=4E3bX8OFJ5mew-b7X01_WsYSOl7Q9sK_u1Ml_CdhvCM",
  },
  {
    name: "Harshita Singh",
    role: "Assistant System Enggineer @Capsitech",
    quote:
      "The knowledge I gained and the connections I made played a key role in helping me secure my dream job! This community gave me the confidence and skills to succeed in the tech industry.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEqmyHbVm8qAg/profile-displayphoto-shrink_400_400/B56ZPFVO.hGcAg-/0/1734182499555?e=1746057600&v=beta&t=HOt-kFxPJH8OdT2_JzkiJACmYuVeLF2utmguS1Bq2Yo",
  },
  {
    name: "Anuraj Kumar",
    role: "Freelancer",
    quote:
      "CodeBird provided me with a strong foundation to thrive in the tech industry. The hands-on projects and expert mentorship played a crucial role in my growth. With the skills I’ve gained, I feel confident tackling real-world challenges.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFhEY7G-Zg6Ow/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707978870074?e=1746057600&v=beta&t=-tICkhD0pESDJ1XpuozJycODynSisEjfoIuR3mFBGdg",
  },
  {
    name: "Kamal Singh",
    role: "SDE @Itobaz",
    quote:
      "Being part of CodeBird was a transformative experience. The skills and network I built helped me land my dream job! The mentorship and collaborative community gave me the confidence to tackle and grow as a professional.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGrsnK8Krv3lA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1715502163744?e=1746057600&v=beta&t=DMlHnjKScoflkRcvsOidw7i6ExgH0REW1ScJggt-mfE",
  },
  {
    name: "Aditya Raj",
    role: "Ex-SDEIntern @Promact",
    quote:
      "The specialized tracks allowed me to deep-dive into data science and machine learning. The hands-on projects gave me practical experience that I showcase in interviews. I'm now interning at a tech company!",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGw5Nh0rVRX2g/profile-displayphoto-shrink_400_400/B56ZRBr2IpGoAg-/0/1736268801273?e=1746057600&v=beta&t=YkbNrHI2X1v02HJ3q7b7p1sDC9CIieCq1DEKJm2qXU4",
  },
  {
    name: "Dibyashree Nanda",
    role: "Data Intelligence & Analytics @INT",
    quote:
      "CodeBird equipped me with the skills to transform raw data into meaningful insights. As a Data Analytics professional, I now help businesses make smarter, data-driven decisions with confidence.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQH_cwfHSUonHA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731385946795?e=1746057600&v=beta&t=LU0Trq1xFDyul-SZOUQTxLeVcRZN_UkmVPDCR4KCCnI",
  },
  {
    name: "Chirantan Das",
    role: "AI/ML Enthusiasts",
    quote:
      "The journey has been nothing short of transformative! With mentorship and hands-on learning, I now develop AI models that optimize processes, enhance decision-making, and drive technological progress.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEDp5IS4oxZ0Q/profile-displayphoto-shrink_400_400/B56ZRpZDjeH0Ag-/0/1736934963874?e=1746057600&v=beta&t=jiM0HdY6VGUfq6NKEuHi7D9rewSQrr6BiiJ1MRKlFu0",
  },
];
