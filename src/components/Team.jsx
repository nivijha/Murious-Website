import React from 'react';
import TeamCard from '../components/TeamCard';
import '/css/Team.css';
import { mentors, teamleads, contributors } from '../constants/team.json';
import Section from './Section';
// import Animesh from "../images/Animesh.webp";
// import Mayank from "../images/Mayank.jpg";

const mentors = [
    {
        "id": 1,
        "name": "Srijan Saraswat ",
        "designation": "Mentor",
        "imageUrl": "./coordis/Srijan.JPG",
        "linkedinUrl": "https://www.linkedin.com/in/racinmk/",
        "instagramUrl": "https://www.instagram.com/racinmk/"
    },
    {
        "id": 2,
        "name": "Yash Khatri ",
        "designation": "Mentor",
        "imageUrl": "./coordis/Yash.JPG",
        "linkedinUrl": "https://www.linkedin.com/in/aditya-s-140312233/",
        "instagramUrl": ""
    },
    {
        "id": 3,
        "name": "Akshit Mahajan",
        "designation": "Mentor",
        "imageUrl": "./coordis/Akshit.JPG",
        "linkedinUrl": "https://www.linkedin.com/in/anshul-sharma-655817216/",
        "instagramUrl": "https://www.instagram.com/anshul_03_/"
    },
    {
        "id": 4,
        "name": "Manas Bajpai",
        "designation": "Mentor",
        "imageUrl": "https://media.licdn.com/dms/image/D4D03AQFEovmErAbKlw/profile-displayphoto-shrink_200_200/0/1688559988133?e=1710979200&v=beta&t=iYN8jD3jmIon91DeCnAvWjp91hqrVWBT1tiVUFJJWPA",
        "linkedinUrl": "https://www.linkedin.com/in/manas-bajpai/",
        "instagramUrl": "https://www.instagram.com/manas.bajpai_1804/"
    }
];

const teamleads = [
    {
        "id": 1,
        "name": "Nivi Jha",
        "designation": "Mentor",
        "imageUrl": Mayank,
        "linkedinUrl": "https://www.linkedin.com/in/racinmk/",
        "instagramUrl": "https://www.instagram.com/racinmk/"
    },
    {
        "id": 2,
        "name": "Aarya Gupta",
        "designation": "Mentor",
        "imageUrl": "https://media.licdn.com/dms/image/D4D03AQFt4sjXev7FDA/profile-displayphoto-shrink_200_200/0/1668584452288?e=1710979200&v=beta&t=uqJrnFogiTutstTwGaqnawUK9VhwmKFTqtZ2TVLQmlA",
        "linkedinUrl": "https://www.linkedin.com/in/aditya-s-140312233/",
        "instagramUrl": ""
    },
    {
        "id": 3,
        "name": "Raavi Aggarwal",
        "designation": "Mentor",
        "imageUrl": "https://media.licdn.com/dms/image/D4D03AQGkyYYomTgE6w/profile-displayphoto-shrink_200_200/0/1670225491470?e=1710979200&v=beta&t=O_kU1ZacaqLXrNaSa0XbAPG2XLUR9KLn4jRN5g4FoB4",
        "linkedinUrl": "https://www.linkedin.com/in/anshul-sharma-655817216/",
        "instagramUrl": "https://www.instagram.com/anshul_03_/"
    },
    {
        "id": 4,
        "name": "Manas Bajpai",
        "designation": "Mentor",
        "imageUrl": "https://media.licdn.com/dms/image/D4D03AQFEovmErAbKlw/profile-displayphoto-shrink_200_200/0/1688559988133?e=1710979200&v=beta&t=iYN8jD3jmIon91DeCnAvWjp91hqrVWBT1tiVUFJJWPA",
        "linkedinUrl": "https://www.linkedin.com/in/manas-bajpai/",
        "instagramUrl": "https://www.instagram.com/manas.bajpai_1804/"
    }
];

