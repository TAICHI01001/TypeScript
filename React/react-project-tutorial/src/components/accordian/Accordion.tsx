interface Data {
  id: number;
  question: string;
}
const data: Data[] = [
  {
    id: 1,
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iure reiciendis minima, ullam vitae eveniet.",
  },
];
export default function Accordion() {
  return (
    <>
      <section>
        <div>
          {data.map((item) => (
            <div>
              <div>{item.id}</div>
              <div>{item.question}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
