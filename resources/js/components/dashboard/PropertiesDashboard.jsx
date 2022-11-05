import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getPropertiesDashboardData} from '@/Store/actions';
import{Chart, ArcElement,Tooltip,Legend, CategoryScale, LinearScale, PointElement, LineElement, Title} from 'chart.js' ;
import {Doughnut,Line} from 'react-chartjs-2';
import '../../Pages/css/dashboard.css';

Chart.register(ArcElement,Tooltip,Legend,CategoryScale,LinearScale,PointElement,LineElement,Title);

class PropertiesDashboard extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getPropertiesDashboardData();
    }
  render() {
    const data = this.props.data;

    const labels= ['Apartment','House','Villa','Garage']
    const LineData = {
        labels,
        datasets:[
            {
                label :'Number of properties for each type',
                data : [data.nb_residential,data.nb_commercial,10,5,7],
                borderColor:'#b85128',
                backgroundColor:"#b85128",
            },
            {
                label : 'Number of properties for each type',
                data : [data.nb_rentals,data.nb_sales,2,15,3],
                borderColor:'#314b6e',
                backgroundColor:"#314b6e"
            }
        ]
    }
    const PropertyTypes = {
        labels : ["Residential","Commercial"],
        datasets:[
            {
                label :'Number of properties for each type',
                data : [data.nb_residential,data.nb_commercial],
                backgroundColor:["#b85128","#314b6e"],
            }
        ]
    }    
      
   
    const ContractTypes = {
        labels:['Rental','Sale'],
        datasets : [
            {
                label : 'Number of properties for each type',
                data : [data.nb_rentals,data.nb_sales],
                backgroundColor:["#b85128","#314b6e"]
            }
        ]     
    }
      
    return (
      <div className='container min-vw-100 min-vh-100  p-0 m-0'>
        <div className="row min-vw-100 d-flex justify-content-center mb-5">
            <div className="col-2  ">
                <div className="pill text-center fs-5 fw-bold p-3" >
                    Properties<br/> 
                    {data.nb_properties}  
                </div>
            </div>
            <div className='col-2 '>
                <div className="pill text-center fs-5 fw-bold p-3 ">
                    For sale<br/> 
                    {data.nb_sales}  
                </div>
            </div>
            <div className='col-2 '>    
                <div className="pill text-center fs-5 fw-bold p-3">
                    For rent<br/> 
                    {data.nb_rentals}  
                </div>
            </div>
            <div className='col-2 '>     
                <div className="pill text-center fs-5 fw-bold p-3">
                    Residential<br/> 
                    {data.nb_residential}  
                </div>
            </div>
            <div className='col-2 '>         
                <div className="pill text-center fs-5 fw-bold p-3">
                    Commercial<br/> 
                    {data.nb_commercial}  
                </div>
            </div>
        </div>    
        <div className="row min-vw-100 d-flex justify-content-center m-0 p-0" >
            <div className="col-4 d-flex justify-content-center"  >
                <div className="graph-container p-4">
                    <Doughnut
                        data={ContractTypes}
                        options={{ 
                            responsive: true,
                            maintainAspectRatio: false 
                        }}
                    />
                </div>
                    
            </div>
            <div className="col-4 d-flex justify-content-center" >
                <div className="graph-container p-4">
                    <Doughnut
                        data={PropertyTypes}
                        options={{ 
                            responsive: true,
                            maintainAspectRatio: false 
                        }}
                    />
                </div>       
            </div>
            <div className="col-4 d-flex justify-content-center"  >
                <div className="graph-container p-4 pt-5 ">
                    <Line
                        data={ LineData}
                        options={{ responsive: true, }}
                    />
                </div>
            </div>
            <div className="col-12 d-flex justify-content-center" >
                <div className="graph-container-big p-4">
                    <Line
                        data={ LineData}
                        options={{ 
                            responsive: true,
                           
                        }}
                    />
                </div>       
            </div>
        </div> 
             
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
    return{
        data : state.data 
    }
}

export default connect(mapStateToProps,{getPropertiesDashboardData})(PropertiesDashboard);
