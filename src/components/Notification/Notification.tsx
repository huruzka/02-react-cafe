import notifCss from "../Notification/Notification.module.css";

const Notification = () => {
    return(
        <p  className = { notifCss.message } > No feedback yet</p>
)
}

export default Notification;