import React from "react";
import Nav from './Nav'
import Posts from './Posts'
import CreateSalon from './CreateSalon'
import Stories from './Stories'
import WhatsNew from './WhatsNew'

const Tasnime = {
    name: "Tasnime hemici",
    pfp: "https://scontent.fczl1-2.fna.fbcdn.net/v/t1.6435-9/192749671_310318797323559_3898354302225996110_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEqE3Ie1WfZ2ne3fAxmy7YX0wi5dpS2turTCLl2lLa26tfuvtssCGTv3DiR5Aaz5YmwuO7G6l2efdAq9xDMXgwm&_nc_ohc=wmONPOECWBMAX9dnP8x&_nc_ht=scontent.fczl1-2.fna&oh=e36a1daa1c7321ca7238481ba5166dbd&oe=61455983",
    story: "https://scontent.fczl1-2.fna.fbcdn.net/v/t1.6435-9/192749671_310318797323559_3898354302225996110_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEqE3Ie1WfZ2ne3fAxmy7YX0wi5dpS2turTCLl2lLa26tfuvtssCGTv3DiR5Aaz5YmwuO7G6l2efdAq9xDMXgwm&_nc_ohc=wmONPOECWBMAX9dnP8x&_nc_ht=scontent.fczl1-2.fna&oh=e36a1daa1c7321ca7238481ba5166dbd&oe=61455983"
}

const Amani = {
    name: "Amani hamrouche",
    story : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivqrgLNtdkqItBsnqmGt203gfpyqo_n7wjQ&usqp=CAU"
}
const Moun = {
    story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7KuGMNCXsy3hYpxSoPXlvdWfxYRUdhjGHg&usqp=CAU",
    name: "Boumerah Abd Elmoumen",
    pfp : "https://scontent.fczl1-2.fna.fbcdn.net/v/t39.30808-6/234665543_3000323763559430_5612485807517169173_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEb6k1T7N36fqj7fVZNO_tbttYe_ZY_czK21h79lj9zMsDd11q1QEG-UYr3M-sFKYraWvKXqZJzk9MAjZMIYMxI&_nc_ohc=tGYOshgHvwsAX8tDpDM&_nc_ht=scontent.fczl1-2.fna&oh=6443a4af7757cae6af7254413c1928d0&oe=614585CB"
}

const Samio = {
    name: "Sami Bēñ",
    story: "data:image/jpeg;base64,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",
    pfp:"https://scontent.fczl1-2.fna.fbcdn.net/v/t1.6435-9/73038550_2475252235897397_423262868037697536_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFDOL2fhVg2_keKdHOtC-jGtHvdFhISuSW0e90WEhK5JVCVuxOhSrBtsyzCMohPQR_ySolmIepVLp8gvaaj5tOS&_nc_ohc=HqA_hCqhdyEAX-AteN0&_nc_ht=scontent.fczl1-2.fna&oh=9996d854937bd891d87891a4eda3f55e&oe=61433FE0",
}

const Friends = [Samio, Tasnime, Amani, Moun]
const messageNotif = {
    number: 0,
    notifs :  [],
}
const notifNotif = {
    number: 1,
    notifs: [
        {
            user: "BechBech",
            type: "friendRequest",
            time: "3 days ago",
            state: "unread",
        }
    ],
}
const accountNotif = {
    number: 0,
    notifs: [],
}
const Notifications = [messageNotif, notifNotif, accountNotif]

const post1 = {
    acc: Moun,
    contentType: 'text',
    content: "from 2007 to 2017 was the best decade we lived and ever gonna live",
    time: "5 d · ",
    likes: ['Nadir Kihel', 'Farouk OM', '','','','','','',''],
    comments: [{
        acc: Moun,
        comment: 'xD',
        reactions: {
            likes: ['Tasnime hemici', 'Sami Ben'],
            heart: ['Amani hamrouche'],
            sad : ["Nadir kihel", "Farouk OM"]
        },
        replies: []
    }, {}, {}, {}, {}],
    shares: [{}]
}
const post2 = {
    acc: Tasnime,
    contentType: 'image',
    content: "https://scontent.fczl1-2.fna.fbcdn.net/v/t1.15752-9/201927826_261360065754113_599522006155149149_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEwbQ3BYX31HTJly7r7Sfzi1Mb36GRFypfUxvfoZEXKl4T3BH8gL5c1mglaeGH6yE-vt7CqdWf5YQmdOfrTLIcZ&_nc_ohc=807shLo3tN0AX9N08hI&_nc_ht=scontent.fczl1-2.fna&oh=69cb3a2d88ef6cd2a4487efc0085295b&oe=6164DD35",
    time: "2 h · ",
    likes: ['Sami ben', 'Amani Hamrouche','', '','','','','','',''],
    comments: [{
        acc: Samio,
        comment: 'heyy!!',
        reactions: {
            likes: ['Sami Ben'],
            heart: ['Amani hamrouche'],
            sad : []
        },
        replies: []
    }],
    shares: []
}
const post3 = {}

const posts = [post1, post2, post3]

const User = {
    name: "Sami Bēñ",
    pfp: "https://scontent.fczl1-2.fna.fbcdn.net/v/t1.6435-9/73038550_2475252235897397_423262868037697536_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFDOL2fhVg2_keKdHOtC-jGtHvdFhISuSW0e90WEhK5JVCVuxOhSrBtsyzCMohPQR_ySolmIepVLp8gvaaj5tOS&_nc_ohc=HqA_hCqhdyEAX-AteN0&_nc_ht=scontent.fczl1-2.fna&oh=9996d854937bd891d87891a4eda3f55e&oe=61433FE0",
    friends: Friends,
    notifications: Notifications,
    posts : posts,
}


const Main = () => {
    return (
        <React.Fragment>
            <Nav
                notifications = {User.notifications}
            />
            <div className='container'>
                <div className='main-container'>
                    <Stories
                        user = {User}
                    />
                    <WhatsNew/>
                    <CreateSalon/>
                    <Posts
                        posts = {User.posts}
                    />
                    
                </div>
            </div>

        </React.Fragment>
    )
}


export default Main;