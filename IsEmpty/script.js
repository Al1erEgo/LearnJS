function isEmpty (obj) {
    for (let prop in obj) {
        if (prop) {
            return false;
        } else {
            return true;
        }
    }
}