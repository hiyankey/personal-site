import {
  Arrow,
  Content,
  Provider,
  Root,
  Trigger,
} from "@radix-ui/react-tooltip";

export function Tooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  ...props
}: {
  children: React.ReactNode;
  content: string;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: () => void;
}) {
  return (
    <Provider>
      <Root defaultOpen={defaultOpen} onOpenChange={onOpenChange} open={open}>
        <Trigger asChild>{children}</Trigger>
        <Content
          align="center"
          side="top"
          sideOffset={5}
          {...props}
          className="select-none rounded-4 bg-gray-3 px-2 py-1 font-mono text-13 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
        >
          {content}
          <Arrow className="fill-gray-3" />
        </Content>
      </Root>
    </Provider>
  );
}
