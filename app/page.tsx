export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-8 py-16 md:px-16 lg:px-24">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          {/* Content - Left Side */}
          <div className="space-y-8 pt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight animate-fade-in">
              Arnav Shenoy
            </h1>

            <div className="space-y-6 text-base leading-relaxed animate-fade-in-delay-1" style={{ color: 'var(--color-text)' }}>
              <p>
                I am a high school student at William Fremd High School in Palatine, Illinois, graduating in May 2026.
                I currently serve as the AI/ML Club President and organized Illinois's largest high school hackathon with 120+ attendees and $11K in sponsorship.
              </p>

              <p>
                I work as a computational biology research intern at{' '}
                <a
                  href="https://www.cmu.edu"
                  className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Carnegie Mellon University
                </a>
                , where I engineer spatial point-process augmentation models and build memory-efficient generative AI pipelines.
                Previously, I worked as a computational neuroscience researcher at{' '}
                <a
                  href="https://www.brown.edu"
                  className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Southcoast Health (Brown-Affiliated)
                </a>
                {' '}and{' '}
                <a
                  href="https://www.ucla.edu"
                  className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UCLA School of Medicine
                </a>
                .
              </p>

              <p>
                My research interests include machine learning, computational biology, neuroscience, and computer vision.
                I was awarded the 2025 Congressional App Challenge Winner and qualified twice for the American Invitational Mathematics Examination (AIME).
              </p>
            </div>

            <div className="flex flex-wrap gap-x-3 gap-y-2 text-base animate-fade-in-delay-2">
              <a
                href="mailto:arnav.shenoy@gmail.com"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
              >
                Email
              </a>
              <span className="text-[var(--color-text-muted)]">/</span>
              <a
                href="/AS_Resume.pdf"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <span className="text-[var(--color-text-muted)]">/</span>
              <a
                href="https://github.com/shenoy4365"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <span className="text-[var(--color-text-muted)]">/</span>
              <a
                href="https://linkedin.com/in/arnav-shenoy"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Image - Right Side */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden animate-fade-in-image hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-6xl text-gray-400">AS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
