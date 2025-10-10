import React from 'react'
import LiveTracking from '../components/LiveTracking'

const LocationSearchPanel=(props)=>{
    console.log(props);


// const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

//     const handleSuggestionClick = (suggestion) => {
//         if (activeField === 'pickup') {
//             setPickup(suggestion)
//         } else if (activeField === 'destination') {
//             setDestination(suggestion)
//         }
    //     // setVehiclePanel(true)
    //     // setPanelOpen(false)
    // }


    const locations=[
        "Madan Ji ka hata,Pakri Chowk near City Cart Mall",
         "Madan Ji ka hata,Pakri Chowk near City Cart Mall",
          "Madan Ji ka hata,Pakri Chowk near City Cart Mall",
           "Madan Ji ka hata,Pakri Chowk near City Cart Mall",

    ]

    return (
        <div>
            {
                locations.map(function(elem,idx){
                    return  <div key={idx} onClick={()=>{
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    }}className='flex gap-4 border-2 p-3 border-gray-50 active:border-black p-3 rounded-xl items-center my-10 justify-start'>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill text-xl"></i></h2>
                <h4 clasName='font-medium'> {elem} </h4>
                 
            </div>
                })
            }

          
           
            {/* Display fetched suggestions */} 
             {/* {
                suggestions.map((elem, idx) => (
                    <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                ))
            } */}
        </div>
    )
}

export default LocationSearchPanel