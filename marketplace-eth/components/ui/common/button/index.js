export default function Button({
  children,
  className,
  hoverable = true,
  variant = "purple",
  ...rest
}) {
  const variants = (variant) => {
    return hoverable
      ? `text-white bg-${variant}-600 hover:bg-${variant}-700`
      : `text-white bg-${variant}-600`;
  };

  return (
    <button
      {...rest}
      className={`disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 border rounded-lg text-base font-medium ${className} ${variants(
        variant
      )}`}
    >
      {children}
    </button>
  );
}
