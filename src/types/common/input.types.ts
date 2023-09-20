export interface InputProps {
  children?: React.ReactNode;
  name?: string;
  value?: string | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
  width?: string;
  height?: string;
  placeholder?: string;
}