import styled, { injectGlobal, css } from 'styled-components';

const large = (...args) => css`
  @media screen and (min-width: 990px) {
    ${css(...args)}
  }
`;

// eslint-disable-next-line
injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Poppins:400,600');
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
body {
  margin: 0;
  color: rgba(0,0,0,0.7);
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
  line-height: 26px;

  ${large`
    line-height: 32px;
  `}
}

h1, h2, h3, h4, h5, h6 {
  margin: 0 0 0.75rem;
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
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
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  ${large`
    flex-direction: row;
    flex-wrap: nowrap;
  `}
`;

export const IntroContainer = styled.section`
  padding: 20px 0;

  & h1 {
    font-size: 1.4em;
    line-height: 1.5;

    ${large`
      font-size: 1.9em;
    `}
  }

  & em {
    color: blue
  }

  ${large`
    flex: 1 1 500px;
    padding: 120px 0;
  `}
`;

export const Contact = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-start;
  font-family: "Poppins";
  font-weight: bold;
  font-size: 20px;
  padding-top: 20px;

  & li {
    display: inline-block;
    width: 50%;

    ${large `
      width: auto !important;
      &:not(:first-of-type) {
        margin: 0 0 0 20px !important;
      }
    `}

    &:not(:last-of-type) {
      margin: 0 0 20px 0;
    }
  }

  & a {
    border-bottom: 5px transparent solid;
    transition: all 0.3s ease-in-out;
    color: blue;

    &:hover {
      border-color: blue
    }
  }
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
export const ProjectContainer = styled.section`
  background: ${props => (props.background ? props.background : '')};
  color: ${props => (props.color ? props.color : 'inherit')};
  padding: 20px 0;

  ${large` padding: 40px 0 `}

  a:link, a:visited {
    color: ${props => (props.color ? props.color : 'inherit')}
  }
`;

export const Images = styled.div`
  margin-bottom: 20px;

  ${large`
    flex: 1 1 60%;
    margin-bottom: 0;
  `}

  & img {
    width: 100%;
    height: auto;
    box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.1);
    border-radius: 7px;

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
  text-transform: uppercase;
`;

export const Title = styled.h3`
  ${large` flex: 1 1 auto; `}
`;

export const Details = styled.p`
  line-height: 26px;
`;

export const Links = styled.div`
  margin-top: 20px;
  ${large`
    flex: 1 1 20%;
    margin-left: -15px;
  `}

  & a {
    margin-right: 20px;
    font-weight: bold;

    ${large`
      margin-right: 5px;
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

export const FooterContainer = styled.footer`
  padding: 60px 0;
  background: #FFF;

  ${large`
    padding: 100px 0;
  `}

  & a {

  }
`;
