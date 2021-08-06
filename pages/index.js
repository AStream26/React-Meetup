import MeetupList from "../components/meetups/MeetupList";

import { MongoClient } from "mongodb";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  // fetch Data from API

  const client = await MongoClient.connect(
    "mongodb+srv://astream26:26022999@cluster0.hsbem.mongodb.net/meetings?retryWrites=true&w=majority"
  );
  const db = client.db();
  const collections = db.collection("meetings");

  const data = await collections.find().toArray();
  //console.log(data);
  return {
    props: {
      meetups: data.map((meeting) => ({
        title: meeting.title,
        image: meeting.image,
        address: meeting.address,
        id: meeting._id.toString(),
      })),
    },
  };
}

export default HomePage;
