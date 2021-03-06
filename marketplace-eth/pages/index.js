import { Hero } from "@components/ui/common";
import { CourseCard, CourseList } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { getAllCourses } from "@content/courses/fetcher";

function Home({ courses }) {
  return (
    <>
      <Hero />
      <CourseList courses={courses}>
        {(course) => <CourseCard course={course} key={course.id} />}
      </CourseList>
    </>
  );
}

const Wrapper = ({ ...props }) => (
  <BaseLayout>
    <Home {...props} />
  </BaseLayout>
);

export default Wrapper;

export function getStaticProps() {
  const { data } = getAllCourses();

  return {
    props: {
      courses: data,
    },
  };
}
