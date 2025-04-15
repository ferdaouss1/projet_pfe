<?php

namespace App\Http\Controllers;

use App\Models\Paiement;
use Illuminate\Http\Request;

class PaiementController extends Controller
{
    public function index()
    {
        return Paiement::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'reservation_id' => 'required|exists:reservations,id',
            'montant' => 'required|numeric',
            'date_paiement' => 'required|date',
            'statut' => 'required|string',
        ]);

        return Paiement::create($request->all());
    }

    public function show($id)
    {
        return Paiement::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $paiement = Paiement::findOrFail($id);
        $paiement->update($request->all());

        return $paiement;
    }

    public function destroy($id)
    {
        $paiement = Paiement::findOrFail($id);
        $paiement->delete();

        return response()->json(null, 204);
    }
}
