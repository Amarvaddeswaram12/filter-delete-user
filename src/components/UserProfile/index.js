import './index.css'

const UserProfile = props => {
  const {userDetails, onSeleteUser} = props
  const {imageUrl, name, role, uniqueNo} = userDetails
  const onDeleteuser = () => {
    onSeleteUser(uniqueNo)
  }
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="profile-pic" alt="profile-pic" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
        <button className="delete-button" type="button" onClick={onDeleteuser}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
            alt="deleteimg"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}
export default UserProfile
