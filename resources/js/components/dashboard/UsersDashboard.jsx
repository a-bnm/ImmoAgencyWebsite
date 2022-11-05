import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getUsersDashboardData} from '@/Store/actions';
import{Chart, ArcElement,Tooltip,Legend, CategoryScale, LinearScale, PointElement, LineElement, Title} from 'chart.js' ;
import {Doughnut,Line} from 'react-chartjs-2';
import '../../Pages/css/dashboard.css';

Chart.register(ArcElement,Tooltip,Legend,CategoryScale,LinearScale,PointElement,LineElement,Title);

class UsersDashboard extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getUsersDashboardData();
  }
  render() {
    const data = this.props.data;
    const labels= ['User','Agent','Client','Other']
    const LineData = {
        labels,
        datasets:[
            {
                label :'Number of users',
                data : [5,10,5,2],
                borderColor:'#b85128',
                backgroundColor:"#b85128",
            },
            {
                label : 'Number of users',
                data : [1,2,15,3],
                borderColor:'#314b6e',
                backgroundColor:"#314b6e"
            }
        ]
    }
    const UsersTypes = {
      labels : ["Agents","Others"],
      datasets:[
        {
          label :'Number of users for each type',
          data : [ data?.nb_agents , data?.nb_users - data?.nb_agents ],
          backgroundColor:["#314b6e","#b85128"],
        }
      ]
    }   
    
    return (
      <div className='container min-vw-100'>
        <div className="row min-vw-100 d-flex justify-content-center">

          <div className="col-5 mx-3 mt-3 mb-5 d-flex justify-content-center">
              <div className="pill text-center fs-5 fw-bold p-3" >
                Users:<br/> 
                {data.nb_users}  
              </div>
          </div>
          <div className='col-5 mx-3 mt-3 mb-5 d-flex justify-content-center'>
              <div className="pill text-center fs-5 fw-bold p-3 ">
                  Agents:<br/> 
                  {data.nb_agents}  
              </div>
          </div>
        </div>    
        <div className="row min-vw-100 d-flex justify-content-center m-0 p-0">
          
          <div className="col-6" >
            <div className="graph-container p-4">
              <Doughnut
                data={UsersTypes}
                options={{ 
                  responsive: true,
                  maintainAspectRatio: false 
                }}
              />  
            </div>    
          </div>
          <div className="col-6 d-flex justify-content-center"  >
                <div className="graph-container p-4">
                    <Line
                        data={ LineData}
                        options={{ 
                            responsive: true,
                            
                        }}
                    />
                </div>
          </div>
          <div className="col-12 mt-5 p-0 d-flex justify-content-cenetr ">
            <table className='table table-hover text-white  fs-6'>
              <thead>
                <tr className='fw-bold'>
                  <th scope="col" className='px-2 '>User id</th>
                  <th scope="col" className='px-2'>Name</th>
                  <th scope="col" className='px-2'>Username</th>
                  <th scope="col" className='px-2'>E-mail</th>
                </tr> 
              </thead>
              <tbody>
              {data.users?.map((user) => 
                <React.Fragment  key={user.id}>
                  <tr>
                    <td className='px-2'>{user.id}</td>
                    <td className='px-2'>{user.name}</td>
                    <td className='px-2'>{user.username}</td>
                    <td className='px-2'>{user.email}</td>
                  </tr>
                  
                </React.Fragment>
              )}
              </tbody>
            </table>
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

export default connect(mapStateToProps,{getUsersDashboardData})(UsersDashboard);