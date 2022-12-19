import * as Style from './styles';

export type MainProps = {
  title?: string;
};

export function Main({ title }: MainProps) {
  return (
    <Style.Wrapper
      data-testid="main-wrapper"
    >
      <Style.Logo src="/images/logo.svg" alt="Imagem de um átomo e React Avançado ao lado" />
      <Style.Title>React Avançado</Style.Title>
      <Style.Description>
        TypeScript, ReactJS, NextJS e Styled Components
      </Style.Description>
      <Style.Illustration src="/images/hero-illustration.svg" alt="Um desenvolvedor de frente para uma tela com código" />
    </Style.Wrapper>

  );
}
