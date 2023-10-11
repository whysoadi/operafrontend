

export const makeUnauthenticatedPOSTRequest = async (route, body)=>{
    const response = await fetch("https://operabackend6.onrender.com"+ route, {
        method:"POST",  
        headers:{
            "Content-Type": "application/json",
        },

        body:JSON.stringify(body),

});

const formattedResponse = await response.json();
return formattedResponse;
};

export const makeAuthenticatedPOSTRequest = async (route, body)=>{
    const token=getToken();
    const response = await fetch("https://operabackend6.onrender.com"+ route, {
        method:"POST",  
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },

        body:JSON.stringify(body),

});

const formattedResponse = await response.json();
return formattedResponse;
};

const getToken = () => {
    const accessToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );
   
    return accessToken;
};

export const makeAuthenticatedGETRequest = async (route)=>{
    const token=getToken();
    
    const response = await fetch("https://operabackend6.onrender.com"+route, {
        method:"GET",  
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },


});

const formattedResponse = await response.json();
return formattedResponse;
};