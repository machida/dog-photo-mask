type Props = {
  children: React.ReactNode;
};

export function Toolbar({ children }: Props) {
  return (
    <div className="mb-2 flex min-h-14 shrink-0 flex-wrap items-center justify-center gap-2 px-1 py-2 md:px-4">
      {children}
    </div>
  );
}
