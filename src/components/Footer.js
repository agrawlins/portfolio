import React from "react";

const Footer = () => {
    const styles = {
        footer: "h-24 w-full flex justify-center items-center self-end opacity-75 bg-slate-900 text-white"

    }
    return (
        <div className={styles.footer}>
            <h1>Copyright © 2022 Adam G. Rawlins. All Other Rights Reserved.</h1>
        </div>
    )
}

export default Footer