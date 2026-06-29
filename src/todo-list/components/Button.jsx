export default function Button(props){
    return (
        <button {...props} className="bg-slate-500 px-4 py-2 rounded-md text-white font-medium">
            {props.children}
        </button>
    )
}