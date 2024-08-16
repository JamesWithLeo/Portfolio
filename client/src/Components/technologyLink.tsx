export default function TechnolgyLink({
  target,
  href: destination,
}: {
  target: string;
  href: string;
}) {
  return (
    <a
      href={destination}
      target="_"
      className="mx-1 rounded border border-solid border-gray-400 px-1"
    >
      {target}
    </a>
  );
}
