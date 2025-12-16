import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";
import { getPostData, getAllPostSlugs } from "@/lib/blog";

export async function generateStaticParams() {
    const paths = getAllPostSlugs();
    return paths;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostData(slug);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
                <Link href="/blog" className="text-primary hover:underline">
                    Voltar para o Blog
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground pt-24 pb-24">
            <article className="container max-w-3xl px-4 mx-auto">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar para o Blog
                </Link>

                <header className="mb-12">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-between py-6 border-y border-white/10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <User className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="font-bold">{post.author}</div>
                                <div className="text-xs text-muted-foreground">Autor</div>
                            </div>
                        </div>
                        <button className="p-2 rounded-full hover:bg-white/5 transition-colors text-muted-foreground hover:text-white">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </header>

                <div className="aspect-video relative rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div
                    className="prose prose-invert prose-lg max-w-none text-muted-foreground prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
                    dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
                />
            </article>
        </main>
    );
}
