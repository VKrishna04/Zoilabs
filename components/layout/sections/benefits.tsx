import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Proven Reliability",
    description:
      "Demonstrate your commitment to safety with AEDs that feature remote monitoring and predictive maintenance. Employees and customers feel secure knowing your equipment is always ready.",
  },
  {
    icon: "LineChart",
    title: "Reputation Excellence",
    description:
      "Highlight your state-of-the-art safety equipment in marketing materials. Our AEDs with 360J power and AI-enabled features showcase your organization's dedication to cutting-edge protection.",
  },
  {
    icon: "Wallet",
    title: "Cost Efficiency",
    description:
      "Convert safety investments into measurable outcomes with devices that require less maintenance and offer longer battery life through e-ink display technology, reducing your total cost of ownership.",
  },
  {
    icon: "Sparkle",
    title: "Competitive Advantage",
    description:
      "Leverage our environmental hardening and one-touch operation in your messaging to differentiate your safety program from competitors still using outdated equipment.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Shortcut to Success
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our advanced AED technology doesn&apos;t just save lives—it
            streamlines emergency response and reduces long-term ownership costs
            through smart design and predictive capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
