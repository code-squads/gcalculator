/////////////////////////////////////////////////////////////////////
// Format :
// {
//   courseCode: "",
//   courseTitle: "",
//   theory: {
//     minMarks: ,
//     maxMarks: ,
//     earnedMarks: ,
//   },
//   practical: {
//     minMarks: ,
//     maxMarks: ,
//     earnedMarks: ,
//   },
//   oral: {
//     minMarks: ,
//     maxMarks: ,
//     earnedMarks: ,
//   },
//   termwork: {
//     minMarks: ,
//     maxMarks: ,
//     earnedMarks: ,
//   }
// }
/////////////////////////////////////////////////////////////////////
const firstSem = [
  {
    courseCode: "CO19201",
    courseTitle: "WEB PAGE DESIGN",
    theory: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    practical: {
      minMarks: 20,
      maxMarks: 50,
      earnedMarks: 0,
    },
    oral: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    termwork: {
      minMarks: 20,
      maxMarks: 50,
      earnedMarks: 0,
    },
  },
  {
    courseCode: "CO19301",
    courseTitle: "MULTIMEDIA AND VIDEO CREATION",
    theory: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    practical: {
      minMarks: 20,
      maxMarks: 50,
      earnedMarks: 0,
    },
    oral: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    termwork: {
      minMarks: 20,
      maxMarks: 50,
      earnedMarks: 0,
    },
  },
  {
    courseCode: "IT19202",
    courseTitle: "PROGRAMMING IN C",
    theory: {
      minMarks: 40,
      maxMarks: 100,
      earnedMarks: 0,
    },
    practical: {
      minMarks: 20,
      maxMarks: 50,
      earnedMarks: 0,
    },
    oral: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    termwork: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 0,
    },
  },
  {
    courseCode: "SC19103",
    courseTitle: "APPLIED PHYSICS",
    theory: {
      minMarks: 40,
      maxMarks: 100,
      earnedMarks: 0,
    },
    practical: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 0,
    },
    oral: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    termwork: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 0,
    },
  },
  {
    courseCode: "SC19109",
    courseTitle: "BASIC MATHEMATICS",
    theory: {
      minMarks: 40,
      maxMarks: 100,
      earnedMarks: 0,
    },
    practical: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 0,
    },
    oral: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    termwork: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
  },
  {
    courseCode: "EC19210",
    courseTitle: "BEEE",
    theory: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    practical: {
      minMarks: 20,
      maxMarks: 50,
      earnedMarks: 0,
    },
    oral: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    termwork: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 0,
    },
  },
];

const secondSem = [
  {
    courseCode: "CO19202",
    courseTitle: "PROGRAMMING IN C++",
    theory: {
      minMarks: 40,
      maxMarks: 100,
      earnedMarks: 0,
    },
    practical: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 0,
    },
    oral: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    termwork: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 0,
    },
  },
  {
    courseCode: "CO19203",
    courseTitle: "COMPUTER HARDWARE AND MAINTENANCE",
    theory: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    practical: {
      minMarks: 20,
      maxMarks: 50,
      earnedMarks: 0,
    },
    oral: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    termwork: {
      minMarks: 40,
      maxMarks: 50,
      earnedMarks: 0,
    },
  },
  {
    courseCode: "CO19204",
    courseTitle: "DATA STRUCTURES",
    theory: {
      minMarks: 40,
      maxMarks: 100,
      earnedMarks: 0,
    },
    practical: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 0,
    },
    oral: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    termwork: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 0,
    },
  },
  {
    courseCode: "HU19101",
    courseTitle: "COMMUNICATION SKILLS",
    theory: {
      minMarks: 40,
      maxMarks: 100,
      earnedMarks: 0,
    },
    practical: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 0,
    },
    oral: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    termwork: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 0,
    },
  },
  {
    courseCode: "IT19204",
    courseTitle: "DIGITAL TECHNIQUES",
    theory: {
      minMarks: 40,
      maxMarks: 100,
      earnedMarks: 0,
    },
    practical: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 0,
    },
    oral: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    termwork: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 0,
    },
  },
  {
    courseCode: "SC19110",
    courseTitle: "ENGINEERING MATHEMATICS",
    theory: {
      minMarks: 40,
      maxMarks: 100,
      earnedMarks: 0,
    },
    practical: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    oral: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    termwork: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
  },
];

