import './style.css'
export default function Row({ children }) {
    return (
        <>
            <h1>Cool Articles</h1>
            <div className="row">
                {children}
            </div>
        </>
    )
}