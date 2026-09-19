import Link from "next/link";
import { articles } from "../../content/site";
import { ArrowUpRight } from "../ui";
import { PageIntro } from "../components";

export default function WritingPage() {
  return <main className="inner-page"><PageIntro label="Writing / Archive" title={<>Ideas, arguments<br />and <em>close observation.</em></>} copy="Features and academic writing by Allan Senteu, on technology, education, culture and the systems that shape everyday life." />
  <section className="archive">{articles.map((article,i)=><article className="archive-item" key={article.slug}><span>0{i+1} / {article.type}</span><div><h2>{article.title}</h2><p>{article.excerpt}</p><p className="article-meta">{article.category}</p></div><Link href={`/writing/${article.slug}`}>Open <ArrowUpRight /></Link></article>)}</section></main>;
}
