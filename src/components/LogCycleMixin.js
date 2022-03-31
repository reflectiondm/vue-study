export const logCycleMixing = {
    created: function() {
        console.log('mixing hook is called');
    },
    destroyed: function() {
        console.log('componet has been destroyed');
    }
}

export const mouseTrack = () =>  {
    let eventHandler = e => {
        var x = e.clientX;
        var y = e.clientY;
        document.title =  "Coordinates: (" + x + "," + y + ")";
    };
    return {
        created: function() {
            console.log('listening to mouse');
            window.addEventListener('mousemove', eventHandler);
        },
        destroyed: function() {
            document.title = 'Hello World';
            console.log('stop listening to mouse');
            window.removeEventListener('mousemove', eventHandler);
        }
    }
}