import styled, { DefaultTheme } from 'styled-components/native';
import CaretLeft from 'phosphor-react-native/src/icons/CaretLeft';

export const Container = styled.View`
  width: 100%;
  margin-top: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;
export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    size: 36,
    color: theme.COLORS.WHITE,
  })
)``;
