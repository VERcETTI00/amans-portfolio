import { useState } from "react";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { staggerItem } from "@/lib/animations";

// Import project images
import oldaxe from "@/assets/OldAxe.jpg";
import face from "@/assets/Face.jpg";
import outdoornight from "@/assets/OutdoorNight.jpg";
import rural from "@/assets/Rural.jpg";
import interior from "@/assets/InteriorLighting.jpg";
import concert from "@/assets/Concert.jpg";
import dogrig from "@/assets/DogRig.jpg";
import humanrig from "@/assets/HumanRig.jpg";
import uikit from "@/assets/UiKit.png";
import realestate from "@/assets/RealEstate.png";
import icetda from "@/assets/icetda.jpg";
import bookchap from "@/assets/bookchap.jpg";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  type: "3D" | "UI/UX" | "Research";
}

const projects: Project[] = [
  // 3D Projects
  {
    id: 1,
    title: "Rural Still Life – A Photorealistic Study in Light & Texture",
    category: "3D Texturing",
    description:
      "Real-time 3D village interior recreation focusing on warmth, texture, lighting, and handcrafted props using Maya, Substance.",
    image: rural,
    tags: ["3D Texturing", "3D Modelling", "3D Lighting"],
    type: "3D",
  },
  {
    id: 2,
    title: "Concert Electric Haze",
    category: "3D Lighting",
    description:
      "An atmospheric concert scene showcasing detailed structural modeling and theatrical lighting study through volumetric beams and silhouettes.",
    image: concert,
    tags: ["3D Lighting", "3D Modelling", "Composition"],
    type: "3D",
  },
  {
    id: 3,
    title: "[WIP] Female Tactical Character",
    category: "3D Texturing",
    description:
      "A hyper-realistic military character project exploring skin realism, material definition, cinematic lighting, shading, and rendering techniques.",
    image: face,
    tags: ["3D Texturing", "Substance 3D Painter"],
    type: "3D",
  },
  {
    id: 4,
    title: "Interior Living Space Modeling & Lighting",
    category: "3D Lighting",
    description:
      "A modern interior scene showcasing detailed furniture modeling and natural lighting study through windows and shadows.",
    image: interior,
    tags: ["3D Lighting", "3D Modelling"],
    type: "3D",
  },
  {
    id: 5,
    title: "Street Environment Modeling",
    category: "3D Modelling",
    description:
      "A detailed urban street model featuring buildings, props, vehicles, and environmental elements for scene development practice.",
    image: outdoornight,
    tags: ["3D Modelling", "Maya", "Environment"],
    type: "3D",
  },
  {
    id: 6,
    title: "Fantasy Axe Modeling",
    category: "3D Modelling",
    description:
      "A stylized fantasy axe model showcasing detailed forms, proportions, and hard-surface elements for prop design practice.",
    image: oldaxe,
    tags: ["3D Modelling", "Prop Modelling"],
    type: "3D",
  },
  {
    id: 7,
    title: "Quadruped Rig System",
    category: "Rigging",
    description:
      "A custom quadruped rig showcasing an anatomically-correct skeleton and animator-friendly controls with IK legs and a flexible spine.",
    image: dogrig,
    tags: ["Rigging", "Quadruped"],
    type: "3D",
  },
  {
    id: 8,
    title: "Full-Body Character Rig",
    category: "Rigging",
    description:
      "A bipedal character rig showcasing a complete skeleton and an intuitive control scheme, featuring IK/FK limbs and an advanced foot roll setup.",
    image: humanrig,
    tags: ["Rigging", "Human Anatomy"],
    type: "3D",
  },

  // UI/UX Projects (placeholders)
  {
    id: 9,
    title: "Sustainable Design System",
    category: "UI/UX",
    description: "The Sustainable Design System is a toolkit for creating eco-friendly, energy-efficient digital interfaces using optimized colors, typography, and UI components.",
    image: uikit,
    tags: ["UI Kit", "Figma", "Sustainable"],
    type: "UI/UX",
  },
  {
    id: 10,
    title: "Modern Real Estate App UI",
    category: "UI/UX",
    description:
      "A clean and minimalist UI concept for a real estate app, focusing on intuitive navigation and a seamless user experience for browsing and tracking properties.",
    image: realestate,
    tags: ["UI/UX", "Mobile", "App Design"],
    type: "UI/UX",
  },

  // Research Projects (placeholders)
  {
    id: 11,
    title: "Sustainability, Gamification and User Retention: A Study on Eco-Conscious Gamification for Better User Engagement",
    category: "Research",
    description:
      "Designed eco-conscious, gamified digital experiences that boost user engagement while promoting sustainable UI practices.",
    image: icetda,
    tags: ["UI/UX", "Sustainability", "Research", "Gamification"],
    type: "Research",
  },
  {
    id: 12,
    title: "Augmented Reality and Modern Multimedia Design",
    category: "Research",
    description:
      "This chapter in Contemporary Approaches in Art and Design explores how AR transforms multimedia design, turning static visuals into interactive, immersive experiences that merge art with technology and reshape digital design, branding, and education.",
    image: bookchap,
    tags: ["AR", "Research", "Multimedia"],
    type: "Research",
  },
];

const Work = () => {
  const [filter, setFilter] = useState<"3D" | "UI/UX" | "Research">("3D");
  const filteredProjects = projects.filter((p) => p.type === filter);

  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-8" animation="fadeUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Works & Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of projects showcasing my art, work, and research.
          </p>
        </AnimatedSection>

        {/* Filter buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {["3D", "UI/UX", "Research"].map((tab) => (
            <Button
              key={tab}
              onClick={() => setFilter(tab as "3D" | "UI/UX" | "Research")}
              variant="minimal"
              size="sm"
              className={`transition-all ${
                filter === tab
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {tab} Projects
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {filteredProjects.map((project) => (
              <motion.a
                key={project.id}
                href={`/project/${project.id}`}
                variants={staggerItem}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group block overflow-hidden rounded-2xl border-0 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
                data-project
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="text-sm text-accent font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-accent gap-1">
                    View Project <ExternalLink size={14} />
                  </div>
                </CardContent>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Work;
