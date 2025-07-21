<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Articles as Article;
use App\Http\Requests\StoreArticlesRequest;
use App\Http\Requests\UpdateArticlesRequest;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Log;

class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $article = Article::all();
        return Inertia::render('dashboard/articles', [
            'article' => $article
        ]);
        // return response()->json([
        //     'success' => true,
        //     'data' => Article::all(),
        // ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArticlesRequest $request)
    {
        try {
            // Validated data dari FormRequest otomatis divalidasi
            $validated = $request->validated();

            $article = Article::create($validated);

            return response()->json([
                'success' => true,
                'data' => $article,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal menyimpan artikel: ' . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $article = Article::findOrFail($id);

            return response()->json([
                'success' => true,
                'data' => $article,
            ], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Artikel tidak ditemukan.',
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal mengambil artikel: ' . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArticlesRequest $request, $id)
    {
        try {
            $article = Article::findOrFail($id);

            // Debug: Log data yang diterima
            Log::info('Request data:', $request->all());
            Log::info('Validated data:', $request->validated());
            Log::info('Article before update:', $article->toArray());

            // Pastikan data validated
            $validatedData = $request->validated();

            // Handle tags jika berupa string JSON
            if (isset($validatedData['tags']) && is_string($validatedData['tags'])) {
                $validatedData['tags'] = json_decode($validatedData['tags'], true);
            }

            // Update artikel
            $updated = $article->update($validatedData);

            // Debug: Log hasil update
            Log::info('Update result:', ['success' => $updated]);
            Log::info('Article after update:', $article->fresh()->toArray());

            return response()->json([
                'success' => true,
                'data' => $article->fresh(),
                'debug' => [
                    'updated_fields' => $validatedData,
                    'update_result' => $updated,
                ]
            ], 200);

        } catch (ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Artikel tidak ditemukan.',
            ], 404);
        } catch (\Exception $e) {
            Log::error('Update error:', ['message' => $e->getMessage(), 'trace' => $e->getTraceAsString()]);

            return response()->json([
                'success' => false,
                'message' => 'Gagal mengupdate artikel: ' . $e->getMessage(),
                'debug' => [
                    'error_trace' => $e->getTraceAsString()
                ]
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $article = Article::findOrFail($id);
            $article->delete();

            return response()->json([
                'success' => true,
                'message' => 'Artikel berhasil dihapus.',
            ], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Artikel tidak ditemukan.',
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal menghapus artikel: ' . $e->getMessage(),
            ], 500);
        }
    }

    public function getConfig()
    {
        return response()->json([
            'tinymce_api_key' => config('services.tinymce.api_key'),
        ]);
    }
}
