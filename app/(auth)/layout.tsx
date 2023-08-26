const Layout = ({children} : {children: React.ReactNode}) => {
    return ( 
        <div className="flex justify-center items-center bg-slate-300 h-full">
            {children}
        </div>
     );
}
 
export default Layout;