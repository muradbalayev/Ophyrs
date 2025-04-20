import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete, AiOutlineClose } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import Swal from "sweetalert2";
import { CircularProgress } from "@mui/material";
import { useAddInstructorMutation, useDeleteInstructorMutation } from "../../redux/services/InstructorApi";
import AddCoursesModal from '../../components/admin/Courses/AddCoursesModal'

const AdminCoursesPage = () => {
// const {data, isLoading, isError, error} = useGetInstructorsQuery()
// console.log(data)
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [showAddModal, setShowAddModal] = useState(false);
  const [deleteInstructor, {isLoading: isDeleting}] = useDeleteInstructorMutation();
  const [currentItem, setCurrentItem] = useState(null);
const data = {
  courses: [
    {
      _id: 1,
      title: "Frontend Web Development",
      category: "Web Development",
      level: "Beginner to Intermediate",
      duration: "12 weeks",
      price: 299.99,
      discount: 15,
      rating: 4.8,
      students: 1245,
      description: "Learn modern frontend development with HTML, CSS, JavaScript and React. Build responsive websites and interactive web applications.",
      topics: ["HTML5 & CSS3", "JavaScript ES6+", "React", "Responsive Design", "Web APIs"],
      instructor: "John Doe",
      imageUrl: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg",
      status: "Active"
    },
    {
      _id: 2,
      title: "Backend Development with Node.js",
      category: "Web Development",
      level: "Intermediate",
      duration: "10 weeks",
      price: 349.99,
      discount: 0,
      rating: 4.7,
      students: 892,
      description: "Master server-side programming with Node.js, Express, and MongoDB. Learn to build scalable APIs and web services.",
      topics: ["Node.js", "Express", "MongoDB", "RESTful APIs", "Authentication"],
      instructor: "Sarah Johnson",
      imageUrl: "https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148865392.jpg",
      status: "Active"
    },
    {
      _id: 3,
      title: "Data Science Fundamentals",
      category: "Data Science",
      level: "Beginner to Advanced",
      duration: "16 weeks",
      price: 499.99,
      discount: 10,
      rating: 4.9,
      students: 756,
      description: "Comprehensive introduction to data science using Python. Learn statistical analysis, machine learning, and data visualization.",
      topics: ["Python", "Statistical Analysis", "Machine Learning", "Data Visualization", "Big Data"],
      instructor: "Michael Chen",
      imageUrl: "https://img.freepik.com/free-vector/big-data-analytics-abstract-concept-illustration_335657-4817.jpg",
      status: "Active"
    },
    {
      _id: 4,
      title: "UI/UX Design Masterclass",
      category: "Design",
      level: "All Levels",
      duration: "8 weeks",
      price: 279.99,
      discount: 20,
      rating: 4.6,
      students: 1089,
      description: "Learn the principles of user interface and user experience design. Create beautiful, intuitive designs using industry-standard tools.",
      topics: ["Design Principles", "Wireframing", "Prototyping", "User Research", "Figma"],
      instructor: "Leyla Mammadova",
      imageUrl: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149065782.jpg",
      status: "Active"
    },
    {
      _id: 5,
      title: "Cybersecurity Essentials",
      category: "Security",
      level: "Intermediate to Advanced",
      duration: "14 weeks",
      price: 399.99,
      discount: 5,
      rating: 4.7,
      students: 634,
      description: "Learn to protect systems and networks from cyber threats. Covers security fundamentals, ethical hacking, and defense strategies.",
      topics: ["Network Security", "Ethical Hacking", "Cryptography", "Security Auditing", "Threat Analysis"],
      instructor: "Rashad Aliyev",
      imageUrl: "https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg",
      status: "Active"
    },
    {
      _id: 6,
      title: "Mobile App Development",
      category: "Mobile Development",
      level: "Intermediate",
      duration: "12 weeks",
      price: 349.99,
      discount: 15,
      rating: 4.8,
      students: 927,
      description: "Build cross-platform mobile applications using React Native. Deploy to both iOS and Android with a single codebase.",
      topics: ["React Native", "JavaScript", "Mobile UI", "API Integration", "App Publishing"],
      instructor: "Aysel Huseynova",
      imageUrl: "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg",
      status: "Active"
    }
  ]
}

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



  const openModal = (course) => {
    setSelectedInstructor(course);
    setIsModalOpen(true);
  };

// if(isError) return <Error message={error?.message || "Failed to load instructors"}/>

// if(isLoading) return <Loading/>

  // Use direct URLs for images in development mode
  const imgUrl = ""; // Empty string since we're using full URLs in the data

  return (
    <div className="wrapper relative flex flex-col items-center gap-5">
      {showAddModal && <AddCoursesModal setShowAddModal={setShowAddModal} />}

      <div className="flex justify-between items-center mb-8 w-full px-4">
        <h1 className="text-[32px] font-bold text-black">Courses</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-6 py-2 bg-blue-600 text-white rounded-md text-[16px]"
        >
          Add New Course
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-4">
        {data?.courses?.map((course) => (
          <div key={course._id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
            {/* Course Image */}
            <div className="w-full h-[180px] relative overflow-hidden">
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              {course.discount > 0 && (
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {course.discount}% OFF
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">{course.category}</span>
                <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">{course.level}</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">{course.title}</h2>
              <p className="text-xs text-gray-500 line-clamp-2 mb-3">{course.description}</p>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm font-medium">{course.rating}</span>
                  <span className="text-xs text-gray-500">({course.students} students)</span>
                </div>
                <span className="text-sm text-gray-600">{course.duration}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {course.discount > 0 ? (
                    <>
                      <span className="text-lg font-bold text-gray-800">${(course.price * (1 - course.discount / 100)).toFixed(2)}</span>
                      <span className="text-sm line-through text-gray-400">${course.price}</span>
                    </>
                  ) : (
                    <span className="text-lg font-bold text-gray-800">${course.price}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openModal(course)}
                    className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                    title="View Details"
                  >
                    <AiOutlineEye className="text-lg" />
                  </button>
                  <button
                    onClick={() => handleDelete(course._id)}
                    className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                    title="Delete"
                  >
                    <AiOutlineDelete className="text-lg" />
                  </button>
                </div>
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
                <h2 className="text-2xl font-bold text-black">{selectedInstructor.title}</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <AiOutlineClose className="text-2xl" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={selectedInstructor.imageUrl}
                    alt={selectedInstructor.title}
                    className="w-full md:w-1/3 h-48 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">{selectedInstructor.category}</span>
                      <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">{selectedInstructor.level}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm font-medium">{selectedInstructor.rating}</span>
                      <span className="text-xs text-gray-500">({selectedInstructor.students} students)</span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        {selectedInstructor.discount > 0 ? (
                          <>
                            <span className="text-xl font-bold text-gray-800">${(selectedInstructor.price * (1 - selectedInstructor.discount / 100)).toFixed(2)}</span>
                            <span className="text-sm line-through text-gray-400">${selectedInstructor.price}</span>
                          </>
                        ) : (
                          <span className="text-xl font-bold text-gray-800">${selectedInstructor.price}</span>
                        )}
                      </div>
                      <span className="text-sm text-gray-600">{selectedInstructor.duration}</span>
                    </div>
                    <p className="text-sm text-gray-600">Instructor: <span className="font-medium">{selectedInstructor.instructor}</span></p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">About This Course</h4>
                  <p className="text-gray-700">{selectedInstructor.description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-black">What You'll Learn</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedInstructor.topics.map((topic, index) => (
                      <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                        <span className="text-green-500">✓</span>
                        <p className="font-medium text-gray-800">{topic}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="text-lg font-semibold mb-2 text-blue-800">Course Status</h4>
                  <div className="flex items-center gap-2">
                    <span className={`inline-block w-3 h-3 rounded-full ${selectedInstructor.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    <p className="font-medium text-gray-800">{selectedInstructor.status}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t px-6 py-4 bg-gray-50 rounded-b-2xl flex justify-end">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCoursesPage;
