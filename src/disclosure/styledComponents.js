import styled from 'styled-components';

export const Item = styled.div`
  max-width: 993px;
  margin: 0 auto;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 22px 32px 24px;
  max-width: 993px;
  background: #ecf0f3;
  cursor: pointer;
  & h5 {
    font-family: Source Sans Pro;
    font-weight: bold;
    font-size: 22px;
    color: #131f2b;
    margin: 0;
  }

  & i {
    ${(props)=> props.isVisible ? `
    -moz-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 600ms cubic-bezier(0.68, -0.01, 0.19, 1.01);
    ` : `
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    transition: all 600ms cubic-bezier(0.68, -0.01, 0.19, 1.01);
    `}
  }

  @media (max-width: 400px) {
    & h5 {
      display: contents;
      font-size: 24px;
    }
  }
`;

export const Content = styled.div`
  max-width: 993px;
  background: #f8fafb;
  margin: 0;
  overflow: hidden;
  max-height: ${(props) => (props.isVisible ? '9999px' : '0px')};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: all 600ms cubic-bezier(0.68, -0.01, 0.19, 1.01);

  & p {
    max-width: 993px;
    font-family: Source Sans Pro;
    font-size: 22px;
    line-height: 137.5%;
    color: #131f2b;
    margin: 22px 32px 24px;
    white-space: break-spaces;
  }

  @media (max-width: 400px) {
    & p {
      font-size: 24px;
    }
  }
`;
