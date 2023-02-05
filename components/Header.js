import headerStyles from '../styles/Header.module.css'

const Header = () => {
    const x = 1;
    return (
        <div>
            <h1 className= {headerStyles.title}>
                <span>Vishnuuu</span> News
            </h1>
            {/* <style jsx>
                {`
                    .title {
                        color: ${x > 3?  "red" : "blue"};
                    }
                `}
            </style> */}
 
            <p className={headerStyles.description}> I will write my news </p>

        </div>
    )
}

export default Header;