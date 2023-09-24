import { GiMusicalScore } from 'react-icons/gi';
import styled from 'styled-components';

export const DivStyle = styled.div`
  background: black;
  font-color: white;
  width: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 30px;
  outline: 1px solid white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  text-decoration: none;
  border-radius: 5px;

  a {
    text-decoration: none;
    color: white;
  }

  }
`;

export const HeaderStyle = styled.div`
  background-image: green;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  h1 {
    flex: 1;
    margin: 0;
    padding: 0;
  }

  h2 {
    flex: 1;
    margin-top: 0;
    margin-bottom: 5vh;
  }
`;

export const StyledIcon = styled(GiMusicalScore)`
  font-size: ${({ size }) => size};
  position: ${({ position }) => position};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  flex: ${({ flex }) => flex};
`;
