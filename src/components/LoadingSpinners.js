import '../styles/spinners.css'

export const EllipsisSpinner = () => {
    return (
        <div className="spinner-container">
            <div className="lds-ellipsis">
                <div></div><div></div><div></div><div></div>
            </div>
        </div>
    )
}

export const FacebookSpinner = () => {
    return (
        <div class="lds-facebook">
            <div></div><div></div><div></div>
        </div>
    )
}

export const RippleSpinners = () => {
    return (
        <div class="lds-ripple">
            <div></div><div></div>
        </div>
    )
}
