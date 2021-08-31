import React, { useState } from "react";
import { Container } from "./styledComponents/CalculatorPage";
import Table from "./Table";
import Header from "./Header";

const DUMMY = [
  {
    courseCode: "CO19202",
    courseTitle: "Programming in c++",
    theory: {
      minMarks: 40,
      maxMarks: 100,
      earnedMarks: 89,
    },
    practical: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 23,
    },
    oral: {
      minMarks: 0,
      maxMarks: 0,
      earnedMarks: 0,
    },
    termwork: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 24,
    },
  },
  {
    courseCode: "CO19203",
    courseTitle: "Computer Hardware and Maintenance",
    theory: {
      minMarks: 0,
      maxMarks: 0,
      earnedMarks: 0,
    },
    practical: {
      minMarks: 20,
      maxMarks: 50,
      earnedMarks: 46,
    },
    oral: {
      minMarks: 0,
      maxMarks: 0,
      earnedMarks: 0,
    },
    termwork: {
      minMarks: 40,
      maxMarks: 50,
      earnedMarks: 46,
    },
  },
  {
    courseCode: "CO19204",
    courseTitle: "Data Structures",
    theory: {
      minMarks: 40,
      maxMarks: 100,
      earnedMarks: 95,
    },
    practical: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 23,
    },
    oral: {
      minMarks: 0,
      maxMarks: 0,
      earnedMarks: 0,
    },
    termwork: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 24,
    },
  },
  {
    courseCode: "HU19101",
    courseTitle: "Communication Skills",
    theory: {
      minMarks: 40,
      maxMarks: 100,
      earnedMarks: 95,
    },
    practical: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 23,
    },
    oral: {
      minMarks: 0,
      maxMarks: 0,
      earnedMarks: 0,
    },
    termwork: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 23,
    },
  },
  {
    courseCode: "IT19204",
    courseTitle: "Digital Techniques",
    theory: {
      minMarks: 40,
      maxMarks: 100,
      earnedMarks: 92,
    },
    practical: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 23,
    },
    oral: {
      minMarks: 0,
      maxMarks: 0,
      earnedMarks: 0,
    },
    termwork: {
      minMarks: 10,
      maxMarks: 25,
      earnedMarks: 24,
    },
  },
  {
    courseCode: "SC19110",
    courseTitle: "Engineering Mathematics",
    theory: {
      minMarks: 40,
      maxMarks: 100,
      earnedMarks: 96,
    },
    practical: {
      minMarks: 0,
      maxMarks: 0,
      earnedMarks: 0,
    },
    oral: {
      minMarks: 0,
      maxMarks: 0,
      earnedMarks: 0,
    },
    termwork: {
      minMarks: 0,
      maxMarks: 0,
      earnedMarks: 0,
    },
  },

  // {
  //   courseCode: '',
  //   courseTitle: '',
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
];

const depNames = [
  "Computer Engineering",
  "Information Technology",
  "Civil Engineering",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Instrumentation Engineering",
  "Leather Technology",
  "Rubber Technology",
];

const semCounts = [1, 2, 3, 4, 5, 6];

const CalculatorPage = () => {
  const [result, setResult] = useState(DUMMY)

  const addRowHandler = () => {
    let emptySubject =  {
        courseCode: `Code${result.length+1}`,
        courseTitle: `Subject${result.length+1}`,
        theory: {
          minMarks: 0,
          maxMarks: 0,
          earnedMarks: 0,
        },
        practical: {
          minMarks: 0,
          maxMarks: 0,
          earnedMarks: 0,
        },
        oral: {
          minMarks: 0,
          maxMarks: 0,
          earnedMarks: 0,
        },
        termwork: {
          minMarks: 0,
          maxMarks: 0,
          earnedMarks: 0,
        }
    }
    let tempData = [...result]
    tempData.push(emptySubject)
    setResult(tempData)
  }

  return (
    <Container>
      <Header deps={depNames} sems={semCounts} addRowHandler={addRowHandler}></Header>
      <Table key={result} DATA={result}/>
    </Container>
  );
};

export default CalculatorPage;
