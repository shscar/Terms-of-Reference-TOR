import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface TinyMCEEditorProps {
    value?: string;
    onEditorChange?: (content: string) => void;
    height?: number;
    placeholder?: string;
    disabled?: boolean;
}

export default function TinyMCEEditor({
    value = '',
    onEditorChange,
    height = 400,
    placeholder = 'Start typing...',
    disabled = false,
}: TinyMCEEditorProps) {
    const editorRef = useRef<any>(null);

    return (
        <Editor
            apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
            onInit={(evt, editor) => (editorRef.current = editor)}
            value={value}
            onEditorChange={onEditorChange}
            disabled={disabled}
            init={{
                height: height,
                menubar: false,
                plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                ],
                toolbar:
                    'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                content_style: `
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                        font-size: 14px;
                        line-height: 1.6;
                    }
                `,
                placeholder: placeholder,
                branding: false,
                promotion: false,
            }}
        />
    );
}
