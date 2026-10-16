import { notFound } from "next/navigation";
import Link from "next/link";
import { articles } from "../../../content/site";
import { ArrowUpRight } from "../../ui";

export function generateStaticParams(){return articles.map(article=>({slug:article.slug}));}
export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const article=articles.find(item=>item.slug===slug); if(!article) notFound();
 return <main className="article-page"><Link className="back-link" href="/writing">← All writing</Link><p className="section-label">{article.type} / {article.category}</p><h1>{article.title}</h1><p className="article-dek">{article.excerpt}</p>{article.fullWork && <section className="full-work"><div><h2>Read the complete piece</h2><a href={article.fullWork} target="_blank" rel="noreferrer">Open full text in a new tab <ArrowUpRight /></a></div><iframe className="full-work-viewer" src={article.fullWork} title={`Complete text: ${article.title}`} /></section>}<div className="article-next"><Link href="/writing">Explore more writing <ArrowUpRight /></Link></div></main>;
}
