export interface Theme {
    name: string;
    properties: any;
}
  
export const terang: Theme = {
    name: "terang",
    properties: {
        "--warna-latar-utama": "#F2F2F2",
        "--warna-latar-card": "#ffffff",
        "--warna-text": "black"
    }
};
  
export const gelap: Theme = {
    name: "gelap",
    properties: {
        "--warna-latar-utama": "#353535",
        "--warna-latar-card": "#6b6b6b",
        "--warna-text": "white"
    }
};