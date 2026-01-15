import { motion } from "framer-motion";
import student1 from "@assets/generated_images/student_coder_glitch_portrait.png";
import student2 from "@assets/generated_images/student_hardware_engineer_portrait.png";

export default function Gallery() {
  const students = [
    {
      name: "The Syntax Error",
      role: "Sleeps in class, aces exams",
      image: student1,
      glitchColor: "text-primary"
    },
    {
      name: "The Hardware Whisperer",
      role: "Fixes lab PCs with a stare",
      image: student2,
      glitchColor: "text-secondary"
    },
    // Placeholder duplicates to fill grid
    {
      name: "Null Pointer",
      role: "Points at things that don't exist",
      image: student1,
      glitchColor: "text-red-500"
    },
    {
      name: "Infinite Loop",
      role: "Talking... and talking...",
      image: student2,
      glitchColor: "text-blue-500"
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold font-mono mb-12 text-right">
          <span className="text-primary">04.</span> Classmates.exe
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {students.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-card border border-white/5"
            >
              <div className="absolute inset-0 overflow-hidden">
                 {/* Glitch Effect Layers */}
                <img 
                  src={student.image} 
                  alt={student.name}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-50 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 mix-blend-color-dodge bg-primary/20" />
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-background to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className={`text-lg font-bold font-mono ${student.glitchColor} glitch-hover`}>
                  {student.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {student.role}
                </p>
              </div>

              {/* Glitch Overlay Elements */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-primary animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
