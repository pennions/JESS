export function setupNotificationTrigger(buttonId, notificationId) {

    document.getElementById(buttonId).addEventListener('click', () => {
        const notificationElement = document.getElementById(notificationId);
        console.log(buttonId, notificationId);

        notificationElement.querySelector('.close').addEventListener('click', (e) => {
            e.target.parentNode.removeAttribute('open');
        });

        if (notificationElement.hasAttribute('open')) {
            notificationElement.removeAttribute('open');
        }
        else {
            notificationElement.setAttribute('open', '');
        }
    });
};