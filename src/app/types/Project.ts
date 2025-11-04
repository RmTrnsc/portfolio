export interface Project {
  id: number;
  title: string;
  contents: { presentation: string, request: string, constraints: string }[];
  published: boolean;
  slug: string;
  pictures: { url: string }[];
}
