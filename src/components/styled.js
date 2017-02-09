import {injectGlobal, css} from 'styled-components';
import styled from 'styled-components';

const spacing = {
  quarter: '10px',
  half: '20px',
  single: '40px',
  double: '80px'
}

const colors = {
  black: '#000',
  white: '#fff'
}

const size = {
  s: '1em',
  m: '1.4em',
  l: '2em',
  xl: '2.5em'
}

const small = (...args) => css `
  @media screen and (max-width: 600px) {
    ${ css(...args) }
  }
`

const medium = (...args) => css `
  @media screen and (min-width: 601px) {
    ${ css(...args) }
  }
`

const large = (...args) => css `
  @media screen and (min-width: 1100px) {
    ${ css(...args) }
  }
`

injectGlobal `
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700,900');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    margin: 0;
    padding: 0;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 900;
    margin: 0 0 0.5em 0;
    line-height: 1.3;
  }

  h1 {
    font-size: ${size.l};
    ${large ` font-size: ${size.xl} `}
  }

  .project {
    border: ${spacing.quarter} ${colors.black} solid;
  }
`

export const Section = styled.section `
  display: flex;
  flex-flow: wrap;
  position: relative;
  max-width: ${props => props.header ? '1100px' : 'auto'};
  padding: ${spacing.half};
  background: ${props => props.background};
  ${medium `
    padding: ${spacing.single};
    `}
  ${large `
    padding: ${spacing.double} ${spacing.double};
    flex-flow: nowrap
  `}
`

export const Block = styled.div `
  display: flex;
  flex: 1;
  flex-flow: wrap;
  max-width: 1100px;
  justify-content: ${props => props.header ? 'space-between' : 'flex-start'};
  margin: 0 auto;
  padding: ${props => props.header ? '0 !important' : spacing.half};
  background: ${colors.white};
  ${medium ` padding: ${spacing.single} `}
  ${large ` flex-flow: nowrap `}
`

export const Headline = styled.div `
  flex: 1;
  ${large ` max-width: 80% `}
`

export const Link = styled.a `
  display: inline-block;
  margin: ${spacing.quarter} ${spacing.half} ${spacing.quarter} 0;
  padding: ${spacing.quarter} ${spacing.half};
  background: ${colors.black};
  color: ${colors.white};
  border-radius: ${spacing.double};
  text-decoration: none;
  ${small ` ${props => props.git ? 'display: none' : null } `};

  &:hover {
    background: blue;
  }
`

export const Avatar = styled.img `
  display: none;
  ${large `
    display: inline;
    width: 150px;
    height: 150px;
  `}
`

export const Demo = styled.div `
  flex: 1 100%;
  ${large ` flex: 1 33.3%; margin-right: ${spacing.single} `}
`

export const Description = styled.div `
  flex: 1 100%;
  ${large ` flex: 1 66.6% `}
`