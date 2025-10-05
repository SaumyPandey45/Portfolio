import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate full-stack developer with experience in building web applications
            </h3>

            <p className="text-muted-foreground">
              I love solving real-world problems through technology and creating impactful digital experiences. My journey in tech has been driven by curiosity, creativity, and continuous learning.
            </p>

            <p className="text-muted-foreground">
             I specialize in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Beyond coding, I’m always exploring new technologies and striving to improve my skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="public\Saumy Resume..pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Frontend Development</h4>
                  <p className="text-muted-foreground">
                    Strong focus on creating visually appealing and user-friendly designs and ability to build responsive layouts that work across devices.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Capable of handling server-side logic and application workflows and ensures secure, reliable, and scalable functionality.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Database Management</h4>
                  <p className="text-muted-foreground">
                    Skilled in organizing and managing large sets of data effectively and focus on data accuracy, reliability, and consistency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
