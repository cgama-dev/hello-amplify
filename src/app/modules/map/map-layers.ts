import { tileLayer } from 'leaflet';

export class BaseLayers {  

    static GOOGLE = {
        Maps: {
            url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',
            attribution: 'Google Maps',
            factoryLeafletTileLayer: () => tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
                attribution: 'Google Maps'
            })
        },
        Satellite: {
            url: 'https://mt1.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}',
            attribution: ' Google Satellite',
            factoryLeafletTileLayer: () => tileLayer('https://mt1.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {
                attribution: ' Google Satellite'
            })
        },
        SatelliteHybrid: {
            url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
            attribution: 'Google Satellite Hybrid',
            factoryLeafletTileLayer: () => tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
                attribution: 'Google Satellite Hybrid'
            })

        },
        Terrain: {
            url: 'https://mt1.google.com/vt/lyrs=t&x={x}&y={y}&z={z}',
            attribution: 'Google Terrain',
            factoryLeafletTileLayer: () => tileLayer('https://mt1.google.com/vt/lyrs=t&x={x}&y={y}&z={z}', {
                attribution: 'Google Terrain'
            })
        },
        Roads: {
            url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}',
            attribution: 'Google Roads',
            factoryLeafletTileLayer: () => tileLayer('https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}', {
                attribution: 'Google Roads'
            })
        }
    }

    static OSM = {
        Standard: {
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: 'Open Street Maps',
            factoryLeafletTileLayer: () => tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Open Street Maps',
            })
        },
        Monochrome: {
            url: 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
            attribution: 'Open Street Maps',
            factoryLeafletTileLayer: () => tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
                attribution: 'Open Street Maps',
            })
        }
    }
}
