import './Prepare.scss';
function Prepare() {



    return (
        <div className="prepare" >
            <form className="prepare__form" action="mailto:mydoc@myhospital.com?subject=Intake" method="post" enctype="text/plain">
                <div className="prepare__container">
                    <label htmlFor="name">Name:</label>
                    <input className="prepare__input" type="text" name="name" />
                </div>
                <div className="prepare__container">
                    <label htmlFor="email">Email:</label>
                    <input className="prepare__input" type="email" name="email" />
                </div>
                <div className="prepare__container">
                    <label htmlFor="missedDoses">Check here if you have missed any doses</label>
                    <input type="checkbox" value="true" name="missedDoses" />
                </div>
                <div className="prepare__container">
                    <label htmlFor="leafyGreens">Check here if you have had excessive leafy greens</label>
                    <input type="checkbox" value="true" name="leafyGreens" />
                </div>
                <input className="prepare__submit" type="submit" value="Send" />
                <input className="prepare__reset" type="reset" value="Reset" />
            </form>
        </div>
    );
}

export default Prepare;
