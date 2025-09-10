

const logotext = "AKR";
const meta = {
    title: "Ayush Kumar Rai",
    description: "I’m Ayush Kumar Rai - a student at James B Conant High School",
};

const introdata = {
    title: "I’m Ayush Kumar Rai",
    animated: {
        first: "I love coding",
        second: "I code cool things",
        third: "I make robots",
    },
    description: "",
};

const dataabout = {
    title: "A bit about myself",
    aboutme1: "Hello, I'm Ayush, a dedicated high school student from Schaumburg. I have a wide range of interests that keep me engaged in school and beyond. Sports-wise, I'm passionate about tennis and swimming. I'm a music enthusiast, creating melodies on my keyboard.",
    aboutme2: "In addition to my athletic and musical pursuits, I'm actively involved in my school's Robotics Team, BPA, Math Team, and Coding Team, all of which challenge me academically and foster collaboration.",
    aboutme3: "As a Junior, I'm committed to personal growth and embracing the high school experience. I'm always open for a chat, whether it's about sports, music, academics, or just sharing high school stories. Feel free to connect; I'm eager to engage in meaningful conversations.",
};
const educationtimeline = [
    {
        school: "Indian Schools",
        where: "India",
        date: "Pre 2014",
    },
    {
        school: "Winston Churchill Elementary School",
        where: "Schaumburg, IL, USA",
        date: "2014 - 2017",
    },
    {
        school: "Francis Campanelli Elementary School",
        where: "Schaumburg, IL, USA",
        date: "2017 - 2019",
    },
    {
        school: "Margaret Mead Junior High School",
        where: "Elk Grove Village, IL, USA",
        date: "2019",
    },
    {
        school: "James B. Conant High School",
        where: "Hoffman Estates, IL, USA",
        date: "2021 - Current",
    },
];

const skills = [{
        name: "Java",
        value: 90,
    },
    {
        name: "HTML5",
        value: 80,
    },
    {
        name: "Microsoft Office",
        value: 99,
    },
    {
        name: "Python",
        value: 60,
    },
    {
        name: "Graphic Design",
        value: 85,
    },
];

const interests = [{
        title: "Graphic Design",
        description: "I have loved art and design forever, and since I like computers, I took media in Junior High and immediately fell in love with it, and I am now a decent adobe creative app user.",
    },
    {
        title: "STEM",
        description: "I am an aspiring engineer and I love STEM",
    },
    {
        title: "Sports",
        description: "I love sport and compete in both Swimming and Tennis at the High School level",
    },
    {
        title: "Business",
        description: "I want to create my own company, and I participate in BPA",
    },
];


const dataportfolio = [{
        title: "Life Beyond Coronavirus",
        startDate: "2020",
        description: "A little project I made during the lockdown to spread info about covid-19",
        link: "https://lifebeyondcoronavirus-q7t3a.ondigitalocean.app/index.html",
    },

    {
        title: "Basic Java Calculator",
        startDate: "2022",
        description: "My first java app: a basic calculator",
        link: "https://github.com/prince1107/BasicJavaCalculator",
    },
    {
        title: "Battle Game",
        startDate: "2022",
        description: "A java based Battle Game",
        link: "https://github.com/prince1107/BattleGame",
    },
    {
        title: "Ant Sim",
        startDate: "2023",
        description: "A javafx project that simulates an ant moving around",
        link: "https://github.com/prince1107/AntSim",
    },
    {
        title: "Base Defense FXGL",
        startDate: "2023",
        description: "A javafx based base defense game comparable to zombs.io",
        link: "https://github.com/prince1107/BaseDefenseFXGL",
    },
    {
        title: "D214 Robot Rumble winner",
        startDate: "2023",
        description: "Our team won the D214 Robot Rumble, the largest high school robotics competition in illinois",
        link: "https://youtu.be/1kgkxAU2Yjw?si=jKNjZ6v3E1bhDNv2",
    },
    {
        title: "BPA State Winner + National Qualifier",
        startDate: "2023",
        description: "I won an even at BPA Illinois' State Leadership Conference, and have qualified for nationals in 3 events over the course of 2 years",
        link: "https://x.com/ConantBPA/status/1658262958445559809?s=20",
    },
    {
        title: "CodeClock",
        startDate: "2023",
        description: "A school project that tracks how long you code",
        link: "https://github.com/prince1107/CodeClock",
    },
];

const contactConfig = {
    YOUR_EMAIL: "ayushkumar.rai@icloud.com",
    YOUR_FONE: "(224)499-3488",
    description: "",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_7x7cudq",
    YOUR_TEMPLATE_ID: "template_dh6jvw9",
    YOUR_USER_ID: "eWWWBm9iiTtoDCOXd",
};

const socialprofils = {
    github: "https://github.com/prince1107",
    twitter: "https://twitter.com/darkshadest",
    youtube: "https://youtube.com/@ayushkumarrai07",
};
export {
    meta,
    dataabout,
    dataportfolio,
    educationtimeline,
    skills,
    interests,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
