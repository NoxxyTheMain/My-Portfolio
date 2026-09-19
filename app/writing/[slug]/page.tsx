import { notFound } from "next/navigation";
import Link from "next/link";
import { articles } from "../../../content/site";
import { ArrowUpRight } from "../../ui";

export function generateStaticParams(){return articles.map(article=>({slug:article.slug}));}
export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const article=articles.find(item=>item.slug===slug); if(!article) notFound();
 return <main className="article-page"><Link className="back-link" href="/writing">← All writing</Link><p className="section-label">{article.type} / {article.category}</p><h1>{article.title}</h1><p className="article-dek">{article.excerpt}</p><div className="article-body">{article.body.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div><div className="article-next"><Link href="/writing">Explore more writing <ArrowUpRight /></Link></div></main>;
}
