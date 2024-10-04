
export interface Links {
    companies: { [key: string]: string };
    projects: { [key: string]: string };
    skills: { [key: string]: string };
}

const linkData: Links = {
    companies: {
        cintas: "https://www.cintas.com/",
        cincinnati: "https://www.uc.edu/",
        liveWell: "https://www.livewellcollaborative.org/",
        drone: "https://www.droneforwardinc.com/",
        kao: "https://www.kao.com/global/en/",
    },
    projects: {
        flight: "https://www.figma.com/proto/RyIXJEtW3m4A8qJjKj4J0Y/AR-Airplane-Seat-Experience?node-id=587-3032&starting-point-node-id=587%3A3032&scaling=scale-down&t=jbWzlYsx5k7HVrw1-1",
        univibe: "https://www.figma.com/proto/tOSxWlvGmrvZItHLrBAH6d/Univibe?node-id=6-54&t=LUdulNGs49QRqDAm-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=6%3A54&show-proto-sidebar=1",
        arubaito: "https://www.arubaitoinc.com/",
        ge: "https://drive.google.com/file/d/1nP2ZauQetJUtE1uuiEJGkwpgZeFi1f1k/view?usp=sharing",
        divvy: "https://github.com/alzwang99/DivvyBikeShare",
        kao: "https://drive.google.com/drive/folders/16MiDDRA4hp9AeqcB-6ev89o5aPkv0Dod?dmr=1&ec=wgc-drive-globalnav-goto"
    },
    skills: {
        figma: "https://www.figma.com/",
        photoshop: "https://www.adobe.com/products/photoshop.html",
        illustrator: "https://www.adobe.com/products/illustrator.html",
        indesign: "https://www.adobe.com/products/indesign.html",
        react: "https://react.dev/",
        miro: "https://miro.com/",
        sharepoint: "https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration",
        excel: "https://www.microsoft.com/en-us/microsoft-365/excel",
        powerbi: "https://www.microsoft.com/en-us/power-platform/products/power-bi",
        access: "https://www.microsoft.com/en-us/microsoft-365/access",
        r: "https://www.r-project.org/about.html",
        sap: "https://www.sap.com/index.html",
        python: "https://www.python.org/",
        github: "https://github.com/about",
        dax: "https://learn.microsoft.com/en-us/dax/"
    }
};

export default linkData 
