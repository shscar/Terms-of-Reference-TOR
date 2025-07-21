<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreArticlesRequest extends FormRequest
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
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'tags' => 'nullable|array',
            'status' => 'nullable|string|in:pending,verified,active',
            'classification' => 'nullable|string|in:TOP SECRET,SECRET,CONFIDENTIAL',
            'source' => 'nullable|string',
            'location' => 'nullable|string',
            'date' => 'nullable|date',
            'threat' => 'nullable|string|in:critical,high,medium,low',
        ];
    }
}