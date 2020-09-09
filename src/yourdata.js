export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'Branden Langhals',
        headerTagline: [//Line 1 For Header
                        'Hi I am Branden.',
                        //Line 2 For Header
                        'A Full Stack Developer  ',
                        //Line 3 For Header
                        'from Cleveland, Ohio'
    ],
        //Contact Email
        contactEmail:'brandenlanghals@gmail.com',
        // Add Your About Text Here
        abouttext: "I used to be a moderately successful musician, and now I am a moderately talented software developer. In need of a career change, I decided to follow through with a passion I had years ago. Obsessing over my Xanga page, or customizing the details of my MySpace was never something I thought could lead to a career. My passion for web development, and my drive for getting things done led me to the Case Western Reserve University Coding Bootcamp. I am aware that full stack development cannot be mastered in six months, but the real value is the effort I put forth to confidently hone each skill. During my cohort I have developed dynamic applications using HTML, CSS, JavaScript, React, SQL, JSON, AJAX, NodeJS, apps using third-party APIs,  got really good at debugging, and all during the new reality of the COVID-19 pandemic.   With continued learning, I look forward to working with passion, and integrity for a company whose values are aligned with my own.   ",
        aboutImage:'https://i.ibb.co/yPR5Jgt/handsome-Hunk.png',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       
       projects:[
           {
            id: 1,//DO NOT CHANGE
            title:"I'm Hungry App", //Project Title 
             service:'Project One', // Service Type
            //Project Image 
             imageSrc:"https://i.ibb.co/Njy2sBm/Screen-Shot-2020-07-24-at-11-25-18-PM.png",
             //Project URL
             url:'https://brandenlanghals.github.io/imhungryapp/'
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'Everyday Sensei',
                service: 'Project Two',
                imageSrc: "https://i.ibb.co/GQd201p/Screen-Shot-2020-07-11-at-9-39-57-PM.png",
                url: 'https://github.com/Brandenlanghals/EverydaySensei'
            },
            { 
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Node Burgers',
                service: 'MVC & Node Fun',
                imageSrc: "https://i.ibb.co/h8CSrg6/Screen-Shot-2020-07-10-at-9-30-41-PM.png",
                url: 'https://nodeburgers.herokuapp.com/burgers'
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Green Thumb',
                service: 'Bootcamp Final Project(Coming Soon!)',
                imageSrc: "https://i.ibb.co/H7kKQZ1/Screen-Shot-2020-07-08-at-5-00-39-PM-copy.png",
                url: ''
           }

                    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Click here to view my Github',
                url:'https://github.com/Brandenlanghals'},
            {
                name: 'Click here to view my resume',
                url: 'https://ibb.co/G3ygDwW'
            },
            {
                name: 'Click here to view my LinkedIn',
                url: 'https://www.linkedin.com/in/brandenlanghals/'
            },
            // {
            //     name: 'Instagram',
            //     url: 'https://www.instagram.com/cv.uidesign/'
            // }

        ]
    }