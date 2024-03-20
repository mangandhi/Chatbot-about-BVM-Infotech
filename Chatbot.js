var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","I am Mr. Chatbot","What do you want to know about our website?"],
        options: ["Home","Technologies","Services","Blog","About Us"],
    },
    home: {
        title:["We are a leading software development company that offers top-rated Software Development Services due to our vast experience, team of skilled professionals, key business insights, and a dedicated working process."],
        options:[],
        url : {
           more:"https://bvminfotech.com/",
           link:["https://bvminfotech.com/"]
        }
    },
    
    technologies: {
        title:["Mobile app development requires implementation of latest technologies, tools and applications that streamline the prototyping, development, designing and testing processes. Web development may look simple is one of the most challenging and complex operations because it deals with user experience.","The technologies used for web development are : "],
        options:["Design","Frontend","Backend","Database","Infrastructure"],
        url : {
            
        }
    },

    design:{
        title:['Photoshop','Figma','Illustrator','Maya','Max','Blender'],
    },

    frontend:{
        title:['Android Studio','Xcode','React Native','Flutter','Kotlin','Java']
    },

    backend:{
        title:['PHP','Node.js','Python','Laravel','CodeIgniter','Express.js']
    },
    
    database:{
        title:['MongoDB','MySQL','Firebase','DynamoDB','PostgreSQL','Room']
    },
    
    infrastructure:{
        title:['Amazon Web Services','Google Cloud','Digital Ocean','Microsoft Azure','Selenium','Gradle']

    },

    services: {
        title:[],
        options:['Development Services','Other Services'],
        url : {
            
        }
    },

    development:{
        title:["Click to know more.."],
        options:['Android App Development','ISO App Development','Web Development','UI/UX Development'],
        url:{
            more:"https://bvminfotech.com/",
            link:["https://bvminfotech.com/android-app-development/","https://bvminfotech.com/iso-app-development/","https://bvminfotech.com/website-development/","https://bvminfotech.com/ui-ux-development/"]
        }
    },
    
    other:{
        title:["Click to know more.."],
        options:['Cross Platform','Digital Marketing','Tranding Technologies','Project Development'],
        url:{
            more:"https://bvminfotech.com/",
            link:["https://bvminfotech.com/cross-platform/","https://bvminfotech.com/digital-marketing/","https://bvminfotech.com/tranding-technologies/","https://bvminfotech.com/project-development/"]
        }
    },
    
    blog:{
        title:[],
        options:['Business','Consulting','Financial','UI/UX Design','User Research'],
        url:{
            more:"https://bvminfotech.com/blog/",
            link:["https://bvminfotech.com/business/","https://bvminfotech.com/consulting/","https://bvminfotech.com/financial/","https://bvminfotech.com/ui-ux-design/","https://bvminfotech.com/user-research/"]
        }
    },

    about:{
        title:[],
        options:[],
        url:{
            more:"https://bvminfotech.com/about/",
        }
    }
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}