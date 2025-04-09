type ContainerProps = { children: React.ReactNode; className: string };

export default function Container({
  children,
  className = '',
}: ContainerProps) {
  return (
    <div className={`rounded-md p-4  border border-gray-950 ${className}`}>
      {children}
    </div>
  );
}
