import React,{useState,Component} from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import RangeSlider from 'react-bootstrap-range-slider';
import {setSearch} from'@/Store/actions';
import {connect} from 'react-redux';
import './searchBar.css';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            wilaya:'',
            city:'',
            property_sub_type:'',
            number_of_rooms:'',
            number_of_floors:'',
            number_of_toilets:'',
            contract_type:'',
            state:'',
            price:'',
            surface:'',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        e.preventDefault()
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        var data = this.state;
        this.props.setSearch(data);
    }

    render(){
        return (
            <div className='px-4 mr-5 pt-4 main' >
                <p className='fs-3 fw-bold text-white'>Search</p>
                <form action=""
                    method='POST'
                    className=" pb-5 pt-2"
                    encType='multipart/form-data'
                >
                    <FloatingLabel controlId='floatingInput' label="Wilaya" className="mb-3">
                        <Form.Control type="text" placeholder="Wilaya" name="wilaya" onChange={this.handleChange} />
                    </FloatingLabel>
                    <FloatingLabel controlId='floatingInput' label="City" className="mb-3">
                        <Form.Control type="text" placeholder="City" name="city"  onChange={this.handleChange}/>
                    </FloatingLabel>
           
                    <FloatingLabel controlId='floatingInput' label="Contract type" className="mb-3">
                        <Form.Select aria-label='Contract type' name="contract_type"  onChange={this.handleChange} >
                            <option value="Sale">Sale</option>
                            <option value="Rental">Rental</option>
                        </Form.Select> 
                    </FloatingLabel>
           
                    <FloatingLabel controlId='floatingInput' label="Property sub type" className="mb-3">
                        <Form.Select aria-label='Property sub type' name="property_sub_type"  onChange={this.handleChange}  >
                            <option value="apartment">Apartment</option>
                            <option value="house">House</option>
                            <option value="villa">Villa</option>
                            <option value="land">Land</option>
                            <option value="garage">Garage</option>
                            <option value="shop">Shop</option>
                            <option value="warehouse"> Warehouse</option>
                            <option value="building">Building</option>
                            <option value="office">Office</option>
                        </Form.Select>    
                    </FloatingLabel>
                    <FloatingLabel controlId='floatingInput' label="State" className="mb-3">
                        <Form.Select aria-label='State' name="state"  onChange={this.handleChange} >
                            <option value="New">New</option>
                            <option value="Good">Good</option>
                            <option value="Nice">Nice</option>
                            <option value="Bad">Bad</option>
                        </Form.Select>    
                    </FloatingLabel>
                    
            
                    <FloatingLabel controlId='floatingInput' label="Surface" className="text-white mb-3 pt-4" style={{ height:'40px' }}>
                        <RangeSlider  min={0} max={15000} value={this.state.surface} name="surface" onChange={this.handleChange} className='w-100' />
                    </FloatingLabel>
                    <FloatingLabel controlId='floatingInput' label="Price" className="mb-3 text-white pt-4" style={{ height:'40px' }}>
                        <RangeSlider  min={0} max={500} value={this.state.price} name='price' onChange={this.handleChange}  className='w-100' />
                    </FloatingLabel>
                    <FloatingLabel controlId='floatingInput' label="Number of rooms " className="mb-3 text-white pt-4" style={{ height:'40px' }}>
                        <RangeSlider min={0} max={30} value={this.state.number_of_rooms} name="number_of_rooms" onChange={this.handleChange}  className='w-100' />
                    </FloatingLabel>
                    <FloatingLabel controlId='floatingInput' label="Number of rest rooms" className="mb-3 text-white pt-4" style={{ height:'40px' }}>
                        <RangeSlider  min={0} max={20} value={this.state.number_of_toilets} name="number_of_toilets"  onChange={this.handleChange}  className='w-100' />
                    </FloatingLabel>
                    <FloatingLabel controlId='floatingInput' label="Number of floors" className="mb-3 text-white pt-4" style={{ height:'40px' }}>
                        <RangeSlider  min={0} max={20} value={this.state.number_of_floors}  name="number_of_floors" onChange={this.handleChange}  className='w-100' />
                    </FloatingLabel>    
                           
                    <div className='d-grid gap-2 mt-5'>
                        <Button type="submit" variant="primary" size="lg" onClick={this.handleSubmit}>Search</Button>
                    </div>
                </form>
            </div>
        )
    }    
}

/*const mapStateToProps = (state) => {
    return {
        searchedProperties: state.searchedProperties
    }
}
*/
export default connect(null,{setSearch})(SearchBar);