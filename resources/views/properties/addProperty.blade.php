<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Add a new property</title>
    @vite(['resources/sass/app.scss', 'resources/js/app.js','resources/css/app.css'])
</head>
<body class="container m-0 p-0" >
    <div id="header" data-image={{ URL('storage/logo.png') }}></div>
    <!--
    <div>
        <div id="add-property-form" data-token="{{ csrf_field() }}" data-r="{{ route('property.save') }}">
        
        </div>
    </div>

-->
    <div class='row d-flex justify-content-center py-5 min-vw-100'>
       
        <div class='col-5 px-3'> 
            @if ($errors->any())
            <div class="text-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>       
            
            @endif    
            
            <form action={{ route('property.save')}}
                method='POST'
                class="form-control bg-dark py-4 px-5"
                enctype='multipart/form-data'
            >
           
                @csrf
                <h1 class='text-white text-center mb-5'>Fill the form</h1>
                <div class="form-floating mb-3">
                    <input type="text" id="floatingInput" placeholder="Title" name="title" class="form-control" />
                    <label htmlFor="floatingInput">Title</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" id="floatingInput" placeholder="Adress" name="adress" class="form-control" />
                    <label htmlFor="floatingInput">Adress</label>
                </div>
                
                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" id="floatingInput" placeholder="Price" name="price" class="form-control" />
                            <label htmlFor="floatingInput">Price</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" id="floatingInput" placeholder="Surface" name="surface" class="form-control" />
                            <label htmlFor="floatingInput">Surface</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <select id="floatingSelect" aria-label='Contract type' name="contract_type" class="form-select" >
                                <option value="Sale">Sale</option>
                                <option value="Rental">Rental</option>
                            </select>    
                            <label htmlFor="floatingSelect">Contract type</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-floating mb-3">
                            <select id="floatingSelect" aria-label='Property type' name="property_type" class="form-select" >
                                <option value="Commercial">Commercial</option>
                                <option value="Residential">Residential</option>
                            </select>    
                            <label htmlFor="floatingSelect">Property type</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <select id="floatingSelect" aria-label='Property sub type' name="property_sub_type"  class="form-select" >
                                <option value="Apartment">Aparatment</option>
                                <option value="House">House</option>
                                <option value="Villa">Villa</option>
                                <option value="Land">Land</option>
                                <option value="Garage">Garage</option>
                                <option value="Shop">Shop</option>
                                <option value="Warehouse"> Warehouse</option>
                                <option value="Building">Building</option>
                                <option value="Office">Office</option>
                            </select>    
                            <label htmlFor="floatingSelect">Property sub type</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-floating mb-3">
                            <select id="floatingSelect" aria-label='State' name="state"  class="form-select" >
                                <option value="New">New</option>
                                <option value="Good">Good</option>
                                <option value="Nice">Nice</option>
                                <option value="Bad">Bad</option>
                            </select>    
                            <label htmlFor="floatingSelect">State</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" id="floatingInput" placeholder="Number of rooms" name="number_of_rooms"  class="form-control" />
                            <label htmlFor="floatingInput">Number of rooms</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" id="floatingInput" placeholder="Number of toilets" name="number_of_toilets" class="form-control" />
                            <label htmlFor="floatingInput">Number of toilets</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" id="floatingInput" placeholder="Number of floors" name="number_of_floors"  class="form-control" />
                            <label htmlFor="floatingInput">Number of floors</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-floating mb-3">
                            <select id="floatingSelect" aria-label='Papers done' name="papers_done"  class="form-select" >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>    
                            <label htmlFor="floatingSelect">Papers done</label>
                        </div>
                    </div>
                </div>   
               
                <div class="form-floating mb-3">
                    <textarea  id="floatingTextarea2" placeholder="Description" style="height: 150px;" name="description" class="form-control" ></textarea>
                    <label html="floatingTextarea2">Description</label>
                </div>
                <div class=" mb-3">
                    <label for="formFile" class="form-label text-white">Select all the photos here</label>
                    <input type="file" name="photos[]"  multiple class="form-control" />
                   
                </div>
                <div class='w-100 d-flex justify-content-center'>
                    <button type="submit" class='btn btn-primary btn-lg text-white mt-5'>Submit</button>
                </div> 
            </form>
        </div>
    </div>
    <div id="footer"></div>
</body>
</html>