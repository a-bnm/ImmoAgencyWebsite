import React, { Component } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Banner from '../components/layout/Banner';
import DisplayProperties from '../components/properties/DisplayProperties';
import NewsLetterRegistration from '../components/layout/NewsLetterRegistration';
import ServicesDisplay from '../components/layout/ServicesDisplay';
import axios from 'axios';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            properties : []
        }
    }
    componentDidMount(){
        let uri = '/properties/getSomeProperties';
        axios.get(uri)
        .then((response)=>{
            
            this.setState({
                properties : response.data
            })
        })
               
    }

    render(){
        return (
            <>
                <Banner auth={this.props.auth}/>
                <DisplayProperties properties={this.state.properties} />
                <ServicesDisplay />
                <NewsLetterRegistration />
                <Footer />
    
            </>       
        );
    }
   
}

export default Home;


