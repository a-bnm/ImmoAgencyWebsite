import React,{Component} from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { connect } from 'react-redux';
import {getDetails, updateProperty, deleteImage} from '../Store/actions';
import {BsXOctagonFill} from 'react-icons/bs';
import { useParams } from 'react-router';
import './css/update.css';

class PropertyUpdate extends Component {
    
    constructor(props){
        super(props);
      
        this.state = {
            id:0,
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
           
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleImages = this.handleImages.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const id = this.props.id;
        this.props.getDetails(id);
    }

  
    static getDerivedStateFromProps(props,state){
        
       if(state.id !== props.details[0]?.id){
            return {  
                id: props.details[0]?.id,  
                wilaya: props.details[0]?.wilaya,
                city: props.details[0]?.city,
                title: props.details[0]?.title,
                description: props.details[0]?.description,
                property_type: props.details[0]?.property_type,
                property_sub_type:  props.details[0]?.property_sub_type,
                papers_done:  props.details[0]?.papers_done,
                number_of_rooms:  props.details[0]?.number_of_rooms,
                number_of_floors:  props.details[0]?.number_of_floors,
                number_of_toilets:  props.details[0]?.number_of_toilets,
                contract_type:   props.details[0]?.contract_type,
                state: props.details[0]?.state,
                price: props.details[0]?.price,
                surface: props.details[0]?.surface,
            }
        }
        return state
    }

    handleChange(e){
        
        e.preventDefault()
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        });    
    }

    handleImages(e){
       
        this.setState({
            photos : e.target.files
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateProperty(this.state);
    }

    handleImageDelete(e,id){
        e.preventDefault();
        this.props.deleteImage(id)
    }

    fix(data){
        if(data){
            const value = data?.charAt(0).toUpperCase() +  data?.slice(1);  
            return value.toString();
        }     
    }

    render(){
        
        const details = this.props.details[0]
        const images = this.props.images
        
        return (
           <> 
            <Header auth={this.props.auth} />
            <div className='row d-flex justify-content-center py-5 min-vw-100'>
                <div className='col-5 px-3 form-part'>  
                    <form 
                        method='POST'
                        className="py-4 px-5"
                        encType='multipart/form-data'
                    >
               
                        <h1 className='text-white text-center mb-5'>Update the property</h1>
                        <div className="form-floating mb-3">
                            <input 
                                type="text"  
                                placeholder="Title" 
                                name="title" 
                                defaultValue={details?.title}
                                className="form-control" 
                                onChange={this.handleChange} 
                            />
                            <label htmlFor="floatingInput">Title</label>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input 
                                        type="text" 
                                        id="floatingInput" 
                                        placeholder="Wilaya" 
                                        name="wilaya" 
                                        defaultValue={details?.wilaya} 
                                        className="form-control" 
                                        onChange={this.handleChange} 
                                    />
                                    <label htmlFor="floatingInput">Wilaya</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="text" id="floatingInput" placeholder="City" name="city" className="form-control" defaultValue={details?.city} onChange={this.handleChange} />
                                    <label htmlFor="floatingInput">City</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="text" id="floatingInput" placeholder="Surface" name="surface" defaultValue={details?.surface} className="form-control" onChange={this.handleChange} />
                                    <label htmlFor="floatingInput">Surface</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="text" id="floatingInput" placeholder="Price" name="price" defaultValue={details?.price} className="form-control" onChange={this.handleChange} />
                                    <label htmlFor="floatingInput">Price</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <select 
                                        id="floatingSelect" 
                                        key={`${Math.floor((Math.random() * 1000))}`} 
                                        defaultValue={this.fix(details?.contract_type)} 
                                        aria-label='Contract type' name="contract_type" 
                                        className="form-select" 
                                        onChange={this.handleChange} 
                                    >
                                        <option value="Sale">Sale</option>
                                        <option value="Rental">Rental</option>
                                    </select>    
                                    <label htmlFor="floatingSelect">Contract type</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <select 
                                        id="floatingSelect" 
                                        key={`${Math.floor((Math.random() * 1000))}`} 
                                        defaultValue={this.fix(details?.property_type)} 
                                        aria-label='Property type' 
                                        name="property_type" 
                                        className="form-select" 
                                        onChange={this.handleChange}
                                    >
                                        <option  value="Commercial">Commercial</option>
                                        <option  value="Residential">Residential</option>
                                    </select>    
                                    <label htmlFor="floatingSelect">Property type</label>
                                </div>
                            </div>
                        </div>
                       <div className="row">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <select id="floatingSelect" key={`${Math.floor((Math.random() * 1000))}`} defaultValue={this.fix(details?.property_sub_type)} aria-label='Property sub type' name="property_sub_type"  className="form-select" onChange={this.handleChange} >
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
                                    <select id="floatingSelect" key={`${Math.floor((Math.random() * 1000))}`} defaultValue={this.fix(details?.state)} aria-label='State' name="state"  className="form-select" onChange={this.handleChange} >
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
                                    <select id="floatingSelect" key={`${Math.floor((Math.random() * 1000))}`} defaultValue={this.fix(details?.papers_done)} aria-label='Papers done' name="papers_done"  className="form-select" onChange={this.handleChange} >
                                        <option  value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>    
                                    <label htmlFor="floatingSelect">Papers done</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="text" id="floatingInput" defaultValue={details?.number_of_rooms} placeholder="Number of rooms" name="number_of_rooms"  className="form-control" onChange={this.handleChange} />
                                    <label htmlFor="floatingInput">Number of rooms</label>
                                </div>
                            </div>
                       </div>
                       <div className="row">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="text" id="floatingInput" defaultValue={details?.number_of_toilets} placeholder="Number of toilets" name="number_of_toilets" className="form-control" onChange={this.handleChange} />
                                    <label htmlFor="floatingInput">Number of toilets</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="text" id="floatingInput" defaultValue={details?.number_of_floors} placeholder="Number of floors" name="number_of_floors"  className="form-control" onChange={this.handleChange} />
                                    <label htmlFor="floatingInput">Number of floors</label>
                                </div>
                            </div>
                        </div>
                      
                        <div className="form-floating mb-3">
                            <textarea  id="floatingTextarea2" defaultValue={details?.description} placeholder="Description" style={{ height: '150px' }} name="description" className="form-control" onChange={this.handleChange}></textarea>
                            <label htmlFor="floatingTextarea2">Description</label>
                        </div>
                        
                        <div className=" mb-3">
                            <label htmlFor="formFile" className="form-label text-white">Select all the photos you want to add here</label>
                            <input type="file" name="photos[]"  multiple className="form-control" onChange={this.handleImages} />
                        </div>
                        <div className='w-100 d-flex justify-content-center'>
                            <button type="submit" className='btn btn-lg form-btn mt-5' onClick={this.handleSubmit}>Submit</button>
                        </div>
                
                    </form>
                    
                </div>
                <div className='col-5 h-auto w-auto  mb-3 border' >
                        <h2 className='fw-bold p-3'>Choose the images you want to delete</h2>
                        <div className="row  m-3">
                            
                            {images?.map((image) =>
                                <React.Fragment key={image?.id}>
                                    <div className='col-3 m-3'>
                                        <img className="d-block image-to-del mb-3" src={image?.url} alt="Not found!!" />
                                        <div className="w-auto d-flex justify-content-center">
                                            <a  className="btn btn-danger text-white"  onClick={(e) => {this.props.deleteImage(image?.id)}}>
                                                <BsXOctagonFill />
                                            </a>
                                        </div>
                                        
                                    </div>
                                </React.Fragment>
                            )}
                        </div>    
                    </div>
            </div>
            <Footer logo={this.props.logo} />
        </> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
      details : state.details,
      images : state.images,
      message: state.message,
    }
}


const PropertyUpdateComponent = connect(mapStateToProps,{getDetails,updateProperty,deleteImage})(PropertyUpdate);
export default (props) => (
    <PropertyUpdateComponent {...props} params={useParams()}/>
)