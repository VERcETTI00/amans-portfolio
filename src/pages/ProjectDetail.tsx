import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Calendar, User, Tag, Section } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

// Import project images
import outdoornight from "@/assets/OutdoorNight.jpg";
import outdoornight2 from "@/assets/OutdoorNight2.jpg";

import concert from "@/assets/Concert.jpg"
import concert2 from "@/assets/Concert2.jpg"
import concert3 from "@/assets/Concert3.jpg"
import concert4 from "@/assets/Concert4.jpg"

import face from "@/assets/Face.jpg"
import face2 from "@/assets/Face2.jpg"
import face3 from "@/assets/Face3.jpg"
import face4 from "@/assets/Face4.jpg"

import rural from "@/assets/Rural.jpg";
import rural2 from "@/assets/Rural2.jpg";
import rural3 from "@/assets/Rural3.jpg";
import rural4 from "@/assets/Rural4.jpg";
import rural5 from "@/assets/Rural5.jpg";
import rural6 from "@/assets/Rural6.png";

import interior from "@/assets/InteriorLighting.jpg";
import oldaxe from "@/assets/OldAxe.jpg";
import dogrig from "@/assets/DogRig.jpg";
import humanrig from "@/assets/HumanRig.jpg";
import uikit from "@/assets/UiKit.png";
import realestate from "@/assets/RealEstate.png";

import icetda from "@/assets/icetda.jpg";
import icetda2 from "@/assets/icetda2.jpg";
import icetda3 from "@/assets/icetda3.jpg";
import icetda4 from "@/assets/icetda4.jpg";

import bookchap from "@/assets/bookchap.jpg";
import bookchap2 from "@/assets/bookchap2.jpg";

