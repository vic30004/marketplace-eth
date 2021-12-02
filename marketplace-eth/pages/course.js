import { Modal } from "@components/common";
import { CourseHero, Curriculum, KeyPoints } from "@components/course";
import { BaseLayout } from "@components/layout";

export default function Course() {
  return (
    <BaseLayout>
      <CourseHero />
      <KeyPoints />
      <Curriculum />
      <Modal />
    </BaseLayout>
  );
}
