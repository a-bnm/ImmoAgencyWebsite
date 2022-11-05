<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Property;
use App\Models\PropertyImages;
use Illuminate\Support\Facades\Storage;

class PropertiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $properties = Property::all();
        foreach($properties as $property){
            $image = PropertyImages::where('property_id',$property->id)->first();
           
            if($image){
                $url = $image->url;
               
                $property->image = Storage::url('properties/' . $url);
            }
        }
        
        return response()->json($properties); 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('properties.addproperty');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|max:255',
            'price' => 'required|min:0',
            'surface' => 'required',
            'description' => 'required',
            'contract_type' => 'required',
            'property_type' => 'required',
            'property_sub_type' => 'required',
            'papers_done' => 'required',
            'state' => 'required',
            'number_of_rooms' => 'required',
            'number_of_toilets' => 'required',
            'number_of_floors' => 'required|min:1',
            'wilaya' => 'required|max:255', 
            'city' => 'required|max:255',
        ]);
        
       
        $property = Property::make([
            'title' => $request->title,
            'price' => $request->price,
            'surface' => $request->surface,
            'description' => $request->description,
            'contract_type' => $request->contract_type,
            'property_type' => $request->property_type,
            'property_sub_type' => $request->property_sub_type,
            'papers_done' => $request->papers_done === 'Yes',
            'state' => $request->state,
            'number_of_rooms' => $request->number_of_rooms,
            'number_of_toilets' => $request->number_of_toilets,
            'number_of_floors' => $request->number_of_floors,
            'wilaya' => $request->wilaya,
            'city' => $request->city,
        ]);
        $property->save();
       
        if($request->has('photos')){
           
            $photos = $request->photos;
            foreach($request->file('photos') as $photoFile){
                $photo = new PropertyImages;

                $photoName = uniqid().'-'.$request->property_type.'.'.$photoFile->getClientOriginalExtension();
                //storing the image
                $photoFile->move(public_path('storage/properties'), $photoName);
                
                //storing the url in the bd
                $photo->url = $photoName;
                $photo->property_id = $property->id;
                $photo->save();
            }
        }
        return response()->json("Success!!");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $property = Property::where('id',$id)->get();
        $images = PropertyImages::where('property_id',$id)->get();
        if($images){
            foreach($images as $image){
                if($image){
                    $image->url = Storage::url('properties/' . $image->url);
                }
               
            }
        }
        
       
        return response()->json([
            "details" => $property,
            "images" => $images,
        ]);
        
       
       
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $property = Property::find($id);
        return response()->json($property);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'max:255',
            'price' => 'min:0',
            'number_of_floors' => 'min:1',
            'wilaya' => 'max:255', 
            'city' => 'max:255',
        ]);

        Property::where('id',$id)->update([
            'title' => $request->title,
            'price' => $request->price,
            'surface' => $request->surface,
            'description' => $request->description,
            'contract_type' => $request->contract_type,
            'property_type' => $request->property_type,
            'property_sub_type' => $request->property_sub_type,
            'papers_done' => $request->papers_done === 'Yes' ,
            'state' => $request->state,
            'number_of_rooms' => $request->number_of_rooms,
            'number_of_toilets' => $request->number_of_toilets,
            'number_of_floors' => $request->number_of_floors,
            'wilaya' => $request->wilaya,
            'city' => $request->city,
        ]);

        if($request->has('photos')){
           
            $photos = $request->photos;
            foreach($request->file('photos') as $photoFile){
                $photo = new PropertyImages;

                $photoName = uniqid().'-'.$request->property_type.'.'.$photoFile->getClientOriginalExtension();
                //storing the image
                $photoFile->move(public_path('storage/properties'), $photoName);
                
                //storing the url in the bd
                $photo->url = $photoName;
                $photo->property_id = $id;
                $photo->save();
            }
        }

        
        return response()->json('Success');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $property = Property::where('id',$id)->delete();
        $images = PropertyImages:: where('property_id',$id)->delete();
       
        return response()->json('Property deleted successfully!!');
    }

    public function search(Request $request){
       
        
        $properties = Property::searchPrice($request->price)
            ->searchSubType($request->property_sub_type)
            ->searchSurface($request->surface)
            ->searchWilaya($request->wilaya)
            ->searchCity($request->city)
            ->searchState($request->state)
            ->searchFloors($request->number_of_floors)
            ->searchRooms($request->number_of_rooms)
            ->searchToilets($request->number_of_toilets)
            ->searchContract($request->contract_type)
            ->get();

        foreach($properties as $property){
            $image = PropertyImages::where('property_id',$property->id)->first();
                       
            if($image){
                $url = $image->url;
                $property->image = Storage::url('properties/' . $url);
            }
        }

        return response()->json($properties);
    }


    public function propertiesDashboardData(){
        $number_of_properties = Property::all()->count();
        $number_of_rentals = Property::where('contract_type','rental')->count();
        $number_of_sales = Property::where('contract_type','sale')->count();
        $number_of_residential = Property::where('property_type','residential')->count();
        $number_of_commercial = Property::where('property_type','commercial')->count();

        return response()->json([
            "nb_properties" => $number_of_properties,
            "nb_sales" => $number_of_sales,
            "nb_rentals" => $number_of_rentals,
            "nb_residential" =>  $number_of_residential,
            "nb_commercial" => $number_of_commercial,
        ]);
    }
}

