<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateArticlesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'sometimes|required|string|max:255',
            'content' => 'sometimes|required|string',
            'tags' => 'nullable|json', // atau 'nullable|array' jika sudah dalam bentuk array
            'status' => 'nullable|string|in:pending,verified,active',
            'classification' => 'nullable|string|in:TOP SECRET,SECRET,CONFIDENTIAL',
            'source' => 'nullable|string',
            'location' => 'nullable|string',
            'date' => 'nullable|date',
            'threat' => 'nullable|string|in:critical,high,medium,low',
        ];
    }

    /**
     * Prepare the data for validation.
     * Method ini dipanggil sebelum validation
     */
    protected function prepareForValidation()
    {
        // Convert tags string to array if needed
        if ($this->has('tags') && is_string($this->tags)) {
            $this->merge([
                'tags' => json_decode($this->tags, true)
            ]);
        }
    }
}
