import Link from "next/link";
import { useRouter } from "next/router";

export default function LangSwitcher() {
  const { locale, locales } = useRouter();

  return (
    <aside className="langswitcher">
      {locales?.map((node, i) =>
        node == locale ? (
          <span key={i} className="active">
            {node}
          </span>
        ) : (
          <Link key={i} href="/" locale={node} legacyBehavior>
            {node}
          </Link>
        )
      )}
    </aside>
  );
}
