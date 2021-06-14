import React,{ useState,createContext,useEffect } from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';


var initialAlbum=[];

var initialGallery =[];

const inStoreAlbum = reactLocalStorage.getObject('Album');
console.log("In global album:",inStoreAlbum);

if(Object.entries(inStoreAlbum).length>0){
        initialAlbum=inStoreAlbum;
}

const inStoreGallery = reactLocalStorage.getObject('Gallery');
console.log("In global gallery:",inStoreGallery);

if(Object.entries(inStoreGallery).length>0){
        initialGallery=inStoreGallery;
}

export const GlobalAlbum = createContext({initialAlbum,initialGallery});

export const GlobalGallery = ( { children } ) => {
    const [album, setAlbum] = useState(initialAlbum);
    const [gallery,setGallery] = useState(initialGallery);
    

    const updateAlbum = ( newAlbum ) => {
        
        console.log('in global album',newAlbum);
        
        setAlbum(newAlbum);
    }

      useEffect(() => {
         updateAlbum(initialAlbum);
      }, [])

       const updateGallery = ( newGallery ) => {
        
         console.log('in global gallery',newGallery);
        
         setGallery(newGallery);
     }

        useEffect(() => {
           updateGallery(initialGallery);
           
        }, [])
    
    
    return (
        
        <GlobalAlbum.Provider value={ {album,gallery,updateGallery,updateAlbum} }>
            
            { children }
          
        </GlobalAlbum.Provider>

        
        
    
    ) 
}