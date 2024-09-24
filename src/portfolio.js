/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "thomasredz",
  title: "Hello, I'm Thomas!",
  subTitle: emoji(
    "A passionate Data Science enthusiast 🚀 with a strong interest in Web Development and AI, having experience in working with data analysis, machine learning, and building web applications using JavaScript / Python and other exciting tools and frameworks."),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1uD-ZwLUPauFBK5oejDyGJv6BuQir965S", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/thomasredz",
  linkedin: "https://www.linkedin.com/in/thomas-rosso/",
  gmail: "thomas.rosso@studenti.unipd.it",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA SCIENTIST AND AI ENGINEER WITH PASSION FOR WEB DEVELOPMENT",
  skills: [
    emoji(
      "⚡ Perform data analysis and visualization to extract actionable insights"
    ),
    emoji("⚡ Build machine learning models for predictive analytics and decision-making"),
    emoji(
      "⚡ Develop and deploy data-driven applications using Python / R / SQL"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "HTML 5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "CSS 3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-dev"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node JS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Padua",
      logo: require("./assets/images/unipdLogo.png"),
      subHeader: "Master of Science in Data Science",
      duration: "September 2022 - Now",
      desc: "Multidisciplinary course covering a broad range of theories and tools from engineering, computer science, mathematics, statistics, machine learning, artificial intelligence, and big data.",
      /*
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
        */
    },
    {
      schoolName: "Instituto SUperior Tecnico (Lisbon)",
      logo: require("./assets/images/istLogo.png"),
      subHeader: "Erasmus - Exchange Student",
      duration: "September 2023 - June 2024",
      desc: "During my Erasmus+ exchange at IST Lisboa, I specialized in Data Science, focusing on Machine Learning, Big Data Analytics, and Statistical Methods. Collaborating with international peers, I enhanced my cross-cultural communication and teamwork skills. This experience significantly enriched my academic and global perspective.",
      /*
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
        */
    },
    {
      schoolName: "University of Udine",
      logo: require("./assets/images/uniudLogo.png"),
      subHeader: "Bachelor of Science in Internet of Things, Big data and Web",
      duration: "September 2018 - April 2022",
      desc: "Multidisciplinary course including Computer Science, Data Science, Web, Human-Computer Interaction, Algorithms and Data Structures, Calculus.",
      /*
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
      */
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer / Computer Vision and AI Engineer",
      company: "BidPremium SRL",
      companylogo: require("./assets/images/bidpremiumLogo.png"),
      date: "April 2021 – April 2022",
      desc: "Worked on AI and software development projects focused on defect detection in production and data extraction from paper-based documents.",
      descBullets: [
        "Developed software for recognizing defects in production processes",
        "Created software to transform information from paper sheets into usable data",
        "Improved existing software for defect detection in production",
        "Implemented API server for card grading system",
        "Built datasets for AI-based projects"
      ]
    },
    {
      role: "Electronic Technician",
      company: "R.D. Service",
      companylogo: require("./assets/images/rdserviceLogo.png"),
      date: "Internship",
      desc: "Assisted in the setup and maintenance of electronic devices while ensuring effective customer communication.",
      descBullets: [
        "Handled the configuration and setup of electronic devices",
        "Maintained communication with customers to provide technical support and service"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Advanced Computer Vision with TensorFlow",
      subtitle:
        "Explored advanced image classification, object detection, and segmentation techniques using TensorFlow, including implementing models like R-CNN, ResNet-50, U-Net, and Mask-RCNN, and applying ML interpretation methods like saliency maps on AlexNet.",
      image: require("./assets/images/courseraLogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        /*
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
          */
      ]
        
    },
    {
      title: "Intro to Deep Learning with PyTorch",
      subtitle:
        "Mastered the basics of deep learning and built custom deep neural networks using PyTorch, an open-source library widely used for applications in NLP and Computer Vision.",
      image: require("./assets/images/udacityLogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        /* {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        } */
      ]
    },

    {
      title: "Custom and Distributed Training with TensorFlow",
      subtitle: "Learned to work with Tensor objects, eager and graph modes in TensorFlow, and used GradientTape for custom training loops. Gained hands-on experience with distributed training strategies using multiple GPUs and TPUs to accelerate large-scale model training.",
      image: require("./assets/images/deepLogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        /* {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        } */
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I tried to write and show others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@thomasredz/so-you-wanna-list-a-property-on-the-airbnb-market-maybe-this-can-help-ffcbda1b4da0",
      title: "So you wanna list a property on the Airbnb market? Maybe this can help",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
