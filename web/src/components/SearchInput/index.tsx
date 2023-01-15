import { Container } from './styles';

import { SearchAlt2 as SearchIcon } from '@styled-icons/boxicons-regular';

type SearchProps = {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SearchInput({ placeholder, value, onChange }: SearchProps) {
  return (
    <Container>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <SearchIcon />
    </Container>
  );
}
