import Meetupdetail from "../../components/meetups/Meetupdetail";

const Meetup = () => {
  return (
    <Meetupdetail
      img="https://images.unsplash.com/photo-1584732200355-486a95263014?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      title="A First Meetup"
      address="Meeting Address: Somewhere in the earth"
      desc="This is a description area .Tell aboout the meeting in detail"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetup: "M1",
        },
      },
      {
        params: {
          meetup: "M2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch Data
  const meetupId = context.params.meetup;
  console.log(meetupId);

  return {
    props: {
      meetupdetail: {
        id: meetupId,
        img: "https://images.unsplash.com/photo-1584732200355-486a95263014?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        title: "A First Meetup",
        address: "Meeting Address: Somewhere in the earth",
        desc: "This is a description area .Tell aboout the meeting in detail",
      },
    },
  };
}

export default Meetup;
