import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground text-lg">Project not found.</p>
        <Link
          to="/"
          className="flex items-center gap-2 text-primary hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Back button */}
      <div className="container mx-auto px-6 pt-10 animate-fade-in">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
      </div>

      {/* Hero image */}
      <div className="container mx-auto px-6 mt-8 animate-fade-in animation-delay-100">
        <div className="rounded-2xl overflow-hidden aspect-video w-full border border-primary/20">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-3xl">
        {/* Title & tags */}
        <div className="space-y-4 mb-8 animate-fade-in animation-delay-200">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-lg leading-relaxed mb-10 animate-fade-in animation-delay-300">
          {project.longDescription}
        </p>

        {/* Features */}
        <div className="glass rounded-2xl p-6 border border-primary/20 mb-10 animate-fade-in animation-delay-400">
          <h2 className="text-xl font-semibold mb-4">Key Features</h2>
          <ul className="space-y-3">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 animate-fade-in animation-delay-500">
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Live Demo <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary/30 font-medium hover:border-primary/60 transition-all"
            >
              GitHub <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
