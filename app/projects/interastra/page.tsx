"use client";

/* ─── InterAstra — Case Study ─────────────────────────────────────────────────
   5-sprint pervasive AR game design project.
   Tab navigation lets visitors step through each sprint.
─────────────────────────────────────────────────────────────────────────── */

import { useState } from "react";
import Link  from "next/link";
import Image from "next/image";

const SPRINTS = [
  "Sprint 1",
  "Sprint 2",
  "Sprint 3",
  "Sprint 4",
  "Sprint 5",
] as const;

type Sprint = (typeof SPRINTS)[number];

export default function InterAstraCaseStudy() {
  const [active, setActive] = useState<Sprint>("Sprint 1");

  return (
    <main className="min-h-screen bg-[#F8F7F4]">

      {/* Back */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs text-[#787878] hover:text-[#E8441C] transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to all projects
        </Link>
      </div>

      {/* Cover image */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-14">
        <div className="relative w-full aspect-[16/9] overflow-hidden mb-14">
          <Image
            src="/projects/interastra/cover.png"
            alt="InterAstra AR Game Design"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      </div>

      {/* Hero */}
      <header className="max-w-5xl mx-auto px-6 md:px-10 pb-12 border-b border-[#E2DFD8]">
        <p className="text-xs uppercase tracking-[0.15em] text-[#E8441C] mb-3">UI/UX · Pervasive Gaming · AR</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-[#0F0F0F] leading-tight mb-4">
          InterAstra
        </h1>
        <p className="text-[#4A4A4A] text-lg leading-relaxed max-w-2xl mb-10">
          InterAstra was a client case during my studies, commissioning concept development for their AR game. Over five sprints I explored how digital AR objects can interact with the physical world and how design can strengthen the connection between the two.
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-8 text-sm border-t border-[#E2DFD8] pt-8">
          {[
            { label: "Role",  value: "Project Lead, UX Designer, Videographer" },
            { label: "Tools", value: "Figma · Reality Composer · Canva" },
            { label: "Year",  value: "2024" },
            { label: "Type",  value: "Client case · 5 sprints" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs uppercase tracking-[0.12em] text-[#787878] mb-1">{label}</p>
              <p className="text-[#0F0F0F] font-medium">{value}</p>
            </div>
          ))}
        </div>
      </header>

      {/* Pitch video */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-12 border-b border-[#E2DFD8]">
        <p className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-4">Final Deliverable</p>
        <div className="border border-[#E2DFD8]">
          <video src="/projects/interastra/video.mp4" controls playsInline className="w-full h-auto" />
        </div>
      </div>

      {/* Sprint tabs */}
      <div className="sticky top-0 z-10 bg-[#F8F7F4] border-b border-[#E2DFD8]">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="flex" role="tablist">
            {SPRINTS.map((sprint, i) => (
              <button
                key={sprint}
                role="tab"
                aria-selected={active === sprint}
                onClick={() => setActive(sprint)}
                className={`relative flex-1 py-4 text-sm font-medium transition-colors cursor-pointer ${
                  active === sprint
                    ? "text-[#0F0F0F]"
                    : "text-[#787878] hover:text-[#0F0F0F]"
                }`}
              >
                <span className="sm:hidden">{i + 1}</span>
                <span className="hidden sm:inline">{sprint}</span>
                {active === sprint && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E8441C]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-16">
        {active === "Sprint 1" && <Sprint1 />}
        {active === "Sprint 2" && <Sprint2 />}
        {active === "Sprint 3" && <Sprint3 />}
        {active === "Sprint 4" && <Sprint4 />}
        {active === "Sprint 5" && <Sprint5 />}
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pb-20 border-t border-[#E2DFD8] pt-10">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs text-[#787878] hover:text-[#E8441C] transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to all projects
        </Link>
      </div>
    </main>
  );
}

/* ─── Sprint 1 ──────────────────────────────────────────────────────────── */
function Sprint1() {
  return (
    <div className="space-y-20">

      {/* Sprint label */}
      <div>
        <p className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-2">Sprint 1</p>
        <h2 className="font-display text-2xl font-bold text-[#0F0F0F] mb-1">
          Design Brief / Moodboard / Photo Studio / Design Concept
        </h2>
        <p className="text-[#787878] text-sm">
          The sprint opened by selecting and responding to two design briefs that established the game&apos;s narrative direction.
        </p>
      </div>

      {/* Designbrief — intro */}
      <Section label="Design Brief: InterAstra">
        <p className="text-[#4A4A4A] leading-relaxed max-w-2xl">
          The sprint began with a brief selection process. After careful consideration, two briefs were chosen to move forward with: <strong className="text-[#0F0F0F] font-medium">The Megastructure</strong> and <strong className="text-[#0F0F0F] font-medium">Space Safari</strong>.
        </p>
      </Section>

      {/* Brief 1 */}
      <Section label="Brief 1: The Megastructure">
        <div className="grid md:grid-cols-2 gap-10 items-start mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-[#E8441C] mb-2">Theme: Puzzle</p>
            <h3 className="font-display text-xl font-bold text-[#0F0F0F] mb-4">The Megastructure</h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6">
              The player solves an AR-based puzzle in the city by physically moving to predefined locations and positioning AR objects correctly to manipulate a xenofact. Players face continuous choices that affect their progress. Time and distance are central to the tension and engagement.
            </p>
            <div className="space-y-4">
              <BriefRow label="Duration" value="60–90 minutes" />
              <BriefRow label="Physical activity" value="Min. 7,000 steps" />
              <BriefRow label="Task" value="Position light sources correctly" />
            </div>
          </div>
          <div className="bg-[#F8F7F4] border border-[#E2DFD8] p-5 space-y-3">
            <p className="text-xs font-semibold text-[#0F0F0F] uppercase tracking-[0.12em]">Deliverables</p>
            {[
              "AR puzzle design: an interactive puzzle with AR objects to be positioned",
              "Mapping: a detailed map of physical locations the player moves through",
              "UI design: a user interface to guide the player and show progress",
              "Game logic: choices and consequences based on player decisions",
              "Feedback system: visual and audio feedback for correct light positioning",
              "Narrative content: story elements integrated with the puzzle and wider narrative",
            ].map((item, i) => (
              <p key={i} className="text-xs text-[#787878] leading-relaxed">{i + 1}. {item}</p>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-[#E2DFD8] overflow-hidden bg-white">
            <LightboxImage src="/projects/interastra/designbrief-1.jpeg" alt="Design Brief 1 The Megastructure" width={1200} height={800} className="w-full h-auto" />
          </div>
          <div className="border border-[#E2DFD8] overflow-hidden bg-white">
            <LightboxImage src="/projects/interastra/designbrief-1-description.jpeg" alt="Design Brief 1 description" width={1200} height={800} className="w-full h-auto" />
          </div>
        </div>
      </Section>

      {/* Brief 2 */}
      <Section label="Brief 2: Space Safari">
        <div className="grid md:grid-cols-2 gap-10 items-start mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-[#E8441C] mb-2">Theme: Space Safari</p>
            <h3 className="font-display text-xl font-bold text-[#0F0F0F] mb-4">Space Safari</h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6">
              The player collects experiences of phenomena such as asteroids, planets, comets and radiation. They discover extraterrestrial artefacts and perform close-up investigations, using an audio interface to interact with celestial bodies. A stress-free, zen-like activity without time pressure.
            </p>
            <div className="space-y-4">
              <BriefRow label="Physical activity" value="Min. 8,000 steps" />
              <BriefRow label="Experience" value="Relaxed, no time pressure" />
              <BriefRow label="Interface" value="Audio-based interaction" />
            </div>
          </div>
          <div className="bg-[#F8F7F4] border border-[#E2DFD8] p-5 space-y-3">
            <p className="text-xs font-semibold text-[#0F0F0F] uppercase tracking-[0.12em]">Deliverables</p>
            {[
              "Interaction design: a system for scanning and interacting with astronomical phenomena",
              "Game map: a digital map showing phenomena the player can explore",
              "Audio interface: a sound-based UI for discovering and interacting with celestial bodies",
              "Data tracking: technology to track and log the player's steps and discoveries",
              "Narrative content: story elements and missions based on the player's discoveries",
              "AR objects: AR designs representing various astronomical phenomena",
            ].map((item, i) => (
              <p key={i} className="text-xs text-[#787878] leading-relaxed">{i + 1}. {item}</p>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-[#E2DFD8] overflow-hidden bg-white">
            <LightboxImage src="/projects/interastra/designbrief-2.jpeg" alt="Design Brief 2 Space Safari" width={1200} height={800} className="w-full h-auto" />
          </div>
          <div className="border border-[#E2DFD8] overflow-hidden bg-white">
            <LightboxImage src="/projects/interastra/designbrief-2-description.jpeg" alt="Design Brief 2 description" width={1200} height={800} className="w-full h-auto" />
          </div>
        </div>
      </Section>

      {/* Moodboard */}
      <Section label="Moodboard">
        <div className="grid md:grid-cols-2 gap-10 items-start mb-8">
          <p className="text-[#4A4A4A] leading-relaxed text-sm">
            The moodboard was built around the feeling and colour palette intended for the design. Rooted in modern sci-fi with influences from futuristic technology, neon colours against dark backgrounds, and strong contrasts throughout.
          </p>
          <p className="text-[#4A4A4A] leading-relaxed text-sm">
            Creating the moodboard gave a clear visual reference point to design toward. The key learning: visually representing a cohesive whole across many different elements is harder than it looks. Staying open and playful through the process unlocks creative directions that a more rigid approach would miss.
          </p>
        </div>
        <div className="border border-[#E2DFD8] overflow-hidden bg-white">
          <LightboxImage src="/projects/interastra/moodboard-1.jpg" alt="Sprint 1 — Moodboard" width={1600} height={900} className="w-full h-auto" />
        </div>
      </Section>

      {/* Fotostudio */}
      <Section label="Photo Studio">
        <div className="grid md:grid-cols-[1fr_1fr_1fr] gap-6 items-start">
          <div className="border border-[#E2DFD8] overflow-hidden bg-white">
            <LightboxImage
              src="/projects/interastra/fotostudio-pussel.png"
              alt="Photo Studio — natural materials"
              width={600}
              height={567}
              className="w-full h-auto"
            />
          </div>
          <div className="border border-[#E2DFD8] overflow-hidden bg-white">
            <LightboxImage
              src="/projects/interastra/fotostudio-rymd-safari.png"
              alt="Photo Studio — geometric shapes in urban space"
              width={600}
              height={658}
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-4">
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              With two concepts selected, the next step was documenting how different game moments could connect to real-world objects. The photo studio sessions surfaced important insights about potential anchors for AR objects within the game.
            </p>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              Key finding: four distinct nature elements could each serve as a collectible resource that players find in their environment. Geometric shapes found in urban spaces also emerged as a mechanism to encourage movement and enable puzzle interactions.
            </p>
          </div>
        </div>
      </Section>

      {/* Mindmap */}
      <Section label="Mindmap">
        <p className="text-[#4A4A4A] leading-relaxed max-w-2xl mb-8 text-sm">
          A mindmap was created to map out the connections between the two design concepts, game mechanics, physical interactions, and AR elements. It became a key tool for structuring the design direction before moving into prototyping.
        </p>
        <div className="border border-[#E2DFD8] overflow-hidden bg-white max-w-lg">
          <LightboxImage src="/projects/interastra/mindmap.jpeg" alt="Sprint 1 — Mindmap" width={800} height={600} className="w-full h-auto" />
        </div>
      </Section>

      {/* Concept Sketches */}
      <Section label="Concept Sketches">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-[#787878] mb-3">The Megastructure</p>
            <div className="border border-[#E2DFD8] overflow-hidden bg-white">
              <LightboxImage src="/projects/interastra/skisser.png" alt="The Megastructure concept sketches" width={1920} height={1080} className="w-full h-auto" />
            </div>
          </div>
          <div>
            <p className="text-xs text-[#787878] mb-3">Space Safari</p>
            <div className="border border-[#E2DFD8] overflow-hidden bg-white">
              <LightboxImage src="/projects/interastra/space-safari.png" alt="Space Safari concept sketches" width={1200} height={800} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </Section>

      {/* Key Takeaways */}
      <Section label="Key Takeaways">
        <div className="grid md:grid-cols-3 gap-px bg-[#E2DFD8]">
          {[
            { num: "01", title: "Brief selection shapes everything", body: "Choosing two briefs over one opened more creative territory and forced early decisions about what made each concept distinct." },
            { num: "02", title: "Moodboards as anchors", body: "Building a visual reference point before sketching made it easier to stay consistent and evaluate new ideas against an established direction." },
            { num: "03", title: "Photo studio as research", body: "Documenting real-world objects and environments surfaced unexpected anchors for AR interaction that sketching alone would not have revealed." },
          ].map(({ num, title, body }) => (
            <div key={num} className="bg-[#F8F7F4] p-8">
              <p className="text-xs text-[#E8441C] font-medium mb-3">{num}</p>
              <p className="font-medium text-[#0F0F0F] text-sm mb-2">{title}</p>
              <p className="text-[#787878] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

    </div>
  );
}

/* ─── Sprint 2 ──────────────────────────────────────────────────────────── */
function Sprint2() {
  return (
    <div className="space-y-20">

      <div>
        <p className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-2">Sprint 2</p>
        <h2 className="font-display text-2xl font-bold text-[#0F0F0F] mb-1">
          Reality Composer / AR Prototypes / Revised Moodboard
        </h2>
        <p className="text-[#787878] text-sm">
          Four prototypes built in Reality Composer, each exploring a different dimension of AR design.
        </p>
      </div>

      {/* Intro */}
      <Section label="Overview">
        <p className="text-[#4A4A4A] leading-relaxed max-w-2xl">
          Sprint 2 centred on hands-on exploration of Reality Composer, Apples AR authoring tool. Working across four distinct prototypes (digital material, analog material, human-environment interaction, and scale) I stress-tested how AR objects behave in real-world conditions and what design decisions most affect the player experience.
        </p>
      </Section>

      {/* Revised moodboard */}
      <Section label="Revised Moodboard">
        <p className="text-[#4A4A4A] text-sm leading-relaxed max-w-2xl mb-8">
          After Sprint 1, the visual direction was refined to better reflect how the concept had evolved. The updated moodboard shifted focus toward in-game elements: collectible crystals, celestial star maps, HUD UI systems, and alien environments. This built a clearer picture of the game&apos;s visual language.
        </p>
        <div className="border border-[#E2DFD8] overflow-hidden bg-white">
          <LightboxImage src="/projects/interastra/moodboard-2.png" alt="Revised Moodboard Sprint 2" width={1600} height={1000} className="w-full h-auto" />
        </div>
      </Section>

      {/* Prototype 1 — Digital material */}
      <Section label="Prototype 1: AR Digital Material">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Placeholder label="AR globe prototype (image/video)" tall />
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-[#0F0F0F]">AR Digital Material</h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              This prototype tested the Space Safari concept by placing a large AR globe (a star map with constellation markers) in an outdoor environment. Each star represented a player mission, inviting the user to physically step inside the object to interact with it.
            </p>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              Key finding: the scale of an AR object is critical. It needs to be large enough for the user to enter, but also sized so that individual mission points remain reachable. Contrast, lighting, and interaction distance emerged as the most impactful design variables.
            </p>
          </div>
        </div>
      </Section>

      {/* Prototype 2 — Analog material */}
      <Section label="Prototype 2: AR Analog Material">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-[#0F0F0F]">AR Analog Material</h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              To contrast the digital approach, this prototype explored AR through sketched, hand-drawn concepts. The challenge: AR is inherently 3D while sketching is 2D, which required rethinking how spatial relationships and narratives could be communicated on paper.
            </p>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              The outcome was a hand-held map sketch that served as a lo-fi stand-in for the in-game navigation interface, exploring how distance affects the player&apos;s ability to read and interact with AR elements in the environment.
            </p>
          </div>
          <Placeholder label="Analog prototype video" tall />
        </div>
      </Section>

      {/* Prototype 3 — Interaction & environment */}
      <Section label="Prototype 3: User & Environment Interaction">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Placeholder label="Outdoor AR prototype video" tall />
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-[#0F0F0F]">Interaction Between User and Environment</h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              This prototype tested how AR objects anchor to outdoor environments and how players navigate between them. Testing revealed that low-contrast AR objects disappear into their surroundings, a critical issue for a game that relies on players spotting objects in the wild.
            </p>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              One of the four nature elements (fire) proved difficult to represent convincingly in AR, which led to a broader iteration on the concept: the game should not depend on any specific environment type, so players can engage across varied outdoor settings.
            </p>
          </div>
        </div>
      </Section>

      {/* Prototype 4 — Scale */}
      <Section label="Prototype 4: Scale">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-[#0F0F0F]">Scale</h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              The final prototype focused specifically on scale as a design variable: how the perceived size of an AR object changes the player&apos;s relationship to it. Objects that feel too small lose presence; objects that are too large can disorient or obstruct.
            </p>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              This informed the decision to move forward with the Space Safari direction: a globe-scale AR object gives players an immersive entry point while keeping individual interactive elements (the mission stars) at a human-accessible size.
            </p>
          </div>
          <Placeholder label="Scale prototype image/video" tall />
        </div>
      </Section>

      {/* Interaction Map */}
      <Section label="Interaction Map">
        <p className="text-[#4A4A4A] leading-relaxed max-w-2xl mb-8 text-sm">
          An interaction map was created in Twine to model the Space Safari concept in more detail, focusing on a specific sequence of the game. Building the narrative as a flowchart made it possible to test how all player choices connect and whether the flow reads as coherent and clear from the user&apos;s perspective.
        </p>
        <div className="border border-[#E2DFD8] overflow-hidden bg-white max-w-lg">
          <LightboxImage src="/projects/interastra/interaktionskarta.png" alt="Interaction map created in Twine" width={800} height={600} className="w-full h-auto" />
        </div>
      </Section>

      {/* Key Takeaways */}
      <Section label="Key Takeaways">
        <div className="grid md:grid-cols-3 gap-px bg-[#E2DFD8]">
          {[
            { num: "01", title: "Scale is a design decision", body: "The size of an AR object fundamentally changes the player's relationship to it. Too small and it loses presence; too large and it disorients." },
            { num: "02", title: "Contrast and lighting matter", body: "Low-contrast AR objects disappear into real-world surroundings. Visibility in varied outdoor conditions must be a design constraint from the start." },
            { num: "03", title: "Map before you build", body: "The Twine interaction map revealed gaps in the game flow that prototyping alone could not. Modelling the narrative structure first makes the building phase faster and cleaner." },
          ].map(({ num, title, body }) => (
            <div key={num} className="bg-[#F8F7F4] p-8">
              <p className="text-xs text-[#E8441C] font-medium mb-3">{num}</p>
              <p className="font-medium text-[#0F0F0F] text-sm mb-2">{title}</p>
              <p className="text-[#787878] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

    </div>
  );
}

/* ─── Sprint 3 ──────────────────────────────────────────────────────────── */
function Sprint3() {
  return (
    <div className="space-y-20">

      <div>
        <p className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-2">Sprint 3</p>
        <h2 className="font-display text-2xl font-bold text-[#0F0F0F] mb-1">
          The Real / The True /<br className="md:hidden" /> The Ideal
        </h2>
        <p className="text-[#787878] text-sm">
          Merging both game concepts into one brief, anchored through SWOT analysis, academic research, and designer positioning.
        </p>
      </div>

      {/* Overview */}
      <Section label="Overview">
        <p className="text-[#4A4A4A] leading-relaxed max-w-2xl">
          Sprint 3 tasked the team with merging the two game concepts into a single unified brief. The sprint was structured around three lenses (the real, the true, and the ideal) to ground the concept in evidence, research, and clear design intent. Mapping the most critical game moments for a pitch pushed the work toward concrete visual and narrative output.
        </p>
      </Section>

      {/* The Real — SWOT */}
      <Section label="The Real: SWOT Analysis">
        <div className="grid md:grid-cols-[2fr_1fr] gap-10 items-start">
          <div className="border border-[#E2DFD8] overflow-hidden bg-white">
            <Image
              src="/projects/interastra/swot.png"
              alt="SWOT analysis"
              width={1920}
              height={1940}
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-4">
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              A SWOT analysis grounded the concept in the real conditions players would encounter. Because the game targets sedentary users who want to engage with and learn from nature, the analysis focused on the human-environment relationship and how people move through outdoor spaces and what motivates them to do so.
            </p>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              The results confirmed that outdoor time carries both significant risks and benefits. Crucially, AR elements can highlight and illuminate aspects of the natural environment that players would otherwise overlook, making nature more engaging and accessible for the target audience.
            </p>
          </div>
        </div>
      </Section>

      {/* The True — Research */}
      <Section label="The True: Academic Research">
        <p className="text-[#4A4A4A] text-sm leading-relaxed max-w-2xl mb-10">
          Six articles were screened; two were selected to directly inform the design direction. Both shaped how AR objects are anchored in natural environments and how audio can reduce screen dependency while deepening the player&apos;s connection to the space around them.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-[#787878] mb-3">Article 1</p>
            <div className="border border-[#E2DFD8] overflow-hidden bg-white">
              <LightboxImage src="/projects/interastra/article-1.png" alt="Article 1: Mobile AR in the Wild" width={800} height={600} className="w-full h-auto" />
            </div>
            <p className="text-xs text-[#787878] mt-3 leading-relaxed">
              <em>Mobile AR in the Wild: Exploring an Augmented Reality Concept for a Nature Discovery Path and evaluating its Serious Game Elements</em>, Trefzger &amp; Schlegel, 2023. Informed how AR objects can be anchored in outdoor environments to create immersive, educational player experiences.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-[#787878] mb-3">Article 2</p>
            <div className="border border-[#E2DFD8] overflow-hidden bg-white">
              <LightboxImage src="/projects/interastra/article-2.png" alt="Article 2: Audio AR" width={800} height={600} className="w-full h-auto" />
            </div>
            <p className="text-xs text-[#787878] mt-3 leading-relaxed">
              <em>Audio AR to Support Nature Connectedness in People with Visual Disabilities</em>, Bandukda &amp; Holloway, 2020. Introduced the concept of audio-augmented reality (AAR) as a guide, shifting the player&apos;s attention from screen to surroundings.
            </p>
          </div>
        </div>

        {/* Concept development — sound */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="border border-[#E2DFD8] overflow-hidden bg-white">
            <LightboxImage src="/projects/interastra/sound-as-object.jpg" alt="Concept: Sound as object" width={800} height={600} className="w-full h-auto" />
          </div>
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-[#0F0F0F]">
              Concept Development: Sound as Object
            </h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              Building on the audio AR research, the concept evolved to use sound as the primary way to represent each of the four nature elements: leaf (forest), rock (earth), water, and fire. Rather than relying on visual AR anchors alone, each element would emit a distinct ambient soundscape, guiding players toward objects in the environment without keeping their eyes locked to the screen.
            </p>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              This shift opened a new design axis: moving between a micro-perspective (phone screen in focus) and a macro-perspective (nature in focus), with sound bridging the two.
            </p>
          </div>
        </div>
      </Section>

      {/* The Ideal */}
      <Section label="The Ideal">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-[#0F0F0F]">Role & Identity</h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              Two designer roles were identified for this project: the artist, who shapes the game&apos;s creative and narrative expression, and the designer-as-service, who ensures the experience genuinely meets the player&apos;s needs. Holding both simultaneously (creative freedom and user-centred rigour) defined the design approach throughout.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-[#0F0F0F]">Core Value</h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              The central value proposition: create an engaging, interactive outdoor experience that combines AR objects with audio feedback to strengthen the player&apos;s connection to the natural environment and make nature accessible and rewarding for an audience that wouldn&apos;t otherwise seek it out.
            </p>
          </div>
        </div>
      </Section>

      {/* Key takeaways */}
      <Section label="Key Takeaways">
        <div className="grid md:grid-cols-3 gap-px bg-[#E2DFD8]">
          {[
            { num: "01", title: "Sound as guide", body: "Audio AR reduces screen dependency and draws players into the natural environment rather than away from it." },
            { num: "02", title: "SWOT-informed design", body: "Identifying real risks and opportunities early shaped decisions about environment types, accessibility, and AR object contrast." },
            { num: "03", title: "Dual designer role", body: "Balancing artistic vision with service design kept the concept both creatively strong and genuinely useful for the target audience." },
          ].map(({ num, title, body }) => (
            <div key={num} className="bg-[#F8F7F4] p-8">
              <p className="text-xs text-[#E8441C] font-medium mb-3">{num}</p>
              <p className="font-medium text-[#0F0F0F] text-sm mb-2">{title}</p>
              <p className="text-[#787878] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

    </div>
  );
}

/* ─── Sprint 4 ──────────────────────────────────────────────────────────── */
function Sprint4() {
  return (
    <div className="space-y-20">

      <div>
        <p className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-2">Sprint 4</p>
        <h2 className="font-display text-2xl font-bold text-[#0F0F0F] mb-1">
          User Testing / Split-Screen / Design Concept 2.0
        </h2>
        <p className="text-[#787878] text-sm">
          Four filmed user tests using split-screen, and a full mid-sprint pivot that led to the final game concept.
        </p>
      </div>

      {/* Overview */}
      <Section label="Overview">
        <p className="text-[#4A4A4A] leading-relaxed max-w-2xl mb-4">
          Sprint 4 opened with prototype filming for user testing, then hit a decisive turning point. Midway through, the entire design concept was scrapped and rebuilt from the ground up, pushing past the original narrative constraints to arrive at something more coherent and more exciting: Designkoncept 2.0.
        </p>
        <p className="text-[#4A4A4A] leading-relaxed max-w-2xl">
          Split-screen became the central method of the sprint, filming the user in their physical environment on one side and the AR interface on the other simultaneously. This gave an unusually complete view of how players experience the game, making it possible to observe body language, hesitation, and instinctive interaction patterns alongside what they were seeing on screen.
        </p>
      </Section>

      {/* Test 1 */}
      <Section label="User Test 1: Game Introduction">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="border border-[#E2DFD8] bg-black"><video src="/projects/interastra/test-1-introduction.mp4" controls playsInline className="w-full h-auto" /></div>
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-[#0F0F0F]">Game Introduction</h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              The first test focused on the onboarding moment: how users absorb the initial game narrative and how much information can be presented before it becomes overwhelming. The split-screen showed the player receiving the mission briefing while the interface displayed the collectibles and crystal inventory screens.
            </p>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              Finding: the introduction was sufficient. Users did not feel the UI was unclear, and the amount of text shown at once was manageable, confirming that the pacing of the onboarding worked without needing a reduction in content.
            </p>
          </div>
        </div>
      </Section>

      {/* Test 2 */}
      <Section label="User Test 2: Battery Interaction">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-[#0F0F0F]">User Interaction with the Battery</h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              This prototype tested how a user naturally approaches an AR object in the environment with minimal instruction. The question: does the player choose to touch, tap, or physically move toward the object?
            </p>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              The user instinctively tapped the AR object with their hand, a clear and decisive interaction. However, this took a moment of consideration, pointing to an opportunity: adding a visible interactive element (a button affordance) directly on the battery would reduce hesitation and make the interaction feel immediately obvious.
            </p>
          </div>
          <div className="border border-[#E2DFD8] bg-black"><video src="/projects/interastra/battery.mp4" controls playsInline className="w-full h-auto" /></div>
        </div>
      </Section>

      {/* Test 3 */}
      <Section label="User Test 3: Alien Encounter">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="border border-[#E2DFD8] bg-black"><video src="/projects/interastra/alien.mp4" controls playsInline className="w-full h-auto" /></div>
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-[#0F0F0F]">Player Meets an Alien</h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              This test introduced a threat encounter for the first time: an alien that attacks the player. The result was the most immersive moment of the sprint: the user physically reached for their phone like a weapon to fight back, treating the device as an object within the game world rather than a screen to look at.
            </p>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              It also marked the first introduction of failure states. The user showed clear motivation to continue after being hit, confirming that the narrative had created genuine investment in the outcome. This opened up significant design space for incorporating the phone as a physical prop more deliberately.
            </p>
          </div>
        </div>
      </Section>

      {/* Test 4 */}
      <Section label="User Test 4: Finding the Crystal">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-[#0F0F0F]">User Finds the Crystal</h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              The final test presented a mental puzzle: directional arrows guide the player, but they only advance when the player steps in the right direction first. The task appears simple but has underlying rules the player must discover.
            </p>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              Users learned quickly from failure, adapted, and completed the task, demonstrating that rule discovery through play works without explicit instruction. Collecting the crystal at the end prompted a key design decision: add a sequence that reveals the remaining map and unlocks hidden missions, giving the player a tangible sense of progress.
            </p>
          </div>
          <div className="border border-[#E2DFD8] bg-black"><video src="/projects/interastra/test-4-kristall.mp4" controls playsInline className="w-full h-auto" /></div>
        </div>
      </Section>

      {/* Design Concept 2.0 */}
      <Section label="Design Concept 2.0">
        <p className="text-[#4A4A4A] text-sm leading-relaxed max-w-2xl mb-8">
          The mid-sprint pivot produced the final game concept. Letting go of the original narrative freed the design to grow into something more cohesive: a five-step arc from mission briefing to activating the Xenofax, with AR object encounters, crystal collection, alien threats, and map progression woven together into a single, unified experience.
        </p>
        <div className="border border-[#E2DFD8] overflow-hidden bg-white max-w-md">
          <LightboxImage
            src="/projects/interastra/designkoncept.png"
            alt="Design Concept 2.0"
            width={1200}
            height={1697}
            className="w-full h-auto"
          />
        </div>
        <p className="text-xs text-[#787878] mt-3">Designkoncept 2.0: the complete five-step game flow from mission briefing to Xenofax activation.</p>
      </Section>

      {/* Key takeaways */}
      <Section label="Key Takeaways">
        <div className="grid md:grid-cols-3 gap-px bg-[#E2DFD8]">
          {[
            { num: "01", title: "Kill your darlings", body: "Scrapping a half-built concept mid-sprint was difficult, but it unlocked a stronger, more coherent direction that previous iterations couldn't reach." },
            { num: "02", title: "Split-screen as method", body: "Filming user and interface simultaneously revealed body language, instinct, and hesitation that a screen recording alone would have missed entirely." },
            { num: "03", title: "Failure drives engagement", body: "Introducing failure states showed that players stayed motivated after setbacks, evidence that the narrative had created genuine investment in the game." },
          ].map(({ num, title, body }) => (
            <div key={num} className="bg-[#F8F7F4] p-8">
              <p className="text-xs text-[#E8441C] font-medium mb-3">{num}</p>
              <p className="font-medium text-[#0F0F0F] text-sm mb-2">{title}</p>
              <p className="text-[#787878] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

    </div>
  );
}

/* ─── Sprint 5 ──────────────────────────────────────────────────────────── */
function Sprint5() {
  return (
    <div className="space-y-20">

      <div>
        <p className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-2">Sprint 5</p>
        <h2 className="font-display text-2xl font-bold text-[#0F0F0F] mb-1">
          Pitch / Sequence Model / Final Concept
        </h2>
        <p className="text-[#787878] text-sm">
          Compiling the full design concept into a pitch, a sequence model, and a project reflection.
        </p>
      </div>

      {/* Overview */}
      <Section label="Overview">
        <p className="text-[#4A4A4A] leading-relaxed max-w-2xl">
          The final sprint brought everything together. The deliverables were a pitch presenting the game design, a document with the design intention and sequence model, and a closing reflection on the project. All three outputs are grounded in Design Concept 2.0, the game architecture developed through the pivot in Sprint 4.
        </p>
      </Section>

      {/* Pitch video */}
      <Section label="Pitch: The Megastructure">
        <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
          <p className="text-[#4A4A4A] text-sm leading-relaxed">
            The pitch for The Megastructure communicates how the design responds to the original brief while showcasing what makes the concept distinctive. Rather than just describing the game, it demonstrates it. Using the split-screen format developed in Sprint 4 it shows both the AR interface and the player&apos;s physical experience simultaneously.
          </p>
          <p className="text-[#4A4A4A] text-sm leading-relaxed">
            Compiling the concept into a pitch revealed new dimensions in the design: presenting it as a unified whole surfaced further ideas for how the concept could be developed, and showed where the strongest design decisions were carrying the most weight.
          </p>
        </div>
        <div className="border border-[#E2DFD8] bg-black"><video src="/projects/interastra/video.mp4" controls playsInline className="w-full h-auto" /></div>
      </Section>

      {/* Sequence model + Design Concept 2.0 side by side */}
      <Section label="Sequence Model & Design Concept 2.0">
        <div className="grid md:grid-cols-2 gap-10 items-start mb-8">
          <p className="text-[#4A4A4A] text-sm leading-relaxed">
            Mapping how interactions and game mechanics unfold for the player in a sequence model was one of the most valuable outputs of the sprint. Seeing the full flow and how each player choice routes them through the game made clear how the design would actually function in practice. The model centres on the first section of the map and its missions.
          </p>
          <p className="text-[#4A4A4A] text-sm leading-relaxed">
            The pitch and sequence model are both built on Design Concept 2.0, the five-step game arc finalised in Sprint 4. Sprint 5 confirmed that the architecture holds: the narrative, the mechanics, and the AR interactions all connect into a coherent, playable concept.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <div className="border border-[#E2DFD8] overflow-hidden bg-white">
              <Image
                src="/projects/interastra/user-flow.jpg"
                alt="Sequence model full game flow"
                width={1678}
                height={2382}
                className="w-full h-auto"
              />
            </div>
            <p className="text-xs text-[#787878] mt-3">Sequence model: Alien Mission and Collect Resources arcs with branching failure states.</p>
          </div>
          <div>
            <div className="border border-[#E2DFD8] overflow-hidden bg-white">
              <Image
                src="/projects/interastra/designkoncept.png"
                alt="Design Concept 2.0 final"
                width={1200}
                height={1697}
                className="w-full h-auto"
              />
            </div>
            <p className="text-xs text-[#787878] mt-3">Design Concept 2.0: the complete five-step game flow from mission briefing to Xenofax activation.</p>
          </div>
        </div>
      </Section>

      {/* Key takeaways */}
      <Section label="Project Reflection">
        <div className="grid md:grid-cols-3 gap-px bg-[#E2DFD8]">
          {[
            { num: "01", title: "Pitch as design tool", body: "Presenting the concept as a unified whole revealed new directions and clarified which design decisions were doing the most work." },
            { num: "02", title: "Sequence model as stress test", body: "Mapping every branch and failure state exposed gaps in the flow and confirmed where the game logic was already strong." },
            { num: "03", title: "Split-screen as method", body: "A technique introduced in Sprint 4, split-screen became the defining format of the project and one that transfers directly to future work." },
          ].map(({ num, title, body }) => (
            <div key={num} className="bg-[#F8F7F4] p-8">
              <p className="text-xs text-[#E8441C] font-medium mb-3">{num}</p>
              <p className="font-medium text-[#0F0F0F] text-sm mb-2">{title}</p>
              <p className="text-[#787878] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

    </div>
  );
}

/* ─── Placeholder for future sprints ───────────────────────────────────── */
function ComingSoon({ sprint }: { sprint: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-[#BBBAAF] mb-4">{sprint}</p>
      <p className="text-[#787878] text-sm">Content coming soon.</p>
    </div>
  );
}

/* ─── Brief metadata row ────────────────────────────────────────────────── */
function BriefRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4 border-t border-[#E2DFD8] pt-3">
      <p className="text-xs uppercase tracking-[0.1em] text-[#787878] w-32 shrink-0">{label}</p>
      <p className="text-xs text-[#0F0F0F] font-medium">{value}</p>
    </div>
  );
}

/* ─── Lightbox image ────────────────────────────────────────────────────── */
function LightboxImage({ src, alt, width, height, className }: { src: string; alt: string; width: number; height: number; className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className ?? ""} cursor-pointer`}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setOpen(false); }}
            className="absolute top-4 right-4 text-white hover:text-[#E8441C] transition-colors text-2xl leading-none"
            aria-label="Close"
          >
            ✕
          </button>
          <img src={src} alt={alt} className="max-w-full max-h-[90vh] object-contain cursor-default" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}

/* ─── Image/video placeholder ───────────────────────────────────────────── */
function Placeholder({ label, tall }: { label: string; tall?: boolean }) {
  return (
    <div
      className={`border border-dashed border-[#E2DFD8] bg-[#F0EDE8] flex items-center justify-center rounded ${tall ? "min-h-[320px]" : "aspect-[4/3]"}`}
    >
      <p className="text-xs text-[#BBBAAF] text-center px-6">{label}</p>
    </div>
  );
}

/* ─── Shared section wrapper ────────────────────────────────────────────── */
function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section>
      <p className="text-xs uppercase tracking-[0.15em] text-[#787878] mb-8">{label}</p>
      {children}
    </section>
  );
}
