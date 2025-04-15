<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Utilisateur extends Authenticatable
{
    protected $fillable = ['nom', 'email', 'password'];

    protected $hidden = ['password'];

    public function commandes(): HasMany
    {
        return $this->hasMany(Commande::class);
    }

    public function reservations(): HasMany
    {
        return $this->hasMany(Reservation::class);
    }
}
