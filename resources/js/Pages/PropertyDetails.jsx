import React, {  useEffect } from 'react'
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import {getDetails, deleteProperty} from '../Store/actions';
import { connect } from 'react-redux';
import './css/details.css';
import Carousel from 'react-bootstrap/Carousel';
import {BsXOctagonFill,BsPenFill} from 'react-icons/bs';
import {IoLocation} from 'react-icons/io5';
import {IoMdArrowRoundBack} from 'react-icons/io';
import {FaFileContract,FaWarehouse} from 'react-icons/fa';
import {TbBuilding,TbBuildingFactory2} from 'react-icons/tb';
import {GiHouse,GiFamilyHouse,GiFactory} from 'react-icons/gi';
import {AiOutlineShop} from 'react-icons/ai';
import {BiBuildingHouse} from 'react-icons/bi';
import {MdLandscape} from 'react-icons/md';
import {HiOfficeBuilding} from 'react-icons/hi';
import {motion} from 'framer-motion';

function PropertyDetails(props) {
    
    useEffect( () => {
        props.getDetails(props.id);
    },[]);
    
    function handleDelete () {
        props.deleteProperty(props.id);
    }

    function firstLetterUpper(ch){
        return String(ch).charAt(0).toUpperCase()+ String(ch).slice(1)
    }
    
    function lastIcon(sub_type){
        if(sub_type==="apartment" || sub_type==="building"){
            return <BiBuildingHouse size={36}/>
        }
        if(sub_type==="house"){
            return <GiHouse size={36}/>
        }
        if(sub_type==="villa"){
            return <GiFamilyHouse size={36}/>
        }
        if(sub_type==="land"){
            return <MdLandscape size={36}/>
        }
        if(sub_type==="shop"){
            return <AiOutlineShop size={36}/>
        }
        if(sub_type==="office"){
            return <HiOfficeBuilding size={36}/>
        }
        if(sub_type==="warehouse" || sub_type==="garage" ){
            return <FaWarehouse size={36}/>
        }
       
    }
    const link = "/"+props.id+"/Update"
    const details = props.details[0]
    const images = props.images
   
    return (
        <div className='m-0 p-0'>
            <Header auth={props.auth} />
            <div className="row min-vw-100 p-0 m-0">
                <Carousel className='m-0 p-0'>
                    {images?.map( image => 
                        <Carousel.Item interval={2500} key={image?.id}>
                            <img 
                                className="carousel-img"
                                src={image?.url} 
                                alt="Not found!!"
                            />
                        </Carousel.Item>     
                    )}
                </Carousel>
                <div className="row min-vw-100 py-3 px-5 text-white details-part d-flex justify-content-center">
                    <div className="col-2 ">
                        <div className='w-100 d-flex justify-content-center mb-3 '>
                            <IoLocation  size={36}/>
                        </div>
                        <div className='w-100 d-flex justify-content-center fw-bold'>
                            <p>{firstLetterUpper(details?.city)}, {details?.wilaya.toUpperCase()}</p>
                        </div>
                           
                    </div>
                    <div className="col-2">
                        <div className='w-100 d-flex justify-content-center mb-3'>
                            <FaFileContract size={36}/>
                        </div>    
                        <div className='w-100 d-flex justify-content-center fw-bold'>
                            <p>{firstLetterUpper(details?.contract_type)}</p>    
                        </div>
                        
                    </div>
                    <div className="col-2">
                        <div className='w-100 d-flex justify-content-center mb-3'>
                        {details?.property_type  === "residential"? (
                            <TbBuilding size={36} />
                        ):(
                            <TbBuildingFactory2 size={36} />
                        ) 
                        }
                        </div>

                        <div className='w-100 d-flex justify-content-center fw-bold'>
                            <p>{firstLetterUpper(details?.property_type)}</p> 
                        </div>
                           
                    </div>
                    <div className="col-2">
                        <div className='w-100 d-flex justify-content-center mb-3'>
                            {lastIcon(details?.property_sub_type)}
                        </div>
                        <div className='w-100 d-flex justify-content-center fw-bold'>
                            <p>{firstLetterUpper(details?.property_sub_type)}</p>
                        </div>
                            
                    </div>            
                </div>    
            <div className='row min-vw-100 py-5 px-5'>
                <h1 className='fs-1 fw-bold'>{details?.title}</h1>
                <div className='row p-5 min-vw-100 d-flex justify-content-center'>
                    <div className="col-3">
                        <motion.div 
                            whileHover={{
                                scale:1.1,
                                opacity:0.8,
                                transition:{duration: 0.3}
                            }}    
                            className="row box-before box-before1"
                        >
                            <div className="col">
                                <p >
                                    {details?.number_of_rooms} room(s)
                                </p>
                            </div>
                        </motion.div>
                        <motion.div 
                            whileHover={{
                                scale:1.1,
                                opacity:0.8,
                                transition:{duration: 0.3}
                            }}
                            className="row box-before box-before2"
                        >
                            <div className="col">
                                <p >
                                    {details?.number_of_floors} floor(s)
                                </p>
                            </div>
                            
                        </motion.div>
                    </div>
                    <motion.div 
                        whileHover={{
                            scale:1.1,
                            opacity:0.8,
                            transition:{duration: 0.3}
                        }} 
                        className="col-4 box-middle"
                    >
                        <p >
                            Price   {details?.price} {details?.contract_type === 'sale'? 'DA' :'DA/Month'}
                        </p>
                        
                       
                    </motion.div>
                    <div className="col-3 ">
                        <motion.div
                            whileHover={{
                                scale:1.1,
                                opacity:0.8,
                                transition:{duration: 0.3}
                            }}
                            className="row box-after box-after1"
                        >
                            <div className="col">
                                <p className='box-text-normal'>
                                    {details?.number_of_toilets} bathroom(s)
                                </p>
                            </div>
                            
                        </motion.div>
                        <motion.div 
                            whileHover={{
                                scale:1.1,
                                opacity:0.8,
                                transition:{duration: 0.3}
                            }}
                            className="row box-after box-after2"
                        >
                            <div className="col">
                                <p className='box-text-normal'>
                                    {details?.surface} m²
                                </p>
                            </div>
                            
                        </motion.div>
                    </div>
                </div>
                
                <div className="row px-5">    
                    <h2 className='fw-bold fs-1'>Description</h2>
                    <p className='fs-4'>
                        {details?.description}
                    </p>
                </div>           
            </div> 
            {props.auth.user ? (
                <div className='row m-5 '>
                    <div className="col-2 ">
                        <a href="/Inventory" className="btn btn-danger mr-2"  onClick={handleDelete}>
                            <BsXOctagonFill />
                        </a> 
                        <a href={link} className="btn btn-update" >
                            <BsPenFill />
                        </a>    
                    </div>
                </div>
              ) : (
                <div className='row m-5 '>
                    <div className="col-1">
                        <a href="/Inventory" className="btn btn-back ">
                            <IoMdArrowRoundBack />
                        </a>
                    </div>
                    
                </div>    
              )
            }
            
                  
        </div>
        <Footer logo={props.logo} />
    </div>

  )
}

const mapStateToProps = (state) => {
    return {
      details : state.details,
      images : state.images,
      message: state.message,
    }
}

export default connect(mapStateToProps,{getDetails,deleteProperty})(PropertyDetails) ;