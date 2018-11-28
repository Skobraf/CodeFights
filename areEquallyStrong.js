function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    var me = [yourLeft, yourRight];
    var friend = [friendsLeft, friendsRight];
    
    if(me.indexOf(friendsLeft) != -1 && me.indexOf(friendsRight) != -1) {
        return true;
    }
    else
        return false;
}
