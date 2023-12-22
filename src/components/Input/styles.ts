import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled.TextInput`
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GRAY_700};

  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.MD}px;

  min-height: 56px;
  max-height: 56px;
  padding: 16px;
  border-radius: 6px;
`;
