import styled from 'styled-components';

export const Container = styled.div`
  --horizintalPadding: 16px;
  --varticalPadding: 24´x;

  padding: var(--varticalPadding) var(--horizintalPadding);
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;

   margin: 0 auto;
   max-width: 1280px;

   @media (min-width: 768px) {
    flex-direction: row;
   }
    
    `;

export const LeftSide = styled.div`
    @media (min-width: 768px){
        width: 25%
    }

`;

export const RigthSide = styled.div`
    @media (min-width: 768px){
        width: 75%
    }
`;

export const Repos = styled.div`
    margin-top: var(--verticalPadding);

    > h2 {
        font-size: 16px;
        font-weight: normal;
    }
    > div {
        margin-top: 8px;

        display: grid;
        grid-gap: 16px;

        grid-template-columns: 1fr;
    }

`