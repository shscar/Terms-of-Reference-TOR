import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { AlertTriangle, Download, Eye, FileText, Filter, Globe, Search, Shield } from 'lucide-react';
import { useState } from 'react';
import NewArticleModal from '@/components/NewArticleModal';
import { Article } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Articles',
        href: '/articles',
    },
];

interface Props {
    article: Article[];
}

export default function IntelligencePage({ article: initialArticles }: Props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
    const [isNewArticleModalOpen, setIsNewArticleModalOpen] = useState(false);

    // Use real data from props instead of dummy data
    const [articles, setArticles] = useState<Article[]>(initialArticles || []);

    const handleNewArticle = (newArticle: Article) => {
        setArticles(prev => [newArticle, ...prev]);
    };

    const handleEditArticle = (editedArticle: Article) => {
        setArticles(prev => prev.map(article =>
            article.id === editedArticle.id ? editedArticle : article
        ));
    };

    const getClassificationColor = (classification: string) => {
        switch (classification?.toUpperCase()) {
            case 'TOP SECRET':
                return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20';
            case 'SECRET':
                return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20';
            case 'CONFIDENTIAL':
                return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20';
            case 'UNCLASSIFIED':
                return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-500/10 dark:text-gray-400 dark:border-gray-500/20';
        }
    };

    const getThreatColor = (threat: string) => {
        switch (threat?.toLowerCase()) {
            case 'critical':
                return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20';
            case 'high':
                return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20';
            case 'medium':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-500/10 dark:text-yellow-400 dark:border-yellow-500/20';
            case 'low':
                return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-500/10 dark:text-gray-400 dark:border-gray-500/20';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status?.toLowerCase()) {
            case 'verified':
            case 'published':
                return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20';
            case 'pending':
            case 'draft':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-500/10 dark:text-yellow-400 dark:border-yellow-500/20';
            case 'active':
            case 'processing':
                return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20';
            case 'archived':
                return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-500/10 dark:text-gray-400 dark:border-gray-500/20';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-500/10 dark:text-gray-400 dark:border-gray-500/20';
        }
    };

    const getThreatProgressColor = (threat: string) => {
        switch (threat?.toLowerCase()) {
            case 'critical':
                return 'bg-red-500 dark:bg-red-600';
            case 'high':
                return 'bg-orange-500 dark:bg-orange-600';
            case 'medium':
                return 'bg-yellow-500 dark:bg-yellow-600';
            case 'low':
                return 'bg-green-500 dark:bg-green-600';
            default:
                return 'bg-gray-500 dark:bg-gray-600';
        }
    };

    const getThreatProgressWidth = (threat: string) => {
        switch (threat?.toLowerCase()) {
            case 'critical':
                return 'w-full';
            case 'high':
                return 'w-3/4';
            case 'medium':
                return 'w-1/2';
            case 'low':
                return 'w-1/4';
            default:
                return 'w-1/4';
        }
    };

    const filteredArticles = articles.filter(
        (article) =>
            article.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.tags?.some((tag) => tag?.toLowerCase().includes(searchTerm.toLowerCase())) ||
            article.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.location?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Helper function to parse tags if they come as a string
    const parseTags = (tags: string[] | string): string[] => {
        if (Array.isArray(tags)) {
            return tags;
        }
        if (typeof tags === 'string') {
            try {
                // Try to parse JSON string
                return JSON.parse(tags);
            } catch {
                // If not JSON, split by comma
                return tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
            }
        }
        return [];
    };

    // Helper function to format date
    const formatDate = (dateString: string) => {
        if (!dateString) return 'N/A';
        try {
            const date = new Date(dateString);
            return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD format
        } catch {
            return dateString; // Return original if parsing fails
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Articles" />

            <div className="space-y-6 p-6">
                {/* Header */}
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-2xl font-bold tracking-wider text-foreground">ARTICLE CENTER</h1>
                        <p className="text-sm text-muted-foreground">Classified articles and analysis</p>
                    </div>
                    <div className="flex gap-2">
                        <Button onClick={() => setIsNewArticleModalOpen(true)}>New Article</Button>
                        <Button variant="outline">
                            <Filter className="mr-2 h-4 w-4" />
                            Filter
                        </Button>
                    </div>
                </div>

                {/* Stats and Search */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
                    <Card className="py-0 lg:col-span-2">
                        <CardContent className="p-4">
                            <div className="relative">
                                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
                                <Input
                                    placeholder="Search articles..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="py-0">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs tracking-wider text-muted-foreground">TOTAL ARTICLES</p>
                                    <p className="font-mono text-2xl font-bold text-foreground">{articles.length}</p>
                                </div>
                                <FileText className="h-8 w-8 text-muted-foreground" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="py-0">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs tracking-wider text-muted-foreground">CRITICAL THREATS</p>
                                    <p className="font-mono text-2xl font-bold text-red-500 dark:text-red-400">
                                        {articles.filter(r => r.threat?.toLowerCase() === 'critical').length}
                                    </p>
                                </div>
                                <AlertTriangle className="h-8 w-8 text-red-500 dark:text-red-400" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="py-0">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs tracking-wider text-muted-foreground">ACTIVE SOURCES</p>
                                    <p className="font-mono text-2xl font-bold text-foreground">
                                        {new Set(articles.map(r => r.source).filter(source => source)).size}
                                    </p>
                                </div>
                                <Globe className="h-8 w-8 text-muted-foreground" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Articles List */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm font-medium tracking-wider text-muted-foreground">ARTICLE DATABASE</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {filteredArticles.length === 0 ? (
                                <div className="text-center py-8">
                                    <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                                    <p className="text-muted-foreground">No articles found</p>
                                    <p className="text-sm text-muted-foreground">Try adjusting your search criteria</p>
                                </div>
                            ) : (
                                filteredArticles.map((article) => (
                                    <div
                                        key={article.id}
                                        className="cursor-pointer rounded-lg border border-border p-4 transition-all duration-200 hover:border-primary/50 hover:bg-accent/50 hover:shadow-sm"
                                        onClick={() => setSelectedArticle(article)}
                                    >
                                        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                                            <div className="flex-1 space-y-2">
                                                <div className="flex items-start gap-3">
                                                    <FileText className="mt-0.5 h-5 w-5 text-muted-foreground" />
                                                    <div className="flex-1">
                                                        <h3 className="text-sm font-bold tracking-wider text-foreground">
                                                            {article.title || 'Untitled Article'}
                                                        </h3>
                                                        {/* <p className="font-mono text-xs text-muted-foreground">
                                                            {article.id || 'N/A'}
                                                        </p> */}
                                                    </div>
                                                </div>

                                                <p className="ml-8 text-sm text-muted-foreground">
                                                    {article.content || 'No content available'}
                                                </p>

                                                <div className="ml-8 flex flex-wrap gap-2">
                                                    {parseTags(article.tags || []).map((tag, index) => (
                                                        <Badge key={`${article.id}-${tag}-${index}`} variant="secondary" className="text-xs">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-2 sm:items-end">
                                                <div className="flex flex-wrap gap-2">
                                                    <Badge className={`${getClassificationColor(article.classification)} border`}>
                                                        {article.classification?.toUpperCase() || 'UNCLASSIFIED'}
                                                    </Badge>
                                                    <Badge className={`${getThreatColor(article.threat)} border`}>
                                                        {article.threat?.toUpperCase() || 'LOW'}
                                                    </Badge>
                                                    <Badge className={`${getStatusColor(article.status)} border`}>
                                                        {article.status?.toUpperCase() || 'DRAFT'}
                                                    </Badge>
                                                </div>

                                                <div className="space-y-1 text-xs text-muted-foreground">
                                                    <div className="flex items-center gap-2">
                                                        <Globe className="h-3 w-3" />
                                                        <span>{article.location || 'Unknown'}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Shield className="h-3 w-3" />
                                                        <span>{article.source || 'Unknown'}</span>
                                                    </div>
                                                    <div className="font-mono">{formatDate(article.date)}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Article Detail Modal */}
                {selectedArticle && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
                        <Card className="max-h-[90vh] w-full max-w-4xl overflow-y-auto">
                            <CardHeader className="flex flex-row items-center justify-between border-b border-border">
                                <div>
                                    <CardTitle className="text-xl font-bold tracking-wider text-foreground">
                                        {selectedArticle.title || 'Untitled Article'}
                                    </CardTitle>
                                    {/* <p className="font-mono text-sm text-muted-foreground">{selectedArticle.id || 'N/A'}</p> */}
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setSelectedArticle(null)}
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    ✕
                                </Button>
                            </CardHeader>
                            <CardContent className="space-y-6 p-6">
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="mb-2 text-sm font-medium tracking-wider text-muted-foreground">CLASSIFICATION</h3>
                                            <div className="flex gap-2">
                                                <Badge className={`${getClassificationColor(selectedArticle.classification)} border`}>
                                                    {selectedArticle.classification?.toUpperCase() || 'UNCLASSIFIED'}
                                                </Badge>
                                                <Badge className={`${getThreatColor(selectedArticle.threat)} border`}>
                                                    THREAT: {selectedArticle.threat?.toUpperCase() || 'LOW'}
                                                </Badge>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="mb-2 text-sm font-medium tracking-wider text-muted-foreground">SOURCE DETAILS</h3>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Source Type:</span>
                                                    <span className="font-mono text-foreground">{selectedArticle.source || 'Unknown'}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Location:</span>
                                                    <span className="text-foreground">{selectedArticle.location || 'Unknown'}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Date:</span>
                                                    <span className="font-mono text-foreground">{formatDate(selectedArticle.date)}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Status:</span>
                                                    <Badge className={`${getStatusColor(selectedArticle.status)} border`}>
                                                        {selectedArticle.status?.toUpperCase() || 'DRAFT'}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="mb-2 text-sm font-medium tracking-wider text-muted-foreground">TAGS</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {parseTags(selectedArticle.tags || []).map((tag, index) => (
                                                    <Badge key={`modal-${selectedArticle.id}-${tag}-${index}`} variant="secondary">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="mb-2 text-sm font-medium tracking-wider text-muted-foreground">THREAT ASSESSMENT</h3>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-muted-foreground">Threat Level</span>
                                                    <Badge className={`${getThreatColor(selectedArticle.threat)} border`}>
                                                        {selectedArticle.threat?.toUpperCase() || 'LOW'}
                                                    </Badge>
                                                </div>
                                                <div className="h-2 w-full rounded-full bg-muted">
                                                    <div
                                                        className={`h-2 rounded-full transition-all duration-300 ${getThreatProgressWidth(selectedArticle.threat)} ${getThreatProgressColor(selectedArticle.threat)}`}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="mb-2 text-sm font-medium tracking-wider text-muted-foreground">EXECUTIVE CONTENT</h3>
                                    <p className="text-sm leading-relaxed text-foreground">
                                        {selectedArticle.content || 'No content available'}
                                    </p>
                                </div>

                                <div className="flex gap-2 border-t border-border pt-4">
                                    <Button>
                                        <Eye className="mr-2 h-4 w-4" />
                                        View Full Article
                                    </Button>
                                    <Button variant="outline">
                                        <Download className="mr-2 h-4 w-4" />
                                        Download
                                    </Button>
                                    <Button variant="outline">Share Intel</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* New Article Modal */}
                <NewArticleModal
                    isOpen={isNewArticleModalOpen}
                    onClose={() => {
                        setIsNewArticleModalOpen(false);
                        setSelectedArticle(null);
                    }}
                    editingArticle={selectedArticle}
                    onSubmit={selectedArticle ? handleEditArticle : handleNewArticle}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
                />
            </div>
        </AppLayout>
    );
}
