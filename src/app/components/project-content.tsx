import parse from "html-react-parser";

export default function ProjectContent({
  contents,
  resume,
}: {
  contents:
    | { presentation: string; request: string; constraints: string }
    | undefined;
  resume: boolean;
}) {
  console.log("is resume", resume);
  console.log("contents", contents);
  // TODO: implement content rendering
  if (resume) {
    return contents?.presentation ? parse(contents.presentation) : null;
  } else {
    return (
      <div>{contents?.presentation ? parse(contents.presentation) : null}</div>
    );
  }
}
