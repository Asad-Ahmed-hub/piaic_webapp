export interface CourseType {
    id: number;
    title: string
    full_description: string,
    short_description: string,

}

const  coursesList:CourseType[] = 
     [
        {
            id:1,
            title: "Web 3.0 (Blockchain) and Metaverse Specialization",
            full_description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
            short_description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation",
        },
        {
            id:2,
            title: "Artificial Intelligence (AI) and Deep Learning Specialization",
            full_description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
            short_description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models."
        },
        {
            id:3,
            title: "Cloud-Native Computing Specialization",
            full_description: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes. ",
            short_description: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes. "
        },
        {
            id:4,
            title: "Ambient Computing and IoT Specialization",
            full_description: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices. ",
            short_description: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices. "
        },
        {
            id:5,
            title: "Genomics and Bioinformatics Specialization",
            full_description: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications. ",
            short_description: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved"
        },
        {
            id:6,
            title: "Network Programmability and Automation Specialization",
            full_description: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
            short_description: "More than ever, network engineers are finding it challenging to complete their duties entirely manually."
        }
    ]

export default coursesList