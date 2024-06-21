import './userInfo.css';

const UserInfo = ({ user }) => {
    return (
        <div className="user-info">
        <div className="profile-card">
            <div className="profile-picture"></div>
            <h2>{user.name} {user.surname}</h2>
        </div>
        <div className="details-card">
            <h3>INFORMACION DEL PROVEEDOR</h3>
            <div className="details">
                <p><strong>Email</strong><span>{user.email}</span></p>
                <p><strong>Numero celular</strong><span>{user.phoneNumber}</span></p>
                <p><strong>Direccion</strong><span>{user.address}</span></p>
            </div>
        </div>
    </div>
    );
};

export default UserInfo;