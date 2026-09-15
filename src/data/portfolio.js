import belnavoCover from '../assets/projects/belnavo-tech.png'
import mhwunCover from '../assets/projects/mhwun-katsina.png'
import mkMedicareCover from '../assets/projects/mk-medicare.png'
import highTechCover from '../assets/projects/high-tech-welders.png'

export const portfolioSections = [
  {
    id: 'home',
    label: 'Home',
    heading: 'Hi, I’m Bello Bashir Gyaza.',
  },
  { id: 'about', label: 'About', heading: 'About', copy: 'Professional story and approach — content coming in the next phase.' },
  { id: 'services', label: 'Services', heading: 'Services', copy: 'Core service offerings — content coming in the next phase.' },
  { id: 'skills', label: 'Skills', heading: 'Skills', copy: 'Technical and creative capabilities — content coming in the next phase.' },
  { id: 'projects', label: 'Projects', heading: 'Projects', copy: 'Selected work and case studies — content coming in the next phase.' },
  { id: 'experience', label: 'Experience', heading: 'Experience', copy: 'Career milestones and collaborations — content coming in the next phase.' },
  { id: 'contact', label: 'Contact', heading: 'Contact', copy: 'Ways to start a conversation — content coming in the next phase.' },
]

export const heroContent = {
  eyebrow: 'Founder of BelNavo Tech',
  heading: 'Hi, I’m Bello Bashir Gyaza.',
  title: 'Full-Stack Developer & Digital Solutions Specialist',
  introduction: 'I design, develop, and deliver secure digital solutions for individuals, businesses, and organizations. From websites and user interfaces to branding, motion design, IT support, and cybersecurity, I turn ideas into practical digital experiences.',
  availability: 'Available for projects and collaborations',
  roles: ['Full-Stack Development', 'UI/UX Design', 'Branding & Motion', 'IT & Cybersecurity'],
}

export const aboutContent = {
  eyebrow: 'About Me',
  heading: 'Building useful digital experiences with purpose.',
  paragraphs: [
    'I’m Bello Bashir Gyaza, a multidisciplinary digital professional and the founder of BelNavo Tech. I combine software development, design and information technology to create practical solutions for individuals, businesses and organizations.',
    'Through BelNavo Tech, I help clients transform their ideas into responsive websites, digital products and strong visual identities. My approach focuses on understanding the real problem, creating a clear solution and delivering work that is secure, accessible and easy to use.',
  ],
  location: 'Katsina State, Nigeria',
  values: [
    { title: 'Development', description: 'Building responsive and reliable digital products.' },
    { title: 'Design', description: 'Creating clear interfaces and memorable brand experiences.' },
    { title: 'Digital Strategy', description: 'Connecting technology and creativity to solve business problems.' },
  ],
}

export const servicesContent = {
  eyebrow: 'What I Do',
  heading: 'Complete digital solutions, from idea to delivery.',
  introduction: 'I provide connected technical and creative services that help individuals, businesses and organizations build a strong digital presence.',
  services: [
    { icon: 'code', title: 'Full-Stack Development', description: 'Design and development of responsive websites and web applications, covering user-facing interfaces, backend functionality, APIs and database integration.' },
    { icon: 'design', title: 'UI/UX Design', description: 'Clear, accessible and user-focused interfaces designed around real user needs, smooth navigation and consistent visual systems.' },
    { icon: 'motion', title: 'Branding & Motion', description: 'Brand identities, marketing graphics and motion content that communicate clearly and give businesses a professional presence.' },
    { icon: 'support', title: 'IT Solutions', description: 'Practical IT support, system guidance, troubleshooting and digital consulting for individuals and organizations.' },
    { icon: 'security', title: 'Cybersecurity', description: 'Security-conscious development, basic security assessment and practical guidance for protecting digital systems and information.' },
    { icon: 'solutions', title: 'Digital Solutions', description: 'End-to-end support for digital ideas, combining planning, design, development and implementation into one coordinated solution.' },
  ],
}

export const skillsContent = {
  eyebrow: 'Skills & Technologies',
  heading: 'The tools and capabilities behind my work.',
  introduction: 'My skill set combines software development, design, information technology and security-conscious problem-solving to deliver complete digital solutions.',
  categories: [
    {
      title: 'Frontend Development',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Web Design', 'Accessible Interfaces'],
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'REST API Development', 'Database Integration', 'PostgreSQL', 'Authentication and Authorization', 'Secure Backend Practices'],
    },
    {
      title: 'Programming & Development Tools',
      skills: ['Java', 'Python', 'Git', 'GitHub', 'VS Code', 'Vite'],
    },
    {
      title: 'UI/UX & Creative Design',
      skills: ['UI/UX Design', 'Wireframing', 'Prototyping', 'Graphic Design', 'Brand Identity', 'Motion Design'],
    },
    {
      title: 'IT & Cybersecurity',
      skills: ['IT Support', 'System Troubleshooting', 'Computer Networking', 'Cybersecurity Fundamentals', 'Web Application Security', 'Security-Conscious Development'],
    },
  ],
  process: ['Plan', 'Design', 'Develop', 'Secure', 'Deliver'],
}

