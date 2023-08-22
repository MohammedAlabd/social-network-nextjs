export type MentionListProps = {
  items: string[];
  command: (arg: { id: string }) => void;
};

export type MentionListRef = {
  onKeyDown: (event: React.KeyboardEvent) => boolean;
};
export type Props = {
  onSubmit: (_content: string) => void;
  placeholder?: string;
};
