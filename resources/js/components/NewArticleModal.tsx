import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X } from 'lucide-react';
import TinyMCEEditor from './TinyMCEEditor';

interface Article {
    id: string;
    title: string;
    classification: string;
    source: string;
    location: string;
    date: string;
    status: string;
    threat: string;
    content?: string;
    tags: string[];
}

interface NewArticleModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (article: Article) => void;
    editingArticle?: Article | null;
}

export default function NewArticleModal({
    isOpen,
    onClose,
    onSubmit,
    editingArticle = null,
}: NewArticleModalProps) {
    const [formData, setFormData] = useState({
        title: '',
        classification: 'CONFIDENTIAL',
        source: 'OSINT',
        location: '',
        status: 'pending',
        threat: 'low',
        content: '',
    });

    const [tags, setTags] = useState<string[]>([]);
    const [newTag, setNewTag] = useState('');

    useEffect(() => {
        if (editingArticle) {
            setFormData({
                title: editingArticle.title,
                classification: editingArticle.classification,
                source: editingArticle.source,
                location: editingArticle.location,
                status: editingArticle.status,
                threat: editingArticle.threat,
                content: editingArticle.content || '',
            });
            setTags(editingArticle.tags);
        } else {
            // Reset form for new article
            setFormData({
                title: '',
                classification: 'CONFIDENTIAL',
                source: 'OSINT',
                location: '',
                status: 'pending',
                threat: 'low',
                content: '',
            });
            setTags([]);
        }
    }, [editingArticle, isOpen]);

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleAddTag = () => {
        if (newTag.trim() && !tags.includes(newTag.trim())) {
            setTags(prev => [...prev, newTag.trim()]);
            setNewTag('');
        }
    };

    const handleRemoveTag = (tagToRemove: string) => {
        setTags(prev => prev.filter(tag => tag !== tagToRemove));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const articleData: Article = {
            id: editingArticle?.id || `INT-2025-${String(Date.now()).slice(-3).padStart(3, '0')}`,
            title: formData.title,
            classification: formData.classification,
            source: formData.source,
            location: formData.location,
            date: editingArticle?.date || new Date().toISOString().split('T')[0],
            status: formData.status,
            threat: formData.threat,
            content: formData.content,
            tags: tags,
        };

        onSubmit(articleData);
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-h-[90vh] w-full max-w-4xl overflow-y-auto">
                <DialogHeader className="flex flex-row items-center justify-between border-b border-border pb-4">
                    <div>
                        <DialogTitle className="text-xl font-bold tracking-wider text-foreground">
                            {editingArticle ? 'Edit Article' : 'New Intelligence Article'}
                        </DialogTitle>
                        {editingArticle && (
                            <p className="font-mono text-sm text-muted-foreground">{editingArticle.id}</p>
                        )}
                    </div>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="title" className="text-sm font-medium tracking-wider text-muted-foreground">
                                    ARTICLE TITLE
                                </Label>
                                <Input
                                    id="title"
                                    value={formData.title}
                                    onChange={(e) => handleInputChange('title', e.target.value)}
                                    placeholder="Enter article title"
                                    className="mt-2"
                                    required
                                />
                            </div>

                            <div>
                                <Label htmlFor="location" className="text-sm font-medium tracking-wider text-muted-foreground">
                                    LOCATION
                                </Label>
                                <Input
                                    id="location"
                                    value={formData.location}
                                    onChange={(e) => handleInputChange('location', e.target.value)}
                                    placeholder="Enter location"
                                    className="mt-2"
                                    required
                                />
                            </div>

                            <div>
                                <Label htmlFor="classification" className="text-sm font-medium tracking-wider text-muted-foreground">
                                    CLASSIFICATION
                                </Label>
                                <Select
                                    value={formData.classification}
                                    onValueChange={(value) => handleInputChange('classification', value)}
                                >
                                    <SelectTrigger className="mt-2">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="TOP SECRET">TOP SECRET</SelectItem>
                                        <SelectItem value="SECRET">SECRET</SelectItem>
                                        <SelectItem value="CONFIDENTIAL">CONFIDENTIAL</SelectItem>
                                        <SelectItem value="UNCLASSIFIED">UNCLASSIFIED</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="source" className="text-sm font-medium tracking-wider text-muted-foreground">
                                    SOURCE TYPE
                                </Label>
                                <Select
                                    value={formData.source}
                                    onValueChange={(value) => handleInputChange('source', value)}
                                >
                                    <SelectTrigger className="mt-2">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="SIGINT">SIGINT</SelectItem>
                                        <SelectItem value="HUMINT">HUMINT</SelectItem>
                                        <SelectItem value="OSINT">OSINT</SelectItem>
                                        <SelectItem value="DIPLOMATIC">DIPLOMATIC</SelectItem>
                                        <SelectItem value="TECHNICAL">TECHNICAL</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label htmlFor="threat" className="text-sm font-medium tracking-wider text-muted-foreground">
                                    THREAT LEVEL
                                </Label>
                                <Select
                                    value={formData.threat}
                                    onValueChange={(value) => handleInputChange('threat', value)}
                                >
                                    <SelectTrigger className="mt-2">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="critical">Critical</SelectItem>
                                        <SelectItem value="high">High</SelectItem>
                                        <SelectItem value="medium">Medium</SelectItem>
                                        <SelectItem value="low">Low</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label htmlFor="status" className="text-sm font-medium tracking-wider text-muted-foreground">
                                    STATUS
                                </Label>
                                <Select
                                    value={formData.status}
                                    onValueChange={(value) => handleInputChange('status', value)}
                                >
                                    <SelectTrigger className="mt-2">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="pending">Pending</SelectItem>
                                        <SelectItem value="verified">Verified</SelectItem>
                                        <SelectItem value="active">Active</SelectItem>
                                        <SelectItem value="archived">Archived</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <Label className="text-sm font-medium tracking-wider text-muted-foreground">
                                ARTICLE CONTENT
                            </Label>
                            <div className="mt-2">
                                <TinyMCEEditor
                                    value={formData.content}
                                    onEditorChange={(content) => handleInputChange('content', content)}
                                    height={300}
                                    placeholder="Enter detailed article content..."
                                />
                            </div>
                        </div>

                        <div>
                            <Label className="text-sm font-medium tracking-wider text-muted-foreground">
                                TAGS
                            </Label>
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
                                {tags.map((tag) => (
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

                    <div className="flex justify-end gap-2 pt-4 border-t border-border">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Cancel
                        </Button>
                        <Button type="submit">
                            {editingArticle ? 'Update Article' : 'Create Article'}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
