import fetch from 'node-fetch';

const getImageAPI = async (): Promise<{download_url: string}[]> => {
    const response = await fetch("https://picsum.photos/v2/list");
    if(response.status !== 200) {
        throw Error(`Status code ${response.status} received.`);
    }          
    return(response.json() as Promise<{download_url: string}[]>);
}
