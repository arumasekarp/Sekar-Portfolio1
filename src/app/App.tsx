import { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Linkedin, ExternalLink, MapPin, Briefcase, GraduationCap, Award, Code, Download, ChevronDown } from 'lucide-react';
import profileImage from '../assets/a338466fe83b86e44ab4965f965579fd7beab4ad.png';
import siInvenImage1 from '../assets/fd6ac2ce03b64816e9104e0e694daa627a7c2ddd.png';
import siInvenImage2 from '../assets/22449f02ad490a1d764a6eb0d4a5421780dd4312.png';
import siInvenImage3 from '../assets/70791116b1076a922fb4bff7af476a5ed3a128b7.png';
import wahyuProfilePhoto from "../assets/1105 WAHYU AJI ARUMA SEKAR PURI.png";
import vidioSertifikat from "../assets/Wahyu Aji Aruma Sekar Puri - Sertifikat Magang Berdampak.pptx_page-0001.jpg";
import docImage1 from "../assets/WhatsApp Image 2026-01-02 at 8.42.13 PM.jpeg";
import docImage2 from "../assets/WhatsApp Image 2026-01-02 at 8.43.27 PM.jpeg";
import docImage3 from "../assets/WhatsApp Image 2026-01-02 at 8.44.18 PM.jpeg";
import docImage4 from "../assets/WhatsApp Image 2026-01-02 at 8.45.29 PM.jpeg";
import docImage5 from "../assets/WhatsApp Image 2026-01-02 at 8.47.29 PM.jpeg";
import docImage6 from "../assets/WhatsApp Image 2026-01-02 at 8.48.26 PM.jpeg";
import aboutImage from "../assets/WhatsApp Image 2026-01-02 at 8.58.45 PM.jpeg";
import fukiKnowImage from "../assets/Screenshot 2026-01-07 235455.png";
import sustainifyImage from "../assets/Screenshot 2026-01-07 234406.png";
import project1Image from "../assets/Screenshot 2026-01-08 000151.png";
import project2Image from "../assets/Screenshot 2026-01-08 001006.png";
import project3Image from "../assets/Screenshot 2026-01-08 154555.png";
import project4Image from "../assets/Screenshot 2026-01-08 154403.png";
import byonCombatImage from "../assets/ATK-BOLA_Byon-Combat-Showbiz-6.png";
import hssSeriesImage from "../assets/ATK-BOLANET_HSS-Series-6_Fight-Card-reckma41rz0eljkcogsoegl0v7w0qq2duvrolrrv2m.jpg";
import mmaBattleImage from "../assets/ATK-Bolanet_ONE-Pride-MMA-Battle-for-Glory-2025_Fight-Card.png";
import additionalCombatImage from "../assets/images.jpg";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'education', 'projects', 'committee'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-sky-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Wahyu Aji Aruma Sekar Puri
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Skills', 'Education', 'Projects', 'Committee'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm transition-colors ${activeSection === item.toLowerCase()
                    ? 'text-cyan-600 font-semibold'
                    : 'text-gray-600 hover:text-cyan-600'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-3">
              {['Home', 'About', 'Experience', 'Skills', 'Education', 'Projects', 'Committee'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left py-2 px-3 rounded-lg transition-colors ${activeSection === item.toLowerCase()
                    ? 'bg-cyan-100 text-cyan-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-16 px-0">
        <div className="max-w-full">
          <div className="bg-white shadow-2xl overflow-hidden">
            {/* Full Width Header Image */}
            <div className="relative h-[500px] overflow-hidden">
              <img src={profileImage} alt="Wahyu Aji Aruma Sekar Puri" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            </div>

            <div className="px-6 sm:px-12 py-8 max-w-6xl mx-auto">
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  Wahyu Aji Aruma Sekar Puri
                </h1>
                <p className="text-xl text-cyan-700 font-semibold mb-6">Information Systems Student</p>

                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <a href="tel:+6282271451879" className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors">
                    <Phone size={18} />
                    <span className="text-sm">+62 822-7145-1879</span>
                  </a>
                  <a href="mailto:wahyu.aji21@ui.ac.id" className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors">
                    <Mail size={18} />
                    <span className="text-sm">wahyu.aji21@ui.ac.id</span>
                  </a>
                  <a href="https://linkedin.com/in/wahyu-aji-aruma-sekar-puri" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors">
                    <Linkedin size={18} />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>

                <button
                  onClick={() => scrollToSection('about')}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all inline-flex items-center gap-2"
                >
                  View Portfolio
                  <ChevronDown size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            About Me
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">

            {/* About Text */}
            <p className="text-gray-700 leading-relaxed text-lg">
              Final-year <strong>Information Systems student at Universitas Indonesia</strong> with a passion for leveraging data and technology to drive digital transformation across business, product, and user experience. Former Product Team at <strong>Vidio Dot Com (EMTEK Group)</strong>, selected as <strong>1 of 94 interns from 23,000+ Vidio applicants</strong> in Magang Berdampak Batch 1. Experienced in fast-paced content QA, subscription testing, TVOD user sentiment research, and ISO system backlog delivery.
            </p>

            {/* About Image */}
            <div className="flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-md max-w-3xl">
                <img
                  src={aboutImage}
                  alt="About Documentation"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <GraduationCap className="text-cyan-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Universitas Indonesia</h3>
                <p className="text-cyan-600 text-lg font-semibold">Bachelor of Information System</p>
              </div>
              <span className="text-gray-500 bg-cyan-50 px-4 py-2 rounded-full">2022 - Present</span>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Relevant Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Digital Media Marketing',
                  'Systems Analysis and Design',
                  'Enterprise Application Architecture',
                  'Introduction to Statistics',
                  'Artificial Intelligence and Data Science'
                ].map((course) => (
                  <span key={course} className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-lg text-sm">
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Award className="text-cyan-600" size={20} />
                Achievement
              </h4>
              <p className="text-gray-700">Finalist of Digital Exhibition Business Plan Competition at Universitas Padjadjaran (2024)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Briefcase className="text-cyan-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
          </div>

          <div className="space-y-6">
            {/* Vidio */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Product Operations - Internship</h3>
                  <p className="text-cyan-600 font-semibold">Vidio Dot Com (Emtek Group)</p>
                  <p className="text-gray-600 flex items-center gap-2 mt-1">
                    <MapPin size={16} />
                    Central Jakarta
                  </p>
                </div>
                <span className="text-gray-500 text-sm bg-cyan-50 px-4 py-2 rounded-full whitespace-nowrap">August 2025 - December 2025</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Analyzed <strong>70,000+ user sentiments</strong> from combat sports events (BYON Combat, HSS, and MMA), delivering insight decks for product prioritization and UX improvements, in collaboration with the Research team</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Owned <strong>epic and 15+ ISO payment backlog stories</strong> (KOL internal system), from requirement validation to staging testing and production (<strong>~75% phase-1 delivery</strong>)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Developed an AppSheet-based solution to streamline and reform the <strong>processing of 5,000+ subscription</strong> voucher requests</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Led product benchmarking across social media and other OTT platforms, mapping <strong>4 end-to-end user flows</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Executed QC on <strong>70+ AVOD and SVOD contents</strong>, identifying and reporting critical platform issues</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span><strong>Analyzed 300+ student email domain data</strong> on the student package static page and delivered insights to the Service Growth team</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span><strong>Managed 270+ Google Calendar schedules</strong> for content checking coordination with the Disco Reco team</span>
                </li>
              </ul>
              {/* Profile & Certificate Images */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">
                  Certification & Work Highlights
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Profile Photo */}
                  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <img
                      src={wahyuProfilePhoto}
                      alt="Wahyu Aji Aruma Profile Photo"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Internship Certificate */}
                  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <img
                      src={vidioSertifikat}
                      alt="Vidio Magang Berdampak Certificate"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* BYON Combat */}
                  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <img
                      src={byonCombatImage}
                      alt="BYON Combat Series"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* HSS Series */}
                  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <img
                      src={hssSeriesImage}
                      alt="HSS Series"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* ONE Pride MMA */}
                  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <img
                      src={mmaBattleImage}
                      alt="ONE Pride MMA Battle for Glory"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <img
                      src={additionalCombatImage}
                      alt="Combat Sports Event Highlight"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* LB LIA */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Fullstack Developer - Contract Project</h3>
                  <p className="text-cyan-600 font-semibold">LB LIA English Course</p>
                  <p className="text-gray-600 flex items-center gap-2 mt-1">
                    <MapPin size={16} />
                    South Jakarta
                  </p>
                </div>
                <span className="text-gray-500 text-sm bg-cyan-50 px-4 py-2 rounded-full whitespace-nowrap">February 2025 - June 2025</span>
              </div>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Optimized SQL queries and designed database schema using DBeaver to support accurate stock reporting pipelines and <strong>reduce data access time by 95%</strong>, contributing to data reliability and operational efficiency</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Collaborated in a team to <strong>develop 13+ inventory features</strong> for a system named SI INVEN, resulting in improved efficiency in the warehouse division and better product catalog organization</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Led API testing via Postman and UI/UX testing with internal users, <strong>achieving 92% requirement alignment and 100% UAT success</strong> ensuring smooth handover and clear release documentation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Created detailed technical documentation to support application deployment, aligning with cross-functional teams for transition planning and process standardization</span>
                </li>
              </ul>

              {/* SI INVEN Project Images */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">SI INVEN System</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <img src={siInvenImage1} alt="SI INVEN Dashboard" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <img src={siInvenImage2} alt="SI INVEN Features" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <img src={siInvenImage3} alt="SI INVEN Interface" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Certifications Section */}
      <section id="skills" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Award className="text-cyan-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">Skills & Certifications</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Soft Skills */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Critical Thinking', 'Problem Solving', 'Technical Communication', 'Time Management'].map((skill) => (
                  <span key={skill} className="bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 px-4 py-2 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Hard Skills */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                Hard Skills
              </h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <p><strong>Microsoft:</strong> Excel, Word, PowerPoint</p>
                <p><strong>Google Workspace:</strong> Docs, Sheets, Slides, Chat</p>
                <p><strong>Data Visualization:</strong> Power BI, Tableau, Figma</p>
                <p><strong>Programming:</strong> Python, Java, SQL</p>
                <p><strong>Management Tools:</strong> Git, DBeaver, Postman, Basecamp</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                Certifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="font-semibold text-gray-900">Magang Berdampak Batch 1</p>
                  <p className="text-gray-600 text-sm">Vidio Dot Com • 2025</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="font-semibold text-gray-900">Data Visualisation: Empowering Business with Effective Insights</p>
                  <p className="text-gray-600 text-sm">TATA Group • 2025</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="font-semibold text-gray-900">Intro to Data Analytics</p>
                  <p className="text-gray-600 text-sm">RevoU • 2024</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="font-semibold text-gray-900">Data Wrangling Python</p>
                  <p className="text-gray-600 text-sm">DQLab • 2023</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="font-semibold text-gray-900">Introduction to Data Science with Python</p>
                  <p className="text-gray-600 text-sm">DQLab • 2023</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="font-semibold text-gray-900">Python Fundamental for Data Science</p>
                  <p className="text-gray-600 text-sm">DQLab • 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Code className="text-cyan-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">Relevant Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <a
                href="https://drive.google.com/file/d/1rV--MXUS1JPQyTtjoAzxmLKu0RI8jCTG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-start mb-4 group"
              >
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                  Sustainify (Mobile Climate-Awareness App)
                </h3>
                <ExternalLink className="text-cyan-600 group-hover:text-cyan-700" size={20} />
              </a>

              <p className="text-gray-600 text-sm mb-3">UI/UX Design Project</p>

              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>
                    Designed a mobile climate-awareness app with <strong>5 core features</strong>, including weather information,
                    environmental news, community forum, and EcoLearn
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>
                    Conducted user research through interviews and personas, producing <strong>2 validated user personas</strong> and
                    mapping <strong>4 end-to-end user journeys</strong>
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>
                    Created information architecture, task analysis, and high-fidelity prototypes covering
                    <strong> 7 key user tasks</strong>
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>
                    Executed usability testing with <strong>10 respondents</strong>, achieving a
                    <strong> SUS score of 83.5 (Grade A)</strong>
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>
                    Iterated UI design based on usability findings, resolving <strong>4 major usability issues</strong>
                  </span>
                </li>
              </ul>

              {/* Image */}
              <img
                src={sustainifyImage}
                alt="Sustainify UI Preview"
                className="w-full rounded-xl border border-gray-200"
              />
            </div>

            {/* FukiKnow project card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <a
                href="https://drive.google.com/file/d/1bv45Xs5JrkCu5ncDeNT_q-F1g92xUklD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-start mb-4 group"
              >
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                  FukiKnow (Knowledge Management Platform)
                </h3>
                <ExternalLink className="text-cyan-600 group-hover:text-cyan-700" size={20} />
              </a>

              <p className="text-gray-600 text-sm mb-3">UI/UX & Product Design Project</p>

              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>
                    Led UI/UX and product design for a platform with <strong>7 core features</strong>, addressing
                    <strong> 5+ pain points</strong> across <strong>6 divisions and 10 departments</strong>
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>
                    Conducted knowledge process and user flow analysis using the <strong>SECI model</strong> to capture tacit knowledge
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>
                    Designed end-to-end user journeys and interactive prototypes in <strong>Figma</strong>, collaborating with
                    <strong> 8–12 stakeholders</strong>
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>
                    Defined product requirements for repository, notification, calendar, and progress tracking features
                  </span>
                </li>
              </ul>

              {/* Image */}
              <img
                src={fukiKnowImage}
                alt="FukiKnow UI Preview"
                className="w-full rounded-xl border border-gray-200"
              />
            </div>

            {/* Project 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <a
                href="https://drive.google.com/drive/folders/1szJSHNlsdIS06PEXitjN8HhbVr4qvEHq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-start mb-4 group"
              >
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                  Employee Welfare Data
                </h3>
                <ExternalLink className="text-cyan-600 group-hover:text-cyan-700" size={20} />
              </a>

              <p className="text-gray-600 text-sm mb-3">
                Fasilkom Universitas Indonesia • April 2025 – June 2025
              </p>

              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>
                    Built an evaluation pipeline using <strong>Python</strong> to streamline repeated reporting with Diptolk team,
                    <strong> ranking 2nd in a Kaggle competition</strong> and presented findings to faculty
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>
                    Processed and visualized insights from <strong>9,000+ records</strong> for an AI & Data Science project,
                    <strong> reducing processing time by 85%</strong>
                  </span>
                </li>
              </ul>

              {/* Image */}
              <img
                src={project1Image}
                alt="Employee Welfare Data Project Preview"
                className="w-full rounded-xl border border-gray-200"
              />
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <a
                href="http://bit.ly/43T6syH"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-start mb-4 group"
              >
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                  "Oke Gas" Meta Ads Performance
                </h3>
                <ExternalLink className="text-cyan-600 group-hover:text-cyan-700" size={20} />
              </a>

              <p className="text-gray-600 text-sm mb-3">
                Fasilkom Universitas Indonesia • May 2025
              </p>

              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>
                    Independently analyzed <strong>12+ Meta ads</strong> using Excel (pivot tables & charts) for a Digital Media
                    Marketing project, focusing on cost efficiency and content impact
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>
                    Identified <strong>high-CTR strategies</strong> to target swing voters (18–35) based on audience behavior
                    patterns and KPI analysis
                  </span>
                </li>
              </ul>

              {/* Image */}
              <img
                src={project2Image}
                alt="Meta Ads Performance Dashboard Preview"
                className="w-full rounded-xl border border-gray-200"
              />
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <a
                href="https://sekar-portfolio-two.vercel.app/project/netflix"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-start mb-4 group"
              >
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                  Netflix Userbase Year 2023
                </h3>
                <ExternalLink className="text-cyan-600 group-hover:text-cyan-700" size={20} />
              </a>

              <p className="text-gray-600 text-sm mb-3">
                Independent Project • June 2024
              </p>

              <ul className="space-y-2 text-gray-700 text-sm mb-4">
                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>
                    Built <strong>8+ dynamic Microsoft Power BI visuals</strong> to analyze
                    2,500+ users and 31,000+ revenue data effectively
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>
                    Improved business insight clarity across{" "}
                    <strong>10 countries and 4 device types</strong> for strategic
                    decision-making
                  </span>
                </li>
              </ul>

              {/* Image Project 3 */}
              <img
                src={project3Image}
                alt="Netflix Userbase Dashboard"
                className="rounded-xl border shadow-sm"
              />
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <a
                href="https://sekar-portfolio-two.vercel.app/project/health-insurance"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-start mb-4 group"
              >
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                  Health Insurance and Facilities in West Java
                </h3>
                <ExternalLink className="text-cyan-600 group-hover:text-cyan-700" size={20} />
              </a>

              <p className="text-gray-600 text-sm mb-3">
                RevoU • June 2024
              </p>

              <ul className="space-y-2 text-gray-700 text-sm mb-4">
                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>
                    Analyzed <strong>35M+ insurance records and 55,000+ health facilities</strong>{" "}
                    in West Java using Tableau as part of RevoU Data Analytics program
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>
                    Highlighted service disparities across 10 districts, supporting data
                    storytelling with <strong>94% coverage insight</strong>
                  </span>
                </li>
              </ul>

              {/* Image Project 4 */}
              <img
                src={project4Image}
                alt="West Java Health Insurance Dashboard"
                className="rounded-xl border shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Committee Experiences Section */}
      <section id="committee" className="py-16 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Committee Experiences</h2>

          <div className="space-y-6">
            {/* Committee 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Vice Person in Charge of Decoration</h3>
                  <p className="text-cyan-600 font-semibold">Pesta Rakyat Komputer</p>
                  <p className="text-gray-600 flex items-center gap-2 mt-1">
                    <MapPin size={16} />
                    Depok
                  </p>
                </div>
                <span className="text-gray-500 text-sm bg-cyan-50 px-4 py-2 rounded-full whitespace-nowrap">January 2024 - May 2024</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Led decoration team for <strong>five major Perak events</strong>, collaborating with over 10 vendors to meet event needs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Coordinated with 15 divisions on operations and budgeting, <strong>reducing costs by 20%</strong> through negotiation and logistics efficiency</span>
                </li>
              </ul>
            </div>

            {/* Committee 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Staff of Sponsorship</h3>
                  <p className="text-cyan-600 font-semibold">COMPFEST</p>
                  <p className="text-gray-600 flex items-center gap-2 mt-1">
                    <MapPin size={16} />
                    Depok
                  </p>
                </div>
                <span className="text-gray-500 text-sm bg-cyan-50 px-4 py-2 rounded-full whitespace-nowrap">April 2023 - Nov 2023</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Secured <strong>11 sponsors</strong> from banking and tech sectors, raising <strong>{'>'}IDR 55M</strong> to support an 8-month event series</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Delivered <strong>100+ virtual pitches</strong> to executives via webmail as part of a proactive sponsorship strategy</span>
                </li>
              </ul>
            </div>

            {/* Committee 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Student Volunteer</h3>
                  <p className="text-cyan-600 font-semibold">FIB Universitas Indonesia</p>
                  <p className="text-gray-600 flex items-center gap-2 mt-1">
                    <MapPin size={16} />
                    Depok
                  </p>
                </div>
                <span className="text-gray-500 text-sm bg-cyan-50 px-4 py-2 rounded-full whitespace-nowrap">April 2023 - Oct 2023</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Collected and organized qualitative data from over 20 respondents as part of a team conducting social and cultural research in Tumpang District, East Java, supporting in-depth socio-cultural analysis</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Documented and archived the Jaranan Kidal traditional performance by "Sanggar Seni Anusopati Candi Rejo", contributing to its digital promotion across 10+ cultural websites and blogs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <div className="border-t border-gray-200 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-[4/3]">
            <img
              src={docImage1}
              alt="Documentation 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-[4/3]">
            <img
              src={docImage2}
              alt="Documentation 2"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-[4/3]">
            <img
              src={docImage3}
              alt="Documentation 3"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-[4/3]">
            <img
              src={docImage4}
              alt="Documentation 4"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-[4/3]">
            <img
              src={docImage5}
              alt="Documentation 5"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-[4/3]">
            <img
              src={docImage6}
              alt="Documentation 6"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
            <p className="text-cyan-100 mb-6">I'm always open to discussing new opportunities and projects</p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <a href="tel:+6282271451879" className="flex items-center gap-2 hover:text-cyan-200 transition-colors">
                <Phone size={20} />
                <span>+62 822-7145-1879</span>
              </a>
              <a href="mailto:wahyu.aji21@ui.ac.id" className="flex items-center gap-2 hover:text-cyan-200 transition-colors">
                <Mail size={20} />
                <span>wahyu.aji21@ui.ac.id</span>
              </a>
              <a href="https://linkedin.com/in/wahyu-aji-aruma-sekar-puri" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-200 transition-colors">
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          <div className="border-t border-cyan-400 pt-8 text-center text-cyan-100">
            <p>&copy; 2026 Wahyu Aji Aruma Sekar Puri. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}