import Me from "../About/Me"

interface BiographyProps {
    windowWidth: number
}

function Biography({ windowWidth }: BiographyProps) {
    return (
        <div className="w-5/8 tb:w-3/8 tb:float-left tb:fixed z-1">
            <Me windowWidth={windowWidth} />
        </div>
    )
}

export default Biography
