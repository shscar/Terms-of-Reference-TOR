import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, Plus, Minus } from 'lucide-react';

type NewArticleModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (article: any) => void;
};

export default function NewArticleModal({ isOpen, onClose, onSubmit }: NewArticleModalProps) {
    const [formData, setFormData] = useState({
        title: '',
        summary: '',
        tags: [] as string[],
    });

    const [currentTag, setCurrentTag] = useState('');

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const addTag = () => {
        if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
            setFormData(prev => ({
                ...prev,
                tags: [...prev.tags, currentTag.trim()]
            }));
            setCurrentTag('');
        }
    };

    const removeTag = (tagToRemove: string) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags.filter(tag => tag !== tagToRemove)
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Generate article ID
        const articleId = `INT-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9999)).padStart(3, '0')}`;

        const newArticle = {
            id: articleId,
            title: formData.title.toUpperCase(),
            date: new Date().toISOString().split('T')[0],
            status: 'pending',
            summary: formData.summary,
            tags: formData.tags,
        };

        onSubmit(newArticle);

        // Reset form
        setFormData({
            title: '',
            summary: '',
            tags: [],
        });
        setCurrentTag('');
        onClose();
    };

    const isFormValid = formData.title && formData.summary;

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <Card className="max-h-[90vh] w-full max-w-2xl overflow-y-auto">
                <CardHeader className="flex flex-row items-center justify-between border-b border-border">
                    <div>
                        <CardTitle className="text-xl font-bold tracking-wider text-foreground">
                            NEW INTELLIGENCE ARTICLE
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">Create a new classified intelligence article</p>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onClose}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </CardHeader>

                <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title */}
                        <div className="space-y-2">
                            <Label htmlFor="title" className="text-sm font-medium tracking-wider text-muted-foreground">
                                ARTICLE TITLE *
                            </Label>
                            <Input
                                id="title"
                                value={formData.title}
                                onChange={(e) => handleInputChange('title', e.target.value)}
                                placeholder="Enter article title..."
                                className="font-mono uppercase"
                                required
                            />
                        </div>

                        {/* Summary */}
                        <div className="space-y-2">
                            <Label htmlFor="summary" className="text-sm font-medium tracking-wider text-muted-foreground">
                                EXECUTIVE SUMMARY *
                            </Label>
                            <Textarea
                                id="summary"
                                value={formData.summary}
                                onChange={(e) => handleInputChange('summary', e.target.value)}
                                placeholder="Provide a detailed summary of the intelligence article..."
                                rows={4}
                                required
                            />
                        </div>

                        {/* Tags */}
                        <div className="space-y-2">
                            <Label htmlFor="tags" className="text-sm font-medium tracking-wider text-muted-foreground">
                                TAGS
                            </Label>
                            <div className="flex gap-2">
                                <Input
                                    id="tags"
                                    value={currentTag}
                                    onChange={(e) => setCurrentTag(e.target.value)}
                                    placeholder="Add tag..."
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            addTag();
                                        }
                                    }}
                                />
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={addTag}
                                    disabled={!currentTag.trim()}
                                >
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>

                            {formData.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {formData.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                                            {tag}
                                            <button
                                                type="button"
                                                onClick={() => removeTag(tag)}
                                                className="ml-1 text-muted-foreground hover:text-foreground"
                                            >
                                                <Minus className="h-3 w-3" />
                                            </button>
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Form Actions */}
                        <div className="flex gap-2 border-t border-border pt-4">
                            <Button type="submit" disabled={!isFormValid}>
                                Create Article
                            </Button>
                            <Button type="button" variant="outline" onClick={onClose}>
                                Cancel
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
