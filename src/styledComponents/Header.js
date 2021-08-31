import styled from "styled-components";

const Temp = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  font-family: "Inter";
  font-size: 10px;
  flex-direction: column;
`;

export const HeaderBox = styled(Temp)``;

export const Heading = styled.h2`
  font-family: "Roboto";
  font-weight: 600;
  flex-direction: column;
  text-align: center;
  display: block;
  margin-bottom: 0px;
`;

export const DepSemBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const DepPart = styled.h4`
  font-weight: 500;
  margin-bottom: 0px;
`;

export const SemPart = styled.h4`
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 0px;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const AddRowButton = styled.button`
  box-shadow: inset 0px 1px 3px 0px #c051e8;
  background: linear-gradient(to bottom, #b566d2 5%, #b753db 100%);
  background-color: #b566d2;
  border-radius: 3px;
  border: 1px solid #b351d6;
  flex-direction: column;
  // cursor: pointer;
  color: #ffffff;
  font-family: "Inter";
  font-size: 10px;
  // font-weight: bold;
  padding-top: 3px;
  padding-bottom: 3px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #2b665e;
  margin-left: 5px;

  &:hover {
    background: linear-gradient(to bottom, #b753db 5%, #b566d2 100%);
    background-color: #b753db;
  }
`;

export const PrintButton = styled.button`
  box-shadow: inset 0px 1px 3px 0px #1c69e6;
  background: linear-gradient(to bottom, #4185f3 5%, #4185f3 100%);
  background-color: #4185f3;
  border-radius: 3px;
  border: 1px solid #4185f3;
  flex-direction: column;
  // cursor: pointer;
  color: #ffffff;
  font-family: "Inter";
  font-size: 10px;
  // font-weight: bold;
  padding-top: 3px;
  padding-bottom: 3px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #397ff0;
  margin-right: 5px;

  &:hover {
    background: linear-gradient(to bottom, #4185f3 5%, #4185f3 100%);
    background-color: #4185f3;
  }
`;
