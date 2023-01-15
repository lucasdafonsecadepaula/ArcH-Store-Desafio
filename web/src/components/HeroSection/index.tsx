import heroImg from '@/assets/imgs/hero.jpg';
import { Box, Container } from './styles';

export function HeroSection() {
  return (
    <Container>
      <Box>
        <div>
          <div className="test">
            <h1>Melhor oferta de notebook</h1>
            <button>Compre agora</button>
          </div>
          <img src={heroImg} />
        </div>
      </Box>
    </Container>
  );
}
