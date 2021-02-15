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

  position: static;
  max-width: 993px;

  left: 0px;
  top: 0px;
  background: #ecf0f3;
  flex: none;
  order: 0;
  align-self: stretch;
  box-siing: border-box;
  flex-grow: 0;
  margin: 0;
  cursor: pointer;
  & h5 {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;

    display: inline-flex;
    align-items: center;
    color: #131f2b;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;
  }

  @media (max-width: 400px) {
    & h5 {
      display: contents;
      font-size: 24px;
    }
  }
`;

export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: static;
  max-width: 993px;
  left: 0px;
  top: 76px;
  background: #f8fafb;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
  overflow: hidden;
  max-height: ${(props) => (props.isVisible ? '999px' : '0px')};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: all 600ms ease-in-out;

  & p {
    max-width: 993px;
    position: static;
    left: 32px;
    top: 22px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 137.5%;
    display: flex;
    align-items: center;
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
