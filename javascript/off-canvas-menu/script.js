function openSidebar () {
    var main = document.querySelector('.main');
    main.style.position = 'absolute';
    main.style.top ='0';
    main.style.left = '30%';
    main.style.width = '100%';
    main.style.height = '100vh'
    main.style.padding = '10px'


    // position: absolute;
    // background-color: rgb(231, 225, 236);
    // left: 30%;
    // width: 100%;
    // top: 0;
    // height: 100vh;
    // padding: 10px;
}

function closeSidebar () {
    var main = document.querySelector('.main')
    main.style.position = 'fixed';
    main.style.top = '0';
    main.style.left = '0';
    main.style.right = '0';
    main.style.bottom = '0';
}