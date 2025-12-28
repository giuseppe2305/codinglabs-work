export type CourseContent = {
  title: string;
  lessons: string[];
};

export interface CourseInfo {
  title: string;
  description: string;

  length: number;
  price: number;
  link: string;
  buyLink: string;

  tags: string[];
  id: number;
  disabled: boolean;
  image: string;

  content: CourseContent[];
}
