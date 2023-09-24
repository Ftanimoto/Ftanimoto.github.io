import { NavLink } from 'react-router-dom';
import { GiMusicalNotes, GiMusicalScore } from 'react-icons/gi';
import { ImMusic } from 'react-icons/im';

import { DivStyle, HeaderStyle, StyledIcon } from './style';

function Header() {
  return (
    <HeaderStyle>
      <StyledIcon
        as={ GiMusicalScore }
        size="2em"
        position="absolute"
        left="2vw"
      />
      <h1>Felipe Tanimoto de Albuquerque</h1>
      <h2>Portfólio</h2>
      <StyledIcon
        as={ GiMusicalNotes }
        size="2em"
        position="absolute"
        right="7vw"
        bottom="2vh"
      />
      <StyledIcon
        as={ ImMusic }
        size="2em"
        position="absolute"
        right="2vw"
      />
      <DivStyle>
        <NavLink to="/">Descrição </NavLink>
        <NavLink to="/habilidades">Habilidades </NavLink>
        <NavLink to="/trybecontent">Conteúdo Trybe </NavLink>
      </DivStyle>

    </HeaderStyle>
  );
}

export default Header;
