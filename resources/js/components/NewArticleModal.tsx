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
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>
                        {editingArticle ? 'Edit Article' : 'New Intelligence Article'}
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="title">Article Title</Label>
                            <Input
                                id="title"
                                value={formData.title}
                                onChange={(e) => handleInputChange('title', e.target.value)}
                                placeholder="Enter article title"
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="location">Location</Label>
                            <Input
                                id="location"
                                value={formData.location}
                                onChange={(e) => handleInputChange('location', e.target.value)}
                                placeholder="Enter location"
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="classification">Classification</Label>
                            <Select
                                value={formData.classification}
                                onValueChange={(value) => handleInputChange('classification', value)}
                            >
                                <SelectTrigger>
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

                        <div>
                            <Label htmlFor="source">Source</Label>
                            <Select
                                value={formData.source}
                                onValueChange={(value) => handleInputChange('source', value)}
                            >
                                <SelectTrigger>
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
                            <Label htmlFor="threat">Threat Level</Label>
                            <Select
                                value={formData.threat}
                                onValueChange={(value) => handleInputChange('threat', value)}
                            >
                                <SelectTrigger>
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
                            <Label htmlFor="status">Status</Label>
                            <Select
                                value={formData.status}
                                onValueChange={(value) => handleInputChange('status', value)}
                            >
                                <SelectTrigger>
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

                    <div>
                        <Label>Article Content</Label>
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
                        <Label>Tags</Label>
                        <div className="flex gap-2 mb-2">
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

                    <div className="flex justify-end gap-2 pt-4 border-t">
                        <Button type="button" variant="outline" onClick={onClose}>
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
