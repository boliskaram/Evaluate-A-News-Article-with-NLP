    function validateUrl(entryurl)
    {
        var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
        var regexp = new RegExp(expression);
        return regexp.test(entryurl);
    }

    export {
        validateUrl
    }