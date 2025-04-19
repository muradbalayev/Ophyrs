import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete, AiOutlineClose } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import Swal from "sweetalert2";
import { CircularProgress } from "@mui/material";
import { useAddInstructorMutation, useDeleteInstructorMutation, useEditInstructorMutation } from "../../redux/services/InstructorApi";
import AddCoursesModal from '../../components/admin/Courses/AddCoursesModal'
import EditCoursesModal from '../../components/admin/Courses/EditCoursesModal'

const AdminCoursesPage = () => {
// const {data, isLoading, isError, error} = useGetInstructorsQuery()
// console.log(data)
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [showAddModal, setShowAddModal] = useState(false);
  const [deleteInstructor, {isLoading: isDeleting}] = useDeleteInstructorMutation();
  const [currentItem, setCurrentItem] = useState(null);
const data = [
  {
    _id: 1,
    firstName: "John",
    secondName: "Doe",
    title: "Instructor",
    category: "Instructor",
    yearsOfExperience: 10,
    bio: "John Doe is a highly skilled instructor with 10 years of experience in the field. He is passionate about sharing his knowledge and helping others succeed.",
    workExperience: ["Experience 1", "Experience 2", "Experience 3"],
    certificates: ["Certificate 1", "Certificate 2", "Certificate 3"],
    socialMedia: "https://linkedin.com/in/johndoe",
    imageUrl: "https://example.com/johndoe.jpg"
  }
]

  const handleDelete = async (productId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      deleteInstructor(productId)
        .then(() => {
          Swal.fire("Deleted!", "Your instructor has been deleted.", "success");
        })
        .catch((error) => {
          Swal.fire("Error!", "There was an issue deleting the instructor.", {
            error,
          });
        });
    }
  };



  const openModal = (instructor) => {
    setSelectedInstructor(instructor);
    setIsModalOpen(true);
  };

// if(isError) return <Error message={error?.message || "Failed to load instructors"}/>

// if(isLoading) return <Loading/>


  const imgUrl = `${import.meta.env.VITE_API_GLOBAL_URL}/public/uploads/instructors`;

  return (
    <div className="wrapper relative flex flex-col items-center gap-5">
      {showAddModal && <AddCoursesModal setShowAddModal={setShowAddModal} />}
      {currentItem && (
          <EditCoursesModal
            courseId={currentItem._id}
            currentCourse={currentItem}
            setShowEditModal={setCurrentItem}
          />
        )}
      <div className="flex justify-between items-center mb-8 w-full px-4">
        <h1 className="text-[32px] font-bold text-black">Courses</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-6 py-2 bg-blue-600 text-white rounded-md text-[16px]">
          Add New Course
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-4">
        {data?.instructors?.map((instructor) => (
          <div key={instructor._id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            {/* Image */}
            {/* <div className="w-full h-[180px] relative rounded-t-xl overflow-hidden"> */}
              <img
                src={`${imgUrl}/${instructor.imageUrl}`}
                alt={instructor.name}
                className="w-40 h-40 rounded-full mx-auto mt-3 object-cover"
              />
            {/* </div> */}

            {/* Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">{instructor.firstName} {instructor.secondName}</h2>
              <p className="text-sm text-gray-600 mb-2">{instructor.title}</p>
              <p className="text-xs text-gray-500 line-clamp-2 mb-3">{instructor.description}</p>
              
              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openModal(instructor)}
                    className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                    title="View Details"
                  >
                    <AiOutlineEye className="text-lg" />
                  </button>
                  <button
                    onClick={() => setCurrentItem(instructor)}
                    className="p-1.5 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                    title="Edit"
                  >
                    <AiOutlineEdit className="text-lg" />
                  </button>
                  {/* {isDeleting ? <CircularProgress /> : (
                  <button
                    onClick={() => handleDelete(instructor._id)}
                    className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                    title="Delete"
                  >
                    <AiOutlineDelete className="text-lg" />
                  </button>
                  )} */}
                </div>
                <a
                  href={instructor.socialMedia}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#0A66C2] hover:text-blue-800 text-sm"
                >
                  <FaLinkedin className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedInstructor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-black">{selectedInstructor.firstName} {selectedInstructor.secondName}</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <AiOutlineClose className="text-2xl" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <img
                    src={`${imgUrl}/${selectedInstructor.imageUrl}`}
                    alt={selectedInstructor.name}
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{selectedInstructor.title}</h3>
                    <p className="text-blue-600">{selectedInstructor.category}</p>
                    <p className="text-gray-600">{selectedInstructor.yearsOfExperience} years of experience</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">About</h4>
                  <p className="text-gray-700">{selectedInstructor.bio}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-black">Experience</h4>
                  <div className="space-y-2">
                    {selectedInstructor.workExperience.map((exp, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <p className="font-medium text-gray-800">{exp}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Certifications</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedInstructor.certificates.map((cert, index) => (
                      <li key={index} className="text-gray-700">{cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t px-6 py-4 bg-gray-50 rounded-b-2xl">
              <a
                href={selectedInstructor.socialMedia}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <FaLinkedin className="text-xl" />
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCoursesPage;
