import imgload from "./img/icons8-loading.gif"
import "./css/ProcessStatus.css"

function LoadingSpinner() {
    return (
        <div className="statusModal">
            <img src={imgload}/>
            <p className="textModal">Loading...</p>
        </div>
    )
}

function ErrorMessage() {
    return (
        <div className="statusModal">
            <p className="textModal">Failed!</p>
        </div>
    )
}

function SuccessMessage() {
    return (
        <div className="statusModal">
            <p className="textModal">Done!</p>
        </div>
    )
}

function DefaultContent() {
    return (
        <div className="statusModal">
            <p className="textModal">Doing nothing.</p>
        </div>
    )
}

export default function ProcessStatus({ status }) {
    const statusComponents = {
        loading: <LoadingSpinner />,
        error: <ErrorMessage />,
        success: <SuccessMessage />,
        default: <DefaultContent />
    };

    return <div>{statusComponents[status] || statusComponents.default}</div>;
}