const contributors = [
    {
        "id": 1,
        "name": "Manik Kapoor",
        "designation": "Web Developer",
        "imageUrl": "src/constants/Manik-Kapoor.jpg"
        "linkedinUrl": "https://www.linkedin.com/in/animesh07/",
        "instagramUrl": "https://www.instagram.com/Animesh_0764/"
    },
    {
        "id": 2,
        "name": "Rushil Sharma",
        "designation": "Web Developer",
        "imageUrl": "",
        "linkedinUrl": "https://www.linkedin.com/in/samson-vincent-julius/",
        "instagramUrl": "https://www.instagram.com/sam.v_julius/"
    },
    {
        "id": 3,
        "name": "Yash Khatri",
        "designation": "Web Developer",
        "imageUrl": "https://media.licdn.com/dms/image/D5603AQGDQXGriwporg/profile-displayphoto-shrink_400_400/0/1703404863726?e=1715212800&v=beta&t=fe2yrRbb2vzceIs0g6s-kkO6LNCioX5Aqwe78yamPnY",
        "linkedinUrl": "https://www.linkedin.com/in/yash-khatri-29b956251/",
        "instagramUrl": "https://www.instagram.com/yashkhatri99/"
    },
    {
        "id": 4,
        "name": "Srijan Saraswat",
        "designation": "UI/UX Designer",
        "imageUrl": "src/components/Darshita Shukla.jpg"
        "linkedinUrl": "https://www.linkedin.com/in/srijan-saraswat/",
        "instagramUrl": "https://www.instagram.com/__.srijan_saraswat.__/"
    },
    {
        "id": 5,
        "name": "Chaitanya Anchal",
        "designation": "App Developer",
        "imageUrl": "https://media.licdn.com/dms/image/D4E03AQF_jUiLnYNyMg/profile-displayphoto-shrink_400_400/0/1707843404355?e=1715212800&v=beta&t=bfVA0aYKpNgEUKzEB6atRZJnVeGeqnye7-O-AqgLY0k",
        "linkedinUrl": "https://www.linkedin.com/in/chaitanya-anchal/",
        "instagramUrl": "https://www.instagram.com/_chaitanya_.31/"
    },
    {
        "id": 6,
        "name": "Dhaarna",
        "designation": "Web Developer",
        "imageUrl": "src/components/Shoaib .jpg",
        "linkedinUrl": "https://www.linkedin.com/in/dhaarna-thakur-681061286",
        "instagramUrl": "https://www.instagram.com/dhaarnathakur_"
    },
    {
        "id": 7,
        "name": "Devank",
        "designation": "Web & App Dev",
        "imageUrl": "://media.licdn.com/dms/imagehttps/D5603AQE3LUCu5OwZBA/profile-displayphoto-shrink_400_400/0/1708109979071?e=1715212800&v=beta&t=rX0CZCHMN5my0sQPhGSj0XNaoTvlajFQJQINjIjmQgs",
        "linkedinUrl": "https://www.linkedin.com/in/devank-",
        "instagramUrl": "https://www.instagram.com/dev_n_k_"
    },
    {
        "id": 8,
        "name": "Shivansh",
        "designation": "Web & App Dev",
        "imageUrl": "",
        "linkedinUrl": "https://www.linkedin.com/in/shivansh-mahajan-a04301252/",
        "instagramUrl": "https://www.instagram.com/shivansh2_55/"
    },
    {
        "id": 9,
        "name": "Aarya Gupta",
        "designation": "Web & App Dev",
        "imageUrl": "src/components/KundanWEB.jpg",
        "linkedinUrl": "https://www.linkedin.com/in/aarya--gupta/",
        "instagramUrl": "https://www.instagram.com/aaryaa_.0/"
    },
    {
        "id": 10,
        "name": "Kavya Sharma",
        "designation": "Web & App Dev",
        "imageUrl": "src/components/Hardik Mittal.jpg",
        "linkedinUrl": "https://www.linkedin.com/in/kavya--sharma/",
        "instagramUrl": "https://www.instagram.com/_kavyasharma.j.m/"
    },
    {
        "id": 11,
        "name": "Aditya Sharma",
        "designation": "Web & App Dev",
        "imageUrl": "https://media.licdn.com/dms/image/D5603AQHkJkp5SNR4KA/profile-displayphoto-shrink_800_800/0/1704624943244?e=1710374400&v=beta&t=hIQlxgXfoX0pTUur5b-uIaj-8IVKYaQiMtZaj4Epuo0",
        "linkedinUrl": "https://www.linkedin.com/in/aditya-sharma-4901952a8",
        "instagramUrl": "https://www.instagram.com/hey.ady_/"
    },
    {
        "id": 12,
        "name": "Arpit Sharma",
        "designation": "Web & App Dev",
        "imageUrl": "https://media.licdn.com/dms/image/D4E03AQE4IwSAiENJoA/profile-displayphoto-shrink_800_800/0/1704906819025?e=1710374400&v=beta&t=0zteZGeRU4p77OSdxpB0MuJNlYSV-Bf_LwHRc3y6UH4",
        "linkedinUrl": "https://www.linkedin.com/in/arpit-sharma-b1a2892a9/",
        "instagramUrl": "https://www.instagram.com/arpitsharma9960/"
    }
];

const Team = () => {
    return (
        <Section>
            <Heading
          tag="Lorem-ipsum"
          title="Team"
        />
        <div className="team-container">
            <div className="team-section">
                <h1>Mentors</h1>
                <div className="team-grid">
                    {mentors.map((member) => (
                        <TeamCard key={member.id} {...member} />
                    ))}
                </div>
            </div>

            <br />

            <div className="team-section">
                <h1>Team Leads</h1>
                <div className="team-grid">
                    {teamleads.map((member) => (
                        <TeamCard key={member.id} {...member} />
                    ))}
                </div>
            </div>

            <div className="team-section">
                <h1>Contributors</h1>
                <div className="team-grid">
                    {contributors.map((member) => (
                        <TeamCard key={member.id} {...member} />
                    ))}
                </div>
            </div>
        </div>
        </Section>
    );
};

export default Team;
