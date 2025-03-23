import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Powerful 360J Delivery",
    description:
      "Maximum defibrillation effectiveness with 360-joule shocks for better outcomes in challenging cardiac arrest scenarios.",
  },
  {
    icon: "BadgeCheck",
    title: "LoRa Remote Monitoring",
    description:
      "Real-time status reporting via LoRa wireless technology without Wi-Fi or cellular dependence.",
  },
  {
    icon: "Goal",
    title: "AI Predictive Maintenance",
    description:
      "Advanced algorithms predict potential failures before they occur, ensuring your device is always rescue-ready.",
  },
  {
    icon: "PictureInPicture",
    title: "E-Ink Battery Optimization",
    description:
      "Energy-efficient display extends battery life while maintaining clear visibility in all conditions.",
  },
  {
    icon: "MousePointerClick",
    title: "One-Touch Operation",
    description:
      "Simple activation with adaptive voice and visual guidance makes effective aid possible even for untrained users.",
  },
  {
    icon: "Newspaper",
    title: "Environmental Hardening",
    description:
      "Withstands extreme temperatures (-20°C to 60°C) with IP56 protection and military-grade drop resistance.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Our next-generation AED combines life-saving power with smart
        technology, ensuring reliability when you need it most.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
