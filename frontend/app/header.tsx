function Badge({ text, color = "red" }: { text: string; color?: string }) {
  return (
    <span
      className={
        "ml-3 inline-flex items-center rounded-full bg-" +
        color +
        "-100 px-2.5 py-0.5 text-xs font-medium  text-" +
        color +
        "-800"
      }
    >
      {text}
    </span>
  );
}

export default function Header({
  pageName,
  badge = null,
}: {
  pageName: string;
  badge?: string | null;
}) {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold tracking-tight text-gray-900">
          {" "}
          {pageName}
          {badge != null ? <Badge text={badge} /> : null}{" "}
        </h1>
      </div>
    </header>
  );
}
