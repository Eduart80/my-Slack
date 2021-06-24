import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { AccessTime, Search } from "@material-ui/icons";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar //TODO:Add onClick
        />
        <AccessTime />
      </HeaderLeft>
      {/* {header search} */}
      <HeaderSearch>
        <Search />
        <input type="text" placeholder="Slack search"></input>
      </HeaderSearch>
      {/* {header right} */}
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
const HeaderSearch = styled.div``;
