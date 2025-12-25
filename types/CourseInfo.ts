export interface CourseInfo {
  title: string;
  description: string;

  length: number;
  price: number;
  link: string;

  tags: string[];
  id: number;
  disabled: boolean;
}
