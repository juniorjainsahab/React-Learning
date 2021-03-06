import {ADD_CONTACT, DELETE_CONTACT, FETCH_CONTACT} from "./types";

export const fetchContacts = () => {
    return (dispatch) => {
        dispatch({
                type: FETCH_CONTACT,
                data: [
                    {
                        "id": 1,
                        "name": "Alysia D'Hooge",
                        "gender": "Female",
                        "email": "adhooge0@wikipedia.org",
                        "phone": "1571022046",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/1.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Ruby Tothe",
                        "gender": "Male",
                        "email": "rtothe1@usa.gov",
                        "phone": "1983800201",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/2.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Reinald Tace",
                        "gender": "Male",
                        "email": "rtace2@stanford.edu",
                        "phone": "7704172788",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/3.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Phoebe Kingsnod",
                        "gender": "Female",
                        "email": "pkingsnod3@yellowbook.com",
                        "phone": "8137639930",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/4.jpg"
                    },
                    {
                        "id": 5,
                        "name": "Sharai Manach",
                        "gender": "Female",
                        "email": "smanach4@scientificamerican.com",
                        "phone": "9459000368",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/5.jpg"
                    },
                    {
                        "id": 6,
                        "name": "Steward Mariot",
                        "gender": "Male",
                        "email": "smariot5@dropbox.com",
                        "phone": "8963409459",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/6.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Ivory Campbell",
                        "gender": "Female",
                        "email": "icampbell6@merriam-webster.com",
                        "phone": "8056267810",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/7.jpg"
                    },
                    {
                        "id": 8,
                        "name": "Mikael Boldock",
                        "gender": "Male",
                        "email": "mboldock7@pinterest.com",
                        "phone": "5224658824",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/8.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Kellyann La Croce",
                        "gender": "Female",
                        "email": "kla8@yahoo.co.jp",
                        "phone": "9877151559",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/9.jpg"
                    },
                    {
                        "id": 10,
                        "name": "Dennis Tieraney",
                        "gender": "Male",
                        "email": "dtieraney9@weibo.com",
                        "phone": "5617011238",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/10.jpg"
                    },
                    {
                        "id": 11,
                        "name": "Almeda Gonzalez",
                        "gender": "Female",
                        "email": "agonzaleza@si.edu",
                        "phone": "9856950797",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/11.jpg"
                    },
                    {
                        "id": 12,
                        "name": "Phoebe Kippen",
                        "gender": "Female",
                        "email": "pkippenb@bluehost.com",
                        "phone": "4588466301",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/12.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Nikolos Stare",
                        "gender": "Male",
                        "email": "nstarec@desdev.cn",
                        "phone": "3203530767",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/13.jpg"
                    },
                    {
                        "id": 14,
                        "name": "Aviva Rolstone",
                        "gender": "Female",
                        "email": "arolstoned@indiatimes.com",
                        "phone": "4867947551",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/14.jpg"
                    },
                    {
                        "id": 15,
                        "name": "Rheta Blowing",
                        "gender": "Female",
                        "email": "rblowinge@si.edu",
                        "phone": "3306261481",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/15.jpg"
                    },
                    {
                        "id": 16,
                        "name": "Dannie Snoddy",
                        "gender": "Male",
                        "email": "dsnoddyf@dyndns.org",
                        "phone": "5055381106",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/16.jpg"
                    },
                    {
                        "id": 17,
                        "name": "Gweneth Lightoller",
                        "gender": "Female",
                        "email": "glightollerg@nationalgeographic.com",
                        "phone": "9195669421",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/17.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Violetta Yarrall",
                        "gender": "Female",
                        "email": "vyarrallh@census.gov",
                        "phone": "3969895189",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/18.jpg"
                    },
                    {
                        "id": 19,
                        "name": "Rana Casserley",
                        "gender": "Female",
                        "email": "rcasserleyi@vinaora.com",
                        "phone": "5076427251",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/19.jpg"
                    },
                    {
                        "id": 20,
                        "name": "Vernen Peyton",
                        "gender": "Male",
                        "email": "vpeytonj@upenn.edu",
                        "phone": "9735726715",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/20.jpg"
                    },
                    {
                        "id": 21,
                        "name": "Kelby Di Biagi",
                        "gender": "Male",
                        "email": "kdik@zimbio.com",
                        "phone": "1744261896",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/21.jpg"
                    },
                    {
                        "id": 22,
                        "name": "Evelin Hatchell",
                        "gender": "Male",
                        "email": "ehatchelll@ibm.com",
                        "phone": "7887313266",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/22.jpg"
                    },
                    {
                        "id": 23,
                        "name": "Worth Tonry",
                        "gender": "Male",
                        "email": "wtonrym@dell.com",
                        "phone": "2336694676",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/23.jpg"
                    },
                    {
                        "id": 24,
                        "name": "Myrtie De Wolfe",
                        "gender": "Female",
                        "email": "mden@goo.ne.jp",
                        "phone": "3358201653",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/24.jpg"
                    },
                    {
                        "id": 25,
                        "name": "Fields Gerrill",
                        "gender": "Male",
                        "email": "fgerrillo@tinyurl.com",
                        "phone": "2404077524",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/25.jpg"
                    },
                    {
                        "id": 26,
                        "name": "Frankie Fortesquieu",
                        "gender": "Male",
                        "email": "ffortesquieup@simplemachines.org",
                        "phone": "6736762815",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/26.jpg"
                    },
                    {
                        "id": 27,
                        "name": "Ellerey Millward",
                        "gender": "Male",
                        "email": "emillwardq@alibaba.com",
                        "phone": "3369520739",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/27.jpg"
                    },
                    {
                        "id": 28,
                        "name": "Alard Coatts",
                        "gender": "Male",
                        "email": "acoattsr@ca.gov",
                        "phone": "1851351866",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/28.jpg"
                    },
                    {
                        "id": 29,
                        "name": "Frannie Beccera",
                        "gender": "Female",
                        "email": "fbecceras@economist.com",
                        "phone": "7189149119",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/29.jpg"
                    },
                    {
                        "id": 30,
                        "name": "Aldus Happs",
                        "gender": "Male",
                        "email": "ahappst@goodreads.com",
                        "phone": "5576884612",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/30.jpg"
                    },
                    {
                        "id": 31,
                        "name": "Udale Daughton",
                        "gender": "Male",
                        "email": "udaughtonu@sun.com",
                        "phone": "3601336180",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/31.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Brant Cartmell",
                        "gender": "Male",
                        "email": "bcartmellv@vimeo.com",
                        "phone": "8832209377",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/32.jpg"
                    },
                    {
                        "id": 33,
                        "name": "Petunia Scrivner",
                        "gender": "Female",
                        "email": "pscrivnerw@infoseek.co.jp",
                        "phone": "1125486328",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/33.jpg"
                    },
                    {
                        "id": 34,
                        "name": "Dyna Shepherdson",
                        "gender": "Female",
                        "email": "dshepherdsonx@go.com",
                        "phone": "6872336021",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/34.jpg"
                    },
                    {
                        "id": 35,
                        "name": "Ellwood Kull",
                        "gender": "Male",
                        "email": "ekully@stumbleupon.com",
                        "phone": "4273979342",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/35.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Raf Lindeberg",
                        "gender": "Female",
                        "email": "rlindebergz@virginia.edu",
                        "phone": "8775432434",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/36.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Channa McLarty",
                        "gender": "Female",
                        "email": "cmclarty10@oaic.gov.au",
                        "phone": "4056743151",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/37.jpg"
                    },
                    {
                        "id": 38,
                        "name": "Sigfrid Guillard",
                        "gender": "Male",
                        "email": "sguillard11@hatena.ne.jp",
                        "phone": "2413620791",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/38.jpg"
                    },
                    {
                        "id": 39,
                        "name": "Steven Lettson",
                        "gender": "Male",
                        "email": "slettson12@thetimes.co.uk",
                        "phone": "8739164479",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/39.jpg"
                    },
                    {
                        "id": 40,
                        "name": "Edee Whyley",
                        "gender": "Female",
                        "email": "ewhyley13@epa.gov",
                        "phone": "9411401133",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/40.jpg"
                    },
                    {
                        "id": 41,
                        "name": "Jameson Boldt",
                        "gender": "Male",
                        "email": "jboldt14@webs.com",
                        "phone": "5207861100",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/41.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Celestina McGeneay",
                        "gender": "Female",
                        "email": "cmcgeneay15@apache.org",
                        "phone": "8865052890",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/42.jpg"
                    },
                    {
                        "id": 43,
                        "name": "Wilone Jankowski",
                        "gender": "Female",
                        "email": "wjankowski16@un.org",
                        "phone": "5138822466",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/43.jpg"
                    },
                    {
                        "id": 44,
                        "name": "Cullan Pach",
                        "gender": "Male",
                        "email": "cpach17@pen.io",
                        "phone": "4045165605",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/44.jpg"
                    },
                    {
                        "id": 45,
                        "name": "Cate Arenson",
                        "gender": "Female",
                        "email": "carenson18@people.com.cn",
                        "phone": "4535632564",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/45.jpg"
                    },
                    {
                        "id": 46,
                        "name": "Frankie Borthe",
                        "gender": "Female",
                        "email": "fborthe19@mtv.com",
                        "phone": "8985618401",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/46.jpg"
                    },
                    {
                        "id": 47,
                        "name": "Hetti Baggot",
                        "gender": "Female",
                        "email": "hbaggot1a@blogtalkradio.com",
                        "phone": "1453100697",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/47.jpg"
                    },
                    {
                        "id": 48,
                        "name": "Godfry Dooly",
                        "gender": "Male",
                        "email": "gdooly1b@instagram.com",
                        "phone": "4574485063",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/48.jpg"
                    },
                    {
                        "id": 49,
                        "name": "Delbert Haward",
                        "gender": "Male",
                        "email": "dhaward1c@kickstarter.com",
                        "phone": "9523240746",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/49.jpg"
                    },
                    {
                        "id": 50,
                        "name": "Reginald Benterman",
                        "gender": "Male",
                        "email": "rbenterman1d@artisteer.com",
                        "phone": "2661546095",
                        "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/50.jpg"
                    }
                ]
            }
        )
    }
}

export const addContact = (contact) => {
    return (dispatch) => {
        dispatch({
                type: ADD_CONTACT,
                data: contact
            }
        )
    }
}

export const deleteContact = (id) => (dispatch) => {
    dispatch({type: DELETE_CONTACT, data: id})
}