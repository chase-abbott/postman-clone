import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;`;

const SearchBar = styled.input`
width: 79.75%;
align-self: flex-end;
`;

const InputBar = styled.div`
display: flex;
width: 75%;
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

const JSONBody = styled.textarea`
width: 60%;
height: 100px;
`;

const Search = ({ 
  onMethodChange, 
  urlInput, 
  onTextChange, 
  onSubmit,
  body, 
  onBodyChange }) => {
  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchBar
        data-testid="search-bar"
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
      <JSONBody 
        placeholder="Raw JSON Body"
        name="body"
        value={body}
        onChange={onBodyChange}/>
    </SearchForm>
  );
};

Search.propTypes = {
  onMethodChange: PropTypes.func.isRequired,
  urlInput: PropTypes.string,
  onTextChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  body: PropTypes.string,
  onBodyChange: PropTypes.func.isRequired,
};

export default Search;
