/* eslint-disable max-len */
import React, { Component } from 'react';
import styled from 'styled-components';
import Results from '../components/results/Results.jsx';
import Search from '../components/search/Search.jsx';
import { getRequest, requestWithBody } from '../utils.js';

const Body = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
width: 100%;
height: 100%
`;

const Header = styled.div`
background-color: #204060;
color: white;
height: 10vh;
display: flex;
align-items: center;
font-family: Verdana,Geneva,Tahoma,sans-serif;
font-size: 3rem;
font-weight: 700;
width: 100%;
padding-left: 2rem;
margin-bottom: 1rem;
`;


export default class RequestContainer extends Component {
  state = {
    urlInput: '',
    method: '',
    body: '',
    data: [
      {
        'root': {
          'Yo': 'Make a Fetch!'
        }
      }
    ],
  }

  handleTextChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleMethodChange = ({ target }) => {
    this.setState({ method: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.method !== 'GET'){
      return requestWithBody(this.state.urlInput, this.state.method, this.state.body)
        .then(res => this.setState({ data: res }));
    } else {
      return getRequest(this.state.urlInput)
        .then(res => this.setState({ data: res }));
    }
  }

  handleBodyChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render(){
    return (
      <Body>
        <Header>
         MailMan
        </Header>
        <Search 
          onMethodChange={this.handleMethodChange}
          urlInput={this.state.urlInput}
          onTextChange={this.handleTextChange}
          onSubmit={this.handleSubmit}
          body={this.state.body}
          onBodyChange={this.handleBodyChange}/>
         
        <Results data={this.state.data}/>
      </Body>
    );
  }
}
