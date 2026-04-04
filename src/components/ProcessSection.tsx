import { MapPin, FileText, CalendarCheck, Hammer, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Noel Comes to You",
    body: "You call or submit a form. Noel personally comes to your property, walks the project with you, and gives you a quote on-site. The owner quotes the job, the owner runs the crew.",
  },
  {
    icon: FileText,
    title: "You Get a Contract by Email",
    body: "Once you're ready, Noel sends a written contract to your email. You sign it, the schedule is set. No verbal handshake agreements.",
  },
  {
    icon: CalendarCheck,
    title: "Crew Arrives On Schedule",
    body: "The crew shows up when they said they would. If anything changes, you hear about it from Noel — not day-of from a crew member you've never met.",
  },
  {
    icon: Hammer,
    title: "The Work Gets Done Right",
    body: "Concrete poured to grade. Expansion joints set correctly. Pavers installed with geo mesh. Prestige finishes executed to the design you approved. Noel is on-site.",
  },
  {
    icon: Sparkles,
    title: "Site Cleaned Up Before They Leave",
    body: "Every job site gets cleaned up before the crew leaves. Tools, materials, debris — gone. This isn't standard in the trades. At Arechiga's, it is.",
  },
];

const ProcessSection = () => (
  <section id="process" className="py-20 md:py-28 bg-muted">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
          How It Works — From First Call to Final Cleanup
        </h2>
        <p className="text-lg text-muted-foreground">
          No surprises. No going quiet. Noel runs the job from the quote through the last broom pass.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-0">
        {steps.map((step, i) => (
          <div key={step.title} className="relative flex gap-6 pb-12 last:pb-0">
            {/* Vertical line */}
            {i < steps.length - 1 && (
              <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-primary/20" />
            )}
            {/* Icon */}
            <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <step.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            {/* Content */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">
                Step {i + 1}: {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
