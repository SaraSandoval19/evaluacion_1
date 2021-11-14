var list_menu=[
    {
        id: '1',
        title:'suma',
        option_code:'suma'
    },
    {
        id: '2',
        title:'resta',
        option_code:'resta'
    },
    {
        id: '3',
        title:'multiplicación',
        option_code:'multi'
    },
    {
        id: '4',
        title:'división',
        option_code:'division'
    },
    {
        id: '5',
        title:'raíz cuadrada',
        option_code:'raiz'
    },
    {
        id: '6',
        title:'fórmula general',
        option_code:'form_gen'
    },
    {
        id: '7',
        title:'binomio cuadrado perfecto',
        option_code:'bin_cp'
    }
];

function onView(index){
    let actualSection=document.getElementById(`section_${index}`);

    for(var i=0; i<=list_menu.length-1; i++){
        if(i==index){
            slowShow(actualSection);
        }else{
            let otherSection=document.getElementById(`section_${i}`);
            slowHide(otherSection);
        }
    }
    
}

function crearMenu(){
    let ul_menu=document.getElementById('ul_menu'), ul_menu_movil=document.querySelector('.ul_menu-movil'); 
    let li='', li_movil='<a href="#" data-target="slide-out" class="sidenav-close"><i class="material-icons color-dark">clear</i></a>';
    
    for(var i=0; i<=list_menu.length-1; i++){
        li+=`<li onclick="onView(${i})"><a href="#" class="mayus">${list_menu[i].title}</a></li>`;
        li_movil+=`<li onclick="onView(${i})" class="float-default"><a href="#" data-target="slide-out" class="color-dark mayus sidenav-close">${list_menu[i].title}</a></li>`;
    }
    ul_menu.innerHTML=li;
    ul_menu_movil.innerHTML=li_movil;
}

function crearSecciones(){
    let content=document.getElementById('content');
    for(var i=0; i<=list_menu.length-1; i++){
        let div=document.createElement('div');
        div.classList='section'; div.id=`section_${i}`;
        //div.style.left=`${(100*i)}%`;

        const frame=document.createElement('iframe');
        frame.id=`frame-${list_menu[i].option_code}`;
        frame.src=`src/pages/${list_menu[i].option_code}.html?title='${list_menu[i].title}'`;

        div.appendChild(frame);
        content.appendChild(div);         
    }
}

function pageOnload(value){
    let head=document.head;

    // IMPORTS LINK TAG
    let materializeCSS=document.createElement('link');
    materializeCSS.href='../CSS/materialize.css'; materializeCSS.rel='stylesheet';

    let googleapis=document.createElement('link');
    googleapis.href='https://fonts.googleapis.com'; googleapis.rel='preconnect';

    let gstatic=document.createElement('link');
    gstatic.href='https://fonts.gstatic.com'; gstatic.rel='preconnect';

    let poppins=document.createElement('link');
    poppins.href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'; 
    poppins.rel='stylesheet';

    let raod=document.createElement('link');
    raod.href='https://fonts.googleapis.com/css2?family=Road+Rage&display=swap'; 
    raod.rel='stylesheet';

    let materialIcons=document.createElement('link');
    materialIcons.href='https://fonts.googleapis.com/icon?family=Material+Icons'; materialIcons.rel='stylesheet';

    let styles=document.createElement('link');
    styles.href='../CSS/styles.css'; styles.rel='stylesheet';


    // IMPORTS SCRIPTS TAG 

    let jQuery=document.createElement('script');
    jQuery.src='https://code.jquery.com/jquery-3.2.1.min.js'; 
    jQuery.type='text/javascript'; jQuery.crossOrigin='anonymous';

    let materializeJS=document.createElement('script');
    materializeJS.src='../JS/materialize.js'; 
    materializeJS.type='text/javascript';

    let tags=[materializeCSS,googleapis,gstatic,poppins,materialIcons,styles,jQuery,materializeJS];

    for(var i=0; i<=tags.length-1; i++){
        head.appendChild(tags[i]);
    }

    let titleItem=document.getElementById(`title`);
    titleItem.innerHTML=getFrameValue(value).replace(`'`,``).replace(`'`,``).toUpperCase();
}

function getFrameValue(value){
    var url = window.location.search.substring(1); //get rid of "?" in querystring
    var qArray = url.split('&'); //get key-value pairs
    for (var i = 0; i < qArray.length; i++) 
    {
        var pArr = qArray[i].split('='); //split key and value
        if (pArr[0] == value) 
            return decodeURI(pArr[1]); //return value
    }
}

function slowHide(element){
    element.style.opacity="0";
    setTimeout(function(){
        element.style.display="none";
    },200);
}
function slowShow(element){
    element.style.display="block";
    setTimeout(function(){
        element.style.opacity="1";
    },200);
}

function hide(element){
    element.style.display='none';
}
function showBlock(element){
    element.style.display='block';
}
function showFlex(element){
    element.style.display='flex';
}

function cleanTag(element){
    element.innerHTML='';
}

function validInputNumber(id){
    let element=document.getElementById(`input_${id}`);
    var btn_go=document.getElementById('btn-go');
    var log=document.getElementById('log');
    var regNumbers = /^(?!0\d)\d*(\.\d+)?$/;
    if(element.value.match(regNumbers)){
        if(element.value.length>0){
            element.classList='valid-input right-text';
            btn_go.disabled = false;
            log.innerHTML='<i class="log-ok material-icons title-content text-center center">check</i>';
            return true;
        }else{
            element.classList='invalid-input right-text';
            btn_go.disabled = true;
            log.innerHTML='<i class="log-error material-icons title-content text-center center">close</i>&nbsp;&nbsp;&nbsp;SOLO SE ADMITEN NUMEROS';
            return false;
        }
    }else{
        element.classList='invalid-input right-text';
        btn_go.disabled = true;
        log.innerHTML='<i class="log-error material-icons title-content text-center center">close</i>&nbsp;&nbsp;&nbsp;SOLO SE ADMITEN NUMEROS';
        return false;
    }
}

var go={
    suma: function(){

    },
    resta: function(){
    }
}