import { GetServerSideProps } from "next";

interface CheckProps {
  name: string;
  age: string;
}

const Check = ({ name, age }: CheckProps) => {
  return (
    <>
      <div>이름: {name}</div>
      <div>나이: {age}</div>
    </>
  );
};

export default Check;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const requestURL = "http://localhost:8080";

  const nameResponse = await fetch(`${requestURL}/name`);
  const ageResponse = await fetch(`${requestURL}/age`);

  const name = await nameResponse.json();
  const age = await ageResponse.json();

  return {
    props: {
      name: name.name,
      age: age.age,
    },
  };
};
