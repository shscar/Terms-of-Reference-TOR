<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Articles;
use App\Http\Requests\StoreArticlesRequest;
use App\Http\Requests\UpdateArticlesRequest;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Articles::all();
        return Inertia::render('dashboard/articles', [
            'articles' => $articles
        ]);
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
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'content' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'errors' => $validator->errors()
            ], 422);
        }

        $articles = Articles::create($request->all());
        return response()->json([
            'status' => true,
            'message' => 'Articles created successfully',
            'data' => $articles
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Articles $articles, $id)
    {
        $articles = Articles::findOrFail($id);
        return response()->json([
            'status' => true,
            'message' => 'Articles found successfully',
            'data' => $articles
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Articles $articles)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'title'   => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $article = Articles::findOrFail($id);
        $article->update($data);
        return response()->json($article);


        // $validator = Validator::make($request->all(), [
        //     'title' => 'sometimes|required|string|max:255',
        //     'content' => 'sometimes|required|string,' . $id,
        // ]);
        // // $request->validate([
        // //     'title' => 'required|string|max:255',
        // //     'content' => 'required|string',
        // // ]);

        // if ($validator->fails()) {
        //     return response()->json([
        //         'status' => false,
        //         'message' => 'Validation error',
        //         'errors' => $validator->errors()
        //     ], 422);
        // }

        // $articles = Articles::findOrFail($id);
        // $articles->update($request->all());

        // return response()->json([
        //     'status' => true,
        //     'message' => 'articles updated successfully',
        //     'data' => $articles
        // ], 200);


        // $request->validate([
        //     'title' => 'sometimes|required|string|max:255',
        //     'content' => 'sometimes|required|string',
        // ]);

        // $articles = Articles::findOrFail($id);

        // if ($request->has('title')) {
        //     $articles->title = $request->input('title');
        // }

        // if ($request->has('content')) {
        //     $articles->content = $request->input('content');
        // }

        // $articles->save();

        // return response()->json([
        //     'status' => true,
        //     'message' => 'Article updated successfully',
        //     'data' => $articles
        // ], 200);


        // try {
        //     $request->validate([
        //         'title' => 'sometimes|required|string|max:255',
        //         'content' => 'sometimes|required|string',
        //     ]);

        //     $articles = Articles::findOrFail($id);

        //     // Hanya memperbarui jika nilai tidak null
        //     if ($request->has('title')) {
        //         $articles->title = $request->input('title');
        //     }
        //     if ($request->has('content')) {
        //         $articles->content = $request->input('content');
        //     }

        //     $articles->save();

        //     return response()->json([
        //         'status' => true,
        //         'message' => 'Articles found successfully',
        //         'data' => $articles
        //     ], 200);
        // } catch (ModelNotFoundException $e) {
        //     return response()->json([
        //         'status' => false,
        //         'message' => 'Article not found'
        //     ], 404);
        // } catch (\Exception $e) {
        //     return response()->json([
        //         'status' => false,
        //         'message' => 'An error occurred: ' . $e->getMessage()
        //     ], 500);
        // }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Articles $articles, $id)
    {
        $articles = Articles::findOrFail($id);
        $articles->delete();

        return response()->json([
            'status' => true,
            'message' => 'Articles deleted successfully'
        ], 204);
    }
}