const thirdSem = [
  {
    courseCode: "CO19303",
    courseTitle: "PROGRAMMING IN JAVA",
    theory: {
      minMarks: 40,
      maxMarks: 100,
      earnedMarks: 0,
    },
    practical: {
      minMarks: 20,
      maxMarks: 50,
      earnedMarks: 0,
    },
    oral: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    termwork: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 0,
    },
  },
  {
    courseCode: "CO19304",
    courseTitle: "PYTHON PROGRAMMING",
    theory: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    practical: {
      minMarks: 20,
      maxMarks: 50,
      earnedMarks: 0,
    },
    oral: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    termwork: {
      minMarks: 20,
      maxMarks: 50,
      earnedMarks: 0,
    },
  },
  {
    courseCode: "CO19305",
    courseTitle: "COMPUTER NETWORKING",
    theory: {
      minMarks: 40,
      maxMarks: 100,
      earnedMarks: 0,
    },
    practical: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    oral: {
      minMarks: 20,
      maxMarks: 50,
      earnedMarks: 0,
    },
    termwork: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
  },
  {
    courseCode: "CO19306",
    courseTitle: "DATABASE MANAGEMENT SYSTEM",
    theory: {
      minMarks: 40,
      maxMarks: 100,
      earnedMarks: 0,
    },
    practical: {
      minMarks: 20,
      maxMarks: 50,
      earnedMarks: 0,
    },
    oral: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    termwork: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 0,
    },
  },
  {
    courseCode: "IT19207",
    courseTitle: "MICROPROCESSOR",
    theory: {
      minMarks: 40,
      maxMarks: 100,
      earnedMarks: 0,
    },
    practical: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 0,
    },
    oral: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    termwork: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 0,
    },
  },
];

const fourthSem = [
  {
    courseCode: "CO19206",
    courseTitle: "OPERATING SYSTEM",
    theory: {
      minMarks: 40,
      maxMarks: 100,
      earnedMarks: 0,
    },
    practical: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    oral: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 0,
    },
    termwork: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 0,
    },
  },
  {
    courseCode: "CO19207",
    courseTitle: "SOFTWARE ENGINEERING",
    theory: {
      minMarks: 40,
      maxMarks: 100,
      earnedMarks: 0,
    },
    practical: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    oral: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    termwork: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
  },
  {
    courseCode: "CO19308",
    courseTitle: "ADVANCED PROGRAMMING IN JAVA",
    theory: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    practical: {
      minMarks: null, //TO BE DECIDED / TBD
      maxMarks: 50,
      earnedMarks: 0,
    },
    oral: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    termwork: {
      minMarks: null, //TBD
      maxMarks: 50,
      earnedMarks: 0,
    },
  },
  {
    courseCode: "CO19309",
    courseTitle: "MOBILE APPLICATION DEVELOPMENT",
    theory: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    practical: {
      minMarks: null, //TBD
      maxMarks: 50,
      earnedMarks: 0,
    },
    oral: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    termwork: {
      minMarks: null, //TBD
      maxMarks: 50,
      earnedMarks: 0,
    },
  },
  {
    courseCode: "CO19311",
    courseTitle: "NEXT GENERATION DATABASES",
    theory: {
      minMarks: 40,
      maxMarks: 100,
      earnedMarks: 0,
    },
    practical: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 0,
    },
    oral: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    termwork: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 0,
    },
  },
  {
    courseCode: "CO19401",
    courseTitle: "ADVANCED WEB DEVELOPMENT",
    theory: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    practical: {
      minMarks: null, //TBD
      maxMarks: 50,
      earnedMarks: 0,
    },
    oral: {
      minMarks: null,
      maxMarks: null,
      earnedMarks: null,
    },
    termwork: {
      minMarks: null, //TBD
      maxMarks: 50,
      earnedMarks: 0,
    },
  },
];
