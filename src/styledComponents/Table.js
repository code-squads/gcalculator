import styled from "styled-components";

export const TableUL = styled.ul`
  margin: 0px;
  padding: 0px;
  width: 100%;
  //margin-top: 100px;
`;
export const LI = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
`;
const Temp = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  font-family: "Inter";
  font-size: 10px;
`;
export const CourseCode = styled(Temp)`
  width: 15%;
  border: solid black 1px;
  border-top: none;
`;
export const CourseTitle = styled(Temp)`
  width: 20%;
  padding-left: 5px;
  padding-right: 3px;
  border-right: solid black 1px;
  border-bottom: solid black 1px;
`;
export const MarksContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 65%;
`;
export const Marks = styled.div`
  width: 0;
  flex-grow: 1;
  flex-basis: 0px;
  display: flex;
  flex-direction: column;
`;
export const MarksLabel = styled.div`
  height: 0;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  font-family: "Inter";
  font-size: 10px;
  flex-grow: 1;
  flex-basis: 0px;
  border-bottom: solid black 1px;
  border-right: solid black 1px;
`;
export const MarksInput = styled.input`
  box-sizing: border-box;
  text-align: center;
  font-family: "Inter";
  font-size: 10px;
  flex-grow: 1;
  flex-basis: 0px;
  border: none;
  outline: none;
  background-color: ${(props) => (props.highlight ? "#FFDB58" : "")};
  border-bottom: solid black 1px;
  border-right: solid black 1px;
`;
export const HeadingLi = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30px;
  border-top: solid black 1px;
  background-color: lavender;
`;
export const CourseCodeHeading = styled(Temp)`
  width: 15%;
  padding-left: 4px;
  border: solid black 1px;
  border-top: none;
`;
export const CourseTitleHeading = styled(Temp)`
  width: 20%;
  box-sizing: border-box;
  padding-left: 5px;
  padding-right: 3px;
  border-right: solid black 1px;
  border-bottom: solid black 1px;
`;
export const TotalLi = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 30px;
  font-family: "Inter";
  font-size: 10px;
  border-bottom: solid black 1px;
`;
export const TotalText = styled(Temp)`
  width: 15%;
  border-left: solid black 1px;
`;
export const Total = styled(Temp)`
  width: 10.83%;
  margin-left: auto;
  border-right: solid black 1px;
`;
