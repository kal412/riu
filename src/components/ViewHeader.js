import '../styles/viewHeader.css'

const ViewHeader = ({title}) => {
    return (
        <div className="view-header">
                <h1 className="view-header__heading">{title}</h1>
                 <img className="view-header__image" src="https://images.unsplash.com/photo-1563968743333-044cef800494?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80"/>
        </div>
    )
}

export default ViewHeader