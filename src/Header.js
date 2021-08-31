import React from "react";
import {
  Heading,
  HeaderBox,
  DepSemBox,
  DepPart,
  SemPart,
  AddRowButton,
  PrintButton,
  ButtonBox,
} from "./styledComponents/Header";

const Header = (props) => {
  // Function to add st, nd, rd and th (ordinal) suffix to a number
  const ordinal_suffix_of = (i) => {
    var j = i % 10,
      k = i % 100;
    if (j == 1 && k != 11) {
      return i + "st";
    }
    if (j == 2 && k != 12) {
      return i + "nd";
    }
    if (j == 3 && k != 13) {
      return i + "rd";
    }
    return i + "th";
  };

  return (
    <HeaderBox>
      <Heading>GPM Marksheet Calculator</Heading>
      <DepSemBox>
        <DepPart>
          Department&emsp;&emsp;&emsp;:&emsp;&emsp;{props.deps[0]}
        </DepPart>
        <SemPart>
          Semester&emsp;&emsp;&emsp;&emsp;:&emsp;&emsp;
          {ordinal_suffix_of(props.sems[1])}
        </SemPart>
      </DepSemBox>
      <ButtonBox>
        <AddRowButton onClick={props.addRowHandler}>Add row&ensp;&nbsp;+</AddRowButton>
        <PrintButton>&ensp;&nbsp;Print&ensp;&nbsp;</PrintButton>
      </ButtonBox>
    </HeaderBox>
  );
};

export default Header;
