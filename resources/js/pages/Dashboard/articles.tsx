import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { AlertTriangle, Download, Eye, FileText, Filter, Globe, Search, Shield } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Articles',
        href: '/articles',
    },
];

type Report = {
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
    const [selectedReport, setSelectedReport] = useState<Report | null>(null);

    const reports: Report[] = [
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
    ];

    const getClassificationColor = (classification: string) => {
        switch (classification) {
            case 'TOP SECRET':
                return 'bg-red-500/20 text-red-500';
            case 'SECRET':
                return 'bg-orange-500/20 text-orange-500';
            case 'CONFIDENTIAL':
                return 'bg-neutral-500/20 text-neutral-300';
            default:
                return 'bg-white/20 text-white';
        }
    };

    const getThreatColor = (threat: string) => {
        switch (threat) {
            case 'critical':
                return 'bg-red-500/20 text-red-500';
            case 'high':
                return 'bg-orange-500/20 text-orange-500';
            case 'medium':
                return 'bg-neutral-500/20 text-neutral-300';
            case 'low':
                return 'bg-white/20 text-white';
            default:
                return 'bg-neutral-500/20 text-neutral-300';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'verified':
                return 'bg-white/20 text-white';
            case 'pending':
                return 'bg-orange-500/20 text-orange-500';
            case 'active':
                return 'bg-white/20 text-white';
            default:
                return 'bg-neutral-500/20 text-neutral-300';
        }
    };

    const filteredReports = reports.filter(
        (report) =>
            report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            report.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            report.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
    );

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="space-y-6 p-6">
                {/* Header */}
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-2xl font-bold tracking-wider text-white">ARTICLE CENTER</h1>
                        <p className="text-sm text-neutral-400">Classified article and analysis</p>
                    </div>
                    <div className="flex gap-2">
                        <Button className="bg-orange-500 text-white hover:bg-orange-600">New Report</Button>
                        <Button className="bg-orange-500 text-white hover:bg-orange-600">
                            <Filter className="mr-2 h-4 w-4" />
                            Filter
                        </Button>
                    </div>
                </div>

                {/* Stats and Search */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
                    <Card className="border-neutral-700 bg-neutral-900 lg:col-span-2">
                        <CardContent className="p-4">
                            <div className="relative">
                                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-neutral-400" />
                                <Input
                                    placeholder="Search intelligence reports..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="border-neutral-600 bg-neutral-800 pl-10 text-white placeholder-neutral-400"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-neutral-700 bg-neutral-900">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs tracking-wider text-neutral-400">TOTAL REPORTS</p>
                                    <p className="font-mono text-2xl font-bold text-white">1,247</p>
                                </div>
                                <FileText className="h-8 w-8 text-white" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-neutral-700 bg-neutral-900">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs tracking-wider text-neutral-400">CRITICAL THREATS</p>
                                    <p className="font-mono text-2xl font-bold text-red-500">12</p>
                                </div>
                                <AlertTriangle className="h-8 w-8 text-red-500" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-neutral-700 bg-neutral-900">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs tracking-wider text-neutral-400">ACTIVE SOURCES</p>
                                    <p className="font-mono text-2xl font-bold text-white">89</p>
                                </div>
                                <Globe className="h-8 w-8 text-white" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Intelligence Reports */}
                <Card className="border-neutral-700 bg-neutral-900">
                    <CardHeader>
                        <CardTitle className="text-sm font-medium tracking-wider text-neutral-300">INTELLIGENCE REPORTS</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {filteredReports.map((report) => (
                                <div
                                    key={report.id}
                                    className="cursor-pointer rounded border border-neutral-700 p-4 transition-colors hover:border-orange-500/50"
                                    onClick={() => setSelectedReport(report)}
                                >
                                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                                        <div className="flex-1 space-y-2">
                                            <div className="flex items-start gap-3">
                                                <FileText className="mt-0.5 h-5 w-5 text-neutral-400" />
                                                <div className="flex-1">
                                                    <h3 className="text-sm font-bold tracking-wider text-white">{report.title}</h3>
                                                    <p className="font-mono text-xs text-neutral-400">{report.id}</p>
                                                </div>
                                            </div>

                                            <p className="ml-8 text-sm text-neutral-300">{report.summary}</p>

                                            <div className="ml-8 flex flex-wrap gap-2">
                                                {report.tags.map((tag) => (
                                                    <Badge key={tag} className="bg-neutral-800 text-xs text-neutral-300">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 sm:items-end">
                                            <div className="flex flex-wrap gap-2">
                                                <Badge className={getClassificationColor(report.classification)}>{report.classification}</Badge>
                                                <Badge className={getThreatColor(report.threat)}>{report.threat.toUpperCase()}</Badge>
                                                <Badge className={getStatusColor(report.status)}>{report.status.toUpperCase()}</Badge>
                                            </div>

                                            <div className="space-y-1 text-xs text-neutral-400">
                                                <div className="flex items-center gap-2">
                                                    <Globe className="h-3 w-3" />
                                                    <span>{report.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Shield className="h-3 w-3" />
                                                    <span>{report.source}</span>
                                                </div>
                                                <div className="font-mono">{report.date}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Report Detail Modal */}
                {selectedReport && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                        <Card className="max-h-[90vh] w-full max-w-4xl overflow-y-auto border-neutral-700 bg-neutral-900">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <div>
                                    <CardTitle className="text-xl font-bold tracking-wider text-white">{selectedReport.title}</CardTitle>
                                    <p className="font-mono text-sm text-neutral-400">{selectedReport.id}</p>
                                </div>
                                <Button variant="ghost" onClick={() => setSelectedReport(null)} className="text-neutral-400 hover:text-white">
                                    ✕
                                </Button>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="mb-2 text-sm font-medium tracking-wider text-neutral-300">CLASSIFICATION</h3>
                                            <div className="flex gap-2">
                                                <Badge className={getClassificationColor(selectedReport.classification)}>
                                                    {selectedReport.classification}
                                                </Badge>
                                                <Badge className={getThreatColor(selectedReport.threat)}>
                                                    THREAT: {selectedReport.threat.toUpperCase()}
                                                </Badge>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="mb-2 text-sm font-medium tracking-wider text-neutral-300">SOURCE DETAILS</h3>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-neutral-400">Source Type:</span>
                                                    <span className="font-mono text-white">{selectedReport.source}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-neutral-400">Location:</span>
                                                    <span className="text-white">{selectedReport.location}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-neutral-400">Date:</span>
                                                    <span className="font-mono text-white">{selectedReport.date}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-neutral-400">Status:</span>
                                                    <Badge className={getStatusColor(selectedReport.status)}>
                                                        {selectedReport.status.toUpperCase()}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="mb-2 text-sm font-medium tracking-wider text-neutral-300">TAGS</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedReport.tags.map((tag) => (
                                                    <Badge key={tag} className="bg-neutral-800 text-neutral-300">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="mb-2 text-sm font-medium tracking-wider text-neutral-300">THREAT ASSESSMENT</h3>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-neutral-400">Threat Level</span>
                                                    <Badge className={getThreatColor(selectedReport.threat)}>
                                                        {selectedReport.threat.toUpperCase()}
                                                    </Badge>
                                                </div>
                                                <div className="h-2 w-full rounded-full bg-neutral-800">
                                                    <div
                                                        className={`h-2 rounded-full transition-all duration-300 ${
                                                            selectedReport.threat === 'critical'
                                                                ? 'w-full bg-red-500'
                                                                : selectedReport.threat === 'high'
                                                                  ? 'w-3/4 bg-orange-500'
                                                                  : selectedReport.threat === 'medium'
                                                                    ? 'w-1/2 bg-neutral-400'
                                                                    : 'w-1/4 bg-white'
                                                        }`}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="mb-2 text-sm font-medium tracking-wider text-neutral-300">EXECUTIVE SUMMARY</h3>
                                    <p className="text-sm leading-relaxed text-neutral-300">{selectedReport.summary}</p>
                                </div>

                                <div className="flex gap-2 border-t border-neutral-700 pt-4">
                                    <Button className="bg-orange-500 text-white hover:bg-orange-600">
                                        <Eye className="mr-2 h-4 w-4" />
                                        View Full Report
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="border-neutral-700 bg-transparent text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300"
                                    >
                                        <Download className="mr-2 h-4 w-4" />
                                        Download
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="border-neutral-700 bg-transparent text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300"
                                    >
                                        Share Intel
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
