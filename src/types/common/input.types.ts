export interface InputProps {
  children?: React.ReactNode;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
  width?: string;
  height?: string;
  placeholder?: string;
}

export interface InputFieldProps extends InputProps {
  label: string
}