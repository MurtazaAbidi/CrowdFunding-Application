import React, { useState, useEffect } from "react";
import "./profile.css";

import ProfilePic from '../../Assets/profilepic.png'
import axios from "axios";
const ProfileValues = {
  name: "Murtaza Abidi",
  email: "murtaza@gmail.com",
  phone: "03331234567",
  cnic: "4230112345673",
  profileImage: ProfilePic,
  officeAddress: "Plot no. 426, Street no. 52, Shah latif Town, Karachi."
}

const imageMimeType = /image\/(png|jpg|jpeg)/i;

const Profile = () => {
  const [editProfile, setEditProfile] = useState(false);
  const [profileDetails, setProfileDetails] = useState({})
  const [tempData, setTempData] = useState({})

  useEffect(() => {
    axios.get(
      // body: JSON.stringify({
      `${process.env.REACT_APP_API_URL}/api/campaigner/profile`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
      }
    )
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.data);
          let responseData = {
            name: response.data.campaigner_name,
            email: response.data.campaigner_email,
            phone: response.data.campaigner_contact,
            cnic: response.data.campaigner_cnic,
            profileImage: response.data.campaigner_image?response.data.campaigner_image:ProfilePic,
            officeAddress: response.data.office_address,
            total_campaigns: response.data.totalcampaigns
          }
          setProfileDetails(responseData);
          setTempData(responseData)
        }
      })
      .catch(function (error) {
        console.log(error.response.data.msg);
        alert(error.response.data.msg);
      });
  }, [])

  const handleSubmit = (e) => {
    setProfileDetails({ ...profileDetails, name: e.target.name.value, phone: e.target.phone.value, cnic: e.target.cnic.value, officeAddress: e.target.officeAddress.value })
    const profileData = {
      campaigner_name: e.target.name.value,
      campaigner_email: profileDetails.email,
      campaigner_contact: e.target.phone.value,
      campaigner_cnic: e.target.cnic.value,
      campaigner_image: ProfilePic === profileDetails.profileImage ? null : profileDetails.profileImage,
      office_address: e.target.officeAddress.value,
    }
    setEditProfile(false)

    axios.put(
      // body: JSON.stringify({
      `${process.env.REACT_APP_API_URL}/api/campaigner/updateprofile`,
      profileData,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
      }
    )
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          alert(response.data);
        }
      })
      .catch(function (error) {
        console.log(error.response.data.msg);
        alert(error.response.data.msg);
      });
  }

  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  }
  useEffect(() => {
    let fileReader, isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result)
          setProfileDetails({ ...profileDetails, profileImage: result })
        }
      }
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }

  }, [file]);

  return (
    <div
      className="title profile-body"
      style={{ fontFamily: "'Josefin Sans', sans-serif" }}
    >

      <div className="profile-wrapper">
        <div className="left">
          {editProfile ? (
            <>
              <form>
                <input type="file"
                  id="file"
                  onChange={changeImageHandler}
                  accept="image/png, image/jpg, image/jpeg"
                  style={{ display: "none" }} />
                <label for="file" className="label-profile-image" style={{ cursor: "pointer" }}>
                  {/* <p style={{ color: "white", textDecoration: "underline"}}>
                  Click on Image to change the Profile Picture
                </p> */}
                  <div style={{ position: 'relative', height: 0, top: '6rem' }}>Change</div>
                  <img
                    className="edit-image"
                    src={profileDetails.profileImage}
                    alt="Profile Picture"

                  />
                </label>
              </form>
            </>
          ) : (
            <img
              style={{ height: 250, maxWidth: '17rem' }}
              src={profileDetails.profileImage}
              alt="Profile Picture"
            />
          )}
          {/* <div style={{border:'2px solid',height:250, textAlign:'center', backgroundImage:'url("https://i.imgur.com/cMy8V5j.png")', backgroundSize:'cover', backgroundRepeat:'no-repeat', }}>
            <div style={{ display:"flex",justifyContent:'center', alignItems:'center', backgroundColor: '#8686869e',height: 250, }}><label>sdfa</label></div>
          </div> */}
          {/* <img style={{height:250, opacity:1}} src="https://i.imgur.com/cMy8V5j.png" alt="user"  onClick={()=>{console.log('hello world ')}}/> */}
          <div
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              marginTop: "1rem",
              marginBottom: "0.1rem",
            }}
          >
            {profileDetails.name}
          </div>
          <p>Campaigner</p>
        </div>
        <div className="right">
          <div style={{ textAlign: "right", height: "1rem" }}>
            {editProfile === false ? (<button
              className="campaigner-profile-button"
              style={{ position: "relative", bottom: "2rem" }}
              onClick={() => {
                setEditProfile(!editProfile);
              }}
            >
              Edit Profile
            </button>) : null}
          </div>
          {editProfile ? (
            <form onSubmit={handleSubmit}>
              <div className="info">
                <h3>Personal Information</h3>

                <div className="info_data">
                  <div className="data input-profile-data">
                    <h4>Name</h4>
                    <input type="text" value={tempData.name} onChange={(e) => { setTempData({ ...tempData, name: e.target.value }) }} name="name" id="name" required />
                  </div>
                  <div className="data input-profile-data">
                    <h4>Email</h4>
                    {/* <input type="text" value={tempData.email} onChange={(e)=>{setTempData({...tempData, email:e.target.value})}} name="email" id="email" required/> */}
                    <p>{tempData.email}</p>
                  </div>

                </div>
                <div className="info_data">
                  <div className="data input-profile-data">
                    <h4>Phone</h4>
                    <input type="number" value={tempData.phone} onChange={(e) => { setTempData({ ...tempData, phone: e.target.value }) }} name="phone" id="phone" required />
                  </div>
                  <div className="data input-profile-data">
                    <h4>CNIC</h4>
                    <input type="number" value={tempData.cnic} onChange={(e) => { setTempData({ ...tempData, cnic: e.target.value }) }} name="cnic" id="cnic" required />
                  </div>

                </div>
                <div className="info_data">
                  <div className="data input-profile-data">
                    <h4>Office-Address</h4>
                    <input style={{ width: '30rem' }} type="text" value={tempData.officeAddress} onChange={(e) => { setTempData({ ...tempData, officeAddress: e.target.value }) }} name="officeAddress" id="officeAddress" required />
                  </div>
                </div>
                <button className="campaigner-profile-button" type="submit" >Submit</button>
              </div>
            </form>

          ) : (
            <div className="info">
              <h3>Personal Information</h3>
              <div className="info_data">
                <div className="data">
                  <h4>Email</h4>
                  <p>{profileDetails.email}</p>
                </div>

                <div className="data">
                  <h4>Phone</h4>
                  <p>{profileDetails.phone}</p>
                </div>
              </div>
              <div className="info_data">
                <div className="data">
                  <h4>CNIC</h4>
                  <p>{profileDetails.cnic}</p>
                </div>
                {/* <div className="data">
                  <h4>cell</h4>
                  <p>0001-213-998761</p>
                </div> */}
              </div>
              <div className="info_data">
                <div className="data">
                  <h4>Office-Address</h4>
                  <p style={{ width: "25rem" }}>
                    {profileDetails.officeAddress}
                  </p>
                </div>
              </div>
            </div>
          )}

          {editProfile === false ? (<div className="projects">
            <h3>Campaigns Detail</h3>
            <div className="projects_data">
              <div className="data">
                <h4>Total Campaigns</h4>
                <p>{profileDetails.total_campaigns} Campaigns</p>
              </div>
            </div>
          </div>) : null}
        </div>
      </div>
    </div>
  );
};

export default Profile;
