import { useState, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { X, Plus, Minus } from 'lucide-react';
import { Editor } from '@tinymce/tinymce-react';
import { TINYMCE_CONFIG } from '../../../config/tinymce';

// Types untuk API response
interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
    errors?: Record<string, string[]>;
}

interface Article {
    id?: number;
    title: string;
    summary: string;
    tags: string[];
    status?: string;
    created_at?: string;
    updated_at?: string;
}

interface NewArticleModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (article: Article) => void;
    editingArticle?: Article | null; // Support untuk edit mode
}

// API Service
class ArticleService {
    private static baseURL = 'http://localhost:8000/api';

    static async createArticle(articleData: Partial<Article>): Promise<ApiResponse<Article>> {
        const response = await fetch(`${this.baseURL}/articles`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`, // Jika menggunakan authentication
            },
            body: JSON.stringify(articleData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to create article');
        }

        return data;
    }

    static async updateArticle(id: number, articleData: Partial<Article>): Promise<ApiResponse<Article>> {
        const response = await fetch(`${this.baseURL}/articles/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(articleData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to update article');
        }

        return data;
    }
}

export default function NewArticleModal({
    isOpen,
    onClose,
    onSubmit,
    editingArticle = null
}: NewArticleModalProps) {
    const [formData, setFormData] = useState<Partial<Article>>({
        title: '',
        summary: '',
        tags: [],
    });

    const [currentTag, setCurrentTag] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string[]>>({});
    const editorRef = useRef<any>(null);

    // Reset form ketika modal dibuka/tutup atau saat editing
    useState(() => {
        if (isOpen) {
            if (editingArticle) {
                setFormData({
                    title: editingArticle.title || '',
                    summary: editingArticle.summary || '',
                    tags: editingArticle.tags || [],
                });
                // Set content untuk TinyMCE editor
                if (editorRef.current) {
                    editorRef.current.setContent(editingArticle.summary || '');
                }
            } else {
                setFormData({
                    title: '',
                    summary: '',
                    tags: [],
                });
                if (editorRef.current) {
                    editorRef.current.setContent('');
                }
            }
            setErrors({});
        }
    }, [isOpen, editingArticle]);

    const handleInputChange = (field: keyof Article, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        // Clear error untuk field yang sedang diubah
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: []
            }));
        }
    };

    const handleEditorChange = (content: string) => {
        setFormData(prev => ({
            ...prev,
            summary: content
        }));

        // Clear error untuk summary
        if (errors.summary) {
            setErrors(prev => ({
                ...prev,
                summary: []
            }));
        }
    };

    const addTag = () => {
        if (currentTag.trim() && !formData.tags?.includes(currentTag.trim())) {
            setFormData(prev => ({
                ...prev,
                tags: [...(prev.tags || []), currentTag.trim()]
            }));
            setCurrentTag('');
        }
    };

    const removeTag = (tagToRemove: string) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags?.filter(tag => tag !== tagToRemove) || []
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});

        try {
            // Prepare data untuk API
            const articleData: Partial<Article> = {
                title: formData.title?.toUpperCase() || '',
                summary: formData.summary || '',
                tags: formData.tags || [],
                status: 'pending' // Default status
            };

            let response: ApiResponse<Article>;

            if (editingArticle) {
                // Update existing article
                response = await ArticleService.updateArticle(editingArticle.id!, articleData);
            } else {
                // Create new article
                response = await ArticleService.createArticle(articleData);
            }

            if (response.success && response.data) {
                // Call parent callback with the created/updated article
                onSubmit(response.data);

                // Reset form
                resetForm();
                onClose();
            }
        } catch (error: any) {
            console.error('Error submitting article:', error);

            // Handle validation errors dari Laravel
            if (error.response && error.response.data && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                // Handle generic errors
                setErrors({
                    general: [error.message || 'An error occurred while submitting the article']
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            summary: '',
            tags: [],
        });
        setCurrentTag('');
        setErrors({});

        if (editorRef.current) {
            editorRef.current.setContent('');
        }
    };

    const handleClose = () => {
        resetForm();
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
                            {editingArticle ? 'EDIT' : 'NEW'} INTELLIGENCE ARTICLE
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                            {editingArticle ? 'Edit existing' : 'Create a new'} classified intelligence article
                        </p>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleClose}
                        className="text-muted-foreground hover:text-foreground"
                        disabled={isLoading}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </CardHeader>

                <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* General Error */}
                        {errors.general && (
                            <div className="bg-red-50 border border-red-200 rounded-md p-3">
                                <div className="text-sm text-red-800">
                                    {errors.general[0]}
                                </div>
                            </div>
                        )}

                        {/* Title */}
                        <div className="space-y-2">
                            <Label htmlFor="title" className="text-sm font-medium tracking-wider text-muted-foreground">
                                ARTICLE TITLE *
                            </Label>
                            <Input
                                id="title"
                                value={formData.title || ''}
                                onChange={(e) => handleInputChange('title', e.target.value)}
                                placeholder="Enter article title..."
                                className={`font-mono uppercase ${errors.title ? 'border-red-500' : ''}`}
                                required
                                disabled={isLoading}
                            />
                            {errors.title && (
                                <div className="text-sm text-red-600">
                                    {errors.title[0]}
                                </div>
                            )}
                        </div>

                        {/* Summary with TinyMCE */}
                        {/* <div className="space-y-2">
                            <Label htmlFor="summary" className="text-sm font-medium tracking-wider text-muted-foreground">
                                EXECUTIVE SUMMARY *
                            </Label>
                            <div className={`border rounded-md ${errors.summary ? 'border-red-500' : ''}`}>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    value={formData.summary || ''}
                                    onEditorChange={handleEditorChange}
                                    init={{
                                        ...TINYMCE_CONFIG.init,
                                        readonly: isLoading
                                    }}
                                />
                            </div>
                            {errors.summary && (
                                <div className="text-sm text-red-600">
                                    {errors.summary[0]}
                                </div>
                            )}
                        </div> */}

                        {/* Summary with textarea */}
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
                                    disabled={isLoading}
                                />
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={addTag}
                                    disabled={!currentTag.trim() || isLoading}
                                >
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>

                            {formData.tags && formData.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {formData.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                                            {tag}
                                            <button
                                                type="button"
                                                onClick={() => removeTag(tag)}
                                                className="ml-1 text-muted-foreground hover:text-foreground"
                                                disabled={isLoading}
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
                            <Button
                                type="submit"
                                disabled={!isFormValid || isLoading}
                            >
                                {isLoading ? 'Saving...' : editingArticle ? 'Update Article' : 'Create Article'}
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={handleClose}
                                disabled={isLoading}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
