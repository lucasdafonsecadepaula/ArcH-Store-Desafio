import { SearchAlt2 as SearchIcon } from '@styled-icons/boxicons-regular';
import { Container } from './styles';

type SearchProps = {
  placeholder: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleConfirm?: () => void;
  type?: 'text' | 'number';
};

export function SearchInput({
  placeholder,
  value,
  onChange,
  handleConfirm,
  type = 'text',
}: SearchProps) {
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter' && handleConfirm) {
      handleConfirm();
    }
  };

  return (
    <Container>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyUp={handleKeyUp}
      />
      {handleConfirm && <SearchIcon onClick={handleConfirm} />}
    </Container>
  );
}
