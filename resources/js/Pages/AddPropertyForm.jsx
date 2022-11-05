import axios from 'axios';
import React,{Component} from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './css/addProperty.css';


class AddPropertyForm extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            wilaya:'',
            city:'',
            title:'',
            description:'',
            property_type:'',
            property_sub_type:'',
            papers_done:false,
            number_of_rooms:0,
            number_of_floors:0,
            number_of_toilets:0,
            contract_type:'',
            state:'',
            price:0,
            surface:0,
            photos:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleImages = this.handleImages.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange({currentTarget:input}){
       
        this.setState({
            [input.name] : input.value
        });    
        
    }

    handleImages(e){
       console.log(e.target.files)
        this.setState({
            photos : e.target.files
        });
        
    }

    handleSubmit(e){
        e.preventDefault();
        
        let fd =new FormData();
        fd.append('title',this.state.title);
        fd.append('description',this.state.description);
        fd.append('property_type',this.state.property_type);
        fd.append('property_sub_type',this.state.property_sub_type);
        fd.append('contract_type',this.state.contract_type);
        fd.append('papers_done',this.state.papers_done);
        fd.append('number_of_rooms',this.state.number_of_rooms);
        fd.append('number_of_floors',this.state.number_of_floors);
        fd.append('number_of_toilets',this.state.number_of_toilets);
        fd.append('wilaya',this.state.wilaya);
        fd.append('city',this.state.city);
        fd.append('surface',this.state.surface);
        fd.append('price',this.state.price);
        fd.append('state',this.state.state);
      
        
        if(this.state.photos){
           
           for(let photo of this.state.photos){
                fd.append("photos[]", photo);
            };
            
        }
        
        let uri = '/properties/saveProperty';
        axios.post(uri,fd).then((response)=>{
            console.log('done')
            console.log(response.data)
        })
    }
    render(){
        return (
           <> 
            <Header auth={this.props.auth} />
            <div className='row d-flex justify-content-center py-5 px-0 m-0 min-vw-100 main'>
                <div className="col-5 add-form-image p-0 m-0">
                    <div className="h-100 w-100 inner-image text-center d-flex align-items-center">
                        <p className='fs-1 text-white fw-bold pl-5'>Add the newest property!!</p>
                    </div>
                </div>
                <div className='col-5 px-3 form-container m-0'>  
                    <form 
                        method='POST'
                        className="form-control  add-form  py-4 px-5 m-0"
                        encType='multipart/form-data'
                        
                    >
               
                        <h1 className='text-white text-center mb-5'>Fill the form</h1>
                        <div className="form-floating mb-3">
                            <input type="text" id="floatingInput" placeholder="Title" name="title" className="form-control" onChange={this.handleChange} />
                            <label htmlFor="floatingInput">Title</label>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="text" id="floatingInput" placeholder="Wilaya" name="wilaya" className="form-control" onChange={this.handleChange} />
                                    <label htmlFor="floatingInput">Wilaya</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="text" id="floatingInput" placeholder="City" name="city" className="form-control" onChange={this.handleChange} />
                                    <label htmlFor="floatingInput">City</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="text" id="floatingInput" placeholder="Surface" name="surface" className="form-control" onChange={this.handleChange} />
                                    <label htmlFor="floatingInput">Surface</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="text" id="floatingInput" placeholder="Price" name="price" className="form-control" onChange={this.handleChange} />
                                    <label htmlFor="floatingInput">Price</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <select id="floatingSelect" defaultValue={"Sale"} aria-label='Contract type' name="contract_type" className="form-select" onChange={this.handleChange} >
                                        <option value="Sale">Sale</option>
                                        <option value="Rental">Rental</option>
                                    </select>    
                                    <label htmlFor="floatingSelect">Contract type</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <select id="floatingSelect" defaultValue={"Commercial"} aria-label='Property type' name="property_type" className="form-select" onChange={this.handleChange} >
                                        <option  value="Commercial">Commercial</option>
                                        <option value="Residential">Residential</option>
                                    </select>    
                                    <label htmlFor="floatingSelect">Property type</label>
                                </div>
                            </div>
                        </div>
                       <div className="row">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <select id="floatingSelect" defaultValue={"Apartment"} aria-label='Property sub type' name="property_sub_type"  className="form-select" onChange={this.handleChange} >
                                        <option value="Apartment">Apartment</option>
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
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <select id="floatingSelect" defaultValue={"New"} aria-label='State' name="state"  className="form-select" onChange={this.handleChange} >
                                        <option value="New">New</option>
                                        <option value="Good">Good</option>
                                        <option value="Nice">Nice</option>
                                        <option value="Bad">Bad</option>
                                    </select>    
                                    <label htmlFor="floatingSelect">State</label>
                                </div>
                            </div>
                       </div>
                       <div className="row">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <select id="floatingSelect" defaultValue={"Yes"} aria-label='Papers done' name="papers_done"  className="form-select" onChange={this.handleChange} >
                                        <option  value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>    
                                    <label htmlFor="floatingSelect">Papers done</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="text" id="floatingInput" placeholder="Number of rooms" name="number_of_rooms"  className="form-control" onChange={this.handleChange} />
                                    <label htmlFor="floatingInput">Number of rooms</label>
                                </div>
                            </div>
                       </div>
                       <div className="row">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="text" id="floatingInput" placeholder="Number of toilets" name="number_of_toilets" className="form-control" onChange={this.handleChange} />
                                    <label htmlFor="floatingInput">Number of toilets</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="text" id="floatingInput" placeholder="Number of floors" name="number_of_floors"  className="form-control" onChange={this.handleChange} />
                                    <label htmlFor="floatingInput">Number of floors</label>
                                </div>
                            </div>
                        </div>
                      
                        <div className="form-floating mb-3">
                            <textarea  id="floatingTextarea2" placeholder="Description" style={{ height: '150px' }} name="description" className="form-control" onChange={this.handleChange}></textarea>
                            <label htmlFor="floatingTextarea2">Description</label>
                        </div>
                        
                        <div className=" mb-3">
                            <label htmlFor="formFile" className="form-label text-white">Select all the photos here</label>
                            <input type="file" name="photos[]"  multiple className="form-control" onChange={this.handleImages} />
                   
                        </div>
                        <div className='w-100 d-flex justify-content-center'>
                            <button type="submit" className='btn btn-lg btn-form mt-5' onClick={this.handleSubmit}>Submit</button>
                        </div>
                
                    </form>
                </div>
            </div>
            <Footer />
        </> 
        )
    }
}

export default AddPropertyForm;
