export function Header({ children }) {
  return (
    <div>
      <h1 className="text-3xl my-8 pl-4 flex justify-center uppercase tracking-wider font-semibold">
        {children}
      </h1>
    </div>
  );
}
