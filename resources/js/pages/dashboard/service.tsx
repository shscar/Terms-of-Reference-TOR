import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, CheckCircle, Clock, MapPin, Target, Users, XCircle } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Service',
        href: '/service',
    },
];

type Operation = {
    id: string;
    name: string;
    status: string;
    priority: string;
    location: string;
    agents: number;
    progress: number;
    startDate: string;
    estimatedCompletion: string;
    description: string;
    objectives: string[];
};

export default function Service() {
    const [selectedOperation, setSelectedOperation] = useState<Operation | null>(null);

    const operations: Operation[] = [
        {
            id: 'OP-OMEGA-001',
            name: 'SHADOW PROTOCOL',
            status: 'active',
            priority: 'critical',
            location: 'Eastern Europe',
            agents: 5,
            progress: 75,
            startDate: '2025-06-15',
            estimatedCompletion: '2025-06-30',
            description: 'Track high-value target in Eastern Europe',
            objectives: ['Locate target', 'Establish surveillance', 'Extract intelligence'],
        },
        {
            id: 'OP-DELTA-002',
            name: 'GHOST FIRE',
            status: 'planning',
            priority: 'high',
            location: 'Seoul',
            agents: 3,
            progress: 25,
            startDate: '2025-06-20',
            estimatedCompletion: '2025-07-05',
            description: 'Infiltrate cybercrime network in Seoul',
            objectives: ['Penetrate network', 'Gather evidence', 'Identify key players'],
        },
        {
            id: 'OP-SIERRA-003',
            name: 'NIGHT STALKER',
            status: 'completed',
            priority: 'medium',
            location: 'Berlin',
            agents: 2,
            progress: 100,
            startDate: '2025-05-28',
            estimatedCompletion: '2025-06-12',
            description: 'Monitor rogue agent communications in Berlin',
            objectives: ['Intercept communications', 'Decode messages', 'Report findings'],
        },
        {
            id: 'OP-ALPHA-004',
            name: 'CRIMSON TIDE',
            status: 'active',
            priority: 'high',
            location: 'Cairo',
            agents: 4,
            progress: 60,
            startDate: '2025-06-10',
            estimatedCompletion: '2025-06-25',
            description: 'Support covert extraction in South America',
            objectives: ['Secure extraction point', 'Neutralize threats', 'Extract asset'],
        },
        {
            id: 'OP-BRAVO-005',
            name: 'SILENT BLADE',
            status: 'compromised',
            priority: 'critical',
            location: 'Moscow',
            agents: 6,
            progress: 40,
            startDate: '2025-06-05',
            estimatedCompletion: '2025-06-20',
            description: 'Monitor rogue agent communications in Berlin',
            objectives: ['Assess compromise', 'Extract personnel', 'Damage control'],
        },
    ];

    const getStatusStyles = (status: string) => {
        switch (status) {
            case 'active':
                return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20';
            case 'planning':
                return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20';
            case 'completed':
                return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20';
            case 'compromised':
                return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-500/10 dark:text-gray-400 dark:border-gray-500/20';
        }
    };

    const getPriorityStyles = (priority: string) => {
        switch (priority) {
            case 'critical':
                return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20';
            case 'high':
                return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20';
            case 'medium':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-500/10 dark:text-yellow-400 dark:border-yellow-500/20';
            case 'low':
                return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-500/10 dark:text-gray-400 dark:border-gray-500/20';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-500/10 dark:text-gray-400 dark:border-gray-500/20';
        }
    };

    const getStatusIcon = (status: string) => {
        const baseIconClass = 'h-4 w-4';
        switch (status) {
            case 'active':
                return <Target className={`${baseIconClass} text-green-600 dark:text-green-400`} />;
            case 'planning':
                return <Clock className={`${baseIconClass} text-orange-600 dark:text-orange-400`} />;
            case 'completed':
                return <CheckCircle className={`${baseIconClass} text-blue-600 dark:text-blue-400`} />;
            case 'compromised':
                return <XCircle className={`${baseIconClass} text-red-600 dark:text-red-400`} />;
            default:
                return <AlertTriangle className={`${baseIconClass} text-gray-600 dark:text-gray-400`} />;
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Service" />

            <div className="space-y-6 p-6">
                {/* Header */}
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-2xl font-bold tracking-wider text-foreground">OPERATIONS CENTER</h1>
                        <p className="text-sm text-muted-foreground">Mission planning and execution oversight</p>
                    </div>
                    <div className="flex gap-2">
                        <Button>New Operation</Button>
                        <Button>Mission Brief</Button>
                    </div>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="py-0">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs tracking-wider text-muted-foreground">ACTIVE OPS</p>
                                    <p className="font-mono text-2xl font-bold text-foreground">23</p>
                                </div>
                                <Target className="h-8 w-8 text-muted-foreground" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="py-0">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs tracking-wider text-muted-foreground">COMPLETED</p>
                                    <p className="font-mono text-2xl font-bold text-foreground">156</p>
                                </div>
                                <CheckCircle className="h-8 w-8 text-muted-foreground" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="py-0">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs tracking-wider text-muted-foreground">COMPROMISED</p>
                                    <p className="font-mono text-2xl font-bold text-red-500 dark:text-red-400">2</p>
                                </div>
                                <XCircle className="h-8 w-8 text-red-500 dark:text-red-400" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="py-0">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs tracking-wider text-muted-foreground">SUCCESS RATE</p>
                                    <p className="font-mono text-2xl font-bold text-foreground">94%</p>
                                </div>
                                <AlertTriangle className="h-8 w-8 text-muted-foreground" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Operations List */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                    {operations.map((operation) => (
                        <Card
                            key={operation.id}
                            className="cursor-pointer border-border bg-card transition-all duration-200 hover:border-primary/50 hover:bg-accent/50 hover:shadow-sm"
                            onClick={() => setSelectedOperation(operation)}
                        >
                            <CardHeader className="pb-3">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <CardTitle className="text-sm font-bold tracking-wider text-foreground">{operation.name}</CardTitle>
                                        <p className="font-mono text-xs text-muted-foreground">{operation.id}</p>
                                    </div>
                                    <div className="flex items-center gap-2">{getStatusIcon(operation.status)}</div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex gap-2">
                                    <Badge className={`${getStatusStyles(operation.status)} border`}>{operation.status.toUpperCase()}</Badge>
                                    <Badge className={`${getPriorityStyles(operation.priority)} border`}>{operation.priority.toUpperCase()}</Badge>
                                </div>

                                <p className="text-sm text-card-foreground">{operation.description}</p>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <MapPin className="h-3 w-3" />
                                        <span>{operation.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <Users className="h-3 w-3" />
                                        <span>{operation.agents} agents assigned</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <Clock className="h-3 w-3" />
                                        <span>Est. completion: {operation.estimatedCompletion}</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-muted-foreground">Progress</span>
                                        <span className="font-mono text-foreground">{operation.progress}%</span>
                                    </div>
                                    <div className="h-2 w-full rounded-full bg-muted">
                                        <div
                                            className="h-2 rounded-full bg-primary transition-all duration-300"
                                            style={{ width: `${operation.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Operation Detail Modal */}
                {selectedOperation && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
                        <Card className="max-h-[90vh] w-full max-w-4xl overflow-y-auto">
                            <CardHeader className="flex flex-row items-center justify-between border-b border-border">
                                <div>
                                    <CardTitle className="text-xl font-bold tracking-wider text-foreground">{selectedOperation.name}</CardTitle>
                                    <p className="font-mono text-sm text-muted-foreground">{selectedOperation.id}</p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setSelectedOperation(null)}
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    ✕
                                </Button>
                            </CardHeader>
                            <CardContent className="space-y-6 p-6">
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="mb-2 text-sm font-medium tracking-wider text-muted-foreground">OPERATION STATUS</h3>
                                            <div className="flex gap-2">
                                                <Badge className={`${getStatusStyles(selectedOperation.status)} border`}>
                                                    {selectedOperation.status.toUpperCase()}
                                                </Badge>
                                                <Badge className={`${getPriorityStyles(selectedOperation.priority)} border`}>
                                                    {selectedOperation.priority.toUpperCase()}
                                                </Badge>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="mb-2 text-sm font-medium tracking-wider text-muted-foreground">MISSION DETAILS</h3>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Location:</span>
                                                    <span className="text-foreground">{selectedOperation.location}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Agents:</span>
                                                    <span className="font-mono text-foreground">{selectedOperation.agents}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Start Date:</span>
                                                    <span className="font-mono text-foreground">{selectedOperation.startDate}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Est. Completion:</span>
                                                    <span className="font-mono text-foreground">{selectedOperation.estimatedCompletion}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="mb-2 text-sm font-medium tracking-wider text-muted-foreground">PROGRESS</h3>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-muted-foreground">Completion</span>
                                                    <span className="font-mono text-foreground">{selectedOperation.progress}%</span>
                                                </div>
                                                <div className="h-3 w-full rounded-full bg-muted">
                                                    <div
                                                        className="h-3 rounded-full bg-primary transition-all duration-300"
                                                        style={{ width: `${selectedOperation.progress}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="mb-2 text-sm font-medium tracking-wider text-muted-foreground">OBJECTIVES</h3>
                                            <div className="space-y-2">
                                                {selectedOperation.objectives.map((objective, index) => (
                                                    <div key={index} className="flex items-center gap-2 text-sm">
                                                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                                                        <span className="text-foreground">{objective}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="mb-2 text-sm font-medium tracking-wider text-muted-foreground">DESCRIPTION</h3>
                                    <p className="text-sm text-foreground">{selectedOperation.description}</p>
                                </div>

                                <div className="flex gap-2 border-t border-border pt-4">
                                    <Button>Update Status</Button>
                                    <Button variant="outline">View Reports</Button>
                                    <Button variant="outline">Assign Agents</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
