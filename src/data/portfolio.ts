export type ChapterHead = {
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
};

export const pelliscope = {
  head: {
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
    accentTo: "#059669"
  } satisfies ChapterHead,
  video: {
    src: "/portfolio/pelliscope/mobile-ad.mp4",
    expandSrc: "/portfolio/pelliscope/preview-full.mp4",
    aspect: "696 / 1080",
    label: "PelliScope · mobile screening"
  },
  headlineStats: [
    { value: "+10", unit: "patients", label: "extra seen per 5-hour shift" },
    { value: "3 min", unit: "", label: "of discovery time saved per patient" }
  ],
  throughput: { before: "6", after: "8", unit: "patients / hour", beforeLabel: "Without PelliScope", afterLabel: "With PelliScope" },
  aucCompare: [
    { name: "Grok-4", value: 0.7 },
    { name: "GPT-5", value: 0.81 },
    { name: "Gemini 2.5", value: 0.82 },
    { name: "PelliScope", value: 0.86, highlight: true }
  ],
  aucFootnote: "2,336 internal cases · locked micro AUC 0.849",
  modelSees: [
    { src: "/portfolio/pelliscope/case-eczema.jpg", alt: "Annotated eczema case photo" },
    { src: "/portfolio/pelliscope/case-insect-bite.jpg", alt: "Annotated insect-bite case photo" }
  ],
  flow: [
    { src: "/portfolio/pelliscope/flow-01-landing.png", alt: "PelliScope landing screen", label: "Patient lands" },
    { src: "/portfolio/pelliscope/flow-02-home.png", alt: "Patient home screen", label: "Starts a case" },
    { src: "/portfolio/pelliscope/flow-03-upload.png", alt: "Uploaded skin images", label: "Uploads photos" },
    { src: "/portfolio/pelliscope/flow-04-result.png", alt: "AI screening result", label: "Screening read" },
    { src: "/portfolio/pelliscope/flow-05-prescription.png", alt: "Prescription received", label: "Clinician closes loop" }
  ]
};

export const aclisBand = {
  id: "aclis",
  kicker: "Platform layer",
  name: "ACLIS",
  tagline: "One adaptive clinical brain.",
  description:
    "Adaptive Clinically Intelligent System — unifies the entire clinical AI landscape, turning disconnected AI tools, agents, medical devices, clinician wisdom and EHR into one cohesive brain.",
  pillars: [
    { title: "Universal Integration Hub", body: "Manage every AI tool, device and model through one unified, plug-and-play interface." },
    { title: "Clinical AI Protocol", body: "A dynamic core that learns each physician's unique context to deliver personalised AI." },
    { title: "Adaptive Intelligence", body: "Continuously learns from outcomes to create a self-improving clinical ecosystem." }
  ],
  nodes: [
    "AI Agents & Foundation Models",
    "Medical Devices",
    "Genomic Facilities",
    "Diagnostic Imaging",
    "Wearables & EHR",
    "Clinical Notes & Research"
  ]
};

export const oncogemma = {
  head: {
    id: "oncogemma",
    index: "02",
    kicker: "Computational biology",
    name: "OncoGemma",
    tagline: "Computational biology. Accelerated.",
    description:
      "A digital pathology workstation that pairs high-resolution whole-slide imaging with multimodal AI, running edge Gemma directly inside the slide viewer for on-device diagnostic reasoning.",
    status: "PathoLens platform · active R&D",
    accentFrom: "#c084fc",
    accentTo: "#9333ea"
  } satisfies ChapterHead,
  video: {
    src: "/portfolio/oncogemma/demo.mp4",
    aspect: "1838 / 1080",
    label: "OncoGemma · whole-slide viewer"
  },
  mark: "/portfolio/oncogemma/mark.png",
  diagnosisLines: [
    "Loading whole-slide image…",
    "Segmenting cellular neighbourhoods…",
    "Cross-referencing CPTAC cohort…",
    "Flagging regions of interest…",
    "Drafting differential summary…"
  ],
  quote: [
    "We treat the tissue not as a picture,",
    "but as a complex biological network",
    "of interacting cellular neighborhoods."
  ]
};

