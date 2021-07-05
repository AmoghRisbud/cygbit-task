import "./User.css"

const User = (props) => {
    const { id ,firstname, lastname, email } = props;
    var avatar = firstname.charAt() + lastname.charAt();
    
    return (
        <a href={`/details/${id}`} className="user">
            <div className="info">
                <h1>{id}</h1>
                <div className="symbol">
                    <h1 >{avatar}</h1>
                </div>
                <h1 className='email'>{email}</h1>
                <h1>{firstname}</h1>
                <h1>{lastname}</h1>   
            </div>
        </a>
    );
};

export default User;