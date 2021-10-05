import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #424c58;
  grid-area: header;
  justify-content: right;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const UserButton = styled.button`
  padding: 0.5em;
  border: none;
  background-color: #5885af;
  color: #efebe0;
  font-size: 1.2em;
  border-radius: 13px;
`;

export const UserPicture = styled.img`
  border-radius: 50%;
  height: 60px;
  width: 60px;
`;

export const HeaderHeader = styled.h1`
  color: #fb6b90;
  font-family: "Roboto", sans-serif;
`;

export const HeaderItem = styled.div`
  color: #efebe0;
  font-size: 1.2em;
  margin: 1rem;
`;