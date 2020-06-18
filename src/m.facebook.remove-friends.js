let windowScroll = 0;
const intervalId = setInterval(() => {
    window.scrollTo(0, windowScroll);
    windowScroll = windowScroll + 2000;
    if (windowScroll > 40000) {
        clearInterval(intervalId);
        removeFriends();
    }
}, 1500);

function removeFriends () {
    const removeIcons = document.getElementsByClassName('img _71t _8yzt img _2sxw');
    const removeIconsLength = removeIcons.length;
    for (let j = 0; j < removeIconsLength; ++j) {
        removeIcons[j].click();
        const dropDownItems = document.getElementsByClassName('_54k8 _55i1 _58a0 touchable');
        let unFriendBtn = null;
        for (let i = 1; i < dropDownItems.length; ++i) {
            if (dropDownItems[i].innerText === 'Unfriend') {
                unFriendBtn = dropDownItems[i];
                break;
            }
        }

        if (unFriendBtn !== null) {
            unFriendBtn.click();
        }
    }
}
