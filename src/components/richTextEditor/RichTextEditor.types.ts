export type MenuItemProps = {
  icon: string;
  title: string;
  action: () => void;
  isActive?: () => boolean;
};
export type EditorProps = {
  editor: any;
};
export const defaultProps: Partial<MenuItemProps> = {
  isActive: () => false,
};
export type Item = MenuItemProps & {
  type?: string | undefined;
};
export type Props = {
  onSubmit: (_content: string) => void;
  placeholder?: string;
};
