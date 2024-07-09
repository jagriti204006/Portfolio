/* Change this file to get your personal Porfolio */

/* FOR LOGOS = https://icon-sets.iconify.design/logos/ */

//TODO: Design animated logo and then revert this back to True
// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Atharva's Portfolio",
  description:
    "I am a technology enthusiast who prefers to work on a modern stack and experiment with tools that automate repetitive tasks. I enjoy working with APIs and combining my creativity and talent to create amazing utility tools and software systems.",
  og: {
    title: "Atharva's Portfolio",
    type: "website",
    url: "http://highnessatharva.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Atharva Shah",
  logo_name: "AtharvaShah",
  nickname: "HighnessAtharva",
  subTitle:
    "I'm a tech enthusiast who likes to experiment with tools that automate repetitive tasks and prefers to work on a modern stack. I love using APIs to build incredible utility tools and software systems by fusing my creativity and talent.",
  resumeLink:
    "https://github.com/HighnessAtharva/Blog/blob/master/public/AtharvaShahResume%20-%202022.pdf",
  portfolio_repository: "https://github.com/HighnessAtharva/",
  githubProfile: "https://github.com/HighnessAtharva",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/HighnessAtharva",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/atharva-shah-5873a2111/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:HighnessAtharva@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/HighnessAlex",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/atharva._.shah/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "📊 Web Scraping, Data Mining, Data Cleaning and Data Visualization and working with large datasets using Pandas, Numpy, Matplotlib, Seaborn and Plotly",
        "📊 Using CSV, JSON, and XML files to create beautiful CLI reports focused on business insights",
        "📊 Creating highly scalable, production-ready models for a variety of deep learning and statistical applications.",
        "📊 Working experience with computer vision and NLP projects",
        "📊 Complex quantitative modelling for dynamic forecasting and time series analysis"
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "logos:matplotlib-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MATLAB",
          fontAwesomeClassname: "vscode-icons:file-type-matlab",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Seaborn",
          fontAwesomeClassname: "logos:seaborn-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "🌐 Building responsive website front end using HTML, CSS, JS, and React.js coupled with powerful PHP and Python backends",
        "🌐 Perform Authentication, Database Management, API Fetching, Caching, Session Management, Encryption, Server Management and Deployment",
        "🌐 Building fast, secure, and SEO-friendly SPAs, PWAs, static sites, and mobile-first websites.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#8F00FF",
          },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "vscode-icons:file-type-tailwind",
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Hugo",
          fontAwesomeClassname: "simple-icons:hugo",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          }
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          }
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          }
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#003B57",
          }
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          }
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          }
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          }
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#A8B9CC",
          }
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          }
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#007396",
          }
        }
      ],
    },
    {
      title: "Cloud Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "☁ Working knowledge of multiple cloud service providers.",
        "☁ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "☁ Cloud-based deep learning model deployment for mobile device use",
        "☁ Configuring CI/CD pipelines for cloud-based web app deployment"
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#00C7B7",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939",
          },
        }
      ],
    },
    {
      title: "Design & Productivity",
      fileName: "DesignImg",
      skills: [
        "⚡ Creating highly appealing user interfaces for mobile and web applications through logo design.",
        "⚡ Designing the flow of application functionalities to improve user experience.",
        "⚡ Developing wireframes, mockups, and prototypes to improve user experience, as well as maintaining project documentation, workflow diagrams, and project reports in accordance with Agile and Scrum methodologies.",

      ],
      softwareSkills: [
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#21759B",
          },
        },
        {
          skillName: "Wix",
          fontAwesomeClassname: "simple-icons:wix",
          style: {
            color: "#FF8C00",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Slack",
          fontAwesomeClassname: "logos:slack-icon",

        },
        {
          skillName: "Notion",
          fontAwesomeClassname: "simple-icons:notion",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "logos:bash-icon",
          style: {
            color: "#4EAA25",
          },
        },
        {
          skillName: "Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#31A8FF",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/highnessatharva",
    },
    {
      siteName: "Stack Overflow",
      iconifyClassname: "simple-icons:stackoverflow",
      style: {
        color: "#FE7A16",
      },
      profileLink: "https://stackoverflow.com/users/14287958/atharva-shah",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/highnessatharva",
    },
    {
      siteName: "Google Cloud",
      iconifyClassname: "logos:google-cloud",

      profileLink: "https://www.cloudskillsboost.google/public_profiles/ae72a7ef-51bc-427c-aef5-c57a05639eab",
    }
  ],
};

