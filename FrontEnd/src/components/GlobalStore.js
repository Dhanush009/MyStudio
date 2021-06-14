import React,{ useState,createContext,useEffect } from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';





var initialInfo = {
    userid:null,
    name :null,
    email:null,
    password:null,
    albums:[]
}




const inStore = reactLocalStorage.getObject('PSInfo');
console.log("In global :",inStore);

  if(Object.entries(inStore).length>0){
      initialInfo=inStore;
}

//  const inStoreAlbum = reactLocalStorage.getObject('Studio');
//  console.log("In global :",inStoreAlbum);

//   if(Object.entries(inStoreGallery).length>0){
//        initialGallery=inStoreGallery;
//  }

export const GlobalContext = createContext(initialInfo);


export const GlobalStore = ( { children } ) => {
    const [info, setinfo] = useState(initialInfo);
    
    

    const updateInfo = ( newInfo ) =>{
        
        console.log('in global update',newInfo);
        
        setinfo(newInfo);
    }

    useEffect(() => {
        updateInfo(initialInfo);
    }, [])
    
    
    return (
        
        <GlobalContext.Provider value={ {info,updateInfo} }>
            
            { children }
          
        </GlobalContext.Provider>

        
        
    
    ) 
}
