"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { FadeIn } from "./FadeIn"

export default function FAQSection() {
  const faqs = [
    {
      value: "item-1",
      question: "How much can I save with solar panels?",
      answer: "Most residential customers save between 50-70% on their electricity bills. The exact amount depends on your current usage, location, and system size. Our experts provide a detailed savings analysis during consultation."
    },
    {
      value: "item-2",
      question: "What is the lifespan of solar panels?",
      answer: "Modern solar panels typically last 25-30 years or more. Most panels come with a 25-year performance warranty. They continue to generate electricity even after the warranty period, usually at 80% efficiency."
    },
    {
      value: "item-3",
      question: "Do solar panels work on cloudy days?",
      answer: "Yes, solar panels still generate electricity on cloudy days, though at reduced efficiency. They work in any daylight condition. Even on overcast days, you can expect 10-25% of peak output."
    },
    {
      value: "item-4",
      question: "What maintenance is required?",
      answer: "Solar panels require minimal maintenance. Occasional cleaning and annual inspections are recommended. Most issues are covered by warranty. Our maintenance plans include everything you need."
    },
    {
      value: "item-5",
      question: "How long does installation take?",
      answer: "Typical residential installations take 1-3 days. The timeline depends on system size and roof complexity. We handle all permits and inspections to ensure a smooth process."
    },
    {
      value: "item-6",
      question: "Are there government incentives available?",
      answer: "Yes, the federal tax credit covers 30% of installation costs. Many states and utilities offer additional incentives and rebates. We help you maximize all available benefits."
    },
    {
      value: "item-7",
      question: "What happens during power outages?",
      answer: "Standard grid-tied systems pause during outages for safety. With battery storage, you can maintain power during outages. We offer complete backup solutions."
    },
    {
      value: "item-8",
      question: "Can I expand my system later?",
      answer: "Yes, solar systems are modular and can be expanded. We design systems with future expansion in mind. Adding panels later is simple and cost-effective."
    },
  ];

  return (
    <section id="faq" className="relative bg-white py-20 md:py-12">
      <FadeIn>
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-0 md:items-start">

            {/* Left Side - Sticky, follows scroll naturally */}
            <div className="md:sticky md:top-20 md:self-start md:py-20 md:pr-6 py-20">
              <div>
                <span className="text-sm font-semibold uppercase  text-red-600">
                  Questions & Answers
                </span>

                <h2 className="mt-4 text-4xl md:text-5xl font-bold ">
                  Frequently Asked
                  <br />
                  Questions
                </h2>

                <p className="mt-6 text-base md:text-lg">
                  Everything you need to know about solar energy, installation, savings, and our services. Can't find your answer? Contact our team anytime.
                </p>

                <Button className="mt-6 rounded-full text-base" size="lg">
                  Contact Support
                </Button>
              </div>
            </div>

            {/* Right Side - Scrollable */}
            <div className="md:py-20 md:pl-6">
              <Accordion type="single" collapsible defaultValue="item-1">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.value} value={faq.value}>
                    <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-slate-900 hover:text-red-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-slate-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

          </div>
        </div>
      </FadeIn>
    </section>
  );
}
