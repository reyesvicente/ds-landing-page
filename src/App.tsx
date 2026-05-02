import {
  Navbar,
  NavbarContainer,
  NavbarBrand,
  NavbarNav,
  NavbarLink,
  NavbarActions,
  Button,
  Badge,
  Card,
  CardEyebrow,
  CardTitle,
  CardDescription,
  Stat,
  StatGrid,
  Separator,
  Alert,
  Avatar,
  AvatarFallback,
  AvatarGroup,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Tooltip,
  TooltipProvider,
} from "ice-ds";

const features = [
  {
    eyebrow: "Components",
    title: "30+ Primitives",
    description:
      "Every component you need — buttons, modals, tables, drawers, and more — built accessible and ready to use.",
    variant: "default" as const,
    badge: "Core",
    badgeVariant: "info" as const,
  },
  {
    eyebrow: "Design Tokens",
    title: "Neo-Brutalist Palette",
    description:
      "A curated set of bold colors, hard offset shadows, and strict typography rules that make your UI impossible to ignore.",
    variant: "featured" as const,
    badge: "New",
    badgeVariant: "new" as const,
  },
  {
    eyebrow: "Tailwind",
    title: "First-class Integration",
    description:
      "Drop in iceTailwindTokens into your config and get the full token set available as utility classes.",
    variant: "success" as const,
    badge: "DX",
    badgeVariant: "success" as const,
  },
  {
    eyebrow: "Accessibility",
    title: "ARIA Out of the Box",
    description:
      "Focus rings, keyboard navigation, aria-busy states — every component ships with sensible accessibility defaults.",
    variant: "info" as const,
    badge: "a11y",
    badgeVariant: "primary" as const,
  },
  {
    eyebrow: "TypeScript",
    title: "Fully Typed",
    description:
      "Complete TypeScript definitions for every component, variant, and prop so your editor always knows what's possible.",
    variant: "premium" as const,
    badge: "TS",
    badgeVariant: "premium" as const,
  },
  {
    eyebrow: "Customization",
    title: "CVA-Powered Variants",
    description:
      "All variants are built with class-variance-authority so you can extend or override styles without fighting the library.",
    variant: "primary" as const,
    badge: "Flexible",
    badgeVariant: "warning" as const,
  },
];

const testimonials = [
  {
    name: "Ana Reyes",
    role: "Frontend Engineer",
    text: "ice-ds saved me a week of setup. The shadow system is unlike anything I've seen — brutalist but totally refined.",
    initials: "AR",
  },
  {
    name: "Marco Tan",
    role: "Product Designer",
    text: "Finally a component library that doesn't look like every other SaaS product. The neo-yellow CTAs are fire.",
    initials: "MT",
  },
  {
    name: "Leila Cruz",
    role: "Full-Stack Dev",
    text: "Tailwind integration was seamless. Dropped in iceTailwindTokens and had the whole palette available in minutes.",
    initials: "LC",
  },
];

const faqs = [
  {
    q: "Is ice-ds free to use?",
    a: "Yes — ice-ds is MIT licensed. Use it in personal and commercial projects with no restrictions.",
  },
  {
    q: "Does it work with any React project?",
    a: "Requires React 18+. It works with Vite, Next.js, Remix, and any other modern React setup.",
  },
  {
    q: "Do I have to use Tailwind?",
    a: "No. The stylesheet ships pre-compiled CSS. Tailwind integration is optional via iceTailwindTokens.",
  },
  {
    q: "Can I customize the color palette?",
    a: "Yes. Override the token values in your Tailwind config or apply custom className props directly to any component.",
  },
];

