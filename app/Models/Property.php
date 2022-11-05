<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    protected $fillable = [
        'title','description','number_of_floors','number_of_rooms','number_of_toilets','price','surface','state','papers_done',
        'contract_type', 'property_type', 'property_sub_type','wilaya','city'
    ];

    public function images(){
        return $this->hasMany('App\Image','property_id');
    }

    public function scopeSearchWilaya($query,$wilaya){
        if($wilaya){

            return  $query->where('wilaya',$wilaya);
        }
       
    }

    public function scopeSearchCity($query,$city){
        if($city){
            return $query->where('city',$city); 
        } 
    }

    public function scopeSearchContract($query,$contract_type){
        if($contract_type){
            return $query->where('contract_type',$contract_type);
        }    
    }

    public function scopeSearchType($query,$property_type){
        if($property_type){
            return $query->where('property_type',$property_type);
        }    
    }
    
    public function scopeSearchSubType($query,$property_sub_type){
        if($property_sub_type){
            return  $query->where('property_sub_type',$property_sub_type);
        }     
    }
    
    public function scopeSearchFloors($query,$number_of_floors){
        if($number_of_floors){
            return $query->where('number_of_floors','>=',$number_of_floors);
        }    
    }
    
    public function scopeSearchRooms($query,$number_of_rooms){
        if($number_of_rooms){
            return $query->where('number_of_rooms','>=',$number_of_rooms);
        }    
    }
    
    public function scopeSearchToilets($query,$number_of_toilets){
        if($number_of_toilets){
            return $query->where('number_of_toilets','>=',$number_of_toilets);
        }    
    }

    public function scopeSearchPapers($query,$papers_done){
        if($papers_done){
            return $query->where('papers_done',$papers_done);
        }    
    }

    public function scopeSearchState($query,$state){
        if($state){
            return $query->where('state',$state);
        }    
    }

    public function scopeSearchSurface($query,$surface){
        if($surface){
            return $query->where('surface','<=',$surface);
        }    
    }

    public function scopeSearchPrice($query,$price){
        if($price){
            return $query->where('price','<=',$price);
        }    
    }
}
