export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'Branden.',
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
        abouttext: "I used to be a moderately successful musician, and now I am a moderately talented software developer. Like many others, I needed a career change and decided to follow through with a passion I had years ago.   Obsessing over my Xanga page, or customizing the details of my  MySpace  was never something I thought could lead to a career. My passion for web development, and my drive for getting things done led me to the Case Western Reserve University Coding Bootcamp.  I am aware that full stack development cannot be mastered in six months, but the real value is the effort I put forth to confidently study each skill.  In this time I have developed dynamic applications using HTML, CSS, JavaScript, React, SQL, JSON, AJAX, NodeJS, apps using third-party APIs,  got really good at debugging, and all during the new reality of the COVID-19 pandemic.   With continued learning, I look forward to working with passion, and integrity for a company whose values are aligned with my own.   ",
        aboutImage:'https://i.ibb.co/nkwkH4V/tie5.png',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
            id: 1,//DO NOT CHANGE
            title:"I'm Hungry App", //Project Title 
             service:'Project One', // Service Type
            //Project Image 
             imageSrc:"https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
             //Project URL
             url:'https://brandenlanghals.github.io/imhungryapp/'
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'Everyday Sensei',
                service: 'Project Two',
                imageSrc: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'https://github.com/Brandenlanghals/EverydaySensei'
            },
            { 
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Node Burgers',
                service: '',
                imageSrc: "https://images.unsplash.com/photo-1511500118080-275313ec90a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'https://nodeburgers.herokuapp.com/burgers'
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Green Thumb',
                service: 'Bootcamp Final Project',
                imageSrc: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
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
            {   name:'Click here to check out my Github',
                url:'https://github.com/Brandenlanghals'},
            // {
            //     name: 'Behance',
            //     url: 'https://www.behance.net/chetanverma'
            // },
            // {
            //     name: 'Dribbble',
            //     url: 'https://dribbble.com/chetanverma'
            // },
            // {
            //     name: 'Instagram',
            //     url: 'https://www.instagram.com/cv.uidesign/'
            // }

        ]
    }