type LogoProps = {
  width?: number;
};

export function Logo({ width }: LogoProps) {
  return <img src="/logo.svg" alt="Archoffice" width={width} height="auto" />;
}
