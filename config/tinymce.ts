// Tidak menggunakan API key untuk self-hosted
export const TINYMCE_CONFIG = {

    // Menggunakan environment variable
    // apiKey: process.env.PUBLIC_TINYMCE_API_KEY,

    // Konfigurasi TinyMCE
    init: {
        height: 200,
        menubar: false,
        plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
        ],
        toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
        content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; font-size: 14px }',
        skin: 'oxide',
        content_css: 'default',
        branding: false,
        resize: false,
        statusbar: false,
        placeholder: 'Provide a detailed summary of the intelligence article...'
    }
};
