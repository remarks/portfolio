import styled, { injectGlobal, css } from "styled-components";

const large = (...args) => css`
  @media screen and (min-width: 990px) {
    ${css(...args)}
  }
`;

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Work+Sans:400,700');
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

body {
  margin: 0;
  color: rgba(0,0,0,0.7);
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
  line-height: 26px;

  ${large`
    line-height: 28px;
  `}
}

h1, h2, h3, h4, h5, h6 {
  margin: 0 0 0.75rem;
  font-family: 'Work Sans', Arial, Helvetica, sans-serif;
  line-height: 1.3em;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.8em;
}

h3 {
  font-size: 1.5em;
}

h4 {
  font-size: 0.8em;
  font-weight: normal;
}

a:link, a:visited {
  color: rgba(0, 0, 0, 0.7);
  text-decoration: none;
}

a:hover {
  color: blue;
  border-color: blue;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

li {
    display: inline-block;
}

.outline {
  background: rgba(255,0,0,0.1)
}
`;

export const Wrapper = styled.div`
`;

// padding: 20px;
// ${large` padding: 40px; `}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  ${large`
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 40px 0;
  `}
`;

export const Intro = styled.section`
  ${large`
    flex: 1 1 500px;
    font-size: 20px;
  `}
`;

export const Contact = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  font-size: 30px;

  & li:not(:first-of-type) {
      margin: 0 0 0 30px;
  }

  & a {
    border-bottom: none;
  }

  ${large`
    flex: 1 1 200px;
    justify-content: flex-end;
  `}
`;

export const Divider = styled.div`
  height: 8px;
  width: 80px;
  margin: 40px auto;
  background: #8d60f5;

  ${large` margin: 40px auto `}
`;

export const Headline = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;

export const Section = styled.section``;
export const Project = styled.section`
  background: ${props => (props.background ? props.background : "")};
  color: ${props => (props.color ? props.color : "inherit")}
  padding: 20px 0;

  ${large` padding: 40px 0 `}

  a:link, a:visited {
    color: ${props => (props.color ? props.color : "inherit")}
  }
`;

export const Images = styled(Container)`
  margin-bottom: 20px;
  padding: 0;

  ${large`
    flex: 1 1 60%;
    padding: 0;
  `}

  & img {
    max-width: 100%;
  }
`;

export const Description = styled.div`
  ${large`
    flex: 1 1 35%;
    margin-left: 40px;
    font-size: 16px;
  `}
`;

export const Meta = styled.h4`
  opacity: 0.7;
  text-transform: uppercase;
`;

export const Title = styled.h3`
  ${large` flex: 1 1 auto; `}
`;

export const Details = styled.p`
  ${large`
    line-height: 1em;
  `}
`;

export const Links = styled.div`
  margin-top: 20px;
  ${large`
    flex: 1 1 20%;
    margin-left: -10px;
  `}

  & a {
    margin-right: 10px;
    font-weight: bold;

    ${large`
      padding: 5px 10px;
      border: 5px transparent solid;
      border-radius: 10px;
      transition: all 0.3s ease-in-out;

      &:hover {
        border-color: #fff;
      }
 
    `}
  }

  & .fa {
    margin-right: 5px;
  }
`;

export const Footer = styled.footer`
  padding: 80px 0;
  background: #111;
  color: #fff;
`;
