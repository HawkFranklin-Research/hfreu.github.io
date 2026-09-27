export type MediaCard =
  | {
      kind: "video";
      span: "hero" | "wide" | "tall";
      src: string;
      expandSrc?: string;
      caption?: string;
      label?: string;
    }
  | {
      kind: "image";
      span: "wide" | "tall" | "square";
      src: string;
      alt: string;
      caption?: string;
    }
  | {
      kind: "strip";
      span: "wide";
      images: { src: string; alt: string }[];
      caption?: string;
    }
  | {
      kind: "carousel";
      span: "tall" | "square";
      images: { src: string; alt: string; caption: string }[];
    }
  | {
      kind: "stat";
      span: "square";
      stats: { value: string; label: string }[];
    }
  | {
      kind: "quote";
      span: "wide" | "square";
      lines: string[];
      attribution?: string;
    }
  | {
      kind: "copy";
      span: "square" | "wide";
      heading?: string;
      body: string;
      bullets?: string[];
    }
  | {
      kind: "ticker";
      span: "wide";
      verdicts: { label: string; confidence: string; tone: "real" | "fake" | "satire" }[];
    }
  | {
      kind: "mark";
      span: "square";
      src: string;
      alt: string;
    };

export type Chapter = {
  id: string;
  index: string;
  kicker: string;
  name: string;
  tagline: string;
  description: string;
  status: string;
  href?: string;
  accentFrom: string;
  accentTo: string;
  cards: MediaCard[];
};

