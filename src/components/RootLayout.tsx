interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div className='mx-auto max-w-[540px] min-h-screen bg-background text-foreground px-7'>
      {children}
    </div>
  );
}
