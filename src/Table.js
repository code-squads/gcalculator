import React, { useState } from "react";
import {
  CourseCode,
  CourseCodeHeading,
  CourseTitle,
  CourseTitleHeading,
  HeadingLi,
  LI,
  Marks,
  MarksContainer,
  MarksInput,
  MarksLabel,
  TableUL,
  Total,
  TotalLi,
  TotalText,
} from "./styledComponents/Table";

const MARKS_LABEL = ["Marks", "Avg.", "Prc.", "Oral", "Tw.", "%"];

const Table = ({ DATA }) => {
  const [data, setData] = useState(DATA);
  let totalMarks = 0;
  let totalEarnedMarks = 0;

  const marksChangeHandler = (e, courseCode, type, marksType) => {
    let newData = data.map((subject) => {
        if (subject.courseCode === courseCode && marksType==='earnedMarks') {
            var newSubject = Object.assign({}, subject);
            if (e.target.value.length <= 0) {
            newSubject[type][marksType] = 0;
            return newSubject;
            } else if (parseInt(e.target.value) > newSubject[type].maxMarks) {
            newSubject[type][marksType] = newSubject[type].maxMarks;
            return newSubject;
            }
            newSubject[type][marksType] = parseInt(e.target.value);
            return newSubject;
        }
        else if(subject.courseCode === courseCode) {
            var newSubject = Object.assign({}, subject);
            if (e.target.value.length <= 0) {
                newSubject[type][marksType] = 0;
                return newSubject;
            }
            if(marksType === 'minMarks') {
                if(e.target.value > subject[type].maxMarks) {
                    newSubject[type][marksType] = subject[type].maxMarks
                    return newSubject
                }
            }
            newSubject[type][marksType] = parseInt(e.target.value);
        }
        return subject;
    });
    setData(newData);
  };
  return (
    <TableUL>
      <HeadingLi>
        <CourseCodeHeading>Course Code</CourseCodeHeading>
        <CourseTitleHeading>Course Title</CourseTitleHeading>
        {MARKS_LABEL.map((label) => {
          return (
            <Marks>
              <MarksLabel>{label}</MarksLabel>
            </Marks>
          );
        })}
      </HeadingLi>
      {data.map((subject) => {
        let totalSubjectMarks =
          subject.theory.maxMarks +
          subject.practical.maxMarks +
          subject.oral.maxMarks +
          subject.termwork.maxMarks;
        let totalSubjectEarnedMarks =
          subject.theory.earnedMarks +
          subject.practical.earnedMarks +
          subject.oral.earnedMarks +
          subject.termwork.earnedMarks;
        totalMarks += totalSubjectMarks;
        totalEarnedMarks += totalSubjectEarnedMarks;
        let subjectPercentage = (
          (totalSubjectEarnedMarks / totalSubjectMarks) *
          100
        ).toFixed(2);
        return (
          <LI key={subject.courseCode}>
            <CourseCode>{subject.courseCode}</CourseCode>
            <CourseTitle>{subject.courseTitle}</CourseTitle>
            <MarksContainer>
              <Marks>
                <MarksLabel>Max</MarksLabel>
                <MarksLabel>Min</MarksLabel>
                <MarksLabel>Earned</MarksLabel>
              </Marks>
              <Marks>
                <MarksInput 
                    value={subject.theory.maxMarks} 
                    onChange={(e) => {
                        marksChangeHandler(e, subject.courseCode, "theory", "maxMarks");
                    }}
                />
                <MarksInput 
                    value={subject.theory.minMarks} 
                    onChange={(e) => {
                        marksChangeHandler(e, subject.courseCode, "theory", "minMarks");
                    }}
                />
                <MarksInput
                  value={subject.theory.earnedMarks}
                  highlight={true}
                  onChange={(e) => {
                    marksChangeHandler(e, subject.courseCode, "theory", "earnedMarks");
                  }}
                />
              </Marks>
              <Marks>
                <MarksInput 
                    value={subject.practical.maxMarks} 
                    onChange={(e) => {
                        marksChangeHandler(e, subject.courseCode, "practical", "maxMarks");
                    }}    
                />
                <MarksInput 
                    value={subject.practical.minMarks} 
                    onChange={(e) => {
                        marksChangeHandler(e, subject.courseCode, "practical", "minMarks");
                    }}
                />
                <MarksInput
                  value={subject.practical.earnedMarks}
                  highlight={true}
                  onChange={(e) => {
                    marksChangeHandler(e, subject.courseCode, "practical", "earnedMarks");
                  }}
                />
              </Marks>
              <Marks>
                <MarksInput 
                    value={subject.oral.maxMarks} 
                    onChange={(e) => {
                        marksChangeHandler(e, subject.courseCode, "oral", "maxMarks");
                    }}
                />
                <MarksInput 
                    value={subject.oral.minMarks} 
                    onChange={(e) => {
                        marksChangeHandler(e, subject.courseCode, "oral", "minMarks");
                    }}
                />
                <MarksInput
                  value={subject.oral.earnedMarks}
                  highlight={true}
                  onChange={(e) => {
                    marksChangeHandler(e, subject.courseCode, "oral", "earnedMarks");
                  }}
                />
              </Marks>
              <Marks>
                <MarksInput 
                    value={subject.termwork.maxMarks} 
                    onChange={(e) => {
                        marksChangeHandler(e, subject.courseCode, "termwork", "maxMarks");
                    }}
                />
                <MarksInput 
                    value={subject.termwork.minMarks} 
                    onChange={(e) => {
                        marksChangeHandler(e, subject.courseCode, "termwork", "minMarks");
                    }}
                />
                <MarksInput
                  value={subject.termwork.earnedMarks}
                  highlight={true}
                  onChange={(e) => {
                    marksChangeHandler(e, subject.courseCode, "termwork");
                  }}
                />
              </Marks>
              <Marks>
                <MarksLabel>{subjectPercentage}%</MarksLabel>
              </Marks>
            </MarksContainer>
          </LI>
        );
      })}
      <TotalLi>
        <TotalText>Total</TotalText>
        <Total>{((totalEarnedMarks / totalMarks) * 100).toFixed(2)}%</Total>
      </TotalLi>
    </TableUL>
  );
};

export default Table;
