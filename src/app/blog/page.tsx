import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { getSortedPostsData } from "@/lib/blog";

export default function BlogPage() {
    const posts = getSortedPostsData();

    return (
        <main className="min-h-screen bg-background text-foreground pt-24 pb-24">
            <div className="container px-4 mx-auto">
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Voltar para a Home
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
                        Blog & Insights
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Artigos, tutoriais e análises sobre modelagem financeira, valuation e carreira no mercado financeiro.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group flex flex-col overflow-hidden border rounded-2xl bg-card border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {post.readTime}
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-muted-foreground text-sm mb-6 flex-1">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <User className="w-3 h-3" />
                                    </div>
                                    {post.author}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
