const Boton = ({ children, className = '', ...args }) => {

    return (
        <button 
            className={`py-2 px-4 bg-[#f49237] text-white text-center${className}`} 
            {...args}
        >
            {children}
        </button>
    )
}

export default Boton;