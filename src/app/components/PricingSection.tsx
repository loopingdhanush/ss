import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { FadeIn } from "./FadeIn"

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      subtitle: "For small homes",
      price: "4,999",
      power: "3 kW",
      panels: "8-10 panels",
      features: [
        "3 kW system capacity",
        "8-10 solar panels",
        "25-year warranty",
        "Monitoring system",
        "Professional installation",
        "Basic maintenance plan"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      subtitle: "Most popular",
      price: "8,999",
      power: "6 kW",
      panels: "16-20 panels",
      features: [
        "6 kW system capacity",
        "16-20 solar panels",
        "25-year warranty",
        "Advanced monitoring",
        "Professional installation",
        "Premium maintenance",
        "Battery backup option"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      subtitle: "For large properties",
      price: "14,999",
      power: "10 kW",
      panels: "30+ panels",
      features: [
        "10 kW system capacity",
        "30+ solar panels",
        "25-year warranty",
        "Smart monitoring",
        "Expert installation",
        "Priority support",
        "Full battery backup included"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="relative bg-gray-50 py-20 md:py-32">
      <FadeIn>
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Header */}
          <div className="mb-16 md:mb-20 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-red-600">
              Transparent Pricing
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
              Simple, Flexible Plans
            </h2>

            <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-slate-700">
              Choose the right solar package for your needs. All plans include installation, warranty, and ongoing support.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`transition-all duration-300 hover:-translate-y-2 ${plan.highlighted
                  ? "md:scale-105 border-red-300 shadow-xl"
                  : "hover:shadow-lg"
                  }`}
              >
                <CardHeader>
                  {plan.highlighted && (
                    <div className="mb-4 inline-block bg-red-100 text-red-600 text-xs font-bold px-4 py-2 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.subtitle}</CardDescription>

                  <div className="mt-6">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-600 ml-2">installed</span>
                  </div>

                  <p className="text-sm text-slate-600 mt-4">
                    <span className="font-semibold text-red-600">{plan.power}</span> system • {plan.panels}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button
                    className="w-full rounded-full"
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                  >
                    Get Started
                  </Button>

                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-slate-600 mb-6">
              Need a custom solution? Let our experts design a package tailored to your needs.
            </p>
            <Button
              variant="default"
              size="lg"
              className="rounded-full"
            >
              Request Custom Quote
            </Button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
