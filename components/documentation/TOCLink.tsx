import Link from "next/link";

interface Props {
  title: string;
  url: string;
}

function TOCLink({ title, url }: Props) {
  return (
    <Link
      className="p-2 duration-150 hover:bg-accent rounded-md hover:text-white"
      href={url}
    >
      {" "}
      <li>{title}</li>
    </Link>
  );
}

export { TOCLink };
