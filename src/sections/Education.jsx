const educations = [
  {
    period: "2020 - 2020",
    degree: "Information Science and Engineering",
    institution: "The Oxford College of Engineering, Bangalore",
    description:
      "Studied a comprehensive curriculum covering core subjects, laying the foundation for my academic journey.",
    subjects: ["DSA", "DBMS", "OS", "Web Development", "Machine Learning"],
    // current: false,
  },
  {
    period: "2018 — 2020",
    degree: "PUC",
    institution: "Krupanidhi PU College, Bangalore",
    description:
      "Studied a comprehensive curriculum covering core subjects, laying the foundation for my academic journey.",
    subjects: [],
    // current: false,
  },
  {
    period: "2018",
    degree: "SSLC",
    institution: "Shantiniketan Trust School, Bangalore",
    description:
      "Studied a comprehensive curriculum covering core subjects, laying the foundation for my academic journey.",
    subjects: ["DSA", "DBMS", "OS", "Web Development", "Machine Learning"],
    // current: false,
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Education that{" "}
            <span className="font-serif italic font-normal text-white">
              shaped me.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            My academic journey that built the foundation for my technical
            skills and problem-solving mindset.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          <div className="space-y-12">
            {educations.map((edu, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {edu.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {edu.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {edu.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {edu.subjects.map((subject, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