export const chapters: Chapter[] = [
  {
    id: "pelliscope",
    index: "01",
    kicker: "Flagship · Digital health",
    name: "PelliScope",
    tagline: "A calmer first step for skin concerns.",
    description:
      "AI-assisted dermatology triage that turns a phone photo into a structured, clinician-ready case — one thread from screening to review, before the patient ever sits in a waiting room.",
    status: "Live pilots · EU-hosted",
    href: "https://pelliscope.eu",
    accentFrom: "#34d399",
    accentTo: "#059669",
    cards: [
      {
        kind: "video",
        span: "hero",
        src: "/portfolio/pelliscope/mobile-ad.mp4",
        expandSrc: "/portfolio/pelliscope/preview-full.mp4",
        label: "PelliScope · mobile screening",
        caption: "Tap to watch the full walkthrough"
      },
      {
        kind: "stat",
        span: "square",
        stats: [
          { value: "450+", label: "Real clinical cases" },
          { value: "0.863", label: "Top-1 AUC" },
          { value: "1–3", label: "Images per case" }
        ]
      },
      {
        kind: "strip",
        span: "wide",
        caption: "What the model sees",
        images: [
          { src: "/portfolio/pelliscope/case-eczema.jpg", alt: "Annotated eczema case photo" },
          { src: "/portfolio/pelliscope/case-insect-bite.jpg", alt: "Annotated insect-bite case photo" }
        ]
      },
      {
        kind: "carousel",
        span: "tall",
        images: [
          { src: "/portfolio/pelliscope/flow-01-landing.png", alt: "PelliScope landing screen", caption: "Patient lands" },
          { src: "/portfolio/pelliscope/flow-02-home.png", alt: "Patient home screen", caption: "Starts a case" },
          { src: "/portfolio/pelliscope/flow-03-upload.png", alt: "Uploaded skin images", caption: "Uploads photos" },
          { src: "/portfolio/pelliscope/flow-04-result.png", alt: "AI screening result", caption: "Gets a screening read" },
          { src: "/portfolio/pelliscope/flow-05-prescription.png", alt: "Prescription received", caption: "Clinician closes the loop" }
        ]
      },
      {
        kind: "quote",
        span: "square",
        lines: ["Preliminary screening.", "Before the clinic."],
        attribution: "PelliScope, for clinics"
      }
    ]
  },
  {
    id: "aclis",
    index: "02",
    kicker: "Platform layer",
    name: "ACLIS",
    tagline: "One adaptive clinical brain.",
    description:
      "The unified interface for managing AI-enabled medical devices, foundation models, agents and physician expertise — the layer that lets PelliScope, OncoGemma and the rest operate as one clinical system instead of separate tools.",
    status: "Internal platform · rolling out",
    accentFrom: "#eab308",
    accentTo: "#0ea5e9",
    cards: [
      {
        kind: "image",
        span: "wide",
        src: "/portfolio/aclis/home-dashboard.png",
        alt: "ACLIS home dashboard",
        caption: "Unified home dashboard"
      },
      {
        kind: "image",
        span: "square",
        src: "/portfolio/aclis/clinician-dashboard.png",
        alt: "ACLIS clinician dashboard",
        caption: "Clinician workspace"
      },
      {
        kind: "image",
        span: "square",
        src: "/portfolio/aclis/team-dashboard.png",
        alt: "ACLIS team dashboard",
        caption: "Team oversight view"
      },
      {
        kind: "copy",
        span: "wide",
        body: "Every model, every agent, every physician sign-off — orchestrated from one adaptive brain instead of a dozen disconnected dashboards.",
        bullets: ["AI-enabled devices", "Foundation models & agents", "Physician oversight"]
      }
    ]
  },
  {
    id: "oncogemma",
    index: "03",
    kicker: "Computational biology",
    name: "OncoGemma",
    tagline: "Computational biology. Accelerated.",
    description:
      "A digital pathology workstation that pairs high-resolution whole-slide imaging with multimodal AI, running edge Gemma directly inside the slide viewer for on-device diagnostic reasoning.",
    status: "PathoLens platform · active R&D",
    accentFrom: "#c084fc",
    accentTo: "#9333ea",
    cards: [
      {
        kind: "video",
        span: "hero",
        src: "/portfolio/oncogemma/demo.mp4",
        label: "OncoGemma · whole-slide viewer",
        caption: "Tap to expand"
      },
      {
        kind: "mark",
        span: "square",
        src: "/portfolio/oncogemma/mark.png",
        alt: "OncoGemma logo"
      },
      {
        kind: "quote",
        span: "wide",
        lines: [
          "We treat the tissue not as a picture,",
          "but as a complex biological network",
          "of interacting cellular neighborhoods."
        ]
      },
      {
        kind: "image",
        span: "square",
        src: "/portfolio/oncogemma/tile.jpg",
        alt: "Illustrative whole-slide image tile",
        caption: "Illustrative slide tile"
      }
    ]
  },
  {
    id: "aura",
    index: "04",
    kicker: "Private AI",
    name: "AURA",
    tagline: "Stop renting intelligence. Own it locally.",
    description:
      "A native Android app that runs open-source small language models entirely on-device — chat, vision Q&A and a prompt lab, with zero data leaving the phone after the model downloads.",
    status: "Android · local inference",
    href: "https://hawkfranklin.in/products/aura.html",
    accentFrom: "#818cf8",
    accentTo: "#a78bfa",
    cards: [
      {
        kind: "video",
        span: "hero",
        src: "/portfolio/aura/demo.mp4",
        label: "AURA · on-device chat",
        caption: "Tap to expand"
      },
      {
        kind: "carousel",
        span: "tall",
        images: [
          { src: "/portfolio/aura/shot-01-privacy.png", alt: "AURA privacy dialog", caption: "Privacy-first onboarding" },
          { src: "/portfolio/aura/shot-02-chat.png", alt: "AURA chat home", caption: "On-device chat" },
          { src: "/portfolio/aura/shot-03-model.png", alt: "AURA model selection", caption: "Pick your model" },
          { src: "/portfolio/aura/shot-04-response.png", alt: "AURA generated response", caption: "Runs fully offline" }
        ]
      },
      {
        kind: "copy",
        span: "square",
        body: "Pure local inference. Your prompts and data do not leave your phone.",
        bullets: ["On-device inference", "Zero data egress", "Open source & ad-free"]
      },
      {
        kind: "mark",
        span: "square",
        src: "/portfolio/aura/mark.png",
        alt: "AURA logo"
      }
    ]
  },
  {
    id: "research",
    index: "05",
    kicker: "Research",
    name: "ML Copilot Agent",
    tagline: "Plain English in. A full analysis out.",
    description:
      "An LLM-guided, sandboxed agent that runs complete machine-learning analyses from natural-language instructions instead of code — validated across four real oncology case studies with published, peer-reviewed metrics.",
    status: "Under peer review · AAMAS · ASC · ES · FCGS",
    accentFrom: "#0ea5e9",
    accentTo: "#7dd3fc",
    cards: [
      {
        kind: "image",
        span: "wide",
        src: "/portfolio/research/diagram.png",
        alt: "ML Copilot Agent unified pipeline diagram",
        caption: "Natural language → sandboxed agent → analysis → clinical report"
      },
      {
        kind: "stat",
        span: "square",
        stats: [
          { value: "0.889", label: "PAM50 subtype accuracy" },
          { value: "0.951", label: "HER2 status AUC" },
          { value: "p=0.006", label: "Log-rank, survival model" }
        ]
      },
      {
        kind: "copy",
        span: "square",
        body: "Four real oncology case studies — survival modelling, molecular subtyping, receptor-status prediction — run end to end without a single line of code from the clinician.",
        bullets: ["Head & neck cancer survival", "Breast & lung subtyping", "Transcriptome vs. proteome"]
      }
    ]
  },
  {
    id: "probx",
    index: "06",
    kicker: "Signal break · Trust & safety",
    name: "ProbX News",
    tagline: "Drop in a link. Get the verdict.",
    description:
      "A fake-news tracking AI agent: paste a news link or image and get an instant, sourced fact-check verdict — grounded in live web search, with a transparent reasoning trail.",
    status: "Gemini-grounded · live reasoning",
    accentFrom: "#c8ff4a",
    accentTo: "#7ac943",
    cards: [
      {
        kind: "mark",
        span: "square",
        src: "/portfolio/probx/mark.png",
        alt: "ProbX News logo"
      },
      {
        kind: "ticker",
        span: "wide",
        verdicts: [
          { label: "Claim: \"Vaccine contains microchips\"", confidence: "97%", tone: "fake" },
          { label: "Claim: \"City council approved new metro line\"", confidence: "88%", tone: "real" },
          { label: "Claim: \"Local news anchor turns into cat\"", confidence: "99%", tone: "satire" }
        ]
      },
      {
        kind: "copy",
        span: "square",
        body: "Drop in a news link or image, get an instant AI fact-check verdict with sourced, cited evidence.",
        bullets: ["Live web-grounded search", "Real / Fake / Satire verdicts", "Transparent reasoning trail"]
      }
    ]
  },
  {
    id: "sapaki",
    index: "07",
    kicker: "Commerce layer · Robotics",
    name: "Sapaki",
    tagline: "From lab to loading dock.",
    description:
      "HawkFranklin's emerging distribution channel for advanced robotics — bringing capable humanoid and task robots out of the lab and into real deployments, for partners and businesses that need them.",
    status: "In development · distribution & partners",
    accentFrom: "#2f73dd",
    accentTo: "#07152f",
    cards: [
      {
        kind: "video",
        span: "hero",
        src: "/portfolio/sapaki/demo.mp4",
        label: "Sapaki · robots in motion",
        caption: "Tap to expand"
      },
      {
        kind: "strip",
        span: "wide",
        caption: "Field trials & showcases",
        images: [
          { src: "/portfolio/sapaki/photo-01.jpg", alt: "Humanoid robot mid-sprint" },
          { src: "/portfolio/sapaki/photo-02.jpg", alt: "Humanoid robots playing football" },
          { src: "/portfolio/sapaki/photo-03.jpg", alt: "Robot team receiving medals" }
        ]
      },
      {
        kind: "copy",
        span: "square",
        body: "A curated distribution chain for intelligent hardware — the route from selected robotics technology to the people and businesses that need it.",
        bullets: ["Digital & physical products", "Drones & robotics", "Selected partners"]
      }
    ]
  }
];

export type NetworkChip = {
  name: string;
  blurb: string;
  logo: string;
};

export const networkChips: NetworkChip[] = [
  {
    name: "Doqlin",
    blurb: "A social network for verified doctors — with AI agents that research topics and auto-post to X on the community's behalf.",
    logo: "/portfolio/network/doqlin.png"
  },
  {
    name: "SnakeM",
    blurb: "An autonomous AI agent that trades equities in live markets, unattended.",
    logo: "/portfolio/network/snakem.png"
  },
  {
    name: "Cloud Video Vault",
    blurb: "A cloud video-streaming and automated short-form reels platform.",
    logo: ""
  }
];
