import React from 'react';
import Specialize from '../Specialize/Specialize';

const specializeds = [
    {
        "key": "B002RL8IYK",
        "employe_name": "Tiger Nixon",
        "employe_des":"Dermatologists",
        "profile_image": "https://as1.ftcdn.net/v2/jpg/02/60/04/08/500_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg"
    },
    {
        "key": "B01LZ2WZGH",
        "employe_name": "Garrett Winters",
        "employe_des": "Ophthalmologists",
        "profile_image": "https://as2.ftcdn.net/v2/jpg/02/60/04/13/500_F_260041303_AlmQda46WwhMGuk4zLxECMvaCUkt26w2.jpg"
    },
    {
        "key": "B01K1IO3QW",
        "employe_name": "Ashton Cox",
        "employe_des": "Cardiologists",
        "profile_image": "https://as1.ftcdn.net/v2/jpg/02/60/04/08/500_F_260040826_TrqAtLpZnwOO3EftJwU1Jevy4H2vkqF4.jpg"
    },
    {
        "key": "B01LD4MGY4",
        "employe_name": "Cedric Kelly",
        "employe_des": "Endocrinologists",
        "profile_image": "https://as1.ftcdn.net/v2/jpg/02/60/04/08/500_F_260040826_TrqAtLpZnwOO3EftJwU1Jevy4H2vkqF4.jpg"
    },
    {
        "key": "B01M18UZF5",
        "employe_name": "Airi Satou",
        "employe_des": "Gastroenterologists",
        "profile_image": "https://as1.ftcdn.net/v2/jpg/02/60/04/08/500_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg"
    },
    {
        "key": "B01DBGVB7K",
        "employe_name": "Brielle Williamson",
        "employe_des": "Obstetrician",
        "profile_image": "https://as1.ftcdn.net/v2/jpg/02/60/04/08/500_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg"
    }
]

const Specializeds = () => {
    return (
        <div id="specializeds" className="container">
            <h2 className="text-primary my-4">Our Specializeds</h2>
            <dir className="row">
                {
                    specializeds.map(specialize => <Specialize
                    key={specialize.name}
                        specialize={specialize}

                    ></Specialize>)
                }

            </dir>
        </div>
    );
};

export default Specializeds;