export default function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-neo-offwhite font-body overflow-x-hidden">
        {/* ── Navbar ─────────────────────────────────────────────── */}
        <Navbar variant="default" sticky>
          <NavbarContainer>
            <NavbarBrand href="#">
              <span className="text-neo-black font-display">❄ ice-ds</span>
            </NavbarBrand>
            <NavbarNav className="hidden md:flex">
              <NavbarLink href="#features">Features</NavbarLink>
              <NavbarLink href="#stats">Stats</NavbarLink>
              <NavbarLink href="#testimonials">Testimonials</NavbarLink>
              <NavbarLink href="#faq">FAQ</NavbarLink>
            </NavbarNav>
            <NavbarActions>
              <a href="https://github.com/reyesvicente/ice-design-system" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="sm">GitHub</Button>
              </a>
              <a href="https://www.npmjs.com/package/ice-ds" target="_blank" rel="noreferrer">
                <Button variant="primary" size="sm">Get Started</Button>
              </a>
            </NavbarActions>
          </NavbarContainer>
        </Navbar>

        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="px-6 pt-16 sm:pt-24 pb-20 max-w-5xl mx-auto text-center">
          <Badge variant="new" className="mb-6">
            v1.0.2 — Now on npm
          </Badge>
          <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-7xl leading-tight tracking-tight text-neo-black mb-6">
            Build bold UIs{" "}
            <span className="bg-neo-yellow px-2 inline-block shadow-brutal-sm break-words">
              unapologetically.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neo-black/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            ice-ds is a neobrutalist React component library — hard shadows, bold
            colors, accessible primitives, and zero compromise on aesthetics.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://www.npmjs.com/package/ice-ds" target="_blank" rel="noreferrer">
              <Button variant="primary" size="lg">npm install ice-ds</Button>
            </a>
            <a href="https://github.com/reyesvicente/ice-design-system" target="_blank" rel="noreferrer">
              <Button variant="secondary" size="lg">View on GitHub</Button>
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3">
            <AvatarGroup>
              {["AR", "MT", "LC", "DK"].map((init) => (
                <Avatar key={init} size="sm">
                  <AvatarFallback>{init}</AvatarFallback>
                </Avatar>
              ))}
            </AvatarGroup>
            <p className="text-sm text-neo-black/60 font-medium">
              Trusted by developers shipping bold products
            </p>
          </div>
        </section>

        {/* ── Install snippet ────────────────────────────────────── */}
        <section className="px-6 pb-16 max-w-2xl mx-auto">
          <Alert intent="info">
            <span className="font-mono text-sm">
              npm install ice-ds &nbsp;·&nbsp; import 'ice-ds/styles'
            </span>
          </Alert>
        </section>

        <Separator className="max-w-5xl mx-auto" />

        {/* ── Stats ──────────────────────────────────────────────── */}
        <section id="stats" className="px-6 py-20 max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neo-black mb-12 text-center">
            By the numbers
          </h2>
          <StatGrid>
            <Stat
              label="Components"
              value="30+"
              accent="yellow"
              shadow="DEFAULT"
              trend="up"
              trendValue="+8 in v1"
              description="From buttons to data tables"
            />
            <Stat
              label="Bundle size"
              value="~18 kB"
              accent="blue"
              shadow="DEFAULT"
              trend="down"
              trendValue="gzipped"
              description="Tree-shakeable exports"
            />
            <Stat
              label="License"
              value="MIT"
              accent="green"
              shadow="DEFAULT"
              description="Free for personal & commercial use"
            />
            <Stat
              label="TypeScript"
              value="100%"
              accent="purple"
              shadow="DEFAULT"
              trend="flat"
              trendValue="full types"
              description="Every prop, every variant"
            />
          </StatGrid>
        </section>

        <Separator className="max-w-5xl mx-auto" />

        {/* ── Features ───────────────────────────────────────────── */}
        <section id="features" className="px-6 py-20 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Badge variant="primary" className="mb-4">
              What's inside
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-neo-black">
              Everything you need to ship
            </h2>
            <p className="mt-4 text-neo-black/60 max-w-xl mx-auto">
              A complete primitive set designed around the neobrutalist aesthetic —
              consistent, opinionated, and extensible.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <Card key={f.title} variant={f.variant} elevation="md" interactive>
                <div className="flex items-start justify-between mb-3">
                  <CardEyebrow>{f.eyebrow}</CardEyebrow>
                  <Badge variant={f.badgeVariant}>{f.badge}</Badge>
                </div>
                <CardTitle>{f.title}</CardTitle>
                <CardDescription>{f.description}</CardDescription>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="max-w-5xl mx-auto" />

        {/* ── Testimonials ───────────────────────────────────────── */}
        <section id="testimonials" className="px-6 py-20 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Badge variant="success" className="mb-4">
              Community
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-neo-black">
              What people are saying
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} elevation="md" interactive>
                <p className="text-neo-black/80 text-sm leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <Tooltip content={t.role}>
                    <Avatar size="sm">
                      <AvatarFallback>{t.initials}</AvatarFallback>
                    </Avatar>
                  </Tooltip>
                  <div>
                    <p className="font-bold text-sm text-neo-black">{t.name}</p>
                    <p className="text-xs text-neo-black/50">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="max-w-5xl mx-auto" />

        {/* ── FAQ ────────────────────────────────────────────────── */}
        <section id="faq" className="px-6 py-20 max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <Badge variant="warning" className="mb-4">
              FAQ
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-neo-black">
              Common questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <Separator className="max-w-5xl mx-auto" />

        {/* ── CTA ────────────────────────────────────────────────── */}
        <section className="px-6 py-24 max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-neo-black mb-6">
            Ready to build something{" "}
            <span className="bg-neo-pink px-2 inline-block shadow-brutal-sm">
              bold?
            </span>
          </h2>
          <p className="text-neo-black/60 text-lg mb-10">
            One install. Zero boilerplate. Full brutalist energy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://www.npmjs.com/package/ice-ds" target="_blank" rel="noreferrer">
              <Button variant="primary" size="xl">Install now</Button>
            </a>
            <a href="https://github.com/reyesvicente/ice-design-system" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="xl">Read the docs</Button>
            </a>
          </div>
        </section>

        {/* ── Footer ─────────────────────────────────────────────── */}
        <footer className="border-t-2 border-neo-black bg-neo-black text-neo-offwhite">
          <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-display font-bold text-lg">❄ ice-ds</span>
            <p className="text-sm text-neo-offwhite/50">
              MIT License · Built by{" "}
              <a
                href="https://github.com/reyesvicente"
                className="underline hover:text-neo-yellow transition-colors"
              >
                reyesvicente
              </a>
            </p>
            <div className="flex gap-4 text-sm">
              <a
                href="https://www.npmjs.com/package/ice-ds"
                className="hover:text-neo-yellow transition-colors"
              >
                npm
              </a>
              <a
                href="https://github.com/reyesvicente/ice-design-system"
                className="hover:text-neo-yellow transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}
