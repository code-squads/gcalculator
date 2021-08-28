import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  height: 100vh;
  width: 98%;
  @media (min-width: 500px) {
    width: 70%;
  }
`;