export const projectsContent = {
  eyebrow: 'Selected Work',
  heading: 'Digital solutions built for real people and organizations.',
  introduction: 'A selection of websites and digital experiences I have designed and developed for businesses, brands and organizations.',
  projects: [
    {
      title: 'BelNavo Tech',
      description: 'A digital solutions platform presenting web development, UI/UX design, branding, motion and online booking services for clients and businesses.',
      category: 'Business Platform',
      services: ['Web Development', 'UI/UX Design', 'Branding', 'Booking Experience'],
      url: 'https://belnavo-tech.onrender.com/',
      cover: belnavoCover,
      coverAlt: 'Screenshot of the BelNavo Tech digital solutions platform and service offerings',
      coverWidth: 2710,
      coverHeight: 1554,
    },
    {
      title: 'MHWUN Katsina State Council',
      description: 'An official organizational website providing union information, announcements, events, membership services and secure staff administration.',
      category: 'Organization Website',
      services: ['Full-Stack Development', 'Membership Experience', 'Content Management', 'Security-Conscious Development'],
      url: 'https://www.mhwunktn.org/',
      cover: mhwunCover,
      coverAlt: 'Screenshot of the MHWUN Katsina State Council website and its membership information',
      coverWidth: 2704,
      coverHeight: 1558,
    },
    {
      title: 'MK Medicare',
      description: 'A responsive healthcare apparel portfolio showcasing medical scrubs, product collections, size guidance, business policies and customer enquiry options.',
      category: 'Healthcare Portfolio',
      services: ['Frontend Development', 'Responsive Design', 'Product Showcase', 'UI/UX Design'],
      url: 'https://medicare-delta-azure.vercel.app/',
      cover: mkMedicareCover,
      coverAlt: 'Screenshot of the MK Medicare healthcare apparel portfolio homepage',
      coverWidth: 2708,
      coverHeight: 1560,
    },
    {
      title: 'High Tech Welders',
      description: 'A responsive corporate website presenting the company’s services, industries, projects and quotation experience across its diverse business operations.',
      category: 'Corporate Website',
      services: ['React Development', 'Responsive Design', 'Service Presentation', 'Quotation Experience'],
      url: 'https://httwcorg.vercel.app/',
      cover: highTechCover,
      coverAlt: 'Screenshot of the High Tech Welders corporate website and its services',
      coverWidth: 2698,
      coverHeight: 1542,
    },
  ],
}

export const experienceContent = {
  eyebrow: 'Professional Experience',
  heading: 'Building solutions, managing brands and creating digital content.',
  introduction: 'My experience combines technology, design and digital communication across my own business and collaborative brand work.',
  entries: [
    {
      organization: 'BelNavo Tech',
      role: 'Founder & Digital Solutions Specialist',
      startDate: '2026-05-18',
      dates: '18 May 2026 — Present',
      current: true,
      description: 'Founded BelNavo Tech to provide practical digital solutions for individuals, businesses and organizations through development, design and creative services.',
      responsibilities: [
        'Design and develop responsive websites and digital experiences.',
        'Create user interfaces, brand identities and motion content.',
        'Plan and deliver client-focused digital solutions.',
        'Manage projects from initial ideas through final delivery.',
      ],
      url: 'https://belnavo-tech.onrender.com/',
    },
    {
      organization: 'Ishanc.ng',
      role: 'Social Media Manager, Video Editor & Post Designer',
      startDate: '2026-09-10',
      dates: '10 September 2026 — Present',
      current: true,
      description: 'Support Ishanc.ng’s online presence by managing its social media account and creating clear, professional visual content.',
      responsibilities: [
        'Manage the brand’s social media account and published content.',
        'Edit videos for social media communication.',
        'Design branded posts and promotional visuals.',
        'Help maintain a clear and consistent digital presence.',
      ],
    },
  ],
}

const whatsappMessage = encodeURIComponent('Hello Bello, I’m interested in discussing a project with you.')
const whatsappUrl = `https://wa.me/2347037718954?text=${whatsappMessage}`

export const contactContent = {
  eyebrow: 'Let’s Work Together',
  heading: 'Have a project or digital idea in mind?',
  introduction: 'I’m available for website development, UI/UX design, branding, video editing, content creation, social media management, IT support, networking and security-conscious digital solutions.',
  supportingText: 'Tell me what you are working on and let’s discuss how I can help bring it to life.',
  availability: 'Available for projects and collaborations',
  location: 'Katsina State, Nigeria',
  primaryCta: { label: 'Chat on WhatsApp', url: whatsappUrl },
  secondaryCta: { label: 'Send an Email', url: 'mailto:bashirbello627@gmail.com' },
  methods: [
    { name: 'Personal Email', label: 'Personal enquiries', value: 'bashirbello627@gmail.com', url: 'mailto:bashirbello627@gmail.com', type: 'email' },
    { name: 'BelNavo Tech Email', label: 'Business enquiries', value: 'belnavo.tech@gmail.com', url: 'mailto:belnavo.tech@gmail.com', type: 'email' },
    { name: 'WhatsApp', label: 'Direct conversation', value: '0703 771 8954', url: whatsappUrl, external: true },
    { name: 'Personal Instagram', label: 'Follow my work', value: '@bellogyaza', url: 'https://www.instagram.com/bellogyaza', external: true },
    { name: 'BelNavo Tech Instagram', label: 'Digital solutions and projects', value: '@belnavo.tech', url: 'https://www.instagram.com/belnavo.tech', external: true },
  ],
}

export const footerContent = {
  name: 'Bello Bashir Gyaza',
  title: 'Full-Stack Developer & Digital Solutions Specialist',
  founder: 'Founder of BelNavo Tech',
  motto: 'Design. Develop. Deliver.',
  credit: 'Built with care by Bello Bashir Gyaza.',
  links: [
    { label: 'Personal Instagram', url: 'https://www.instagram.com/bellogyaza', external: true },
    { label: 'BelNavo Tech Instagram', url: 'https://www.instagram.com/belnavo.tech', external: true },
    { label: 'WhatsApp', url: whatsappUrl, external: true },
    { label: 'Personal Email', url: 'mailto:bashirbello627@gmail.com' },
  ],
}
