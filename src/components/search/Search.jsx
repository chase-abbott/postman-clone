import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;`;

const SearchBar = styled.input`
width: 80%
`;

const InputBar = styled.div`
display: flex;
width: 80%;
justify-content: space-evenly;
align-items: center;
`;

const RadioContainer = styled.div`
width: 75px;
height: 35px;
display: flex;
justify-content: center;
align-items: center;
`
;

const RadioLabel = styled.label`
`;

const RadioInput = styled.input`
cursor: pointer;

&:checked&label {
  background-color: #204060;
  color: white;
`;

const SubmitButton = styled.button`
height: 80%;
width: 50px;
`;

const Search = ({ onMethodChange, urlInput, onTextChange, onSubmit }) => {
  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchBar
        type="text"
        name="urlInput"
        value={urlInput}
        onChange={onTextChange}>
      </SearchBar>
      <InputBar>
        <RadioContainer>
          <RadioLabel htmlfor="GET"> GET </RadioLabel>
          <RadioInput 
            type="radio" 
            value="GET" 
            name="selector" 
            onChange={onMethodChange}></RadioInput>
        </RadioContainer>
        <RadioContainer>
          <RadioLabel htmlfor="POST"> POST </RadioLabel>
          <RadioInput 
            type="radio" 
            value="POST" 
            name="selector" 
            onChange={onMethodChange}></RadioInput>
        </RadioContainer>
        <RadioContainer>
          <RadioLabel htmlfor="PUT"> PUT </RadioLabel>
          <RadioInput 
            type="radio" 
            value="PUT" 
            name="selector" 
            onChange={onMethodChange}></RadioInput>
        </RadioContainer>
        <RadioContainer>
          <RadioLabel htmlfor="PATCH"> PATCH </RadioLabel>
          <RadioInput 
            type="radio" 
            value="PATCH" 
            name="selector" 
            onChange={onMethodChange}></RadioInput>
        </RadioContainer>
        <RadioContainer>
          <RadioLabel htmlfor="DELETE"> DELETE </RadioLabel>
          <RadioInput 
            type="radio" 
            value="DELETE" 
            name="selector" 
            onChange={onMethodChange}></RadioInput>
        </RadioContainer>
        <SubmitButton> Go </SubmitButton>
      </InputBar>
    </SearchForm>
  );
};

Search.propTypes = {
  onMethodChange: PropTypes.func.isRequired,
  urlInput: PropTypes.string,
  onTextChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