export const aura = {
  head: {
    id: "aura",
    index: "03",
    kicker: "Private AI",
    name: "AURA",
    tagline: "Stop renting intelligence. Own it locally.",
    description:
      "A native Android app that runs open-source small language models entirely on-device — chat, vision Q&A and a prompt lab, with zero data leaving the phone after the model downloads.",
    status: "Android · local inference",
    href: "https://hawkfranklin.in/products/aura.html",
    accentFrom: "#818cf8",
    accentTo: "#a78bfa"
  } satisfies ChapterHead,
  video: {
    src: "/portfolio/aura/demo.mp4",
    aspect: "1080 / 2340",
    label: "AURA · on-device chat"
  },
  bullets: ["On-device inference", "Zero data egress", "Open source & ad-free"],
  copy: "Pure local inference. Your prompts and data do not leave your phone.",
  mark: "/portfolio/aura/mark.png",
  shots: [
    { src: "/portfolio/aura/shot-01-privacy.png", alt: "AURA model picker", label: "Choose your model" },
    { src: "/portfolio/aura/shot-02-chat.png", alt: "AURA chat home", label: "On-device chat" },
    { src: "/portfolio/aura/shot-03-model.png", alt: "AURA chat history drawer", label: "Saved only on this device" },
    { src: "/portfolio/aura/shot-04-response.png", alt: "AURA generated response", label: "Runs fully offline" }
  ]
};

export const research = {
  head: {
    id: "research",
    index: "04",
    kicker: "Research",
    name: "ML Copilot Agent",
    tagline: "Plain English in. A full analysis out.",
    description:
      "An LLM-guided, sandboxed agent that runs complete machine-learning analyses from natural-language instructions instead of code — validated across four real oncology case studies with published, peer-reviewed metrics.",
    status: "Under peer review · AAMAS · ASC · ES · FCGS",
    accentFrom: "#0ea5e9",
    accentTo: "#7dd3fc"
  } satisfies ChapterHead,
  diagram: "/portfolio/research/diagram.png",
  stats: [
    { value: "0.889", label: "PAM50 subtype accuracy" },
    { value: "0.951", label: "HER2 status AUC" },
    { value: "p=0.006", label: "Log-rank, survival model" }
  ],
  bullets: ["Head & neck cancer survival", "Breast & lung subtyping", "Transcriptome vs. proteome"]
};

export const probx = {
  head: {
    id: "probx",
    index: "05",
    kicker: "Signal break · Trust & safety",
    name: "ProbX News",
    tagline: "Drop in a link. Get the verdict.",
    description:
      "A fake-news tracking AI agent: paste a news link or image and get an instant, sourced fact-check verdict — grounded in live web search, with a transparent reasoning trail.",
    status: "Gemini-grounded · live reasoning",
    accentFrom: "#c8ff4a",
    accentTo: "#7ac943"
  } satisfies ChapterHead,
  mark: "/portfolio/probx/mark.png",
  demoClaims: [
    { url: "probx.news/check?q=vaccine-microchip", claim: "“Vaccine contains microchips”", tone: "fake", confidence: "97%" },
    { url: "probx.news/check?q=metro-line", claim: "“City council approved new metro line”", tone: "real", confidence: "88%" },
    { url: "probx.news/check?q=anchor-cat", claim: "“Local news anchor turns into cat”", tone: "satire", confidence: "99%" }
  ],
  bullets: ["Live web-grounded search", "Real / Fake / Satire verdicts", "Transparent reasoning trail"]
};

export const sapaki = {
  head: {
    id: "sapaki",
    index: "06",
    kicker: "Commerce layer · Robotics",
    name: "Sapaki",
    tagline: "From lab to loading dock.",
    description:
      "HawkFranklin's emerging distribution channel for advanced robotics — bringing capable humanoid and task robots out of the lab and into real deployments, for partners and businesses that need them.",
    status: "In development · distribution & partners",
    accentFrom: "#2f73dd",
    accentTo: "#07152f"
  } satisfies ChapterHead,
  reels: [
    { src: "/portfolio/sapaki/demo.mp4", aspect: "720 / 1280", tag: "REEL CUT · 01/02", caption: "Football" },
    { src: "/portfolio/sapaki/taichi.mp4", aspect: "720 / 1280", tag: "REEL CUT · 02/02", caption: "Tai chi" }
  ],
  photos: [
    { src: "/portfolio/sapaki/photo-01.jpg", alt: "Humanoid robot mid-sprint" },
    { src: "/portfolio/sapaki/photo-02.jpg", alt: "Humanoid robots playing football" },
    { src: "/portfolio/sapaki/photo-03.jpg", alt: "Robot team receiving medals" }
  ],
  tags: ["Digital & physical products", "Drones & robotics", "Selected partners"]
};

export type NetworkChip = {
  name: string;
  blurb: string;
  logo: string;
  href?: string;
};

export const networkChips: NetworkChip[] = [
  {
    name: "Doqlin",
    blurb: "A social network for verified doctors — with AI agents that research topics and auto-post to X on the community's behalf.",
    logo: "/portfolio/network/doqlin.png",
    href: "https://www.doqlin.com"
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
