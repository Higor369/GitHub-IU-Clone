import React from 'react';

 import { Container, GithubLogo, SearchForm } from './styles';

const Header: React.FC = () => {
  return (
    <Container >
        <GithubLogo />
        <SearchForm>
            <input type="text" placeholder="escrever seu nome ou seu repositorio"/>
        </SearchForm>
    </Container>
  
  
    );
}

export default Header;