import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ResultsArea = styled.pre`
background-color: white;
height: 50vh;
border: 1px solid lightgray;
width: 60%;
overflow: auto;
`;


const Results = ({ data }) => {
  return <ResultsArea> {JSON.stringify(data, null, 2) } </ResultsArea>;
};

Results.propTypes = {
  data: PropTypes.array.isRequired
};

export default Results;
