import Img1 from '../Assets/CharacterImages/Aidan.jpg';
import Img2 from '../Assets/CharacterImages/Tiger.jpg';
import Img3 from '../Assets/CharacterImages/Max.jpg';
import Img4 from '../Assets/CharacterImages/Theodore.jpg';


export const getCharacters = () => {
    return data;
};

export const typeConstants = {
    HERO: "HERO",
    SIDEKICK: "SIDECICK",
    VILLAIN: "VILLAIN"
}

const data = [
    {
        id: 1,
        name: "Aidan",
        biography: `Aidan was born on a beautiful day when the sun shone on the face of the moon.
        He grew up to be a spaceship pilot, but his aversion to authority and a nasty cynical streak kept him from becoming one of the best. Instead, he got stuck with the bad jobs and his latest is by far the worst he has ever had. 
        After an incident in a taxi, driven by the insectoid Max, life has only gone downhill. All he has to rely on now is his beloved dog Spike, who Aidan brings with him on every mission.`,
        image: [Img1],
        type: typeConstants.HERO
    },
    {
        id: 2,
        name: "Spike",
        biography: `Spike is Aidan's loyal companion.
        She is brave and selfless, and will do anything for her master.`,
        image: [Img2],
        type: typeConstants.SIDEKICK
    },
    {
        id: 3,
        name: "Max",
        biography: `Max is a seriously misunderstood creature.
        He is an Insectoid that has been separated from his hive.
        His mission in life is to exact revenge on Aidan, who hijacked his cab.
        Along with his best friend, Theodore, he goes on an adventurous chase through the galaxy.`,
        image: [Img3],
        type: typeConstants.VILLAIN
    },
    {
        id: 4,
        name: "Theodore",
        biography: `Theodore is Max's best, and possibly only, friend.
        He is simple, but seems to have a super-human understanding of others.`,
        image: [Img4],
        type: typeConstants.SIDEKICK
    }
];