import React, { Component } from 'react'
import axios from 'axios';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SearchBar from '../components/properties/SearchBar';
import {connect} from 'react-redux';

class ShowInventory extends Component {
    constructor(props){
        super(props);
        this.state = {
            inventory : []
        }
    }

    componentDidMount(){
      let uri = '/properties/getInventory';
      axios.get(uri)
        .then((response)=>{
          this.setState({
            inventory : response.data
          })
        })
        
    }

    static getDerivedStateFromProps(props,state){
      if(props.searchedProperties?.length > 0 ){
        return{
          inventory : props.searchedProperties,
        }
      }
      return state.inventory
    }

  render() {
    console.log(this.state)
    return (
      <div>
        <Header auth={this.props.auth}/>   
        <div className='row min-vw-100'>
            <div className="col-3 min-vh-100 m-0 p-0">
                <SearchBar />
            </div>
            <div className="col-9 row ">
                {this.state.inventory?.map((property) => 
                    <React.Fragment  key={property.id}>
                    <div className="col-4 mt-5" >
                        <div className="card property-card text-white"  >
                            <img src={property.image}  alt="No image for this property was found" className="card-img-top" />
                            <div className="card-body ">
                                <h5 className="card-title">{property.title}</h5>
                                <p className="card-text">{property.property_type}</p>
                                <p className="card-text">Price: {property?.price} {property?.contract_type === 'sale'? 'DA' :'DA/Month'}</p>
                                <a href={ '/'+(property.id)+'/Details' }  className='btn btn-card'>More info</a>
                            </div>
                        </div>
                    </div>
                    </React.Fragment>
                )}
            </div>
        </div>
        <Footer logo={this.props.logo}/> 
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    return {
      searchedProperties: state.searchedProperties,
       
    }
}

export default connect(mapStateToProps)(ShowInventory);