const toggleButton = document.querySelector( '.nav__toggle' );
const nav = document.querySelector( '.nav' );

toggleButton.addEventListener( 'click', function() {
    if ( toggleButton.classList.contains( 'active' ) ) {
        toggleButton.classList.remove( 'active' );
        nav.classList.remove( 'open' );
    } else {
        toggleButton.classList.add( 'active' );
        nav.classList.add( 'open' );
    }
});
