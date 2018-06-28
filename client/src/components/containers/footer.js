import React from "react";
import styled from "styled-components";

const Icon = styled.svg`
  width: .5rem;
  margin: 0 .4rem -.05rem;
`;

const Text = styled.span`
  text-transform: uppercase;
  letter-spacing: .05rem;
  font-size: .6rem;
`;

const Position = styled.footer`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;

const Footer = () => {
  return (
    <Position>
      <Text>Made with TLC by <a href="https://github.com/helenzhou6" rel="noopener noreferrer" target="_blank">Helen Zhou</a></Text>
      <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 16 16" shapeRendering="crispEdges">
        <path stroke="#222205" d="M3 1h1M5 1h1M7 1h1M9 1h1M11 1h1M4 2h8M13 2h1M1 3h1M3 3h10M2 4h12M15 4h1M0 5h15M1 6h3M6 6h4M12 6h4M0 7h3M7 7h2M13 7h2M1 8h2M5 8h1M7 8h2M10 8h1M13 8h3M0 9h4M6 9h4M12 9h3M1 10h15M0 11h1M2 11h12M3 12h10M14 12h1M2 13h1M4 13h8M4 14h1M6 14h1M8 14h1M10 14h1M12 14h1" />
      </Icon>
      <Text>2018</Text>
    </Position>
  );
};

export default Footer;