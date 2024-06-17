import { useState } from 'react';

const Profile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: 'null',
    gender: '',
    bloodType: '',
    address: '',
    specialization: '',
    experience: '',
    education: '',
    description: '',
    aboutDesc: '',
    educationDesc: '',
    experienceDesc: '',
    specializationDesc: '',
    dob: '',
    phoneNumber: '',
    username: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    console.log(file);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="mb-5">
          <input
            type="name"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full pr-3 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-leadingColor placeholder:text-textColor rounded-md cursor-pointer"
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pr-3 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-leadingColor placeholder:text-textColor rounded-md cursor-pointer"
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            placeholder="Enter Your password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full pr-3 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-leadingColor placeholder:text-textColor rounded-md cursor-pointer"
            required
          />
        </div>
        <div className="mb-5 flex items-center gap-3">
          <div className="relative w-[160px] h-[50px]">
            <input
              type="file"
              name="photo"
              id="customerFile"
              onChange={handleFileInputChange}
              accept=".jpg, .png"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
            <label
              htmlFor="customerFile"
              className="absolute top-0 left-0 w-full h-full flex items-center px-[0.45rem] py-[0.375rem] text-[20px] leading-8 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
            >
              Upload Photo
            </label>
          </div>
        </div>

        {/* Additional Fields */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full pr-3 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-leadingColor placeholder:text-textColor rounded-md cursor-pointer"
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Specialization"
            name="specialization"
            value={formData.specialization}
            onChange={handleInputChange}
            className="w-full pr-3 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-leadingColor placeholder:text-textColor rounded-md cursor-pointer"
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Experience"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            className="w-full pr-3 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-leadingColor placeholder:text-textColor rounded-md cursor-pointer"
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Education"
            name="education"
            value={formData.education}
            onChange={handleInputChange}
            className="w-full pr-3 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-leadingColor placeholder:text-textColor rounded-md cursor-pointer"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="about-description" className="text-textColor font-bold block mb-2">
            About
          </label>
          <textarea
            id="about-description"
            value={formData.aboutDesc}
            onChange={(e) => setFormData({ ...formData, aboutDesc: e.target.value })}
            className="w-full pr-3 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-leadingColor placeholder:text-textColor rounded-md cursor-pointer resize-none"
          ></textarea>
        </div>
        <div className="mb-5">
          <label htmlFor="specialization-description" className="text-textColor font-bold block mb-2">
            Specialization
          </label>
          <textarea
            id="specialization-description"
            value={formData.specializationDesc}
            onChange={(e) => setFormData({ ...formData, specializationDesc: e.target.value })}
            className="w-full pr-3 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-leadingColor placeholder:text-textColor rounded-md cursor-pointer resize-none"
          ></textarea>
        </div>
        <div className="mb-5">
          <label htmlFor="experience-description" className="text-textColor font-bold block mb-2">
            Experience
          </label>
          <textarea
            id="experience-description"
            value={formData.experienceDesc}
            onChange={(e) => setFormData({ ...formData, experienceDesc: e.target.value })}
            className="w-full pr-3 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-leadingColor placeholder:text-textColor rounded-md cursor-pointer resize-none"
          ></textarea>
        </div>
        <div className="mb-5">
          <label htmlFor="education-description" className="text-textColor font-bold block mb-2">
            Education
          </label>
          <textarea
            id="education-description"
            value={formData.educationDesc}
            onChange={(e) => setFormData({ ...formData, educationDesc: e.target.value })}
            className="w-full pr-3 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-leadingColor placeholder:text-textColor rounded-md cursor-pointer resize-none"
          ></textarea>
        </div>
        {/* End of Additional Fields */}

        <div className="mt-7">
          <button type="submit" className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg  py-3">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
