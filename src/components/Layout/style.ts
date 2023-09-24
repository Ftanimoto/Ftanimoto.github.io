import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  min-height: 80vh;
  margin: 15vh auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 30px;
  border: 1px solid #000;
  border-radius: 10%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);

  img {
    width: 50%;
   border: 5px double #000;
   border-radius: 10%;
   margin: 0 1vw;
  }

  div {
    height: 100%;
  }

  }
`;
