export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`${className} mx-auto w-full px-4 sm:px-0 md:max-w-150`}>
    {children}
  </div>
);