const degrees = {
  degrees: [
    {
      title: "BMCC, Pune",
      subtitle: "Bachelor of Computer Applications",
      logo_path: "bmcc_logo.png",
      alt_name: "BMCC, Pune",
      duration: "2020 - 2023",
      descriptions: [
        "⚡ Studied software engineering subjects such as DS, algorithms, DBMS, OS, CA, AI, networking, and software architecture, among others.",
        "⚡ Enrolled in add-on courses such as Deep Learning, Probability and Statistics, Data Science, Cloud Computing, and Full Stack Development.",
        "⚡ Maintained a CGPA of at least 9.5 throughout the academic course while mentoring juniors, organising hackathons, and participating in college-level events. I received an award from a respected director for consistently outstanding academic performance.",
      ],
      website_link: "https://bmcc.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "API Fundamentals Student Expert",
      subtitle: "- Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://badgr.com/public/assertions/7Tuk8lN2QDmxiT0WaarW3Q",
      alt_name: "Postman Certification",
      color_code: "#000000",
    },
    {
      title: "Advanced SQL",
      subtitle: "- Kaggle",
      logo_path: "kaggle.png",
      certificate_link:
        "https://www.kaggle.com/learn/certification/highnessatharva/advanced-sql",
      alt_name: "Kaggle Certification",
      color_code: "#ffffff",
    },
    {
      title: "Data Cleaning",
      subtitle: "- Kaggle",
      logo_path: "kaggle.png",
      certificate_link:
        "https://www.kaggle.com/learn/certification/highnessatharva/data-cleaning",
      alt_name: "Kaggle Certification",
      color_code: "#ffffff",
    },
    {
      title: "Data Visualization",
      subtitle: "- Kaggle",
      logo_path: "kaggle.png",
      certificate_link:
        "https://www.kaggle.com/learn/certification/highnessatharva/data-visualization",
      alt_name: "Kaggle Certification",
      color_code: "#ffffff",
    },
    {
      title: "Pandas",
      subtitle: "- Kaggle",
      logo_path: "kaggle.png",
      certificate_link:
        "https://www.kaggle.com/learn/certification/highnessatharva/pandas",
      alt_name: "Kaggle Certification",
      color_code: "#ffffff",
    },
    {
      title: "Python",
      subtitle: "- Kaggle",
      logo_path: "kaggle.png",
      certificate_link:
        "https://www.kaggle.com/learn/certification/highnessatharva/python",
      alt_name: "Kaggle Certification",
      color_code: "#ffffff",
    },
    {
      title: "Intro to SQL",
      subtitle: "- Kaggle",
      logo_path: "kaggle.png",
      certificate_link:
        "https://www.kaggle.com/learn/certification/highnessatharva/intro-to-sql",
      alt_name: "Kaggle Certification",
      color_code: "#ffffff",
    },
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/CCZ2JWU82AUU",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/S48CGXK7HTET",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "IT Support Specialization",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/8RV95XPT4M7Y",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Cloud Facilitator",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1pDkjjssKHjSKGZszw2IjeEXCe0Q4ZN15/view?usp=sharing",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Retrieving, Processing, and Visualizing Data with Python",
      subtitle: "- University of Michigan (Capstone Project)",
      logo_path: "uni_michigan.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/CBSQ2ZQAQ8CP",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Front-End Developement Libraries",
      subtitle: "- FreeCodeCamp",
      logo_path: "fcc_logo.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/highness_atharva/front-end-development-libraries",
      alt_name: "FreeCodeCamp",
      color_code: "#000000",
    },
    {
      title: "Cloud Computing",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/LXJW8BH7D8DM",
      alt_name: "IBM",
      color_code: "#ffffff",
    },
    {
      title: "Python for Data Science, AI & Development",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/EWDE3ZFH393P",
      alt_name: "IBM",
      color_code: "#ffffff",
    },
    {
      title: "Web Development with HTML, CSS, JavaScript",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/KZNX3N8VYPFH",
      alt_name: "IBM",
      color_code: "#ffffff",
    },

    {
      title: "Algorithmic Toolbox",
      subtitle: "- UC San Diego",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/G3DB3D2JVVHD",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "The Science of Well-Being",
      subtitle: "- Yale University",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/YMAC43XMK8LD",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Learning How to Learn",
      subtitle: "Deep Teaching Solutions",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/4AWPYRSCGA86",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "🚀 Having worked with many evolving startups as a tech support specialist, I am equally capable of working in teams as well as individually. Throughout my journey as a freelancer, I have served many clients with their needs and requirements, working with varied technologies like Python, SQL, HTML, CSS, JavaScript, Wix, WordPress, etc. I have also compiled various learning resources and cheatsheets for my fellow developers and students. I am also a Google Cloud Certified Facilitator, and when I am not serving my clients, I tinker with data analysis and automate trivial tasks with Python.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Hackathons and Competitions",
      experiences: [

        {
          title: "CRIF India Hackathon 2023",
          company: "",
          company_url: "",
          logo_path: "freecopy_logo.png",
          duration: "Jan 2023",
          location: "COEP, Pune",
          description:
            "Won first place in the hackathon, and was awarded a cash prize of INR 50,000. Led a team of 3 to develop Risk Entity Extracter from News Articles using Natural Language Processing and Machine Learning. The project was built using Python, NLTK, and Tableau with lot of data cleaning and preprocessing and visualization over a period of 24 hours.",
          color: "#fc1f20",
        },
        {
          title: "PAI Cyber National Olympiad",
          company: "",
          company_url: "",
          logo_path: "freecopy_logo.png",
          duration: "Jan 2020",
          location: "Ferguson College, Pune",
          description:
            "Won second place in a cyber olympiad with 3 rounds of aptitude tests, MCQs and programming and debugging challenges. The competition was held in 3 phases, and I was selected for the final round after clearing the first two rounds. I was awarded a Lenovo laptop for getting the second place in the competition.",
          color: "red",
        }

      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Technical Writer",
          company: "AccuKnox",
          company_url: "https://www.accuknox.com/",
          logo_path: "AccuKnox.jpeg",
          duration: "May 2023 - Present",
          location: "Remote",
          description:
            `
            ➙ Composed engaging and informative blog posts, white papers, e-books, and videos to educate and engage the target audience on Cloud Native Application Privacy and Protection (CNAPP) topics.
            ➙ Demonstrated proficiency in using various software tools such as G Suite, Jira, Confluence, Excalidraw, PlantUML, and Wordpress to efficiently create, manage, and publish content.
            ➙ Conducted extensive research on emerging trends and industry best practices related to CNAPP, Zero-Trust principles, Use Cases, Deep Dives, Kubernetes, and DevSecOps to produce high-quality editorial-style content.
            ➙ Collaborated closely with cross-functional teams including developers, subject matter experts, and marketing professionals to gather insights and align content with the organization's goals and messaging.
            ➙ Maintained a high level of professionalism, attention to detail, and adherence to deadlines while delivering compelling and well-structured content that effectively communicated complex technical concepts to a wide range of audiences.
            `,
          color: "#0071C5",
        },
        {
          title: "Freelance Python Specialist",
          company: "TutorialsPoint",
          company_url:
            "https://www.tutorialspoint.com/",
          logo_path: "TutorialsPoint.jpeg",
          duration: "March 2023 - Present",
          location: "Remote",
          description:
            `View my contributions: https://www.tutorialspoint.com/authors/atharva-Shah
            ➙ Conduct in-depth research on various Python-based topics and algorithms to provide detailed tutorials and solutions.
            ➙ Create comprehensive documentation and write clear, concise, and informative tutorials for popular Python libraries such as Matplotlib, Machine Learning, Pandas, Numpy, and more.
            ➙ Ensure the content is plagiarism-free, adhering to high-quality standards, and accessible for learners at all levels.
            ➙ Demonstrate proficiency in solving complex problems across different domains, leveraging Python and its associated libraries.
            ➙ Successfully tackle challenges related to data visualization using Matplotlib, data manipulation with Pandas, implementing machine learning algorithms, and working with databases.
            ➙ Apply web scraping techniques and utilize frameworks like Flask and Django for web development projects.
            ➙ Showcase expertise in Python programming and data structures to deliver efficient and optimized solutions.
            ➙ Stay up-to-date with the latest developments in the Python ecosystem and related technologies to ensure the content remains relevant and cutting-edge.`,
          color: "#009933",
        },
        {
          title: "Freelance Technical Content Writer",
          company: "Board Infinity",
          company_url: "https://www.boardinfinity.com/",
          logo_path: "board_infinity.png",
          duration: "July 2022 - December 2022",
          location: "Mumbai, Maharashtra",
          description:
            `➙ Wrote over 20 professional technical articles ranging from topics like programming cheat sheets, full-stack developer resources, programming paradigms, data structures and algorithms, and technical interview tips, with word counts ranging from 1500 to 2000.

            ➙ Researched and wrote 120 technical articles ranging from 500 to 1000 words related to data structures, algorithms, software development, engineering principles, databases, and programming languages (Java, Python, and C++).

            ➙ Answered questions from the forum discussion and Stack Overflow in a well-organized way with examples.

            ➙ Wrote campaign letters and taglines for email marketing to draw customers to programming courses.

            ➙ Provided over 150 descriptions for video courses on modules like DBMS, OS, Data Science, Computer Networking, and Algorithms in C++`,
          color: "#ee3c26",
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "January 2023 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many open-source projects. I've worked on projects for organisations such as VocabCLI, 30-Seconds-of-Python, FreeCodeCamp, public-apis, Textualize, Typer, and others. These contributions include bug fixes, feature requests, and formulating proper documentation for the project.",
          color: "#181717",
        },

        {
          title: "Developer Students Club Member",
          company: "Troika",
          company_url:
            "https://www.bmcc.ac.in",
          logo_path: "bmcc_logo.png",
          duration: "January 2022 - January 2023",
          location: "Pune, Maharashtra",
          description:
            "We have a well established developer club in college that is directly associated with a variety of sponsors. The chief responsibilities were to organise events, workshops, hackathons, and meetups. Additionally, I was responsible for building the club's website from the ground up and creating registration and payment portals for the events.",
          color: "#0C9D58",
        },

        {
          title: "Google CLoud Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "May 2022 - September 2022",
          location: "Pune, Maharashtra",
          description:
            "Completed four tracks of cloud training. Learned and imparted the skills of DevOps, Cloud Safety, Creating and Deploying Apps in the Cloud, Kubernetes Engine, Scaling, and Data Management on the Cloud. The curriculum offers four tracks of hands-on cloud based training to be performed through virtual machines provided via Qwiklabs. Major duties were to train other students on campus, build a community, and preach the importance of cloud computing and its applications in the real world.",
          color: "#4285F4",
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of the latest technological tools. My favourite and most ambitious projects include full-stack development, static site generation, data science notebooks, and developing CLI tools that automate my daily tasks. I 💙 working with APIs, file systems and databases.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Blogs",
  description:
    "I have worked on and published a variety of blogs related to Web Dev, Cheatsheet, CSS, Regex, OS, DBMS and Data Structures and Algorithms.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      name: "50 Powerful CSS Snippets",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Shared and explained essential CSS code snippets that should be in every developer's arsenal. Got amazing feedback from the commmunity and enabled people to flex their CSS Superpowers!",
      url:
        "https://opensourced.hashnode.dev/series/50-powerful-css-snippets/",
    },
    {
      name: "Data Structures and Algorithms in Python",
      createdAt: "2022-12-02T16:26:54Z",
      description: "450 DSA Questions Solved in Python with clean code and explanation for topics like Arrays, Strings, Linked Lists, Trees, Graphs, etc.",
      url:
        "https://opensourced.hashnode.dev/series/dsa-python",
    },
    {
      name: "Python Web Scraping",
      createdAt: "2021-01-19T16:26:54Z",
      description: "Provided code snippets and explanation for scraping web articles in Python. Also, provided a script to download all the articles in a single click.",
      url:
        "https://opensourced.hashnode.dev/python-web-scraping-batch-download-web-articles",
    },
    {
      name: "GPT-3 for JavaScript",
      createdAt: "2021-01-20T16:26:54Z",
      description: "Showcased the power of GPT-3 by creating a simple JavaScript library that can be used to generate code snippets for a variety of tasks. This article got featured on the official Hashnode Community platform.",
      url:
        "https://opensourced.hashnode.dev/using-gpt-3-to-build-a-javascript-app",
    },
    {
      name: "DBMS Quick Reference",
      createdAt: "2021-01-22T16:26:54Z",
      description: "I have created a quick reference guide for Database Management Systems. This guide covers the basics of DBMS, RDBMS, SQL, NoSQL, etc.",
      url:
        "https://opensourced.hashnode.dev/database-management-systems-quick-recapreference",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "atharva.jpg",
    description:
      "I can help you with Python, SQL, Data Science, Machine Learning, Web Development, Cloud Computing, and Open Source Development. I am also available for freelance work. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
  },
  blogSection: {
    title: "Blog",
    subtitle:
      "I write about Web Development, Cheatsheet, CSS, Regex, OS, DBMS and Data Structures and Algorithms. I also write about my experiences and learnings in the field of Web Development, Open Source, and Cloud Computing. Check out my Hashnode Blog to read more.",
    link: "https://opensourced.hashnode.dev/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Looking for a Developer?",
    subtitle:
      "I am open to remote work opportunities involving web development, machine learning, data science, cloud computing, and open source development with a focus on Python, JavaScript, React, Node.js, SQL, and Django. I always look forward to collaborating with a driven, forward-thinking team to create fantastic software because I firmly believe that the whole is greater than the sum of its parts. Reach out to me via email or LinkedIn, and I will get back to you as soon as possible.",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7888041942",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
