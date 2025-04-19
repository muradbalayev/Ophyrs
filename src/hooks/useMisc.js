import { useSelector } from "react-redux";

const useMisc = () => {
    const { instructors, courses, events, vacancies, graduates , mostViewedBlogs } = useSelector((state) => state.misc);
    // console.log({instructors , courses, graduates});
    return { instructors, courses, events, vacancies, graduates , mostViewedBlogs };
}

export default useMisc
