export function configureNotification(){
    Notification.requestPermission().then((Permission) => {console.log(Permission)})
}