
export interface Configuration
{
    website: string;
    projects: Project[];
    jamaConfig: JamaConfig
}

export interface Project
{
    name: string;
    inputFolderPath: string;
    outputFolderPath: string;
    saveAsPDF: boolean;
    uploadToJAMA: boolean;
}

export interface JamaConfig 
{
    username: string;
    password: string;
    server: string;
}
