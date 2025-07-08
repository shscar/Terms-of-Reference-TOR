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

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active':
                return 'bg-white/20 text-white';
            case 'planning':
                return 'bg-orange-500/20 text-orange-500';
            case 'completed':
                return 'bg-white/20 text-white';
            case 'compromised':
                return 'bg-red-500/20 text-red-500';
            default:
                return 'bg-neutral-500/20 text-neutral-300';
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
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

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'active':
                return <Target className="h-4 w-4" />;
            case 'planning':
                return <Clock className="h-4 w-4" />;
            case 'completed':
                return <CheckCircle className="h-4 w-4" />;
            case 'compromised':
                return <XCircle className="h-4 w-4" />;
            default:
                return <AlertTriangle className="h-4 w-4" />;
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Service" />

            <div className="space-y-6 p-6">
                {/* Header */}
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-2xl font-bold tracking-wider text-white">OPERATIONS CENTER</h1>
                        <p className="text-sm text-neutral-400">Mission planning and execution oversight</p>
                    </div>
                    <div className="flex gap-2">
                        <Button className="bg-orange-500 text-white hover:bg-orange-600">New Operation</Button>
                        <Button className="bg-orange-500 text-white hover:bg-orange-600">Mission Brief</Button>
                    </div>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="border-neutral-700 bg-neutral-900">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs tracking-wider text-neutral-400">ACTIVE OPS</p>
                                    <p className="font-mono text-2xl font-bold text-white">23</p>
                                </div>
                                <Target className="h-8 w-8 text-white" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-neutral-700 bg-neutral-900">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs tracking-wider text-neutral-400">COMPLETED</p>
                                    <p className="font-mono text-2xl font-bold text-white">156</p>
                                </div>
                                <CheckCircle className="h-8 w-8 text-white" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-neutral-700 bg-neutral-900">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs tracking-wider text-neutral-400">COMPROMISED</p>
                                    <p className="font-mono text-2xl font-bold text-red-500">2</p>
                                </div>
                                <XCircle className="h-8 w-8 text-red-500" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-neutral-700 bg-neutral-900">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs tracking-wider text-neutral-400">SUCCESS RATE</p>
                                    <p className="font-mono text-2xl font-bold text-white">94%</p>
                                </div>
                                <AlertTriangle className="h-8 w-8 text-white" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Operations List */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                    {operations.map((operation) => (
                        <Card
                            key={operation.id}
                            className="cursor-pointer border-neutral-700 bg-neutral-900 transition-colors hover:border-orange-500/50"
                            onClick={() => setSelectedOperation(operation)}
                        >
                            <CardHeader className="pb-3">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <CardTitle className="text-sm font-bold tracking-wider text-white">{operation.name}</CardTitle>
                                        <p className="font-mono text-xs text-neutral-400">{operation.id}</p>
                                    </div>
                                    <div className="flex items-center gap-2">{getStatusIcon(operation.status)}</div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex gap-2">
                                    <Badge className={getStatusColor(operation.status)}>{operation.status.toUpperCase()}</Badge>
                                    <Badge className={getPriorityColor(operation.priority)}>{operation.priority.toUpperCase()}</Badge>
                                </div>

                                <p className="text-sm text-neutral-300">{operation.description}</p>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                                        <MapPin className="h-3 w-3" />
                                        <span>{operation.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                                        <Users className="h-3 w-3" />
                                        <span>{operation.agents} agents assigned</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                                        <Clock className="h-3 w-3" />
                                        <span>Est. completion: {operation.estimatedCompletion}</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-neutral-400">Progress</span>
                                        <span className="font-mono text-white">{operation.progress}%</span>
                                    </div>
                                    <div className="h-2 w-full rounded-full bg-neutral-800">
                                        <div
                                            className="h-2 rounded-full bg-orange-500 transition-all duration-300"
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
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                        <Card className="max-h-[90vh] w-full max-w-4xl overflow-y-auto border-neutral-700 bg-neutral-900">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <div>
                                    <CardTitle className="text-xl font-bold tracking-wider text-white">{selectedOperation.name}</CardTitle>
                                    <p className="font-mono text-sm text-neutral-400">{selectedOperation.id}</p>
                                </div>
                                <Button variant="ghost" onClick={() => setSelectedOperation(null)} className="text-neutral-400 hover:text-white">
                                    ✕
                                </Button>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="mb-2 text-sm font-medium tracking-wider text-neutral-300">OPERATION STATUS</h3>
                                            <div className="flex gap-2">
                                                <Badge className={getStatusColor(selectedOperation.status)}>
                                                    {selectedOperation.status.toUpperCase()}
                                                </Badge>
                                                <Badge className={getPriorityColor(selectedOperation.priority)}>
                                                    {selectedOperation.priority.toUpperCase()}
                                                </Badge>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="mb-2 text-sm font-medium tracking-wider text-neutral-300">MISSION DETAILS</h3>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-neutral-400">Location:</span>
                                                    <span className="text-white">{selectedOperation.location}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-neutral-400">Agents:</span>
                                                    <span className="font-mono text-white">{selectedOperation.agents}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-neutral-400">Start Date:</span>
                                                    <span className="font-mono text-white">{selectedOperation.startDate}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-neutral-400">Est. Completion:</span>
                                                    <span className="font-mono text-white">{selectedOperation.estimatedCompletion}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="mb-2 text-sm font-medium tracking-wider text-neutral-300">PROGRESS</h3>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-neutral-400">Completion</span>
                                                    <span className="font-mono text-white">{selectedOperation.progress}%</span>
                                                </div>
                                                <div className="h-3 w-full rounded-full bg-neutral-800">
                                                    <div
                                                        className="h-3 rounded-full bg-orange-500 transition-all duration-300"
                                                        style={{ width: `${selectedOperation.progress}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="mb-2 text-sm font-medium tracking-wider text-neutral-300">OBJECTIVES</h3>
                                            <div className="space-y-2">
                                                {selectedOperation.objectives.map((objective, index) => (
                                                    <div key={index} className="flex items-center gap-2 text-sm">
                                                        <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                                                        <span className="text-neutral-300">{objective}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="mb-2 text-sm font-medium tracking-wider text-neutral-300">DESCRIPTION</h3>
                                    <p className="text-sm text-neutral-300">{selectedOperation.description}</p>
                                </div>

                                <div className="flex gap-2 border-t border-neutral-700 pt-4">
                                    <Button className="bg-orange-500 text-white hover:bg-orange-600">Update Status</Button>
                                    <Button
                                        variant="outline"
                                        className="border-neutral-700 bg-transparent text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300"
                                    >
                                        View Reports
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="border-neutral-700 bg-transparent text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300"
                                    >
                                        Assign Agents
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
