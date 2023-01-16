import sunImg from '@/assets/imgs/sun.png';

export function Sun() {
  return (
    <img
      alt="sun"
      src={sunImg}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    />
  );
}
