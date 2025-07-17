import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { AlertTriangle, Download, Eye, FileText, Filter, Globe, Search, Shield } from 'lucide-react';
import { useState } from 'react';
import NewArticleModal from '@/components/NewArticleModal'; // Adjust the import path as needed

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Articles',
        href: '/articles',
    },
];

type Article = {
    id: string;
    title: string;
    classification: string;
    source: string;
    location: string;
    date: string;
    status: string;
    threat: string;
    summary: string;
    tags: string[];
};

export default function IntelligencePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
    const [isNewArticleModalOpen, setIsNewArticleModalOpen] = useState(false);

    const [articles, setArticles] = useState<Article[]>([
        {
            id: 'INT-2025-001',
            title: 'CYBERCRIME NETWORK ANALYSIS',
            classification: 'TOP SECRET',
            source: 'SIGINT',
            location: 'Eastern Europe',
            date: '2025-06-17',
            status: 'verified',
            threat: 'high',
            summary: 'Detailed analysis of emerging cybercrime syndicate operating across multiple jurisdictions',
            tags: ['cybercrime', 'international', 'financial'],
        },
        {
            id: 'INT-2025-002',
            title: 'ROGUE AGENT COMMUNICATIONS',
            classification: 'SECRET',
            source: 'HUMINT',
            location: 'Berlin',
            date: '2025-06-16',
            status: 'pending',
            threat: 'critical',
            summary: 'Intercepted communications suggesting potential security breach in European operations',
            tags: ['internal', 'security', 'communications'],
        },
        {
            id: 'INT-2025-003',
            title: 'ARMS TRAFFICKING ROUTES',
            classification: 'CONFIDENTIAL',
            source: 'OSINT',
            location: 'Middle East',
            date: '2025-06-15',
            status: 'verified',
            threat: 'medium',
            summary: 'Updated intelligence on weapons smuggling corridors through Mediterranean region',
            tags: ['trafficking', 'weapons', 'maritime'],
        },
        {
            id: 'INT-2025-004',
            title: 'TERRORIST CELL SURVEILLANCE',
            classification: 'TOP SECRET',
            source: 'HUMINT',
            location: 'North Africa',
            date: '2025-06-14',
            status: 'active',
            threat: 'critical',
            summary: 'Ongoing surveillance of suspected terrorist cell planning coordinated attacks',
            tags: ['terrorism', 'surveillance', 'coordinated'],
        },
        {
            id: 'INT-2025-005',
            title: 'DIPLOMATIC INTELLIGENCE BRIEF',
            classification: 'SECRET',
            source: 'DIPLOMATIC',
            location: 'Asia Pacific',
            date: '2025-06-13',
            status: 'verified',
            threat: 'low',
            summary: 'Political developments affecting regional security and operational considerations',
            tags: ['diplomatic', 'political', 'regional'],
        },
    ]);

    const handleNewArticle = (newArticle: Article) => {
        setArticles(prev => [newArticle, ...prev]);
    };

    const getClassificationColor = (classification: string) => {
        switch (classification) {
            case 'TOP SECRET':
                return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20';
            case 'SECRET':
                return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20';
            case 'CONFIDENTIAL':
                return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-500/10 dark:text-gray-400 dark:border-gray-500/20';
        }
    };

    const getThreatColor = (threat: string) => {
        switch (threat) {
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
        switch (status) {
            case 'verified':
                return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-500/10 dark:text-yellow-400 dark:border-yellow-500/20';
            case 'active':
                return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-500/10 dark:text-gray-400 dark:border-gray-500/20';
        }
    };

    const getThreatProgressColor = (threat: string) => {
        switch (threat) {
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
        switch (threat) {
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
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
    );

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Article" />

            <div className="space-y-6 p-6">
                {/* Header */}
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-2xl font-bold tracking-wider text-foreground">ARTICLE CENTER</h1>
                        <p className="text-sm text-muted-foreground">Classified article and analysis</p>
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
                                    placeholder="Search article articles..."
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
                                        {articles.filter(r => r.threat === 'critical').length}
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
                                        {new Set(articles.map(r => r.source)).size}
                                    </p>
                                </div>
                                <Globe className="h-8 w-8 text-muted-foreground" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Article Articles */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm font-medium tracking-wider text-muted-foreground">ARTICLE ARTICLE</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {filteredArticles.map((article) => (
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
                                                    <h3 className="text-sm font-bold tracking-wider text-foreground">{article.title}</h3>
                                                    <p className="font-mono text-xs text-muted-foreground">{article.id}</p>
                                                </div>
                                            </div>

                                            <p className="ml-8 text-sm text-muted-foreground">{article.summary}</p>

                                            <div className="ml-8 flex flex-wrap gap-2">
                                                {article.tags.map((tag) => (
                                                    <Badge key={tag} variant="secondary" className="text-xs">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 sm:items-end">
                                            <div className="flex flex-wrap gap-2">
                                                <Badge className={`${getClassificationColor(article.classification)} border`}>
                                                    {article.classification}
                                                </Badge>
                                                <Badge className={`${getThreatColor(article.threat)} border`}>{article.threat.toUpperCase()}</Badge>
                                                <Badge className={`${getStatusColor(article.status)} border`}>{article.status.toUpperCase()}</Badge>
                                            </div>

                                            <div className="space-y-1 text-xs text-muted-foreground">
                                                <div className="flex items-center gap-2">
                                                    <Globe className="h-3 w-3" />
                                                    <span>{article.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Shield className="h-3 w-3" />
                                                    <span>{article.source}</span>
                                                </div>
                                                <div className="font-mono">{article.date}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Article Detail Modal */}
                {selectedArticle && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
                        <Card className="max-h-[90vh] w-full max-w-4xl overflow-y-auto">
                            <CardHeader className="flex flex-row items-center justify-between border-b border-border">
                                <div>
                                    <CardTitle className="text-xl font-bold tracking-wider text-foreground">{selectedArticle.title}</CardTitle>
                                    <p className="font-mono text-sm text-muted-foreground">{selectedArticle.id}</p>
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
                                                    {selectedArticle.classification}
                                                </Badge>
                                                <Badge className={`${getThreatColor(selectedArticle.threat)} border`}>
                                                    THREAT: {selectedArticle.threat.toUpperCase()}
                                                </Badge>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="mb-2 text-sm font-medium tracking-wider text-muted-foreground">SOURCE DETAILS</h3>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Source Type:</span>
                                                    <span className="font-mono text-foreground">{selectedArticle.source}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Location:</span>
                                                    <span className="text-foreground">{selectedArticle.location}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Date:</span>
                                                    <span className="font-mono text-foreground">{selectedArticle.date}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Status:</span>
                                                    <Badge className={`${getStatusColor(selectedArticle.status)} border`}>
                                                        {selectedArticle.status.toUpperCase()}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="mb-2 text-sm font-medium tracking-wider text-muted-foreground">TAGS</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedArticle.tags.map((tag) => (
                                                    <Badge key={tag} variant="secondary">
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
                                                        {selectedArticle.threat.toUpperCase()}
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
                                    <h3 className="mb-2 text-sm font-medium tracking-wider text-muted-foreground">EXECUTIVE SUMMARY</h3>
                                    <p className="text-sm leading-relaxed text-foreground">{selectedArticle.summary}</p>
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
                {/* <NewArticleModal
                    isOpen={isNewArticleModalOpen}
                    onClose={() => setIsNewArticleModalOpen(false)}
                    onSubmit={handleNewArticle}
                /> */}

                {/* Untuk create */}
                <NewArticleModal
                    isOpen={isNewArticleModalOpen}
                    onClose={() => setIsNewArticleModalOpen(false)}
                    onSubmit={(article) => {
                        // Handle success
                        console.log('Article created:', article);
                        // Refresh list atau update state
                    }}
                />

                {/* Untuk edit */}
                <NewArticleModal
                    isOpen={isNewArticleModalOpen}
                    onClose={() => setIsNewArticleModalOpen(false)}
                    editingArticle={selectedArticle}
                    onSubmit={(article) => {
                        // Handle success
                        console.log('Article updated:', article);
                        // Update list atau refresh data
                    }}
                />
            </div>
        </AppLayout>
    );
}
