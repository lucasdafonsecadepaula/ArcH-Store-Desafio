import moonImg from '@/assets/imgs/moon.png';

export function Moon() {
  return (
    <img
      alt="moon"
      src={moonImg}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    />
  );
}
