import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Article } from '@/types';
import { useState } from 'react';
import { X } from 'lucide-react';
import TinyMCEEditor from './TinyMCEEditor';

interface NewArticleModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (article: Article) => void;
}

export default function NewArticleModal({ isOpen, onClose, onSubmit }: NewArticleModalProps) {
    const [formData, setFormData] = useState < Partial < Article >> ({
        title: '',
        content: '',
        classification: 'UNCLASSIFIED',
        threat: 'LOW',
        status: 'DRAFT',
        source: '',
        location: '',
        tags: [],
        date: new Date().toISOString().split('T')[0],
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newArticle: Article = {
            id: `article-${Date.now()}`, // Temporary ID, replace with proper ID generation
            title: formData.title || 'Untitled Article',
            content: formData.content || '',
            classification: formData.classification || 'UNCLASSIFIED',
            threat: formData.threat || 'LOW',
            status: formData.status || 'DRAFT',
            source: formData.source || '',
            location: formData.location || '',
            tags: formData.tags || [],
            date: formData.date || new Date().toISOString().split('T')[0],
        };
        onSubmit(newArticle);
        onClose();
        setFormData({
            title: '',
            content: '',
            classification: 'UNCLASSIFIED',
            threat: 'LOW',
            status: 'DRAFT',
            source: '',
            location: '',
            tags: [],
            date: new Date().toISOString().split('T')[0],
        });
    };

    const [newTag, setNewTag] = useState('');
    const handleAddTag = () => {
        if (newTag.trim()) {
            const updatedTags = [...(formData.tags || []), newTag.trim()];
            setFormData(prev => ({ ...prev, tags: updatedTags }));
            setNewTag('');
        }
    };
    const handleRemoveTag = (tagToRemove: string) => {
        const updatedTags = (formData.tags || []).filter(tag => tag !== tagToRemove);
        setFormData(prev => ({ ...prev, tags: updatedTags }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <Card className="max-h-[90vh] w-full max-w-4xl overflow-y-auto">
                <CardHeader className="flex flex-row items-center justify-between border-b border-border pb-4">
                    <CardTitle className="text-xl font-bold tracking-wider text-foreground">
                        Create New Article
                    </CardTitle>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onClose}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        ✕
                    </Button>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="title" className="text-sm text-muted-foreground">Title</Label>
                                    <Input
                                        id="title"
                                        value={formData.title}
                                        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                        placeholder="Enter article title"
                                        className="mt-1"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="source" className="text-sm text-muted-foreground">Source</Label>
                                    <Input
                                        id="source"
                                        value={formData.source}
                                        onChange={(e) => setFormData(prev => ({ ...prev, source: e.target.value }))}
                                        placeholder="Enter source"
                                        className="mt-1"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="location" className="text-sm text-muted-foreground">Location</Label>
                                    <Input
                                        id="location"
                                        value={formData.location}
                                        onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                                        placeholder="Enter location"
                                        className="mt-1"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="classification" className="text-sm text-muted-foreground">Classification</Label>
                                    <select
                                        id="classification"
                                        value={formData.classification}
                                        onChange={(e) => setFormData(prev => ({ ...prev, classification: e.target.value }))}
                                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        <option value="UNCLASSIFIED">UNCLASSIFIED</option>
                                        <option value="CONFIDENTIAL">CONFIDENTIAL</option>
                                        <option value="SECRET">SECRET</option>
                                        <option value="TOP SECRET">TOP SECRET</option>
                                    </select>
                                </div>
                                <div>
                                    <Label htmlFor="threat" className="text-sm text-muted-foreground">Threat Level</Label>
                                    <select
                                        id="threat"
                                        value={formData.threat}
                                        onChange={(e) => setFormData(prev => ({ ...prev, threat: e.target.value }))}
                                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        <option value="LOW">LOW</option>
                                        <option value="MEDIUM">MEDIUM</option>
                                        <option value="HIGH">HIGH</option>
                                        <option value="CRITICAL">CRITICAL</option>
                                    </select>
                                </div>
                                <div>
                                    <Label htmlFor="status" className="text-sm text-muted-foreground">Status</Label>
                                    <select
                                        id="status"
                                        value={formData.status}
                                        onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
                                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        <option value="DRAFT">DRAFT</option>
                                        <option value="PENDING">PENDING</option>
                                        <option value="VERIFIED">VERIFIED</option>
                                        <option value="PUBLISHED">PUBLISHED</option>
                                        <option value="ARCHIVED">ARCHIVED</option>
                                    </select>
                                </div>
                            </div>

                            {/* <div>
                                <div className="space-y-4">
                                    <div>
                                        <Label htmlFor="date" className="text-sm text-muted-foreground">Date</Label>
                                        <Input
                                            id="date"
                                            type="date"
                                            value={formData.date}
                                            onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                                            className="mt-1"
                                        />
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        <div className="grid grid-cols-1 gap-full md:grid-cols-1">
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="content" className="text-sm text-muted-foreground">Content</Label>
                                    <TinyMCEEditor
                                        value={formData.content}
                                        onEditorChange={(content) => setFormData(prev => ({ ...prev, content }))}
                                        height={300}
                                        placeholder="Enter detailed article content..."
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="status" className="text-sm text-muted-foreground">TAGS</Label>
                                    <div className="flex gap-2 mt-2 mb-2">
                                        <Input
                                            value={newTag}
                                            onChange={(e) => setNewTag(e.target.value)}
                                            placeholder="Add tag"
                                            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                                        />
                                        <Button type="button" onClick={handleAddTag} variant="outline">
                                            Add Tag
                                        </Button>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {(formData.tags ?? []).map((tag) => (
                                            <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                                                {tag}
                                                <X
                                                    className="h-3 w-3 cursor-pointer"
                                                    onClick={() => handleRemoveTag(tag)}
                                                />
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2 border-t border-border pt-4">
                            <Button type="submit">Create Article</Button>
                            <Button variant="outline" onClick={onClose}>Cancel</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
