export interface Project {

    id:number;

    title:string;

    subtitle:string;

    description:string;

    category:string;

    company?:string;

    location?:string;

    start:string;

    end:string;

    technologies:string[];

    responsibilities:string[];

    image:string;

    gallery?:string[];

    website?:string;

    github?:string;

    article?:string;

    featured:boolean;

}