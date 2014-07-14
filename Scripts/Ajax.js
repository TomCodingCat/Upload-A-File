/*
* Creating the XMLHttpRequest object.
*/

/** 
* This function, createXMLHttpRequest, checks to see what objects the
* browser supports in order to create the right kind of XMLHttpRequest
* type object to return.
*
* @return Returns an XMLHttpRequest type object or false.
* @type Object | Boolean
*/

function createXMLHttpRequest() {
    var request = false;
    /* Does this browser support the XMLHttpRequest object? */
    if (window.XMLHttpRequest) {
        if (typeof XMLHttpRequest != 'undefined')
            /* Try to create a new XMLHttpRequest object */
            try {
                request = new XMLHttpRequest();
            } catch (e) {
                request = false;
            }
        /* Does this browser support ActiveX objects? */
    } else if (window.ActiveXObject) {
        /* Try to create a new ActiveX XMLHTTP object */
        try {
            request = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (e) {
            try {
                request = new ActiveXObject('Microsoft.XMLHTTP');
            } catch (e) {
                request = false;
            }
        }
    }
    return request;
}

/** 
* This function, requestData, takes the passed /p_request/ object and 
* sends  the passed /p_data/ to the passed /p_URL/. The /p_request/
* object calls the /p_func/ function on /onreadystatechange/.
*
* @param {Object} p_request The XMLHttpRequest object to use.
* @param {String} p_URL The URL to send the data request to.
* @param {String} p_data The data that is to be sent to the server through
*   the requst.
* @param {String} p_func The string name of the function to call on 
*   /onreadystatechange/.
* @param {String} p_method The method that the request should use to pass 
*   parameters.
* /*added by Tom --2014 05-30
* @param {Object} p_headers The headers necessary for the request, this is
*   used when you post a lot data
* added by Tom --2014 05-30//
*/

function requestData(p_request, p_URL, p_data, p_func, p_method, p_headers) {
    /* Does the XMLHttpRequest object exist? */
    if (p_request) {
        /*Is the posting method 'GET'? */
        if (p_method == 'GET') {
            p_request.open('GET', p_URL + '?' + p_data, true);
        }
        else {
            p_request.open('POST', p_URL, true);
        }
        p_request.onreadystatechange = p_func;
        /* Is the posting method 'GET'? */
        if (p_method == 'GET') {
            p_request.send(null);
        }
        else {
            if (typeof p_headers != "undefined") {
                for (var i = 0; i < p_headers.length; i++) {
                    var o = p_headers[i];
                    p_request.setRequestHeader(o.key, o.value);
                }
            }
            p_request.send(p_data);
        }
    }
}
