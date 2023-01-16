import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as Popover from '@radix-ui/react-popover';
import { Container, ListWrapper } from './styles';

type CustomPopoverProps = {
  title: string;
  children: React.ReactNode;
};

export function CustomPopover({ title, children }: CustomPopoverProps) {
  return (
    <Container>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button aria-label="Escolha uma categoria">
            {title}
            <ChevronDownIcon />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content sideOffset={5}>
            <ListWrapper>{children}</ListWrapper>
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </Container>
  );
}
