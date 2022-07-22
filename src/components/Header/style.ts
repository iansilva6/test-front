import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 38px;
  padding: 12px;
  list-style: none;
  margin: 0;
`

export const ListItem = styled.li`
  color: #ccc;
  background-color: #fff;
  border: none;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #ff7800;
    transition: 0.3s;
  }
`
