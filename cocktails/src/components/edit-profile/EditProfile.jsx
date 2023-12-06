import './editProfile.css';

export default function EditProfile(){
    return(<div className="container-edit-profile">
    <form className="form-edit-profile" method="post">
      <div className="form-title-edit-profile">
        <span>Edit your</span>
      </div>
      <div className="title-2">
        <span>PROFILE</span>
      </div>
      <div className="input-container-edit-profile">
        <input
          className="input-username-edit-profile"
          type="username"
          placeholder="Enter your new username"
          defaultValue="simona"
        />
        <span> </span>
      </div>
      <div className="input-container-edit-profile">
        <input
          className="input-mail-edit-profile"
          type="email"
          placeholder="Enter your new email"
          defaultValue="simona@abv"
        />
        <span> </span>
      </div>
      <button type="submit" className="submit-edit-profile">
        <span className="sign-text">Edit</span>
      </button>
    </form>
  </div>
  );
}