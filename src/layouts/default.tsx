export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark bg-background relative flex flex-col ">
      <main className="container mx-auto max-w-7xl flex-grow">{children}</main>
      {/* <footer className="text-muted text-right m-2">@phatsss 🖤</footer> */}
    </div>
  );
}
