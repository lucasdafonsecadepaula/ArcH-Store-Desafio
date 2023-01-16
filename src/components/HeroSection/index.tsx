import heroImg from '@/assets/imgs/hero.jpg';
import { Box, Container } from './styles';

export function HeroSection() {
  return (
    <Container>
      <Box>
        <div>
          <div className="text">
            <h1>Melhor oferta de notebook</h1>
            <a href="/laptops">
              <button>Compre agora</button>
            </a>
          </div>
          <img src={heroImg} />
        </div>
      </Box>
    </Container>
  );
}
