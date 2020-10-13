document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide',{
        perPage: 3,
        autoplay: "true",
        width: "450px",
        height: "450px",
        focus: "center",
        type: "loop",
        cover: "true",
        breakpoints:{
            '640': {
                perPage: 2,
                gap    : '1rem',
            },
            '480': {
                perPage: 1,
                gap    : '1rem',
            },
        }
    } ).mount();
} );