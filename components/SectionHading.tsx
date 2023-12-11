
type SectionHaddingProps = {
    children :React.ReactNode
}

function SectionHadding (  {children} : SectionHaddingProps ) {

    return ( 
        <h2 className="text-3xl mb-8 font-medium capitalize text-center">
                {children}

            </h2>
    )


}


export default SectionHadding;
