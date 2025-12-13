interface Props {
  children: React.ReactNode;
}

function Highlight({ children }: Props) {
  return <span className="text-primary">{children}</span>;
}

export { Highlight };