const projects = {
  1: {
    title: "Rural Still Life – A Photorealistic Study in Light & Texture",
    category: "3D Texturing",
    client: "Self Project",
    duration: "3 Weeks",
    year: "2025",
    description: "A real-time 3D recreation of a warm village interior, focusing on handcrafted props, subtle imperfections, and realistic lighting. All assets were modeled, textured, and lit to create an authentic, lived-in atmosphere while exploring look development and material storytelling.",
    images: [rural, rural2, rural3, rural4, rural5, rural6],
    tags: ["3D Texturing", "3D Modelling", "3D Lighting", "Maya", "Substance 3D Painter"],
    challenge: " To recreate a warm, realistic village interior in real-time 3D using a minimal set of props. Capture subtle textures, lighting, and imperfections to make the scene feel authentic. Work with limited assets while maintaining visual richness and storytelling.",
    solution: "Modeled and textured all assets from scratch: stone mortar & pestle, handcrafted pot, wooden table, and woven embroidered cloth. Focused on lighting direction, minor imperfections, and material details to enhance realism. Used Autodesk Maya for modeling, UVs, lighting, and rendering, and Substance 3D Painter for texturing.",
    results: [
      "Achieved a warm, immersive atmosphere that highlights handcrafted details.",
      "Improved skills in look development, lighting, and material storytelling.",
      "Successfully translated a 2D reference into a realistic 3D environment suitable for real-time rendering."
    ],
    technologies: ["Autodesk Maya", "Substance 3D Painter"],
    link: "https://www.artstation.com/artwork/kNrL3d",
    abstract: ""
  },
  2: {
    title: "Concert Electric Haze",
    category: "3D Lighting",
    client: "Self Project",
    duration: "1 Week",
    year: "2025",
    description: "An atmospheric 3D concert scene focusing on dramatic stage design and lighting. The project explores structural modeling, volumetric beams, and silhouettes to recreate the immersive mood of a live performance.",
    images: [concert, concert2, concert3, concert4],
    tags: ["3D Lighting", "3D Texturing", "3D Modelling", "Maya"],
    challenge: "Create a believable concert environment with realistic stage structures and props. Achieve theatrical lighting effects such as volumetric haze, beams, and strong silhouettes. Balance realism and artistry while maintaining a compelling composition.",
    solution: "Modeled the stage elements and structural details to ground the scene in realism. Used nFluid simulations to generate hazy smoke, giving the scene a natural, drifting atmosphere. Integrated volumetric beams cutting through the smoke for added depth and dynamism. Balanced lighting intensity, smoke density, and silhouettes for a cinematic yet believable result.",
    results: [
      "Achieved a realistic concert atmosphere with moving haze and theatrical beams.",
      "Enhanced storytelling through light–smoke interaction, heightening mood and immersion.",
      "Improved technical skills in nFluid simulation, volumetric lighting, and composition for cinematic scene design."
    ],
    technologies: ["Autodesk Maya"],
    link: "",
    abstract: ""
  },
  3: {
    title: "[WIP] Female Tactical Character",
    category: "3D Texturing",
    client: "Self Project",
    duration: "2 months",
    year: "2025",
    description: "This project focuses on building a hyper-realistic military character through advanced texturing, shading, and cinematic lighting. The project emphasizes skin realism, material definition, and look development for a believable tactical aesthetic.",
    images: [face, face2, face3, face4],
    tags: ["3D Texturing", "3D Modelling", "3D Lighting", "Maya", "Substance 3D Painter"],
    challenge: "To achieve realistic skin detail and material definition suitable for cinematic presentation. Balance technical accuracy (gear, lighting, shaders) with artistic storytelling. Integrate realism while working with a sourced base mesh (CGTrader SWAT Operator by jeandiz).",
    solution: "Developed custom shaders and detailed textures in Substance Painter. Set up the scene and lighting in Maya, focusing on a dramatic cinematic mood. Rendered in Arnold Renderer for high-quality results. Currently refining shaders, testing different lighting moods, and planning to add XGen dynamics for hair and fabric movement.",
    results: [
      "Created a strong foundation for a hyper-realistic tactical character.",
      "Established skin realism, material storytelling, and a cinematic atmosphere.",
      "Work in progress includes fine-tuning shaders, exploring dynamic lighting setups, and enhancing realism with XGen simulations."
    ],
    technologies: ["Autodesk Maya", "Substance 3D Painter"],
    link: "https://www.artstation.com/artwork/y4Pxkx",
    abstract: ""
  },
  4: {
    title: "Interior Living Space Modeling & Lighting",
    category: "3D Lighting",
    client: "Self Project",
    duration: "1 Week",
    year: "2025",
    description: "This is a modern 3D environment focusing on clean furniture modeling and natural lighting. The scene highlights how sunlight interacts with architectural elements, casting soft shadows and enhancing the mood of the space.",
    images: [interior],
    tags: ["3D Lighting", "3D Modelling", "Maya"],
    challenge: "Achieve realistic daylight streaming through windows and interacting with furniture. Balance light intensity and shadow softness for a natural, inviting atmosphere.",
    solution: "Modeled key elements like sofa, shelving, staircase, and décor pieces for architectural realism. Used physically based lighting to simulate sunlight and window illumination. Positioned furniture and props to complement light direction and enhance visual storytelling.",
    results: [
      "Created a modern interior scene with realistic window light and shadow interplay.",
      "Strengthened skills in 3D lighting, furniture modeling, and spatial composition.",
      "Delivered a cinematic study of natural lighting within an architectural space."
    ],
    technologies: ["Autodesk Maya"],
    link: "",
    abstract: ""
  },
  5: {
    title: "Street Environment Modeling",
    category: "3D Modelling",
    client: "Self Project",
    duration: "2 Weeks",
    year: "2025",
    description: "This is a 3D project focused on creating a detailed urban street scene with buildings, props, vehicles, and environmental elements. The goal was to practice environment design and asset integration for larger scene development.",
    images: [outdoornight, outdoornight2],
    tags: ["3D Modelling", "Environment", "Maya"],
    challenge: "Build a cohesive street environment with accurate proportions and scale. Populate the scene with diverse assets (buildings, poles, wires, vehicles, props) to achieve visual richness. Maintain clean topology and modular design for efficient workflow.",
    solution: "Modeled all assets in Maya, ensuring proper proportions and edge flow. Designed modular building structures and environmental props to allow flexibility in layout. Focused on scene composition and placement to enhance believability and storytelling.",
    results: [
      "Delivered a fully blocked and detailed street environment ready for texturing and lighting.",
      "Strengthened skills in environment modeling, prop creation, and scene composition.",
      "Established a strong foundation for future look development and rendering studies."
    ],
    technologies: ["Autodesk Maya"],
    link: "",
    abstract: ""
  },
  6: {
    title: "Fantasy Axe Modeling",
    category: "3D Modelling",
    client: "Self Project",
    duration: "1 Day",
    year: "2025",
    description: "A stylized 3D prop model of a fantasy weapon. The project focuses on hard-surface modeling techniques to create a unique design that blends industrial components, like a sprocket blade, with a classic axe form. It serves as a study in creating game-ready assets with a strong, memorable silhouette.",
    images: [oldaxe],
    tags: ["3D Modelling", "Prop Modelling", "Maya"],
    challenge: "Model a clean, non-traditional blade with precise mechanical details. Achieve clean intersections between all complex hard-surface parts. Balance the head's complexity with a believable, well-proportioned form.",
    solution: "Used precision tools and radial symmetry for the sprocket blade's uniform teeth. Maintained clean topology for seamless integration of all components.",
    results: [
      "Produced a high-quality, game-ready model of a unique fantasy weapon.",
      "Improved hard-surface modeling skills with complex mechanical shapes.",
      "Created a portfolio piece showcasing creative design and technical modeling."
    ],
    technologies: ["Autodesk Maya"],
    link: "",
    abstract: ""
  },
  7: {
    title: "Quadruped Rig System",
    category: "Rigging",
    client: "Self Project",
    duration: "1 Week",
    year: "2025",
    description: "Quadruped Rig System is a custom character rig for a canine model. The project focuses on creating an anatomically-correct skeleton and an intuitive, animator-friendly control scheme, featuring IK legs and a flexible spline-based spine and tail for naturalistic movement.",
    images: [dogrig],
    tags: ["Rigging", "Quadruped", "Maya"],
    challenge: "Build an anatomically-correct skeleton for realistic canine motion. Design intuitive controls for the IK legs and flexible spine. Enable a wide range of motion without unnatural joint bending.",
    solution: "Studied canine anatomy for accurate joint placement. Applied IK handles to the legs and a spline IK to the spine and tail. Used pole vector constraints to guide natural limb articulation.",
    results: [
      "Produced a robust, animation-ready rig with intuitive controls.",
      "Improved skills in quadruped rigging and spline IK systems.",
      "Created a portfolio piece showcasing complex, animator-friendly rigging."
    ],
    technologies: ["Autodesk Maya"],
    link: "",
    abstract: ""
  },
  8: {
    title: "Full-Body Character Rig",
    category: "Rigging",
    client: "Self Project",
    duration: "1 Week",
    year: "2025",
    description: "Full-Body Biped Rig is a production-ready rig for a humanoid character. The project showcases a complete skeleton and an intuitive control scheme, designed with animator-friendly features like stable IK (Inverse Kinematics) limbs and an advanced foot roll setup for realistic motion.",
    images: [humanrig],
    tags: ["Rigging", "Human Anatomy", "Maya"],
    challenge: "Create a stable and reliable IK system for the limbs. Build an advanced foot roll setup for realistic walk cycles. Design a clean control scheme with clearly defined pole vectors for limb direction.",
    solution: "Implemented properly constrained IK handles for the limbs to ensure stability. Developed a foot control system with attributes for heel peel, ball roll, and toe tap. Created clear NURBS controllers and placed pole vectors for precise articulation.",
    results: [
      "Delivered a production-ready rig optimized for IK-based performance.",
      "Strengthened skills in creating stable IK systems and complex foot mechanics.",
      "Established a scalable rigging template for future humanoid characters."
    ],
    technologies: ["Autodesk Maya"],
    link: "",
    abstract: ""
  },
  9: {
    title: "Sustainable Design System",
    category: "UI/UX",
    client: "Academic Research",
    duration: "10 Months",
    year: "2025",
    description: "Sustainable Design System is a comprehensive UI toolkit created in Figma, born from research into eco-friendly digital practices. It provides a complete set of energy-efficient components, including optimized color palettes and typography, to help designers build interfaces that reduce digital carbon footprints without sacrificing aesthetics or usability.",
    images: [uikit],
    tags: ["UI Kit", "Figma", "Sustainable"],
    challenge: "Translate theoretical principles of digital sustainability and energy efficiency into a practical, usable design system. Balance the constraints of energy-efficient design (e.g., color choice) with the need for a modern aesthetic and strong visual accessibility. Develop a comprehensive set of UI components (buttons, dialogs, etc.) that are both visually cohesive and optimized for low energy consumption.",
    solution: "Conducted research on energy-saving color theory, especially for OLED screens, and selected a palette of darker, less saturated blues and grays. Focused on a minimalist aesthetic with clean lines and system-standard typography to ensure low data overhead while meeting accessibility standards. Built a complete library of reusable components in Figma, ensuring each element was optimized for performance and consistency across the system.",
    results: [
      "Produced a complete, practical design system that empowers designers to create sustainable and visually appealing digital products.",
      "The foundational research and resulting design system were formally accepted and presented at the ICETDA 2025 international conference (12-13 September 2025).",
      "Demonstrated the ability to merge academic research with practical UI/UX design to address real-world environmental concerns."
    ],
    technologies: ["Figma"],
    link: "",
    abstract: ""
  },
  10: {
    title: "Modern Real Estate App UI",
    category: "UI/UX",
    client: "Self Project",
    duration: "1 Week",
    year: "2024",
    description: "Modern Real Estate App UI is a clean and minimalist concept for a property discovery application. The design prioritizes intuitive navigation and a seamless user experience, allowing users to effortlessly browse, track, and save real estate listings.",
    images: [realestate],
    tags: ["UI/UX", "Figma", "Mobile", "App Design"],
    challenge: "Present large amounts of property information in a clean, digestible format on a mobile screen without causing user fatigue. Design an intuitive navigation system that allows users to easily switch between core tasks like searching, browsing, and managing favorites. Create a modern and visually appealing interface that feels trustworthy and encourages user engagement through a clean aesthetic.",
    solution: "Utilized a card-based layout to neatly organize key information for each property, with a clear visual hierarchy for at-a-glance readability. Implemented a familiar bottom tab bar for primary navigation, providing persistent access to the app's main sections. Employed a minimalist design language with a spacious layout, soft shadows, rounded corners, and a consistent accent color to create a modern user experience.",
    results: [
      "Produced a high-fidelity UI concept for a complete, user-centric real estate application.",
      "Demonstrated proficiency in mobile UI/UX design, including component design, layout, and user flow planning.",
      "Designed a scalable interface that simplifies the complex process of finding and tracking properties for the end-user."
    ],
    technologies: ["Figma"],
    link: "",
    abstract: ""
  },
  11: {
    title: "Sustainability, Gamification and User Retention: A Study on Eco-Conscious Gamification for Better User Engagement",
    category: "Research",
    client: "ICETDA 2025",
    duration: "10 Months",
    year: "2025",
    description: "Presented my research paper “Sustainability, Gamification and User Retention: A Study on Eco-Conscious Gamification for Better User Engagement” at the 3rd International Conference on Emerging Trends in Design & Arts (ICETDA 2025) on 12th & 13th Sept hosted by Poornima University, Jaipur. This research was carried out under my my guide and co-author Silvia Narzary and my college colleague and co-author Akriti Mishra",
    images: [icetda, icetda2, icetda3, icetda4],
    tags: ["UI/UX", "Sustainability", "Gamification", "Eco Conscious Design"],
    challenge: "",
    solution: "",
    results: [
      "",
      "",
      ""
    ],
    technologies: [],
    link: "",
    abstract: "With increased usage of online platforms, the energy consumption of websites and applications has become a matter of sustainability. Traditional UI/UX elements such as high-resolution images, complex animations, and bold colors always stimulate interest but consume more power. This study proposes the development of a Sustainable UI Kit: reusable, energy-saving design assets that deliver user interaction without compromising on performance and compatibility. The package features green design elements like dark mode, image optimization, and minimized animation, and integrates gamified features—like progress bars and rewards—to maximize user retention. This study is design-focused, determining the most important elements required for a universally adaptable sustainable interface. The study is targeted at stakeholders involved in UI/UX design and digital sustainability. By evaluating the kit’s impact on energy consumption and interaction behavior through prototyping, this study contributes a practical framework for building visually appealing and ecologically conscious digital interfaces. "
  },
  12: {
    title: "Augmented Reality and Modern Multimedia Design",
    category: "Research",
    client: "Contemporary Approaches in Art and Design (Graphic Era Hill University)",
    duration: "3 Months",
    year: "2025",
    description: "This chapter, published in the book “Contemporary Approaches in Art and Design” by Graphic Era Hill University, explores how Augmented Reality is redefining modern multimedia design—transforming static visuals into interactive experiences and expanding the boundaries of creativity. It highlights how AR can engage audiences in new ways, merge art with technology, and inspire immersive forms of storytelling. Beyond its creative potential, the work also reflects on AR’s role in shaping the future of digital design, branding, and education, where innovation meets experience.",
    images: [bookchap, bookchap2],
    tags: ["AR", "Research", "Multimedia"],
    challenge: "",
    solution: "",
    results: [""],
    technologies: [],
    link: "",
    abstract: "Augmented Reality (AR) has rapidly evolved from an emerging technology to a central instrument in modern multimedia design, reshaping user experience and interaction across domains such as education, entertainment, marketing, and healthcare. This paper presents the integration of AR into multimedia processes, looking at how immersive technologies enhance storytelling, interactivity, and user engagement. It explores the tech fundamentals behind such developments — namely ARKit, ARCore, and AI-enhanced environment mapping — that are making AR interactions more intuitive and widespread. Design principles that help in good AR content creation have been elaborated upon, with the issues for designers outlined and the solutions listed. By integrating empirical findings from prior research and current industrial developments, this article provides a critical overview of the way AR is reshaping the terrain of digital media, and predicts future directions for more ubiquitous, self-adaptive, and eco-friendly AR-based multimedia experiences."
  },
}
const ProjectDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpen = (image: string) => {
    setIsOpen(true);
    setSelectedImage(image);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };
  const { id } = useParams()
  const navigate = useNavigate()

  const project = projects[Number(id) as keyof typeof projects]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Button
                variant="minimal"
                size="sm"
                onClick={() => navigate('/')}
                className="mb-8"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Portfolio
              </Button>

              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    {project.year}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User size={14} />
                    {project.client}
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {project.title}
                </h1>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-md flex items-center gap-1"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Visit Project Button if link exists */}
                {project.link && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
                  >
                    <ExternalLink size={14} className="mr-2" />
                    Visit Project
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Project Image */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {project.images.length === 1 ? (
                <div className="aspect-[16/10] overflow-hidden rounded-lg shadow-card">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onClick={() => handleOpen(project.images[0])}
                  />
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {project.images.map((image, index) => (
                    <div key={index} className="aspect-[16/10] overflow-hidden rounded-lg shadow-card">
                      <img
                        src={image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onClick={() => handleOpen(image)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {isOpen && selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center" onClick={handleClose}><div className="z-50 inset-0 fixed m-12 p-10 flex items-center justify-center" >
            <img
              src={selectedImage}
              alt={project.title}
              className="object-cover"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div></div>
        )}

        {/* Project Details */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                  {project.challenge && (
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        The Challenge
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                  )}

                  {project.abstract && (
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        Abstract
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.abstract}
                      </p>
                    </div>
                  )}

                  {project.solution && (
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        The Solution
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  )}

                  {project.results && project.results.filter(r => r.trim() !== "").length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        Results
                      </h3>
                      <ul className="space-y-2">
                        {project.results
                          .filter(r => r.trim() !== "")
                          .map((result, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{result}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Duration</h4>
                    <p className="text-muted-foreground">{project.duration}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Client</h4>
                    <p className="text-muted-foreground">{project.client}</p>
                  </div>

                  {project.technologies.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Tools Used</h4>
                      <div className="space-y-2">
                        {project.technologies.map((tech) => (
                          <div key={tech} className="text-sm text-muted-foreground py-1">
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Interested in working together?
              </h3>
              <p className="text-muted-foreground mb-8">
                Let's discuss your project and see how I can help bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/#contact">Start a Project</a>
                </Button>
                <Button variant="minimal" size="lg" asChild>
                  <a href="/">View More Work</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ProjectDetail