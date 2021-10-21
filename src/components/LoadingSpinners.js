import '../styles/spinners.css'

export const EllipsisSpinner = () => {
    return (
        <div className="container container-fluid">
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
