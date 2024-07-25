/* Change this file to get your personal Porfolio */

/* FOR LOGOS = https://icon-sets.iconify.design/logos/ */

//TODO: Design animated logo and then revert this back to True
// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shriya's Portfolio",
  nickname: "Visualizer, Guwahati",
  description:
    "I’m a Communication Designer with a focus on branding and packaging design. Over years of freelancing, I've transformed the vaguest briefs into unique, eye-catching creations. My mission is to design unforgettable brand experiences through graphic design, typography, and visual communication. Committed to excellence, I ensure that every project resonates deeply with its audience, bringing your vision to life.",
  og: {
    title: "Shriya's Portfolio",
    type: "website",
    url: "http://jagriti204006.github.io/",
  },
};

//Home Pagef
const greeting = {
  title: "Shriya Poddar",
  logo_name: "Shriya Poddar",
  nickname: "Visualizer, Guwahati",
  subTitle:
    "I’m a Communication Designer with a focus on branding and packaging design. Over years of freelancing, I've transformed the vaguest briefs into unique, eye-catching creations. My mission is to design unforgettable brand experiences through graphic design, typography, and visual communication. Committed to excellence, I ensure that every project resonates deeply with its audience, bringing your vision to life.",
  resumeLink:
    "https://drive.google.com/file/d/16-cMWeKg64SPrm7ioBT0-uQ6pk4fEYVg/view?usp=drive_link",
  portfolio_repository: "https://github.com/Shriyapoddar/",
  githubProfile: "",
};

