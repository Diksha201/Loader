import React from 'react'

const VehiclePanel = (props) => {
   console.log("Fare data in VehiclePanel:", JSON.stringify(props.fare, null, 2));
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setVehiclePanel(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.selectVehicle('minitruck')
            }} className='flex border-2 active:border-black  mb-2 rounded-xl w-full p-3  items-center justify-between'>
                <img className='h-10' src="https://t3.ftcdn.net/jpg/01/68/87/36/360_F_168873677_WC1IyeqqddJEcbUHm0yeCD5FCcwAuXIH.jpg" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>MiniTruck<span><i className="ri-user-3-fill"></i>2</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away </h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, safe for stuffs</p>
                </div>
               
                <h2 className='text-lg font-semibold'>₹{props.fare.minitruck}</h2>
            </div>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.selectVehicle('truck')
            }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
                <img className='h-10' src="https://trucks.tatamotors.com/assets/trucks/files/Products/2023-10/Ultra%20T.7.png" alt="" />
                <div className='-ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Truck <span><i className="ri-user-3-fill"></i>2</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away </h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable for heavy stuffs</p>
                </div>
                <h2 className='text-lg font-semibold'>₹{props.fare.truck}</h2>
            </div>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.selectVehicle('tractor')
            }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
                <img className='h-10' src="https://images.drivespark.com/img/2017/08/sonalika-emerges-indias-no-1-tractor-company-in-51-hp-segment4-11-1502452620.jpg" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Tractor <span><i className="ri-user-3-fill"></i>5</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away </h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable for Farmers</p>
                </div>
                <h2 className='text-lg font-semibold'>₹{props.fare.tractor}</h2>
            </div>
        </div>
    )
}

export default VehiclePanel