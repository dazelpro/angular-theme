export interface Theme {
    name: string;
    properties: any;
}
  
export const terang: Theme = {
    name: "terang",
    properties: {
        "--warna-latar": "white",
        "--warna-text": "black"
    }
};
  
export const gelap: Theme = {
    name: "gelap",
    properties: {
        "--warna-latar": "black",
        "--warna-text": "white"
    }
};