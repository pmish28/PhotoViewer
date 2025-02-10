import fetch from 'node-fetch';


const getImageAPI = async (): Promise<{download_url: string}[]> => {
    const response = await fetch("https://picsum.photos/v2/list");
    if(response.status !== 200) {
        throw Error(`Status code ${response.status} received.`);
    }          
    return(response.json() as Promise<{download_url: string}[]>);
}

// export const imageList = async() =>{
//    const imageResp = await getImageAPI();
//    const gallery = [];
//    imageResp.forEach(element => {
//     gallery.push(imageResp["download_url"]);
//    }); 
//    return gallery;
// }


// const fruitsList = imageList.map((url, index) => {
//   return <li key={index}>{url}</li>;
// });