const socialMediaLinks = [
  {
    //   name: "Github",
    //   link: "https://github.com/HighnessShriya",
    //   fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    //   backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
    // },
    // {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shriya-poddar/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:poddarshriya21@gmail.com",
    fontAwesomeIcon: "fa fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Instagram",
    link:
      "https://www.instagram.com/poddar_shriya21/?igsh=MWUydHVjaWc1aGh5eQ%3D%3D",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Visual Communication",

      skills: ["Logo Designing", "Branding", "Packaging"],
      softwareSkills: [
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Adobe After Effects",
          fontAwesomeClassname: "simple-icons:adobeaftereffects",
          style: {
            backgroundColor: "transparent",
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
      siteName: "Photoshop",
      iconifyClassname: "simple-icons:adobephotoshop",
      style: {
        color: "#2EC866",
      },
      // profileLink: "https://www.hackerrank.com/highnessatharva",
    },
    {
      siteName: "Illustrator",
      iconifyClassname: "simple-icons:adobeillustrator",
      style: {
        color: "#FE7A16",
      },
      // profileLink: "https://stackoverflow.com/users/14287958/atharva-shah",
    },
    {
      siteName: "After Effects",
      iconifyClassname: "simple-icons:adobeaftereffects",
      style: {
        color: "#20BEFF",
      },
      // profileLink: "https://www.kaggle.com/highnessatharva",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "The Assam Royal Global University, Guwahati",
      subtitle: "Bachelor of Design (B.Des)",
      logo_path: "royal1.png",
      alt_name: "The Assam Royal Global University, Guwahati",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ Studied core design subjects such as Visual Communication, Typography, Illustration, Interaction Design, UX/UI, Design Thinking, and Motion Graphics, among others.",
        "⚡ Enrolled in add-on courses such as Digital Photography, 3D Modeling, Animation, Design Management, and Branding Strategies.",
        "⚡ Mentored juniors, organized design exhibitions, and participated in college-level design competitions. I received an award from a respected dean for consistently outstanding academic performance",
      ],
      website_link: "https://www.rgu.ac/",
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
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "🚀Having worked with evolving startups as a visual designer, I am equally capable of working in teams as well as individually. Throughout my journey as a freelancer and as a private company employee, I have served many clients with their needs and requirements, working on varied projects including logo designing, branding, packaging, and visual communication. I am proficient in using design tools like Adobe Photoshop, Illustrator, and After Effects. I have also compiled various design resources and tutorials for my fellow designers and students. When I am not serving my clients, I explore new design trends and experiment with motion graphics and interactive designs.",
  header_image_path: "exp.png",
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
        },
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
          description: `
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
          company_url: "https://www.tutorialspoint.com/",
          logo_path: "TutorialsPoint.jpeg",
          duration: "March 2023 - Present",
          location: "Remote",
          description: `View my contributions: https://www.tutorialspoint.com/authors/atharva-
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
          description: `➙ Wrote over 20 professional technical articles ranging from topics like programming cheat sheets, full-stack developer resources, programming paradigms, data structures and algorithms, and technical interview tips, with word counts ranging from 1500 to 2000.

            ➙ Researched and wrote 120 technical articles ranging from 500 to 1000 words related to data structures, algorithms, software development, engineering principles, databases, and programming languages (Java, Python, and C++).

            ➙ Answered questions from the forum discussion and Stack Overflow in a well-organized way with examples.

            ➙ Wrote campaign letters and taglines for email marketing to draw customers to programming courses.

            ➙ Provided over 150 descriptions for video courses on modules like DBMS, OS, Data Science, Computer Networking, and Algorithms in C++`,
          color: "#ee3c26",
        },
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
          company_url: "https://www.bmcc.ac.in",
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
        },
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
      description:
        "Shared and explained essential CSS code snippets that should be in every developer's arsenal. Got amazing feedback from the commmunity and enabled people to flex their CSS Superpowers!",
      url: "https://opensourced.hashnode.dev/series/50-powerful-css-snippets/",
    },
    {
      name: "Data Structures and Algorithms in Python",
      createdAt: "2022-12-02T16:26:54Z",
      description:
        "450 DSA Questions Solved in Python with clean code and explanation for topics like Arrays, Strings, Linked Lists, Trees, Graphs, etc.",
      url: "https://opensourced.hashnode.dev/series/dsa-python",
    },
    {
      name: "Python Web Scraping",
      createdAt: "2021-01-19T16:26:54Z",
      description:
        "Provided code snippets and explanation for scraping web articles in Python. Also, provided a script to download all the articles in a single click.",
      url:
        "https://opensourced.hashnode.dev/python-web-scraping-batch-download-web-articles",
    },
    {
      name: "GPT-3 for JavaScript",
      createdAt: "2021-01-20T16:26:54Z",
      description:
        "Showcased the power of GPT-3 by creating a simple JavaScript library that can be used to generate code snippets for a variety of tasks. This article got featured on the official Hashnode Community platform.",
      url:
        "https://opensourced.hashnode.dev/using-gpt-3-to-build-a-javascript-app",
    },
    {
      name: "DBMS Quick Reference",
      createdAt: "2021-01-22T16:26:54Z",
      description:
        "I have created a quick reference guide for Database Management Systems. This guide covers the basics of DBMS, RDBMS, SQL, NoSQL, etc.",
      url:
        "https://opensourced.hashnode.dev/database-management-systems-quick-recapreference",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "shriya.png",
    description:
      "I offer expertise in branding, packaging, visual design, logo creation, and designing menu cards, brochures, and catalogues and much more. Available for freelance work, I am committed to delivering professional and timely responses. Whether you have a specific project or just want to connect, I am here to assist you.",
  },
  blogSection: {
    title: "Behance",
    subtitle:
      "View my professional shot collection over at Behance. I meticulously craft product visuals that captivate and innovate. Let's bring your ideas to life with stunning design.",
    link: "https://www.behance.net/shriyapoddar",
    avatar_image_path: "behance.png",
  },
  addressSection: {
    title: "Looking for a Designer? ",
    subtitle:
      " I specialize in branding, packaging, and visual design, with expertise in Adobe Creative Suite, Sketch, and Figma. My portfolio includes crafting distinctive brand identities and designing innovative packaging. I enjoy collaborating with dynamic, forward-thinking teams to bring creative visions to life. For inquiries, feel free to contact me via email or LinkedIn.",
    avatar_image_path: "looking.png",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 76370 75556",
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
